"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9dcac3c1-e754-5fa1-b638-634f0a86c611")}catch(e){}}();

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
exports.InterestBeautyProfileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_interest_beauty_profile_dto_1 = require("./dto/create-interest_beauty_profile.dto");
const update_interest_beauty_profile_dto_1 = require("./dto/update-interest_beauty_profile.dto");
const interest_beauty_profile_entity_1 = require("./entities/interest_beauty_profile.entity");
const interest_beauty_profile_service_1 = require("./interest_beauty_profile.service");
let InterestBeautyProfileController = class InterestBeautyProfileController {
    constructor(interestBeautyProfileService) {
        this.interestBeautyProfileService = interestBeautyProfileService;
    }
    create(createInterestBeautyProfileDto) {
        return this.interestBeautyProfileService.create(createInterestBeautyProfileDto);
    }
    findAll() {
        return this.interestBeautyProfileService.findAll();
    }
    findOne(id) {
        return this.interestBeautyProfileService.findOne(+id);
    }
    update(id, updateInterestBeautyProfileDto) {
        return this.interestBeautyProfileService.update(+id, updateInterestBeautyProfileDto);
    }
    remove(id) {
        return this.interestBeautyProfileService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: interest_beauty_profile_entity_1.InterestBeautyProfileEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_interest_beauty_profile_dto_1.CreateInterestBeautyProfileDto]),
    __metadata("design:returntype", void 0)
], InterestBeautyProfileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: interest_beauty_profile_entity_1.InterestBeautyProfileEntity, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InterestBeautyProfileController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_beauty_profile_entity_1.InterestBeautyProfileEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestBeautyProfileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_beauty_profile_entity_1.InterestBeautyProfileEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_interest_beauty_profile_dto_1.UpdateInterestBeautyProfileDto]),
    __metadata("design:returntype", void 0)
], InterestBeautyProfileController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: interest_beauty_profile_entity_1.InterestBeautyProfileEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InterestBeautyProfileController.prototype, "remove", null);
InterestBeautyProfileController = __decorate([
    (0, common_1.Controller)('interest_beauty_profile'),
    (0, swagger_1.ApiTags)('Interest Beauty Profile'),
    __metadata("design:paramtypes", [interest_beauty_profile_service_1.InterestBeautyProfileService])
], InterestBeautyProfileController);
exports.InterestBeautyProfileController = InterestBeautyProfileController;
//# sourceMappingURL=interest_beauty_profile.controller.js.map
//# debugId=9dcac3c1-e754-5fa1-b638-634f0a86c611
