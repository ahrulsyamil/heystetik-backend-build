"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="358ea6a5-c2d1-549e-a417-f7127e4d5195")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PrismaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const date_to_local_transformer_1 = require("../../src/globals/transformer/date-to-local.transformer");
const os = require("os");
const config_1 = require("@nestjs/config");
let PrismaService = PrismaService_1 = class PrismaService extends client_1.PrismaClient {
    constructor(configService) {
        super({
            log: [{ emit: 'event', level: 'query' }],
            datasources: {
                db: {
                    url: `${configService.get('database').url}&connection_limit=${Number(configService.get('app').instances) > 1
                        ? Math.round((os.cpus().length * 2 + 1) /
                            Number(configService.get('app').instances))
                        : Number(configService.get('app').instances) == 0
                            ? Math.round((os.cpus().length * 2 + 1) / os.cpus().length)
                            : os.cpus().length * 2 + 1}&pool_timeout=5`,
                },
            },
        });
        this.logger = new common_1.Logger(PrismaService_1.name);
        this.$use(async (params, next) => {
            if (params.action.includes('find') && params.model) {
                const result = await next(params);
                if (Array.isArray(result)) {
                    return (0, date_to_local_transformer_1.transformDatesToLocal)(result);
                }
                else if (result) {
                    return (0, date_to_local_transformer_1.transformDatesToLocal)([result])[0];
                }
            }
            else {
                return next(params);
            }
        });
        this.$use(async (params, next) => {
            if (params.action === 'findUnique' || params.action === 'findFirst') {
                params.action = 'findFirst';
                params.args.where['deleted_at'] = null;
            }
            if (params.action === 'findMany') {
                if (params.args.where) {
                    if (params.args.where.deleted_at == undefined) {
                        params.args.where['deleted_at'] = null;
                    }
                }
                else {
                    params.args['where'] = { deleted_at: null };
                }
            }
            return next(params);
        });
        this.$use(async (params, next) => {
            if (params.action == 'update') {
                params.args['data'] = {
                    ...params.args['data'],
                    updated_at: new Date(),
                };
            }
            if (params.action == 'updateMany') {
                if (params.args.where != undefined) {
                    params.args.where['deleted_at'] = null;
                }
                else {
                    params.args['where'] = { deleted_at: null };
                }
            }
            return next(params);
        });
        this.$use(async (params, next) => {
            const skipSoftDelete = [
                'user_wishlist_treatment',
                'user_wishlist',
                'user_follower',
                'user_block',
                'treatment_review_helpful',
                'stream_save',
                'stream_like',
                'stream_comment_reply_like',
                'stream_comment_like',
                'stream_comment_reply',
                'stream_comment',
                'stream_polling',
                'recipe_recomendation_treatment_item_clinic',
                'recipe_recomendation_treatment_item',
                'recipe_recomendation_skincare_item',
                'product_review_helpful',
                'consultation_recomendation_skincare',
                'consultation_recomendation_treatment_clinic',
                'consultation_recomendation_treatment',
                'consultation_recipe_drug',
                'media',
                'media_user_profile_picture',
                'my_journey',
                'media_my_journey',
                'sicepat_destination',
                'stream_follower',
                'doctor_schedules',
                'media_banner',
                'product_tags',
                'clinic_operation_hours',
                'pharmacy_operation_hours',
                'apotek_operation_hours',
                'menu_role',
            ];
            if (params.action == 'delete' && !skipSoftDelete.includes(params.model)) {
                params.action = 'update';
                params.args['data'] = { deleted_at: new Date() };
            }
            if (params.action == 'deleteMany' &&
                !skipSoftDelete.includes(params.model)) {
                params.action = 'updateMany';
                if (params.args.data != undefined) {
                    params.args.data['deleted_at'] = new Date();
                }
                else {
                    params.args['data'] = { deleted_at: new Date() };
                }
            }
            return next(params);
        });
        this.logger.log(`Prisma v${client_1.Prisma.prismaVersion.client}`);
        this.$on('query', (e) => this.logger.debug(`${e.query} ${e.params}`));
    }
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
    async onApplicationShutdown() {
        await this.$disconnect();
    }
    async enableShutdownHooks(app) {
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }
};
PrismaService = PrismaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PrismaService);
exports.PrismaService = PrismaService;
//# sourceMappingURL=prisma.service.js.map
//# debugId=358ea6a5-c2d1-549e-a417-f7127e4d5195
