"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="74d6db66-dcc0-53ba-926e-42f80664c990")}catch(e){}}();

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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const response_message_decorator_1 = require("../decorators/response-message.decorator");
const base64_1 = require("../globals/constant/base64");
const media_1 = require("../globals/constant/media");
const media_2 = require("../globals/helpers/media");
const media_service_1 = require("../media/media.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const page_options_user_dto_1 = require("./dto/page-options-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(usersService, mediaService) {
        this.usersService = usersService;
        this.mediaService = mediaService;
    }
    async findAll(pageOptionsDto) {
        return await this.usersService.findAll(pageOptionsDto);
    }
    async create(data) {
        const [existUsername, existEmail, existPhone] = await Promise.all([
            this.usersService.findBy({
                username: data.username,
            }),
            this.usersService.findBy({
                email: data.email,
            }),
            this.usersService.findBy({
                no_phone: data.phone,
            }),
        ]);
        if (data.username && existUsername)
            throw new common_1.BadRequestException('The username already exists');
        if (existEmail)
            throw new common_1.BadRequestException('The email already exists.');
        if (data.phone && existPhone)
            throw new common_1.BadRequestException('The phone already exists.');
        const fileInfo = await (0, media_2.saveBase64ToFile)(base64_1.defaultUserImage, media_1.MEDIA_PROFILE_PICTURE_DIR, 'profile-picture');
        const media = await this.mediaService.createMedia(fileInfo);
        return await this.usersService.create({
            username: data.username,
            fullname: data.name,
            email: data.email,
            department: data.department,
            no_phone: data.phone,
            is_active: data.is_active,
            roleId: data.role_id,
            media_user_profile_picture: {
                create: {
                    media_id: media.id,
                },
            },
        });
    }
    async find(id) {
        const find = await this.usersService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async update(id, data) {
        const [find, existUsername, existEmail, existPhone] = await Promise.all([
            this.usersService.findOne(+id),
            this.usersService.findBy({
                username: data.username,
                id: {
                    not: +id,
                },
            }),
            this.usersService.findBy({
                email: data.email,
                id: {
                    not: +id,
                },
            }),
            this.usersService.findBy({
                no_phone: data.phone,
                id: {
                    not: +id,
                },
            }),
        ]);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (data.username && existUsername)
            throw new common_1.BadRequestException('The username already exists');
        if (data.email && existEmail)
            throw new common_1.BadRequestException('The email already exists.');
        if (data.phone && existPhone)
            throw new common_1.BadRequestException('The phone already exists.');
        return await this.usersService.updateUser(+id, {
            username: data.username,
            fullname: data.name,
            email: data.email,
            department: data.department,
            no_phone: data.phone,
            is_active: data.is_active,
            roleId: data.role_id,
            password: data.password,
        });
    }
    async delete(id) {
        const find = await this.usersService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if ([0, 1].includes(find.id))
            throw new common_1.ForbiddenException('Forbidden to delete default user');
        await Promise.all([
            this.usersService.updateUser(+id, {
                username: `${find.username} (deleted_at: ${new Date()})`,
                email: `${find.email} (deleted_at: ${new Date()})`,
                no_phone: `${find.no_phone} (deleted_at: ${new Date()})`,
            }),
            this.usersService.delete(+id),
        ]);
        return null;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_user_dto_1.PageOptionsUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data created successfully'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "find", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data updated successfully'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data deleted successfully'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
UsersController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        media_service_1.MediaService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map
//# debugId=74d6db66-dcc0-53ba-926e-42f80664c990
