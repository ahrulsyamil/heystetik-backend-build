"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="95d8c9f4-a6d9-5449-86c8-59eb9ca7d7dc")}catch(e){}}();

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
exports.ConcernController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../decorators/roles.decorator");
const enum_1 = require("../globals/constant/enum");
const concern_service_1 = require("./concern.service");
const page_options_concern_dto_1 = require("./dto/page-options-concern.dto");
let ConcernController = class ConcernController {
    constructor(concernService) {
        this.concernService = concernService;
    }
    async findAll(pageOptionsDto) {
        const result = await this.concernService.findAll(pageOptionsDto);
        result.data = await Promise.all(result.data.map(async (item) => {
            const find = await this.concernService.find(item.id);
            return {
                ...find,
            };
        }));
        return result;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_concern_dto_1.PageOptionsConcernDto]),
    __metadata("design:returntype", Promise)
], ConcernController.prototype, "findAll", null);
ConcernController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.Controller)('concern'),
    __metadata("design:paramtypes", [concern_service_1.ConcernService])
], ConcernController);
exports.ConcernController = ConcernController;
//# sourceMappingURL=concern.controller.js.map
//# debugId=95d8c9f4-a6d9-5449-86c8-59eb9ca7d7dc
