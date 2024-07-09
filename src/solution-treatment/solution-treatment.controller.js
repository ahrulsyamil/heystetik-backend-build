"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c8b0f37e-543f-525e-9f3c-f6b36d0b0a2f")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionTreatmentController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const clinic_service_1 = require("../clinic/clinic.service");
const roles_decorator_1 = require("../decorators/roles.decorator");
const skip_guard_decorator_1 = require("../decorators/skip-guard.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const array_1 = require("../globals/helpers/array");
const distance_1 = require("../globals/helpers/distance");
const number_1 = require("../globals/helpers/number");
const string_1 = require("../globals/helpers/string");
const user_location_service_1 = require("../user-location/user-location.service");
const user_wishlist_treatment_service_1 = require("../user-wishlist-treatment/user-wishlist-treatment.service");
const user_entity_1 = require("../users/entities/user.entity");
const page_options_solution_treatment_doctor_recomendation_dto_1 = require("./dto/page-options-solution-treatment-doctor-recomendation.dto");
const page_options_solution_treatment_dto_1 = require("./dto/page-options-solution-treatment.dto");
const solution_treatment_service_1 = require("./solution-treatment.service");
let SolutionTreatmentController = class SolutionTreatmentController {
    constructor(solutionTreatmentService, userLocationService, clinicService, userWishlistTreatmentService) {
        this.solutionTreatmentService = solutionTreatmentService;
        this.userLocationService = userLocationService;
        this.clinicService = clinicService;
        this.userWishlistTreatmentService = userWishlistTreatmentService;
        this.calculateAveragePrice = (treatments) => {
            if (treatments.length === 0) {
                return 0;
            }
            const totalSum = treatments.reduce((sum, treatment) => sum + treatment.price, 0);
            const averagePrice = totalSum / treatments.length;
            return averagePrice;
        };
    }
    async getRecomendationTreatment() {
        return await this.solutionTreatmentService.recomendationTreatment();
    }
    async getTopTreatment() {
        return await this.solutionTreatmentService.topTreatment();
    }
    async findAll(user, pageOptions) {
        const userLocation = await this.userLocationService.find(user?.id);
        const result = await this.solutionTreatmentService.findAll(pageOptions, userLocation?.latitude, userLocation?.longitude);
        result.data = result.data.map((item) => {
            return {
                ...item,
                distance: userLocation
                    ? `${(0, distance_1.calculateDistance)(item.clinic.pinpoint_latitude, item.clinic.pinpoint_longitude, userLocation.latitude, userLocation.longitude).toFixed(1)} km`
                    : null,
            };
        });
        return result;
    }
    async findAllNearMe(user, pageOptions) {
        const userLocation = await this.userLocationService.find(user.id);
        if (!userLocation)
            throw new common_1.BadRequestException('Location has not been set');
        return await this.solutionTreatmentService.findAllNearMe(pageOptions, userLocation.latitude, userLocation.longitude);
    }
    async findAllClinicOld(user, pageOptions) {
        const userLocation = await this.userLocationService.find(user.id);
        const result = await this.solutionTreatmentService.findAllClinicOld(pageOptions);
        result.data = result.data.map((item) => {
            return {
                ...item,
                avg_price: this.calculateAveragePrice(item.treatments),
                distance: userLocation
                    ? `${(0, distance_1.calculateDistance)(item.pinpoint_latitude, item.pinpoint_longitude, userLocation.latitude, userLocation.longitude).toFixed(1)} km`
                    : null,
            };
        });
        return result;
    }
    async findAllClinic(user, pageOptions) {
        const userLocation = await this.userLocationService.find(user?.id);
        if (!userLocation && pageOptions.order_by == enum_1.OrderByTreatment.DISTANCE)
            throw new common_1.BadRequestException('Location has not been set');
        return await this.solutionTreatmentService.findAllClinic(pageOptions, userLocation?.latitude, userLocation?.longitude);
    }
    async findAllTopRating(user, pageOptions) {
        const userLocation = await this.userLocationService.find(user?.id);
        const result = await this.solutionTreatmentService.findAllTopRating(pageOptions);
        result.data = result.data.map((item) => {
            return {
                ...item,
                distance: userLocation
                    ? `${(0, distance_1.calculateDistance)(item.clinic.pinpoint_latitude, item.clinic.pinpoint_longitude, userLocation.latitude, userLocation.longitude).toFixed(1)} km`
                    : null,
            };
        });
        return result;
    }
    async findAllTrending(user, pageOptions) {
        const userLocation = await this.userLocationService.find(user?.id);
        return await this.solutionTreatmentService.findAllTrending(pageOptions, userLocation?.latitude, userLocation?.longitude);
    }
    async findAllClinicTreatment(user, id, pageOptions) {
        const find = await this.clinicService.findOne(id);
        if (!find)
            throw new common_1.BadRequestException('Clinic not found');
        const userLocation = await this.userLocationService.find(user?.id);
        const result = await this.solutionTreatmentService.findAllClinicTreatment(id, pageOptions);
        result.data = result.data.map((item) => {
            return {
                ...item,
                distance: userLocation
                    ? `${(0, distance_1.calculateDistance)(item.clinic.pinpoint_latitude, item.clinic.pinpoint_longitude, userLocation.latitude, userLocation.longitude).toFixed(1)} km`
                    : null,
            };
        });
        return result;
    }
    async find(user, id) {
        const find = await this.solutionTreatmentService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        const findWishlist = await this.userWishlistTreatmentService.findBy({
            treatment_id: find.id,
            user_id: user.id,
        });
        find.wishlist = findWishlist ? true : false;
        return find;
    }
    async findClinic(user, id) {
        const find = await this.solutionTreatmentService.findClinic(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async findAllDoctorRecomendation(user, pageOptions) {
        const result = await this.solutionTreatmentService.findAllDoctorRecomendation(pageOptions);
        const filterTreatment = {};
        if (pageOptions.method) {
            filterTreatment.method = {
                in: pageOptions.method,
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptions.min_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptions.max_price)) {
            filterTreatment.price = {
                gte: pageOptions.min_price,
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptions.max_price) &&
            !(0, string_1.isNotNullOrEmpty)(pageOptions.min_price)) {
            filterTreatment.price = {
                lte: pageOptions.max_price,
            };
        }
        if ((0, string_1.isNotNullOrEmpty)(pageOptions.min_price) &&
            (0, string_1.isNotNullOrEmpty)(pageOptions.max_price)) {
            filterTreatment.price = {
                gte: pageOptions.min_price,
                lte: pageOptions.max_price,
            };
        }
        if (pageOptions.concern_ids) {
            filterTreatment.treatment_concerns = {
                some: {
                    concern_id: {
                        in: pageOptions.concern_ids,
                    },
                },
            };
        }
        if (pageOptions.search) {
            filterTreatment.OR = [
                {
                    treatment_type: {
                        contains: pageOptions.search,
                        mode: 'insensitive',
                    },
                },
                {
                    method: {
                        contains: pageOptions.search,
                        mode: 'insensitive',
                    },
                },
                {
                    description: {
                        contains: pageOptions.search,
                        mode: 'insensitive',
                    },
                },
            ];
        }
        result.data = await Promise.all(result.data.map(async (item) => {
            const [treatment, clinics, userLocation] = await Promise.all([
                this.solutionTreatmentService.findAllBy({
                    treatment_type: item.treatment_type,
                    ...filterTreatment,
                }),
                this.solutionTreatmentService.findAllClinicBy({
                    treatments: {
                        some: {
                            treatment_type: item.treatment_type,
                            ...filterTreatment,
                        },
                    },
                }),
                this.userLocationService.find(user?.id),
            ]);
            const prices = (0, array_1.getUniqueValues)(treatment.map((item) => item.price));
            const minPrice = Math.min(...prices);
            const maxPrice = Math.max(...prices);
            const downtimes = (0, array_1.getUniqueValues)(treatment.map((item) => item.downtime));
            const recoveryTimes = [];
            if (downtimes.includes('No downtime'))
                recoveryTimes.push('No downtime');
            const downtimeDays = downtimes
                .filter((x) => (0, number_1.isNumeric)(x))
                .map((x) => Number(x));
            if (downtimeDays.length > 0) {
                const minDowntime = Math.min(...downtimeDays);
                const maxDowntime = Math.max(...downtimeDays);
                recoveryTimes.push(minDowntime == maxDowntime
                    ? `${maxDowntime} hari`
                    : `${minDowntime}-${maxDowntime} hari`);
            }
            const method = (0, array_1.getUniqueValues)(treatment.map((item) => item.method));
            return {
                ...item,
                cost: minPrice == maxPrice
                    ? (0, string_1.formatCurrency)(maxPrice, 'Rp')
                    : `${(0, string_1.formatCurrency)(minPrice, 'Rp')}-${(0, string_1.formatCurrency)(maxPrice, 'Rp')}`,
                min_cost: minPrice,
                max_cost: maxPrice,
                recovery_time: recoveryTimes.join(', '),
                method: method.join(', '),
                clinics: clinics.map((clinic) => ({
                    ...clinic,
                    distance: userLocation
                        ? `${(0, distance_1.calculateDistance)(clinic.pinpoint_latitude, clinic.pinpoint_longitude, userLocation.latitude, userLocation.longitude).toFixed(1)} km`
                        : null,
                })),
            };
        }));
        console.log(filterTreatment);
        return result;
    }
};
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)('/recomendation'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SolutionTreatmentController.prototype, "getRecomendationTreatment", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)('/top'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SolutionTreatmentController.prototype, "getTopTreatment", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_solution_treatment_dto_1.PageOptionsSolutionTreatmentDto]),
    __metadata("design:returntype", Promise)
], SolutionTreatmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('near-me'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_solution_treatment_dto_1.PageOptionsSolutionTreatmentDto]),
    __metadata("design:returntype", Promise)
], SolutionTreatmentController.prototype, "findAllNearMe", null);
__decorate([
    (0, common_1.Get)('clinic-old'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_solution_treatment_dto_1.PageOptionsSolutionTreatmentDto]),
    __metadata("design:returntype", Promise)
], SolutionTreatmentController.prototype, "findAllClinicOld", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)('clinic'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_solution_treatment_dto_1.PageOptionsSolutionTreatmentDto]),
    __metadata("design:returntype", Promise)
], SolutionTreatmentController.prototype, "findAllClinic", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)('top-rating'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_solution_treatment_dto_1.PageOptionsSolutionTreatmentDto]),
    __metadata("design:returntype", Promise)
], SolutionTreatmentController.prototype, "findAllTopRating", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)('trending'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_solution_treatment_dto_1.PageOptionsSolutionTreatmentDto]),
    __metadata("design:returntype", Promise)
], SolutionTreatmentController.prototype, "findAllTrending", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)('clinic/:id/treatment'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, page_options_solution_treatment_dto_1.PageOptionsSolutionTreatmentDto]),
    __metadata("design:returntype", Promise)
], SolutionTreatmentController.prototype, "findAllClinicTreatment", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], SolutionTreatmentController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('clinic/:id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], SolutionTreatmentController.prototype, "findClinic", null);
__decorate([
    (0, common_1.Get)('doctor/recomendation'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_solution_treatment_doctor_recomendation_dto_1.PageOptionsSolutionTreatmentDoctorRecomendationDto]),
    __metadata("design:returntype", Promise)
], SolutionTreatmentController.prototype, "findAllDoctorRecomendation", null);
SolutionTreatmentController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer, enum_1.Role.Doctor),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('solution/treatment'),
    __metadata("design:paramtypes", [solution_treatment_service_1.SolutionTreatmentService,
        user_location_service_1.UserLocationService,
        clinic_service_1.ClinicService,
        user_wishlist_treatment_service_1.UserWishlistTreatmentService])
], SolutionTreatmentController);
exports.SolutionTreatmentController = SolutionTreatmentController;
//# sourceMappingURL=solution-treatment.controller.js.map
//# debugId=c8b0f37e-543f-525e-9f3c-f6b36d0b0a2f
