"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7ad40e06-496d-5031-a39a-54118af99547")}catch(e){}}();

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
exports.ConsultationService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const dayjs = require("dayjs");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let ConsultationService = class ConsultationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findDoctorForConsultationOld() {
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
        SELECT * FROM (
          SELECT 
            U.id AS doctor_id,
            DS.id AS doctor_schedule_id,
            (SELECT COUNT(*) FROM consultation_doctor_schedule WHERE doctor_id = U.id AND status = 'EXPIRED') AS schedule_expired,
            (SELECT COUNT(*) FROM consultation WHERE doctor_id = U.id AND status = 'SELESAI') AS chat_over,
            U.rating,
            (SELECT COUNT(*) FROM consultation WHERE doctor_id = U.id AND status != 'SELESAI' AND created_at::DATE = NOW()::DATE) AS active_consultation
          FROM users AS U
            INNER JOIN doctor_schedules AS DS
            ON DS."userId" = U.id
          AND U."roleId" = 2
          AND U.is_active = true
          AND U.deleted_at IS NULL
          AND LOWER(DS.day) = TRIM(TO_CHAR(NOW(), 'day'))
          AND EXISTS (
            SELECT 1
            FROM (
              WITH split_ranges AS (
                SELECT 
                  UNNEST(STRING_TO_ARRAY(REPLACE(REPLACE(DS.start_end_time, '[', ''), ']', ''), ',')) AS time_range
                )
              SELECT 
                SPLIT_PART(time_range, '-', 1)::TIME AS start_time,
                SPLIT_PART(time_range, '-', 2)::TIME AS ent_time
              FROM 
                split_ranges
              WHERE TO_CHAR(NOW(), 'HH24:MI')::TIME BETWEEN SPLIT_PART(time_range, '-', 1)::TIME AND (SPLIT_PART(time_range, '-', 2)::TIME - INTERVAL '10 minutes')
            ) AS subquery
          )
        ) AS RULES
        WHERE RULES.active_consultation < 5
        ORDER BY 
        RULES.chat_over DESC,
        RULES.rating DESC,
        RULES.schedule_expired ASC
      `));
        });
    }
    async findDoctorForConsultation() {
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT * FROM (
            SELECT 
              U.id AS doctor_id,
              U.fullname AS doctor_name,
              DS.id AS doctor_schedule_id,
              (
                SELECT COUNT(*) 
                FROM consultation_doctor_schedule 
                WHERE doctor_id = U.id AND status = 'EXPIRED'
              ) AS schedule_expired,
              (
                SELECT COUNT(*) 
                FROM consultation 
                WHERE doctor_id = U.id AND status = 'SELESAI'
              ) AS chat_over,
              U.rating,
              (
                SELECT COUNT(*) 
                FROM consultation 
                WHERE doctor_id = U.id AND status != 'SELESAI' AND created_at::DATE = CURRENT_DATE
              ) AS active_consultation
            FROM 
              users AS U
            INNER JOIN doctor_schedules AS DS
              ON DS."userId" = U.id
            WHERE 
              U."roleId" = 2
              AND U.is_active = true
              AND U.deleted_at IS NULL
              AND LOWER(DS.day) = TRIM(TO_CHAR(NOW(), 'day'))
              AND EXISTS (
                  SELECT 
                    1
                  FROM 
                    doctor_schedule_time AS DST
                  WHERE
                    DST.doctor_schedule_id = DS.id
                    AND CASE
                      WHEN DST.start_time <= DST.end_time THEN 
                        CAST(CURRENT_TIMESTAMP AT TIME ZONE 'UTC' AS TIMESTAMP) >= (CURRENT_DATE + DST.start_time::interval) AND CAST(CURRENT_TIMESTAMP AT TIME ZONE 'UTC' AS TIMESTAMP) <= (CURRENT_DATE + DST.end_time::interval)
                      ELSE 
                        CAST(CURRENT_TIMESTAMP AT TIME ZONE 'UTC' AS TIMESTAMP) >= (CURRENT_DATE + DST.start_time::interval) OR CAST(CURRENT_TIMESTAMP AT TIME ZONE 'UTC' AS TIMESTAMP) <= (CURRENT_DATE + DST.end_time::interval)
                    END
              )
          ) AS RULES
          WHERE 
            RULES.active_consultation < 5
          ORDER BY 
            RULES.active_consultation ASC,
            RULES.rating DESC,
            RULES.chat_over DESC,
            RULES.schedule_expired ASC
        `));
        });
    }
    async findCustomConsultationDoctorSchedule(where) {
        return await this.prisma.consultation_doctor_schedule.findMany({
            where: where,
        });
    }
    async createConsultationDoctorSchedule(data) {
        return await this.prisma.consultation_doctor_schedule.create({
            data,
            include: {
                doctor: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async updateStatusConsultationDoctorSchedule(id, status) {
        return await this.prisma.consultation_doctor_schedule.update({
            where: {
                id,
            },
            data: {
                status,
            },
        });
    }
    async findConsultationDoctorScheduleTime(schedule_id, doctor_id, pageOptionsDto) {
        const start_time = pageOptionsDto.start_time.split(':');
        const end_time = pageOptionsDto.end_time.split(':');
        const start_date_time = dayjs()
            .locale('id')
            .hour(Number(start_time[0]))
            .minute(Number(start_time[1]));
        const end_date_time = dayjs()
            .hour(Number(end_time[0]))
            .minute(Number(end_time[1]));
        const filter = {
            doctor_id,
            doctor_schedule_id: schedule_id,
            created_at: {
                gte: new Date(start_date_time.format('YYYY-MM-DD H:mm')),
                lte: new Date(end_date_time.format('YYYY-MM-DD H:mm')),
            },
        };
        const data = await this.prisma.consultation_doctor_schedule.findMany({
            where: filter,
            include: {
                transaction_consultation: {
                    include: {
                        medical_history: {
                            include: {
                                interest_condition: {
                                    include: {
                                        concern: true,
                                    },
                                },
                            },
                        },
                    },
                },
                customer: true,
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.consultation_doctor_schedule.count({
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
    async findConsultationDoctorSchedule(id) {
        return await this.prisma.consultation_doctor_schedule.findUnique({
            where: {
                id,
            },
            include: {
                transaction_consultation: {
                    include: {
                        medical_history: {
                            include: {
                                interest_condition: {
                                    include: {
                                        concern: true,
                                    },
                                },
                            },
                        },
                    },
                },
                customer: true,
            },
        });
    }
    async createConsultation(data) {
        return await this.prisma.consultation.create({
            data,
            include: {
                doctor: true,
                transaction_consultation: true,
            },
        });
    }
    async updateConsultation(id, data) {
        return await this.prisma.consultation.update({
            where: {
                id,
            },
            data,
        });
    }
    async findConsultation(id) {
        return await this.prisma.consultation.findFirst({
            where: {
                id,
            },
            include: {
                customer: true,
                doctor: true,
                chat_room: true,
                transaction_consultation: {
                    include: {
                        consultation_invoice: true,
                    },
                },
                medical_history: {
                    include: {
                        media_medical_histories: {
                            include: {
                                media: true,
                            },
                        },
                        interest_condition: {
                            include: {
                                concern: true,
                            },
                        },
                        medical_history_items: {
                            include: {
                                interest_conditions_answer: true,
                                interest_conditions_question: true,
                            },
                        },
                    },
                },
                consultation_doctor_note: true,
                consultation_recomendation_skincare: {
                    include: {
                        product: {
                            include: {
                                skincare_detail: true,
                                drug_detail: true,
                                media_products: {
                                    include: {
                                        media: true,
                                    },
                                },
                            },
                        },
                    },
                },
                consultation_recomendation_treatment: true,
                consultation_recipe_drug: {
                    include: {
                        product: {
                            include: {
                                skincare_detail: true,
                                drug_detail: true,
                                media_products: {
                                    include: {
                                        media: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    async createDoctorNote(data) {
        await this.prisma.consultation_recomendation_skincare.deleteMany({
            where: {
                consultation_id: data.consultation_id,
            },
        });
        await this.prisma.consultation_recomendation_treatment.deleteMany({
            where: {
                consultation_id: data.consultation_id,
            },
        });
        await this.prisma.consultation_recipe_drug.deleteMany({
            where: {
                consultation_id: data.consultation_id,
            },
        });
        return await this.prisma.consultation.update({
            where: {
                id: data.consultation_id,
            },
            data: {
                consultation_doctor_note: {
                    upsert: {
                        create: {
                            indication: data.indication,
                            diagnosis_possibilty: data.diagnosis_possibility.join('|'),
                            diagnosis_secondary: data.diagnosis_secondary.join('|'),
                            suggestion: data.suggestion,
                        },
                        update: {
                            indication: data.indication,
                            diagnosis_possibilty: data.diagnosis_possibility.join('|'),
                            diagnosis_secondary: data.diagnosis_secondary.join('|'),
                            suggestion: data.suggestion,
                        },
                    },
                },
                consultation_recomendation_skincare: {
                    create: data.recomendation_skincare_items
                        ? data.recomendation_skincare_items.map((item) => ({
                            product_id: item.skincare_id,
                            notes: item.notes,
                            qty: item.qty,
                        }))
                        : [],
                },
                consultation_recomendation_treatment: {
                    create: data.recomendation_treatment_types &&
                        data.recomendation_treatment_types.length > 0
                        ? data.recomendation_treatment_types.map((treatment_type) => ({
                            treatment_type,
                        }))
                        : [],
                },
                consultation_recipe_drug: {
                    create: data.recipe_drug_items.map((item) => ({
                        customer_id: data.customer_id,
                        product_id: item.drug_id,
                        notes: item.notes,
                    })),
                },
            },
        });
    }
    async findDoctorNote(consultation_id) {
        return this.prisma.consultation_doctor_note.findUnique({
            where: {
                consultation_id,
            },
            include: {
                consultation: {
                    include: {
                        consultation_doctor_note: true,
                        consultation_recomendation_skincare: {
                            include: {
                                product: {
                                    include: {
                                        skincare_detail: true,
                                        drug_detail: true,
                                        media_products: {
                                            include: {
                                                media: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        consultation_recomendation_treatment: true,
                        consultation_recipe_drug: {
                            include: {
                                product: {
                                    include: {
                                        skincare_detail: true,
                                        drug_detail: true,
                                        media_products: {
                                            include: {
                                                media: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    async findManyRecipeDrugBy(where, orderBy) {
        return this.prisma.consultation_recipe_drug.findMany({
            where,
            orderBy,
        });
    }
    async findRecipeDrugBy(where, orderBy) {
        return this.prisma.consultation_recipe_drug.findFirst({
            where,
            orderBy,
        });
    }
    async findAllGaleryFile(pageOptionsDto) {
        const filter = {
            chat_message: {
                chat_room: {
                    consultation: {
                        id: pageOptionsDto.consultation_id,
                        customer_id: pageOptionsDto.customer_id,
                    },
                },
            },
        };
        const data = await this.prisma.media_chat_message.findMany({
            where: {
                ...filter,
            },
            include: {
                media: true,
            },
            take: pageOptionsDto.take,
            skip: pageOptionsDto.skip,
        });
        const countAll = await this.prisma.media_chat_message.count({
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
    async updateChatRoom(code, data) {
        return await this.prisma.chat_room.update({
            where: {
                code,
            },
            data,
        });
    }
};
ConsultationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConsultationService);
exports.ConsultationService = ConsultationService;
//# sourceMappingURL=consultation.service.js.map
//# debugId=7ad40e06-496d-5031-a39a-54118af99547
