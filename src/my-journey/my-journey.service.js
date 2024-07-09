"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="31d8a601-0ecc-5ffa-91e5-137a3579fd1b")}catch(e){}}();

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
exports.MyJourneyService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let MyJourneyService = class MyJourneyService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(pageOptionsDto) {
        const filter = {
            user_id: pageOptionsDto.user_id,
        };
        if (pageOptionsDto.search) {
            filter.concern = {
                name: {
                    contains: pageOptionsDto.search,
                    mode: 'insensitive',
                },
            };
        }
        if (pageOptionsDto.concern_id) {
            filter.concern_id = pageOptionsDto.concern_id;
        }
        if (pageOptionsDto.consultation_id) {
            filter.consultation_id = pageOptionsDto.consultation_id;
        }
        const data = await this.prisma.my_journey.findMany({
            where: {
                ...filter,
            },
            include: {
                consultation: {
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
                },
                concern: true,
                media_my_journeys: {
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
        const countAll = await this.prisma.my_journey.count({
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
    async galeryConcernList(pageOptions) {
        let whereQuery = '';
        if (pageOptions.concern_id) {
            whereQuery += ` AND concern.id = ${pageOptions.concern_id}`;
        }
        return await this.prisma.$queryRaw(client_1.Prisma.raw(`
        SELECT 
          concern.id, 
          concern.name,
          latest_journey_concern.last_created_at
        FROM concern
        INNER JOIN (
          SELECT 
              user_id,
              concern_id,
              MAX(created_at) AS last_created_at
          FROM
              my_journey
          WHERE
              user_id = ${pageOptions.user_id}
              ${whereQuery}
          GROUP BY
              user_id,
              concern_id
        ) latest_journey_concern ON latest_journey_concern.concern_id = concern.id
        ORDER BY
          latest_journey_concern.last_created_at DESC
      `));
    }
    async findAllMediaJourneyBy(where) {
        return await this.prisma.media_my_journey.findMany({
            where,
            include: {
                media: true,
            },
        });
    }
    async create(data, media) {
        return await this.prisma.my_journey.create({
            data: {
                ...data,
                media_my_journeys: {
                    create: media,
                },
            },
        });
    }
    async findAllGalery(where) {
        return await this.prisma.my_journey.findMany({
            where,
            include: {
                consultation: {
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
                },
                concern: true,
                media_my_journeys: {
                    include: {
                        media: true,
                    },
                },
            },
            orderBy: [
                {
                    created_at: 'desc',
                },
                {
                    id: 'desc',
                },
            ],
        });
    }
    async find(id) {
        return await this.prisma.my_journey.findUnique({
            where: {
                id,
            },
            include: {
                consultation: {
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
                },
                concern: true,
                media_my_journeys: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async findBy(where) {
        return await this.prisma.my_journey.findFirst({
            where,
            include: {
                consultation: {
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
                },
                concern: true,
                media_my_journeys: {
                    include: {
                        media: true,
                    },
                },
            },
        });
    }
    async deleteByConcern(user_id, concern_id, consultation_id) {
        const media = await this.prisma.media_my_journey.findMany({
            where: {
                my_journey: {
                    user_id,
                    concern_id,
                },
            },
            include: {
                media: true,
            },
        });
        if (media.length > 0) {
            await this.prisma.media_my_journey.deleteMany({
                where: {
                    my_journey: {
                        user_id,
                        concern_id,
                    },
                },
            });
            await this.prisma.media.deleteMany({
                where: {
                    id: {
                        in: media.map((item) => item.media.id),
                    },
                },
            });
        }
        return await this.prisma.my_journey.delete({
            where: {
                user_id_concern_id_consultation_id: {
                    user_id,
                    concern_id,
                    consultation_id,
                },
            },
        });
    }
    async delete(id) {
        const media = await this.prisma.media_my_journey.findMany({
            where: {
                my_journey_id: id,
            },
            include: {
                media: true,
            },
        });
        if (media.length > 0) {
            await this.prisma.media_my_journey.deleteMany({
                where: {
                    my_journey_id: id,
                },
            });
            await this.prisma.media.deleteMany({
                where: {
                    id: {
                        in: media.map((item) => item.media.id),
                    },
                },
            });
        }
        return await this.prisma.my_journey.delete({
            where: {
                id,
            },
        });
    }
    async findAllConsultation(pageOptionsDto) {
        const filter = {
            customer_id: pageOptionsDto.user_id,
        };
        if (pageOptionsDto.concern_id) {
            filter.medical_history = {
                interest_condition: {
                    concern_id: pageOptionsDto.concern_id,
                },
            };
        }
        const data = await this.prisma.consultation.findMany({
            where: {
                ...filter,
            },
            include: {
                transaction_consultation: {
                    include: {
                        payment_method: true,
                    },
                },
                doctor: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                medical_history: {
                    include: {
                        interest_condition: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.consultation.count({
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
    async findAllTreatment(pageOptionsDto) {
        const filter = {
            transaction_treatment: {
                user_id: pageOptionsDto.user_id,
            },
        };
        if (pageOptionsDto.concern_id) {
            filter.treatment = {
                treatment_concerns: {
                    some: {
                        concern_id: pageOptionsDto.concern_id,
                    },
                },
            };
        }
        const data = await this.prisma.transaction_treatment_item.findMany({
            where: {
                ...filter,
            },
            include: {
                transaction_treatment: {
                    include: {
                        payment_method: true,
                    },
                },
                treatment: {
                    include: {
                        clinic: {
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
                            },
                        },
                        media_treatments: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            skip: pageOptionsDto.skip,
            take: pageOptionsDto.take,
        });
        const countAll = await this.prisma.transaction_treatment_item.count({
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
};
MyJourneyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MyJourneyService);
exports.MyJourneyService = MyJourneyService;
//# sourceMappingURL=my-journey.service.js.map
//# debugId=31d8a601-0ecc-5ffa-91e5-137a3579fd1b
