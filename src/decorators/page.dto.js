"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="17fa2ab2-f319-55b5-9c20-d24e1018f9eb")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const page_meta_dto_1 = require("./page-meta.dto");
class PageDto {
    constructor(data, meta) {
        this.data = data;
        this.meta = meta;
    }
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ isArray: true }),
    __metadata("design:type", Array)
], PageDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => page_meta_dto_1.PageMetaDto }),
    __metadata("design:type", page_meta_dto_1.PageMetaDto)
], PageDto.prototype, "meta", void 0);
exports.PageDto = PageDto;
//# sourceMappingURL=page.dto.js.map
//# debugId=17fa2ab2-f319-55b5-9c20-d24e1018f9eb
