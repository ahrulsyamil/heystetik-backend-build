"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="57c97060-391b-58fb-8d03-b0dce3d28745")}catch(e){}}();

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
exports.UserAccountVerificationController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const user_account_verification_service_1 = require("./user-account-verification.service");
const user_decorator_1 = require("../decorators/user.decorator");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const media_1 = require("../globals/constant/media");
const user_entity_1 = require("../users/entities/user.entity");
const create_user_account_verification_dto_1 = require("./dto/create-user-account-verification.dto");
const client_1 = require("@prisma/client");
const media_service_1 = require("../media/media.service");
const users_service_1 = require("../users/users.service");
let UserAccountVerificationController = class UserAccountVerificationController {
    constructor(userAccountVerificationService, mediaService, usersService) {
        this.userAccountVerificationService = userAccountVerificationService;
        this.mediaService = mediaService;
        this.usersService = usersService;
    }
    async create(user, files, data) {
        const find = await this.userAccountVerificationService.find(user.id);
        if (find)
            throw new common_1.BadRequestException('Account has been verified');
        if (!files?.face_photo || !files?.id_card_photo) {
            throw new common_1.BadRequestException('Photo is required');
        }
        if ((files.face_photo?.length ?? 0) == 0 ||
            (files.id_card_photo?.length ?? 0) == 0) {
            throw new common_1.BadRequestException('Photo is required');
        }
        const media = await Promise.all([
            {
                media: files.face_photo,
                type: client_1.type_user_account_verification.FACE_PHOTO,
            },
            {
                media: files.id_card_photo,
                type: client_1.type_user_account_verification.ID_CARD_PHOTO,
            },
        ].map(async (item) => {
            if (!item.media) {
                return;
            }
            const insertedMedia = await this.mediaService.insertMediaData(item.media);
            return {
                media_id: insertedMedia[0].media_id,
                type: item.type,
            };
        }));
        await this.usersService.updateUser(user.id, {
            verified_account_at: new Date(),
        });
        data.user_id = user.id;
        return await this.userAccountVerificationService.create(data, media);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadFieldsInterceptor)({
        fields: [
            { name: 'face_photo', maxCount: 1 },
            { name: 'id_card_photo', maxCount: 1 },
        ],
        dirPath: media_1.MEDIA_USER_ACCOUNT_VERIFICATION_DIR,
        prefixName: 'user-account-verification',
    })),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Object, create_user_account_verification_dto_1.CreateUserAccountVerificationDto]),
    __metadata("design:returntype", Promise)
], UserAccountVerificationController.prototype, "create", null);
UserAccountVerificationController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('account-verification'),
    __metadata("design:paramtypes", [user_account_verification_service_1.UserAccountVerificationService,
        media_service_1.MediaService,
        users_service_1.UsersService])
], UserAccountVerificationController);
exports.UserAccountVerificationController = UserAccountVerificationController;
//# sourceMappingURL=user-account-verification.controller.js.map
//# debugId=57c97060-391b-58fb-8d03-b0dce3d28745
