"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="82ff2353-aef5-579e-817c-a1595cb273be")}catch(e){}}();

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
exports.UserProfileService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const dayjs = require("dayjs");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const enum_1 = require("../globals/constant/enum");
const prisma_service_1 = require("../prisma/prisma.service");
let UserProfileService = class UserProfileService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async overview(username) {
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
         SELECT 
            U.id,
            U.fullname,
            U.username,
            U.bio,
            U.dob,
            DATE_PART('year', AGE(NOW(), U.dob)) AS age,
            (SELECT name FROM kota_kabupatens WHERE id = U."cityId") AS city,
            (SELECT name FROM provinces WHERE id = U."provinceId") AS province,
            (
            	CASE 
            		WHEN (
            			SELECT 
                        SUM(total_paid)
                     FROM (
                        SELECT total_paid FROM transaction_consultation tc WHERE tc.customer_id = U.id
                        UNION ALL
                        SELECT total_paid FROM transaction_treatment tt WHERE tt.user_id = U.id
                        UNION ALL
                        SELECT total_paid FROM transaction_product tp  WHERE tp.user_id  = U.id
                     ) transactions
            		) >= 15000000 THEN 'Diamond'
            		WHEN (
            			SELECT 
                        SUM(total_paid)
                     FROM (
                        SELECT total_paid FROM transaction_consultation tc WHERE tc.customer_id = U.id
                        UNION ALL
                        SELECT total_paid FROM transaction_treatment tt WHERE tt.user_id = U.id
                        UNION ALL
                        SELECT total_paid FROM transaction_product tp  WHERE tp.user_id  = U.id
                     ) transactions
            		) >= 7500000 THEN 'Gold'
            		WHEN (
            			SELECT 
                        SUM(total_paid)
                     FROM (
                        SELECT total_paid FROM transaction_consultation tc WHERE tc.customer_id = U.id
                        UNION ALL
                        SELECT total_paid FROM transaction_treatment tt WHERE tt.user_id = U.id
                        UNION ALL
                        SELECT total_paid FROM transaction_product tp  WHERE tp.user_id  = U.id
                     ) transactions
            		) >= 1500000 THEN 'Silver'
            		ELSE 'Bronze'
            	END
            ) AS level,
            (SELECT COUNT(*) FROM user_follower WHERE user_id = U.id) AS total_follower,
            (SELECT COUNT(*) FROM user_follower WHERE follower_id = U.id) AS total_following,
            (SELECT COUNT(*) FROM stream WHERE user_id = U.id) AS total_post,
            (SELECT COUNT(*) FROM (
               (
                  SELECT
                     tc.id
                  FROM 
                     transaction_consultation tc
                  LEFT JOIN
                     consultation_review cr ON cr.transaction_consultation_id = tc.id
                  WHERE
                     tc.customer_id = U.id
                     AND tc.status = 'SELESAI'
                     AND cr.id IS NOT NULL
                     AND tc.deleted_at IS NULL
               )
               UNION
               (
                  SELECT
                  CAST(tti.id AS VARCHAR)               
                  FROM 
                     transaction_treatment tt
                  INNER JOIN
                     transaction_treatment_item tti ON tti.transaction_treatment_id = tt.id
                  LEFT JOIN
                     treatment_review tr ON tr.transaction_treatment_item_id = tti.id
                  WHERE 
                     tt.user_id = U.id
                     AND tt.status = 'SELESAI'
                     AND tr.id IS NOT NULL
                     AND tt.deleted_at IS NULL
               )
            ) table_reviews ) AS total_review
         FROM
            users U
         WHERE 
            username = '${username}'
      `));
        });
    }
    async search(pageOptionsDto) {
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT
            U.id,
            U.fullname, 
            U.username,
            (SELECT COUNT(*) FROM user_follower WHERE user_id = U.id) AS total_follower,
            (CASE WHEN (SELECT COUNT(*) FROM user_follower WHERE user_id = U.id AND follower_id = ${pageOptionsDto.user_id}) = 0 THEN 0 ELSE 1 END) AS is_following,
            (CASE WHEN (SELECT COUNT(*) FROM user_follower WHERE user_id = ${pageOptionsDto.user_id} AND follower_id = U.id) = 0 THEN 0 ELSE 1 END) AS is_follower
          FROM users U
          WHERE
            "roleId" = 3
            AND id <> ${pageOptionsDto.user_id}
            AND is_active = true
            AND finish_register = true
            AND (SELECT id FROM user_block WHERE user_id = U.id AND blocked_user_id = ${pageOptionsDto.user_id}) IS NULL
            AND (fullname LIKE '%${pageOptionsDto.search}%' OR username LIKE '%${pageOptionsDto.search}%')
          LIMIT ${pageOptionsDto.take}
          OFFSET ${pageOptionsDto.skip}
        `));
        });
        const countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT
            COUNT(*)
          FROM users U
          WHERE
            "roleId" = 3
            AND id <> ${pageOptionsDto.user_id}
            AND is_active = true
            AND finish_register = true
            AND (SELECT id FROM user_block WHERE user_id = U.id AND blocked_user_id = ${pageOptionsDto.user_id}) IS NULL
            AND (fullname LIKE '%${pageOptionsDto.search}%' OR username LIKE '%${pageOptionsDto.search}%')
        `));
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll[0].count,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async follow(data) {
        return await this.prisma.user_follower.upsert({
            where: {
                user_id_follower_id: data,
            },
            create: data,
            update: data,
        });
    }
    async unfollow(data) {
        return await this.prisma.user_follower.delete({
            where: {
                user_id_follower_id: data,
            },
        });
    }
    async posts(pageOptionsDto) {
        const where = {
            deleted_at: null,
        };
        if (pageOptionsDto.post_type == enum_1.PostTypeUserProfile.ALL) {
            where.OR = [
                {
                    user_id: pageOptionsDto.user_id,
                },
                {
                    OR: [
                        {
                            stream_comments: {
                                some: {
                                    user_id: pageOptionsDto.user_id,
                                },
                            },
                        },
                        {
                            stream_comment_replies: {
                                some: {
                                    user_id: pageOptionsDto.user_id,
                                },
                            },
                        },
                        {
                            stream_poll: {
                                stream_pollings: {
                                    some: {
                                        user_id: pageOptionsDto.user_id,
                                    },
                                },
                            },
                        },
                    ],
                },
                {
                    stream_likes: {
                        some: {
                            user_id: pageOptionsDto.user_id,
                        },
                    },
                },
                {
                    stream_saves: {
                        some: {
                            user_id: pageOptionsDto.user_id,
                        },
                    },
                },
            ];
        }
        if (pageOptionsDto.post_type == enum_1.PostTypeUserProfile.STREAM) {
            where.user_id = pageOptionsDto.user_id;
            where.stream_poll = null;
        }
        if (pageOptionsDto.post_type == enum_1.PostTypeUserProfile.REPLIES) {
            where.OR = [
                {
                    stream_comments: {
                        some: {
                            user_id: pageOptionsDto.user_id,
                        },
                    },
                },
                {
                    stream_comment_replies: {
                        some: {
                            user_id: pageOptionsDto.user_id,
                        },
                    },
                },
                {
                    stream_poll: {
                        stream_pollings: {
                            some: {
                                user_id: pageOptionsDto.user_id,
                            },
                        },
                    },
                },
            ];
        }
        if (pageOptionsDto.post_type == enum_1.PostTypeUserProfile.MY_JOURNEY) {
        }
        if (pageOptionsDto.post_type == enum_1.PostTypeUserProfile.POLLING) {
            where.user_id = pageOptionsDto.user_id;
            where.stream_poll = {
                NOT: undefined,
            };
        }
        if (pageOptionsDto.post_type == enum_1.PostTypeUserProfile.LIKED) {
            where.stream_likes = {
                some: {
                    user_id: pageOptionsDto.user_id,
                },
            };
        }
        if (pageOptionsDto.post_type == enum_1.PostTypeUserProfile.SAVED) {
            where.stream_saves = {
                some: {
                    user_id: pageOptionsDto.user_id,
                },
            };
        }
        if (pageOptionsDto.search) {
            where.OR = [
                {
                    content: { contains: pageOptionsDto.search },
                },
                {
                    user: {
                        OR: [
                            { username: { contains: pageOptionsDto.search } },
                            { fullname: { contains: pageOptionsDto.search } },
                        ],
                    },
                },
                {
                    stream_hastags: {
                        some: {
                            hashtag: {
                                tag: {
                                    contains: pageOptionsDto.search,
                                    mode: 'insensitive',
                                },
                            },
                        },
                    },
                },
            ];
        }
        const data = await this.prisma.stream.findMany({
            where,
            include: {
                stream_hastags: {
                    include: {
                        hashtag: true,
                    },
                },
                stream_poll: {
                    include: {
                        stream_poll_options: true,
                        stream_pollings: true,
                    },
                },
                stream_mentions: true,
                media_streams: {
                    include: {
                        media: true,
                    },
                },
                user: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        stream_saves: true,
                        stream_comments: true,
                        stream_likes: true,
                        stream_comment_replies: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.stream.count({
            where,
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async reviews(pageOptionsDto) {
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
         (
            SELECT
               tc.id AS id, 
               tc.id AS transaction_id, 
               'CONSULTATION' AS transaction_type, 
               tc.created_at 
            FROM 
               transaction_consultation tc
            LEFT JOIN
               consultation_review cr ON cr.transaction_consultation_id = tc.id
            WHERE 
               tc.customer_id = ${pageOptionsDto.user_id}
               AND tc.status = 'SELESAI'
               AND cr.id IS NOT NULL
               AND tc.deleted_at IS NULL
         )
         UNION
         (
            SELECT 
               CAST(tti.id as varchar) AS id,
               tt.id AS transaction_id, 
               'TREATMENT' AS transaction_type, 
               tt.created_at 
            FROM 
               transaction_treatment tt
            INNER JOIN
               transaction_treatment_item tti ON tti.transaction_treatment_id = tt.id
            LEFT JOIN
               treatment_review tr ON tr.transaction_treatment_item_id = tti.id
            WHERE 
               tt.user_id = ${pageOptionsDto.user_id}
               AND tt.status = 'SELESAI'
               AND tr.id IS NOT NULL
               AND tt.deleted_at IS NULL
         )
         UNION
         (
            SELECT 
               CAST(tpi.id as varchar) AS id,
               tp.id AS transaction_id, 
               'PRODUCT' AS transaction_type, 
               tp.created_at 
            FROM 
               transaction_product tp
            INNER JOIN
               transaction_product_item tpi ON tpi.transaction_product_id = tp.id
            LEFT JOIN
               product_review pr ON pr.transaction_product_item_id = tpi.id
            WHERE 
               tp.user_id = ${pageOptionsDto.user_id}
               AND tp.status = 'SELESAI'
               AND pr.id IS NOT NULL
               AND tp.deleted_at IS NULL
         )
         ORDER BY created_at ${pageOptionsDto.order}
         LIMIT ${pageOptionsDto.take}
         OFFSET ${pageOptionsDto.skip}
      `));
        });
        let countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
         SELECT 
            COUNT(*)
         FROM (
            (
               SELECT
                  tc.id AS id,
                  tc.id AS transaction_id, 
                  'CONSULTATION' AS transaction_type, 
                  tc.created_at 
               FROM 
                  transaction_consultation tc
               LEFT JOIN
                  consultation_review cr on cr.transaction_consultation_id = tc.id
               WHERE
                  tc.customer_id = ${pageOptionsDto.user_id}
                  AND tc.status = 'SELESAI'
                  AND cr.id IS NOT NULL
                  AND tc.deleted_at IS NULL
            )
            UNION
            (
               SELECT
                  CAST(tti.id as varchar) AS id,
                  tt.id AS transaction_id, 
                  'TREATMENT' AS transaction_type, 
                  tt.created_at 
               FROM 
                  transaction_treatment tt
               INNER JOIN
                  transaction_treatment_item tti ON tti.transaction_treatment_id = tt.id
               LEFT JOIN
                  treatment_review tr ON tr.transaction_treatment_item_id = tti.id
               WHERE 
                  tt.user_id = ${pageOptionsDto.user_id}
                  AND tt.status = 'SELESAI'
                  AND tr.id IS NOT NULL
                  AND tt.deleted_at IS NULL
            )
            UNION
            (
               SELECT
                  CAST(tpi.id as varchar) AS id,
                  tp.id AS transaction_id, 
                  'PRODUCT' AS transaction_type, 
                  tp.created_at 
               FROM 
                  transaction_product tp
               INNER JOIN
                  transaction_product_item tpi ON tpi.transaction_product_id = tp.id
               LEFT JOIN
                  product_review pr ON pr.transaction_product_item_id = tpi.id
               WHERE 
                  tp.user_id = ${pageOptionsDto.user_id}
                  AND tp.status = 'SELESAI'
                  AND pr.id IS NOT NULL
                  AND tp.deleted_at IS NULL
            )
         ) COUNT
      `));
        });
        countAll = countAll[0].count;
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data.map((item) => ({
            ...item,
            created_at: dayjs.tz(item.created_at).format(),
        })), pageMetaDto);
    }
    async findUserFollow(user_id, follower_id) {
        return this.prisma.user_follower.findFirst({
            where: {
                user_id,
                follower_id,
            },
        });
    }
};
UserProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserProfileService);
exports.UserProfileService = UserProfileService;
//# sourceMappingURL=user-profile.service.js.map
//# debugId=82ff2353-aef5-579e-817c-a1595cb273be
