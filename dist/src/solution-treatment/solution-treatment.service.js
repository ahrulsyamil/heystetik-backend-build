"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="53d52f58-71e9-5255-af75-dbcaaf5a9650")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionTreatmentService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
const string_1 = require("../globals/helpers/string");
const enum_1 = require("../globals/constant/enum");
let SolutionTreatmentService = class SolutionTreatmentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async recomendationTreatment() {
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
         SELECT treatment_type
         FROM treatment
         GROUP BY treatment_type
         ORDER BY MAX(rating) DESC
         LIMIT 5;
     `));
        });
    }
    async topTreatment() {
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
         SELECT treatment_type
         FROM treatment
         WHERE deleted_at IS NULL
         GROUP BY treatment_type
         ORDER BY MAX(rating) DESC
         LIMIT 5;
     `));
        });
    }
    async findAllOld(pageOptionsDto) {
        const filter = {
            AND: [
                {
                    OR: [
                        {
                            name: {
                                contains: pageOptionsDto.search,
                                mode: 'insensitive',
                            },
                        },
                        {
                            clinic: {
                                name: {
                                    contains: pageOptionsDto.search,
                                    mode: 'insensitive',
                                },
                            },
                        },
                    ],
                },
                {
                    OR: pageOptionsDto.rating.map((rating) => ({
                        rating: {
                            gte: rating,
                            lt: rating + 1,
                        },
                    })),
                },
                {
                    treatment_type: {
                        in: pageOptionsDto.treatment_type,
                    },
                },
            ],
        };
        const data = await this.prisma.treatment.findMany({
            where: {
                ...filter,
            },
            include: {
                clinic: {
                    include: {
                        province: true,
                        city: true,
                    },
                },
                media_treatments: {
                    include: {
                        media: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.treatment.count({
            where: {
                ...filter,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAll(pageOptionsDto, latitude, longitude) {
        let whereQuery = `WHERE T.deleted_at IS NULL AND C.deleted_at IS NULL`;
        let orderQuery = '';
        if (pageOptionsDto.treatment_type) {
            whereQuery = `${whereQuery} AND T.treatment_type IN (${pageOptionsDto.treatment_type
                .map((type) => `'${type}'`)
                .join(',')})`;
        }
        if (pageOptionsDto.rating) {
            whereQuery = `${whereQuery} AND (${pageOptionsDto.rating
                .map((item) => `(T.rating >= ${item} AND T.rating < ${item + 1})`)
                .join(' OR ')})`;
        }
        if (pageOptionsDto.search) {
            whereQuery = `${whereQuery} AND LOWER(T.name) LIKE LOWER('%${pageOptionsDto.search}%') OR LOWER(C.name) LIKE LOWER('%${pageOptionsDto.search}%')`;
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            (0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            whereQuery = `${whereQuery} AND T.price BETWEEN ${pageOptionsDto.min_price} AND ${pageOptionsDto.max_price}`;
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            whereQuery = `${whereQuery} AND T.price >= ${pageOptionsDto.min_price}`;
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price)) {
            whereQuery = `${whereQuery} AND T.price <= ${pageOptionsDto.max_price}`;
        }
        if (pageOptionsDto.open_now == true) {
            whereQuery = `${whereQuery} AND (
        SELECT COUNT(*) FROM clinic_operation_hours
        WHERE
          clinic_id = C.id
          AND day = TRIM((SELECT TO_CHAR(CURRENT_DATE, 'Day')))
          AND (start_time <= CAST(current_timestamp AT TIME ZONE 'UTC' AS TIME) AND end_time >= CAST(current_timestamp AT TIME ZONE 'UTC' AS TIME))
      ) > 0`;
        }
        if (pageOptionsDto.order_by == enum_1.OrderByTreatment.RATING) {
            orderQuery = `${orderQuery ? ',' : 'ORDER BY'} T.rating DESC`;
        }
        if (pageOptionsDto.order_by == enum_1.OrderByTreatment.POPULARITY) {
            orderQuery = `${orderQuery ? ',' : 'ORDER BY'} 
        (
          SELECT COALESCE(SUM(pax), 0) 
          FROM transaction_treatment tt
          INNER JOIN transaction_treatment_item tti
            ON tti.transaction_treatment_id = tt.id
          WHERE 
            treatment_id = T.id
            AND tt.payment_status = '${enum_1.PaymentStatus.SUCCEEDED}' 
            AND tt.updated_at::date BETWEEN (CURRENT_DATE - interval '30 days')::date AND CURRENT_DATE::date 
        ) DESC,
        T.rating DESC
      `;
        }
        if (pageOptionsDto.order_by == enum_1.OrderByTreatment.DISTANCE) {
            orderQuery = `${orderQuery ? ',' : 'ORDER BY'} (calculate_distance(C.pinpoint_latitude, C.pinpoint_longitude, ${latitude}, ${longitude}, 'km')) ASC`;
        }
        if (pageOptionsDto.concern_ids) {
            whereQuery = `${whereQuery} AND T.id IN (
        SELECT treatment_id FROM treatment_concern
        WHERE treatment_id = T.id
        AND concern_id IN(${pageOptionsDto.concern_ids
                .map((id) => `'${id}'`)
                .join(',')})
      )`;
        }
        const query = `
      SELECT 
        T.*,
        ${!latitude || !longitude
            ? 'NULL AS distance'
            : `(calculate_distance(C.pinpoint_latitude, C.pinpoint_longitude, ${latitude}, ${longitude}, 'km')) AS distance`}
      FROM treatment T
        JOIN clinic C ON T.clinic_id = C.id 
      ${whereQuery}
      ${orderQuery}
    `;
        let data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
            ${query}
            LIMIT ${pageOptionsDto.take}
            OFFSET ${pageOptionsDto.skip}
          `));
        });
        data = await Promise.all(data.map(async (item) => {
            return {
                ...item,
                clinic: await this.prisma.clinic.findUnique({
                    where: {
                        id: item.clinic_id,
                    },
                    include: {
                        clinic_operation_hours: true,
                        province: true,
                        city: true,
                    },
                }),
                treatment_concerns: await this.prisma.treatment_concern.findMany({
                    where: {
                        treatment_id: item.id,
                    },
                    include: {
                        concern: true,
                    },
                }),
                media_treatments: await this.prisma.media_treatment.findMany({
                    where: {
                        treatment_id: item.id,
                    },
                    include: {
                        media: true,
                    },
                }),
                distance: item.distance ? `${item.distance.toFixed(1)} km` : null,
            };
        }));
        const countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT COUNT(*) FROM (
            ${query}
          ) RESULT
        `));
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll[0].count,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllNearMe(pageOptionsDto, latitude, longitude) {
        let whereQuery = `WHERE T.deleted_at IS NULL AND C.deleted_at IS NULL AND (calculate_distance(C.pinpoint_latitude, C.pinpoint_longitude, ${latitude}, ${longitude}, 'km')) < 16`;
        let orderQuery = '';
        if (pageOptionsDto.treatment_type) {
            whereQuery = `${whereQuery} AND T.treatment_type IN (${pageOptionsDto.treatment_type
                .map((type) => `'${type}'`)
                .join(',')})`;
        }
        if (pageOptionsDto.rating) {
            whereQuery = `${whereQuery} AND (${pageOptionsDto.rating
                .map((item) => `(T.rating >= ${item} AND T.rating < ${item + 1})`)
                .join(' OR ')})`;
        }
        if (pageOptionsDto.search) {
            whereQuery = `${whereQuery} AND T.name LIKE '%${pageOptionsDto.search}%' OR C.name LIKE '%${pageOptionsDto.search}%'`;
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            (0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            whereQuery = `${whereQuery} AND T.price BETWEEN ${pageOptionsDto.min_price} AND ${pageOptionsDto.max_price}`;
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            whereQuery = `${whereQuery} AND T.price >= ${pageOptionsDto.min_price}`;
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price)) {
            whereQuery = `${whereQuery} AND T.price <= ${pageOptionsDto.max_price}`;
        }
        if (pageOptionsDto.open_now == true) {
            whereQuery = `${whereQuery} AND (
        SELECT COUNT(*) FROM clinic_operation_hours
        WHERE
          clinic_id = C.id
          AND day = TRIM((SELECT TO_CHAR(CURRENT_DATE, 'Day')))
          AND (start_time <= CAST(current_timestamp AT TIME ZONE 'UTC' AS TIME) AND end_time >= CAST(current_timestamp AT TIME ZONE 'UTC' AS TIME))
      ) > 0`;
        }
        if (pageOptionsDto.order_by == enum_1.OrderByTreatment.RATING) {
            orderQuery = `${orderQuery ? ',' : 'ORDER BY'} T.rating DESC`;
        }
        if (pageOptionsDto.order_by == enum_1.OrderByTreatment.POPULARITY) {
            orderQuery = `${orderQuery ? ',' : 'ORDER BY'} 
        (
          SELECT COALESCE(SUM(pax), 0) 
          FROM transaction_treatment tt
          INNER JOIN transaction_treatment_item tti
            ON tti.transaction_treatment_id = tt.id
          WHERE 
            treatment_id = T.id
            AND tt.payment_status = '${enum_1.PaymentStatus.SUCCEEDED}' 
            AND tt.updated_at::date BETWEEN (CURRENT_DATE - interval '30 days')::date AND CURRENT_DATE::date 
        ) DESC,
        T.rating DESC
      `;
        }
        if (pageOptionsDto.order_by == enum_1.OrderByTreatment.DISTANCE) {
            orderQuery = `${orderQuery ? ',' : 'ORDER BY'} (calculate_distance(C.pinpoint_latitude, C.pinpoint_longitude, ${latitude}, ${longitude}, 'km')) ASC`;
        }
        const query = `
      SELECT 
        T.*,
        ${!latitude || !longitude
            ? 'NULL AS distance'
            : `(calculate_distance(C.pinpoint_latitude, C.pinpoint_longitude, ${latitude}, ${longitude}, 'km')) AS distance`}
      FROM treatment T
        JOIN clinic C ON T.clinic_id = C.id 
      ${whereQuery}
      ${orderQuery}
    `;
        let data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
            ${query}
            LIMIT ${pageOptionsDto.take}
            OFFSET ${pageOptionsDto.skip}
          `));
        });
        data = await Promise.all(data.map(async (item) => {
            return {
                ...item,
                clinic: await this.prisma.clinic.findUnique({
                    where: {
                        id: item.clinic_id,
                    },
                    include: {
                        clinic_operation_hours: true,
                        province: true,
                        city: true,
                    },
                }),
                treatment_concerns: await this.prisma.treatment_concern.findMany({
                    where: {
                        treatment_id: item.id,
                    },
                    include: {
                        concern: true,
                    },
                }),
                media_treatments: await this.prisma.media_treatment.findMany({
                    where: {
                        treatment_id: item.id,
                    },
                    include: {
                        media: true,
                    },
                }),
                distance: item.distance ? `${item.distance.toFixed(1)} km` : null,
            };
        }));
        const countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT COUNT(*) FROM (
            ${query}
          ) RESULT
        `));
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll[0].count,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllClinicOld(pageOptionsDto) {
        const where = {
            deleted_at: null,
        };
        const orderBy = {};
        if (pageOptionsDto.rating) {
            where.rating = {
                in: pageOptionsDto.rating,
            };
        }
        if (pageOptionsDto.search) {
            where.OR = [
                {
                    name: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    treatments: {
                        some: {
                            OR: [
                                {
                                    name: {
                                        contains: pageOptionsDto.search,
                                        mode: 'insensitive',
                                    },
                                },
                                {
                                    treatment_type: {
                                        in: pageOptionsDto.treatment_type,
                                    },
                                },
                            ],
                        },
                    },
                },
            ];
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            (0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            where.treatments = {
                some: {
                    AND: [
                        {
                            price: {
                                gte: pageOptionsDto.min_price,
                            },
                        },
                        {
                            price: {
                                lte: pageOptionsDto.max_price,
                            },
                        },
                    ],
                },
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            where.treatments = {
                some: {
                    price: {
                        gte: pageOptionsDto.min_price,
                    },
                },
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price)) {
            where.treatments = {
                some: {
                    price: {
                        lte: pageOptionsDto.max_price,
                    },
                },
            };
        }
        if (pageOptionsDto.open_now == true) {
            where.clinic_operation_hours = {
                some: {
                    AND: [
                        {
                            day: new Date().toLocaleString('en-US', { weekday: 'long' }),
                        },
                        {
                            start_time: {
                                lte: new Date(),
                            },
                        },
                        {
                            end_time: {
                                gte: new Date(),
                            },
                        },
                    ],
                },
            };
        }
        if (pageOptionsDto.order_by == enum_1.OrderByTreatment.POPULARITY) {
        }
        if (pageOptionsDto.order_by == enum_1.OrderByTreatment.RATING) {
            orderBy.rating = 'desc';
        }
        if (pageOptionsDto.order_by == enum_1.OrderByTreatment.DISTANCE) {
        }
        const data = await this.prisma.clinic.findMany({
            where,
            include: {
                city: true,
                province: true,
                media_clinic_logo: {
                    include: {
                        media: true,
                    },
                },
                media_clinics: {
                    include: {
                        media: true,
                    },
                },
                treatments: {
                    where: {
                        name: {
                            contains: pageOptionsDto.search,
                            mode: 'insensitive',
                        },
                    },
                },
            },
            orderBy: {
                ...orderBy,
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.clinic.count({
            where,
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllClinic(pageOptionsDto, latitude, longitude) {
        let whereQuery = `WHERE C.deleted_at IS NULL AND C.is_active IS TRUE`;
        let orderQuery = ``;
        if (pageOptionsDto.treatment_type) {
            whereQuery = `${whereQuery} AND 
        (
          SELECT COUNT(*) FROM treatment 
          WHERE
            clinic_id = C.id
            AND treatment_type IN (${pageOptionsDto.treatment_type
                .map((type) => `'${type}'`)
                .join(',')})
        ) > 0
      `;
        }
        if (pageOptionsDto.rating) {
            whereQuery = `${whereQuery} AND (${pageOptionsDto.rating
                .map((item) => `(C.rating >= ${item} AND C.rating < ${item + 1})`)
                .join(' OR ')})`;
        }
        if (pageOptionsDto.search) {
            whereQuery = `${whereQuery} AND 
        (
          SELECT COUNT(*) FROM treatment t
          INNER JOIN clinic cl
            ON cl.id = t.clinic_id
          WHERE
            cl.id = C.id
            AND (t.name LIKE '%${pageOptionsDto.search}%' OR cl.name LIKE '%${pageOptionsDto.search}%' OR t.treatment_type like '%${pageOptionsDto.search}%')
        ) > 0
      `;
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            (0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            whereQuery = `${whereQuery} AND 
        (
          SELECT COUNT(*) FROM treatment
          WHERE 
            clinic_id = C.id
            AND price BETWEEN ${pageOptionsDto.min_price} AND ${pageOptionsDto.max_price}
        ) > 0
      `;
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            whereQuery = `${whereQuery} AND 
        (
          SELECT COUNT(*) FROM treatment
          WHERE 
            clinic_id = C.id
            AND price >= ${pageOptionsDto.min_price}
        ) > 0
      `;
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price)) {
            whereQuery = `${whereQuery} AND 
        (
          SELECT COUNT(*) FROM treatment
          WHERE 
            clinic_id = C.id
            AND price <= ${pageOptionsDto.max_price}
        ) > 0
      `;
        }
        if (pageOptionsDto.open_now == true) {
            whereQuery = `${whereQuery} AND (
        SELECT COUNT(*) FROM clinic_operation_hours
        WHERE
          clinic_id = C.id
          AND day = TRIM((SELECT TO_CHAR(CURRENT_DATE, 'Day')))
          AND (start_time <= CAST(current_timestamp AT TIME ZONE 'UTC' AS TIME) AND end_time >= CAST(current_timestamp AT TIME ZONE 'UTC' AS TIME))
      ) > 0`;
        }
        if (pageOptionsDto.order_by == enum_1.OrderByTreatment.RATING) {
            orderQuery = `${orderQuery ? ',' : 'ORDER BY'} C.rating DESC`;
        }
        if (pageOptionsDto.order_by == enum_1.OrderByTreatment.POPULARITY) {
            orderQuery = `${orderQuery ? ',' : 'ORDER BY'}
        (
          SELECT COALESCE(SUM(pax), 0) 
          FROM transaction_treatment tt
          INNER JOIN transaction_treatment_item tti
            ON tti.transaction_treatment_id = tt.id
          INNER JOIN treatment t
            ON t.id = tti.treatment_id
          INNER JOIN clinic cl
            ON cl.id = t.clinic_id
          WHERE 
            cl.id = C.id
            AND tt.payment_status = '${enum_1.PaymentStatus.SUCCEEDED}' 
            AND tt.updated_at::date BETWEEN (CURRENT_DATE - interval '30 days')::date AND CURRENT_DATE::date 
        ) DESC,
        C.rating DESC
      `;
        }
        if (pageOptionsDto.order_by == enum_1.OrderByTreatment.DISTANCE) {
            orderQuery = `${orderQuery ? ',' : 'ORDER BY'} (calculate_distance(C.pinpoint_latitude, C.pinpoint_longitude, ${latitude}, ${longitude}, 'km')) ASC`;
        }
        const query = `
      SELECT 
        C.*,
        ${!latitude || !longitude
            ? 'NULL AS distance'
            : `(calculate_distance(C.pinpoint_latitude, C.pinpoint_longitude, ${latitude}, ${longitude}, 'km')) AS distance`},
        (
          SELECT AVG(price) FROM treatment
            WHERE clinic_id = C.id
        ) AS avg_price
      FROM clinic C
      ${whereQuery}
      ${orderQuery}
    `;
        let data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
            ${query}
            LIMIT ${pageOptionsDto.take}
            OFFSET ${pageOptionsDto.skip}
          `));
        });
        data = await Promise.all(data.map(async (item) => {
            return {
                ...item,
                clinic_operation_hours: await this.prisma.clinic_operation_hours.findMany({
                    where: {
                        clinic_id: item.id,
                    },
                }),
                city: await this.prisma.kota_kabupatens.findUnique({
                    where: {
                        id: item.city_id,
                    },
                }),
                province: await this.prisma.provinces.findUnique({
                    where: {
                        id: item.province_id,
                    },
                }),
                media_clinic_logo: await this.prisma.media_clinic_logo.findUnique({
                    where: {
                        clinic_id: item.id,
                    },
                    include: {
                        media: true,
                    },
                }),
                media_clinics: await this.prisma.media_clinic.findMany({
                    where: {
                        clinic_id: item.id,
                    },
                    include: {
                        media: true,
                    },
                }),
                treatments: pageOptionsDto.search
                    ? await this.prisma.treatment.findMany({
                        where: {
                            clinic_id: item.id,
                            name: {
                                contains: pageOptionsDto.search,
                                mode: 'insensitive',
                            },
                        },
                        include: {
                            media_treatments: {
                                include: {
                                    media: true,
                                },
                            },
                        },
                    })
                    : [],
                distance: item.distance ? `${item.distance.toFixed(1)} km` : null,
            };
        }));
        const countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT COUNT(*) FROM (
            ${query}
          ) RESULT
        `));
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll[0].count,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllTopRating(pageOptionsDto) {
        const filter = {
            clinic: {
                deleted_at: null,
            },
            rating: {
                gte: 4,
            },
            AND: [
                pageOptionsDto.search
                    ? {
                        OR: [
                            {
                                name: {
                                    contains: pageOptionsDto.search,
                                    mode: 'insensitive',
                                },
                            },
                            {
                                clinic: {
                                    name: {
                                        contains: pageOptionsDto.search,
                                        mode: 'insensitive',
                                    },
                                },
                            },
                        ],
                    }
                    : {},
                pageOptionsDto.rating
                    ? {
                        OR: pageOptionsDto.rating.map((rating) => ({
                            rating: {
                                gte: rating,
                                lt: rating + 1,
                            },
                        })),
                    }
                    : {},
                pageOptionsDto.treatment_type
                    ? {
                        treatment_type: {
                            in: pageOptionsDto.treatment_type,
                        },
                    }
                    : {},
            ],
        };
        const data = await this.prisma.treatment.findMany({
            where: {
                ...filter,
            },
            include: {
                clinic: {
                    include: {
                        province: true,
                        city: true,
                    },
                },
                media_treatments: {
                    include: {
                        media: true,
                    },
                },
                treatment_concerns: {
                    include: {
                        concern: true,
                    },
                },
            },
            orderBy: [
                {
                    rating: pageOptionsDto.order,
                },
                {
                    id: 'desc',
                },
            ],
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.treatment.count({
            where: {
                ...filter,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllTrending(pageOptionsDto, latitude, longitude) {
        const query = `
      SELECT * from (
        SELECT 
          T.*,
          (
            SELECT COALESCE(SUM(pax), 0) 
            FROM transaction_treatment tt
            INNER JOIN transaction_treatment_item tti
              ON tti.transaction_treatment_id = tt.id
            WHERE 
              treatment_id = T.id
              AND tt.payment_status = '${enum_1.PaymentStatus.SUCCEEDED}' 
              AND tt.updated_at::date BETWEEN (CURRENT_DATE - interval '30 days')::date AND CURRENT_DATE::date 
          ) AS total,
          ${!latitude || !longitude
            ? 'NULL AS distance'
            : `(calculate_distance(C.pinpoint_latitude, C.pinpoint_longitude, ${latitude}, ${longitude}, 'km')) AS distance`}
        FROM treatment T
        INNER JOIN clinic C ON C.id = T.clinic_id
        WHERE T.deleted_at IS NULL AND C.deleted_at IS NULL
      ) TRENDING ORDER BY TRENDING.total DESC, TRENDING.rating DESC
      LIMIT ${pageOptionsDto.take}
      OFFSET ${pageOptionsDto.skip}
    `;
        let data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(query));
        });
        data = await Promise.all(data.map(async (item) => {
            return {
                ...item,
                clinic: await this.prisma.clinic.findUnique({
                    where: {
                        id: item.clinic_id,
                    },
                    include: {
                        province: true,
                        city: true,
                    },
                }),
                treatment_concerns: await this.prisma.treatment_concern.findMany({
                    where: {
                        treatment_id: item.id,
                    },
                    include: {
                        concern: true,
                    },
                }),
                media_treatments: await this.prisma.media_treatment.findMany({
                    where: {
                        treatment_id: item.id,
                    },
                    include: {
                        media: true,
                    },
                }),
                distance: item.distance ? `${item.distance.toFixed(1)} km` : null,
            };
        }));
        const countAll = await this.prisma.treatment.count({
            where: {
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllClinicTreatment(clinic_id, pageOptionsDto) {
        const filter = {
            clinic: {
                deleted_at: null,
            },
            AND: [
                {
                    clinic_id,
                },
                pageOptionsDto.search
                    ? {
                        OR: [
                            {
                                name: {
                                    contains: pageOptionsDto.search,
                                    mode: 'insensitive',
                                },
                            },
                            {
                                clinic: {
                                    name: {
                                        contains: pageOptionsDto.search,
                                        mode: 'insensitive',
                                    },
                                },
                            },
                        ],
                    }
                    : {},
                pageOptionsDto.rating
                    ? {
                        OR: pageOptionsDto.rating.map((rating) => ({
                            rating: {
                                gte: rating,
                                lt: rating + 1,
                            },
                        })),
                    }
                    : {},
                pageOptionsDto.treatment_type
                    ? {
                        treatment_type: {
                            in: pageOptionsDto.treatment_type,
                        },
                    }
                    : {},
            ],
        };
        const data = await this.prisma.treatment.findMany({
            where: {
                ...filter,
            },
            include: {
                clinic: {
                    include: {
                        province: true,
                        city: true,
                    },
                },
                media_treatments: {
                    include: {
                        media: true,
                    },
                },
                treatment_concerns: {
                    include: {
                        concern: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.treatment.count({
            where: {
                ...filter,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async find(id) {
        return await this.prisma.treatment.findFirst({
            where: {
                id,
                clinic: {
                    deleted_at: null,
                },
            },
            include: {
                clinic: {
                    include: {
                        province: true,
                        city: true,
                    },
                },
                media_treatments: {
                    include: {
                        media: true,
                    },
                },
                treatment_concerns: {
                    include: {
                        concern: true,
                    },
                },
            },
        });
    }
    async findClinic(id) {
        return await this.prisma.clinic.findUnique({
            where: {
                id,
            },
            include: {
                city: true,
                province: true,
                clinic_operation_hours: true,
                city_company: true,
                province_company: true,
                media_clinic_logo: {
                    include: {
                        media: true,
                    },
                },
                media_clinics: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async findAllDoctorRecomendation(pageOptionsDto) {
        const filter = {
            clinic: {
                deleted_at: null,
            },
        };
        let whereQuery = '';
        if (pageOptionsDto.treatment_type) {
            filter.treatment_type = {
                in: pageOptionsDto.treatment_type,
            };
            whereQuery += ` AND T.treatment_type IN (${pageOptionsDto.treatment_type
                .map((type) => `'${type}'`)
                .join(',')})`;
        }
        if (pageOptionsDto.method) {
            filter.method = {
                in: pageOptionsDto.method,
            };
            whereQuery += ` AND T.method IN (${pageOptionsDto.method
                .map((type) => `'${type}'`)
                .join(',')})`;
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            filter.price = {
                gte: pageOptionsDto.min_price,
            };
            whereQuery += ` AND T.price >= ${pageOptionsDto.min_price}`;
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price)) {
            filter.price = {
                lte: pageOptionsDto.max_price,
            };
            whereQuery += ` AND T.price <= ${pageOptionsDto.max_price}`;
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptionsDto.min_price) &&
            (0, string_1.isNotNullOrEmpty)(pageOptionsDto.max_price)) {
            filter.price = {
                gte: pageOptionsDto.min_price,
                lte: pageOptionsDto.max_price,
            };
            whereQuery += ` AND T.price BETWEEN ${pageOptionsDto.min_price} AND ${pageOptionsDto.max_price}`;
        }
        if (pageOptionsDto.concern_ids) {
            filter.treatment_concerns = {
                some: {
                    concern_id: {
                        in: pageOptionsDto.concern_ids,
                    },
                },
            };
            whereQuery += ` AND (
        SELECT
          COUNT(*)
        FROM
          treatment_concern tc
        WHERE
          treatment_id = T.id
          AND concern_id IN (${pageOptionsDto.concern_ids.join(',')})
      ) > 0`;
        }
        if (pageOptionsDto.search) {
            filter.OR = [
                {
                    treatment_type: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    method: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    description: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
            ];
            whereQuery += ` AND (LOWER(T.treatment_type) LIKE LOWER('%${pageOptionsDto.search}%') OR LOWER(T.method) LIKE LOWER('%${pageOptionsDto.search}%') OR LOWER(T.description) LIKE LOWER('%${pageOptionsDto.search}%'))`;
        }
        const data = await this.prisma.treatment.findMany({
            where: {
                ...filter,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
            distinct: 'treatment_type',
            select: {
                treatment_type: true,
            },
        });
        const countAll = (await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT
            COUNT(DISTINCT T.treatment_type)
          FROM
            treatment T
          INNER JOIN
            clinic C ON C.id = T.clinic_id
          WHERE
            T.deleted_at IS NULL
            AND C.deleted_at IS NULL
            ${whereQuery}
        `));
        }));
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll.length > 0 ? countAll[0].count : 0,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllBy(where) {
        return this.prisma.treatment.findMany({
            where,
            include: {
                clinic: {
                    include: {
                        clinic_operation_hours: true,
                        city: true,
                        province: true,
                        media_clinics: {
                            include: {
                                media: true,
                            },
                        },
                        media_clinic_logo: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async findAllClinicBy(where) {
        return this.prisma.clinic.findMany({
            where,
            include: {
                city: true,
                province: true,
                clinic_operation_hours: true,
                city_company: true,
                province_company: true,
                media_clinic_logo: {
                    include: {
                        media: true,
                    },
                },
                media_clinics: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
};
SolutionTreatmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SolutionTreatmentService);
exports.SolutionTreatmentService = SolutionTreatmentService;
//# sourceMappingURL=solution-treatment.service.js.map
//# debugId=53d52f58-71e9-5255-af75-dbcaaf5a9650
