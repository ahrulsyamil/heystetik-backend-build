"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ea115266-0644-5558-8a1b-48e88c2a566d")}catch(e){}}();

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
exports.ZipCodeEntity = void 0;
const class_transformer_1 = require("class-transformer");
class ZipCodeEntity {
    constructor(partial) {
        Object.assign(this, partial);
    }
    get full_zip_code() {
        return `${this.village} - ${this.zip_code}`;
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], ZipCodeEntity.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ZipCodeEntity.prototype, "province", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ZipCodeEntity.prototype, "city", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ZipCodeEntity.prototype, "subdistrict", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ZipCodeEntity.prototype, "village", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ZipCodeEntity.prototype, "zip_code", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], ZipCodeEntity.prototype, "full_zip_code", null);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], ZipCodeEntity.prototype, "destination_code", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], ZipCodeEntity.prototype, "created_by", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], ZipCodeEntity.prototype, "updated_by", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], ZipCodeEntity.prototype, "created_at", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], ZipCodeEntity.prototype, "updated_at", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], ZipCodeEntity.prototype, "deleted_at", void 0);
exports.ZipCodeEntity = ZipCodeEntity;
//# sourceMappingURL=zip-code.entity.js.map
//# debugId=ea115266-0644-5558-8a1b-48e88c2a566d
