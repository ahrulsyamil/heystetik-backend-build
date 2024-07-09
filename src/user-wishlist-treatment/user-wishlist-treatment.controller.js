"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="67a6fe57-70c4-52d8-99eb-b0fd1dc7181e")}catch(e){}}();

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
exports.UserWishlistTreatmentController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const user_entity_1 = require("../users/entities/user.entity");
const page_options_user_wishlist_treatment_dto_1 = require("./dto/page-options-user-wishlist-treatment.dto");
const user_wishlist_treatment_service_1 = require("./user-wishlist-treatment.service");
const create_user_wishlist_treatment_dto_1 = require("./dto/create-user-wishlist-treatment.dto");
const distance_1 = require("../globals/helpers/distance");
const user_location_service_1 = require("../user-location/user-location.service");
let UserWishlistTreatmentController = class UserWishlistTreatmentController {
    constructor(userWishlistTreatmentService, userLocationService) {
        this.userWishlistTreatmentService = userWishlistTreatmentService;
        this.userLocationService = userLocationService;
    }
    async findAll(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        const userLocation = await this.userLocationService.find(user?.id);
        const result = await this.userWishlistTreatmentService.findAll(pageOptionsDto);
        result.data = result.data.map((item) => {
            return {
                ...item,
                distance: userLocation
                    ? `${(0, distance_1.calculateDistance)(item.treatment.clinic.pinpoint_latitude, item.treatment.clinic.pinpoint_longitude, userLocation.latitude, userLocation.longitude).toFixed(1)} km`
                    : null,
            };
        });
        return result;
    }
    async create(user, data) {
        const find = await this.userWishlistTreatmentService.findBy({
            treatment_id: data.treatment_id,
            user_id: user.id,
        });
        if (find)
            throw new common_1.BadRequestException('The treatment is already in the wishlist');
        data.user_id = user.id;
        return await this.userWishlistTreatmentService.create(data);
    }
    async delete(user, id) {
        const find = await this.userWishlistTreatmentService.findBy({
            user_id: user.id,
            treatment_id: id,
        });
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.userWishlistTreatmentService.delete(user.id, id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_user_wishlist_treatment_dto_1.PageOptionUserWishlistTreatmentDto]),
    __metadata("design:returntype", Promise)
], UserWishlistTreatmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        create_user_wishlist_treatment_dto_1.CreateUserWishlistTreatmentDto]),
    __metadata("design:returntype", Promise)
], UserWishlistTreatmentController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], UserWishlistTreatmentController.prototype, "delete", null);
UserWishlistTreatmentController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('user-wishlist-treatment'),
    __metadata("design:paramtypes", [user_wishlist_treatment_service_1.UserWishlistTreatmentService,
        user_location_service_1.UserLocationService])
], UserWishlistTreatmentController);
exports.UserWishlistTreatmentController = UserWishlistTreatmentController;
//# sourceMappingURL=user-wishlist-treatment.controller.js.map
//# debugId=67a6fe57-70c4-52d8-99eb-b0fd1dc7181e
