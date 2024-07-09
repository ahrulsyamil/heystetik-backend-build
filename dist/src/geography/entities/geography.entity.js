"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8cec5d2f-de9f-5aca-8bed-6e7a069f38ab")}catch(e){}}();

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
exports.KotaKabupatenEntuty = exports.ProvinceEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class ProvinceEntity {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProvinceEntity.prototype, "name", void 0);
exports.ProvinceEntity = ProvinceEntity;
class KotaKabupatenEntuty {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], KotaKabupatenEntuty.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], KotaKabupatenEntuty.prototype, "provinces_id", void 0);
exports.KotaKabupatenEntuty = KotaKabupatenEntuty;
//# sourceMappingURL=geography.entity.js.map
//# debugId=8cec5d2f-de9f-5aca-8bed-6e7a069f38ab
