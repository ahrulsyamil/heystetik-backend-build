"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="531a479a-5cb3-5bfd-90bb-01e8bd42c6b7")}catch(e){}}();

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
exports.LookupController = void 0;
const common_1 = require("@nestjs/common");
const create_lookup_dto_1 = require("./dto/create-lookup.dto");
const page_options_lookup_dto_1 = require("./dto/page-options-lookup.dto");
const lookup_service_1 = require("./lookup.service");
let LookupController = class LookupController {
    constructor(lookupService) {
        this.lookupService = lookupService;
    }
    async findAll(pageOptionsDto) {
        return this.lookupService.findAll(pageOptionsDto);
    }
    async create(createDto) {
        return this.lookupService.create(createDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_lookup_dto_1.PageOptionsLookupDto]),
    __metadata("design:returntype", Promise)
], LookupController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lookup_dto_1.CreateLookupDto]),
    __metadata("design:returntype", Promise)
], LookupController.prototype, "create", null);
LookupController = __decorate([
    (0, common_1.Controller)('lookup'),
    __metadata("design:paramtypes", [lookup_service_1.LookupService])
], LookupController);
exports.LookupController = LookupController;
//# sourceMappingURL=lookup.controller.js.map
//# debugId=531a479a-5cb3-5bfd-90bb-01e8bd42c6b7
