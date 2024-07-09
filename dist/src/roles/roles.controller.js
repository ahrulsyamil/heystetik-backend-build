"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e8e15f48-891c-5aeb-806b-883f36741a12")}catch(e){}}();

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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const response_message_decorator_1 = require("../decorators/response-message.decorator");
const create_roles_dto_1 = require("./dto/create-roles.dto");
const page_options_role_dto_1 = require("./dto/page-options-role.dto");
const update_roles_dto_1 = require("./dto/update-roles.dto");
const roles_service_1 = require("./roles.service");
const page_options_menu_dto_1 = require("./dto/page-options-menu.dto");
const array_1 = require("../globals/helpers/array");
let RolesController = class RolesController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async create(data) {
        const existCode = await this.roleService.findBy({
            code: data.code,
        });
        if (existCode)
            throw new common_1.BadRequestException('The code already exists');
        const menus = await this.roleService.findAllMenuBy({
            id: {
                in: data.menus,
            },
        });
        return await this.roleService.create({
            code: data.code,
            name: data.name,
            menu_roles: {
                create: [
                    ...(0, array_1.getUniqueValues)(menus.map((menu) => menu.parent_id)).filter((x) => !!x),
                    ...menus.map((menu) => menu.id),
                ].map((id) => ({
                    menu_id: id,
                })),
            },
        });
    }
    async findAll(pageOptionsDto) {
        return await this.roleService.findAll(pageOptionsDto);
    }
    async findAllMenu(pageOptionsDto) {
        return await this.roleService.findAllMenu(pageOptionsDto);
    }
    async findOne(id) {
        const find = await this.roleService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async findMenuPermission(id) {
        const find = await this.roleService.findRoleWithMenuAction(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async update(id, data) {
        const find = await this.roleService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        const existCode = await this.roleService.findBy({
            code: data.code,
            id: {
                not: find.id,
            },
        });
        if (existCode)
            throw new common_1.BadRequestException('The code already exists');
        let menuRoles = {};
        if (data.menus.length > 0) {
            const menus = await this.roleService.findAllMenuBy({
                id: {
                    in: data.menus,
                },
            });
            menuRoles = {
                menu_roles: {
                    deleteMany: {},
                    create: [
                        ...(0, array_1.getUniqueValues)(menus.map((menu) => menu.parent_id)).filter((x) => !!x),
                        ...menus.map((menu) => menu.id),
                    ].map((id) => ({
                        menu_id: id,
                    })),
                },
            };
        }
        return await this.roleService.update(find.id, {
            code: data.code,
            name: data.name,
            ...menuRoles,
        });
    }
    async remove(id) {
        const find = await this.roleService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if ([1, 2, 3].includes(+id))
            throw new common_1.ForbiddenException('Forbidden to delete default role');
        await this.roleService.delete(+id);
        return null;
    }
};
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data created successfully'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_roles_dto_1.CreateRolesDto]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_role_dto_1.PageOptionsRoleDto]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('menu'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_menu_dto_1.PageOptionsMenuDto]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "findAllMenu", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/menu-action'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "findMenuPermission", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data updated successfully'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_roles_dto_1.UpdateRolesDto]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "update", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data deleted successfully'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "remove", null);
RolesController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('role'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map
//# debugId=e8e15f48-891c-5aeb-806b-883f36741a12
