"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="eb1ee69d-6aae-58a6-ace2-34fb14a32eaa")}catch(e){}}();

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
exports.UpdateSlideshowBannerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_transformer_1 = require("class-transformer");
const create_slideshow_banner_dto_1 = require("./create-slideshow_banner.dto");
class UpdateSlideshowBannerDto extends (0, mapped_types_1.PartialType)(create_slideshow_banner_dto_1.CreateSlideshowBannerDto) {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], UpdateSlideshowBannerDto.prototype, "id", void 0);
exports.UpdateSlideshowBannerDto = UpdateSlideshowBannerDto;
//# sourceMappingURL=update-slideshow_banner.dto.js.map
//# debugId=eb1ee69d-6aae-58a6-ace2-34fb14a32eaa
