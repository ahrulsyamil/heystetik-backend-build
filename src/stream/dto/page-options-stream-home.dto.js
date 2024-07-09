"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="255e6e4c-59a4-5c40-bfeb-5a13362e7994")}catch(e){}}();

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
exports.PageOptionsStreamHomeDto = void 0;
const class_transformer_1 = require("class-transformer");
const page_options_dto_1 = require("../../decorators/page-options.dto");
class PageOptionsStreamHomeDto extends page_options_dto_1.PageOptionsDto {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], PageOptionsStreamHomeDto.prototype, "user_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], PageOptionsStreamHomeDto.prototype, "username", void 0);
exports.PageOptionsStreamHomeDto = PageOptionsStreamHomeDto;
//# sourceMappingURL=page-options-stream-home.dto.js.map
//# debugId=255e6e4c-59a4-5c40-bfeb-5a13362e7994
