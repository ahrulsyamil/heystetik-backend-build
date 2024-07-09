"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9fe93d71-9994-5b9d-9ac6-de30ae4a24cc")}catch(e){}}();

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
exports.GetDestinationDto = void 0;
const class_validator_1 = require("class-validator");
const is_exists_validator_1 = require("../../globals/validator/is-exists.validator");
class GetDestinationDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['sicepat_destination', 'province']),
    __metadata("design:type", String)
], GetDestinationDto.prototype, "province", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['sicepat_destination', 'city']),
    __metadata("design:type", String)
], GetDestinationDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['sicepat_destination', 'subdistrict']),
    __metadata("design:type", String)
], GetDestinationDto.prototype, "subdistrict", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['sicepat_destination', 'zip_code']),
    __metadata("design:type", String)
], GetDestinationDto.prototype, "zip_code", void 0);
exports.GetDestinationDto = GetDestinationDto;
//# sourceMappingURL=get-destination.dto.js.map
//# debugId=9fe93d71-9994-5b9d-9ac6-de30ae4a24cc
