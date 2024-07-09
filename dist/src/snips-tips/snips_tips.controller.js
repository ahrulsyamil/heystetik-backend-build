"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1a982176-c79b-56e7-87e1-ae3b6b0eedce")}catch(e){}}();

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
exports.SnipsTipsController = void 0;
const common_1 = require("@nestjs/common");
const response_message_decorator_1 = require("../decorators/response-message.decorator");
const create_snips_tips_dto_1 = require("./dto/create-snips_tips.dto");
const page_options_snip_tips_dto_1 = require("./dto/page-options-snip-tips.dto");
const update_snips_tips_dto_1 = require("./dto/update-snips_tips.dto");
const snips_tips_service_1 = require("./snips_tips.service");
let SnipsTipsController = class SnipsTipsController {
    constructor(snipsTipsService) {
        this.snipsTipsService = snipsTipsService;
    }
    async create(createSnipsTipsDto) {
        return await this.snipsTipsService.create(createSnipsTipsDto);
    }
    async findAll() {
        return await this.snipsTipsService.findAll();
    }
    async findAllCms(pageOptionsDto) {
        return await this.snipsTipsService.findAllCms(pageOptionsDto);
    }
    async getAllPosition() {
        return await this.snipsTipsService.getAllPosition();
    }
    async findOne(id) {
        const find = await this.snipsTipsService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async update(id, updateSnipsTipsDto) {
        const find = await this.snipsTipsService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        updateSnipsTipsDto.id = +id;
        return await this.snipsTipsService.update(+id, {
            ...updateSnipsTipsDto,
        });
    }
    async remove(id) {
        const find = await this.snipsTipsService.findOne(+id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        await this.snipsTipsService.delete(+id);
        return null;
    }
};
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data created successfully'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_snips_tips_dto_1.CreateSnipsTipsDto]),
    __metadata("design:returntype", Promise)
], SnipsTipsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SnipsTipsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('cms'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_snip_tips_dto_1.PageOptionsSnipTipsDto]),
    __metadata("design:returntype", Promise)
], SnipsTipsController.prototype, "findAllCms", null);
__decorate([
    (0, common_1.Get)('get-all-position'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SnipsTipsController.prototype, "getAllPosition", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SnipsTipsController.prototype, "findOne", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data updated successfully'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_snips_tips_dto_1.UpdateSnipsTipsDto]),
    __metadata("design:returntype", Promise)
], SnipsTipsController.prototype, "update", null);
__decorate([
    (0, response_message_decorator_1.ResponseMessage)('Data deleted successfully'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SnipsTipsController.prototype, "remove", null);
SnipsTipsController = __decorate([
    (0, common_1.Controller)('snips-tips'),
    __metadata("design:paramtypes", [snips_tips_service_1.SnipsTipsService])
], SnipsTipsController);
exports.SnipsTipsController = SnipsTipsController;
//# sourceMappingURL=snips_tips.controller.js.map
//# debugId=1a982176-c79b-56e7-87e1-ae3b6b0eedce
