"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6ee86b55-8214-58ff-99c3-5f2bd8654245")}catch(e){}}();

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
exports.UserCartTreatmentController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const user_cart_treatment_service_1 = require("./user-cart-treatment.service");
const user_decorator_1 = require("../decorators/user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const page_options_user_cart_treatment_dto_1 = require("./dto/page-options-user-cart-treatment.dto");
const create_user_cart_treatment_dto_1 = require("./dto/create-user-cart-treatment.dto");
const delete_many_user_cart_treatment_dto_1 = require("./dto/delete-many-user-cart-treatment.dto");
const treatment_service_1 = require("../treatment/treatment.service");
let UserCartTreatmentController = class UserCartTreatmentController {
    constructor(userCartTreatmentService, treatmentService) {
        this.userCartTreatmentService = userCartTreatmentService;
        this.treatmentService = treatmentService;
    }
    async findAll(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        return await this.userCartTreatmentService.findAll(pageOptionsDto);
    }
    async create(user, data) {
        const treatment = await this.treatmentService.findOne(data.treatment_id);
        if (!treatment)
            throw new common_1.BadRequestException('Treatment not found');
        if (treatment.clinic_id != data.clinic_id)
            throw new common_1.BadRequestException('Invalid clinic for the treatment');
        const find = await this.userCartTreatmentService.findBy({
            user_id: user.id,
            treatment_id: data.treatment_id,
            clinic_id: data.clinic_id,
        });
        data.user_id = user.id;
        if (find) {
            return await this.userCartTreatmentService.update(find.id, {
                pax: find.pax + data.pax,
            });
        }
        else {
            return await this.userCartTreatmentService.create(data);
        }
    }
    async delete(user, id) {
        const find = await this.userCartTreatmentService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.userCartTreatmentService.delete(id);
    }
    async deleteMany(user, data) {
        const findMany = await this.userCartTreatmentService.findManyBy({
            id: { in: data.ids },
        });
        if (findMany.length == 0)
            throw new common_1.BadRequestException('Data not found');
        if (findMany.filter((x) => x.user_id != user.id).length > 0)
            throw new common_1.ForbiddenException();
        return await this.userCartTreatmentService.deleteMany(data.ids);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_user_cart_treatment_dto_1.PageOptionUserCartTreatmentDto]),
    __metadata("design:returntype", Promise)
], UserCartTreatmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        create_user_cart_treatment_dto_1.CreateUserCartTreatmentDto]),
    __metadata("design:returntype", Promise)
], UserCartTreatmentController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], UserCartTreatmentController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        delete_many_user_cart_treatment_dto_1.DeleteManyUserCartTreatmentDto]),
    __metadata("design:returntype", Promise)
], UserCartTreatmentController.prototype, "deleteMany", null);
UserCartTreatmentController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('user-cart-treatment'),
    __metadata("design:paramtypes", [user_cart_treatment_service_1.UserCartTreatmentService,
        treatment_service_1.TreatmentService])
], UserCartTreatmentController);
exports.UserCartTreatmentController = UserCartTreatmentController;
//# sourceMappingURL=user-cart-treatment.controller.js.map
//# debugId=6ee86b55-8214-58ff-99c3-5f2bd8654245
