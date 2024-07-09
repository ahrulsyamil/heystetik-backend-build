"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="464c212a-88d1-5d2a-ac78-617817bac024")}catch(e){}}();

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
exports.UpdateDoctorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const bcrypt_1 = require("bcrypt");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_doctor_dto_1 = require("./create-doctor.dto");
class UpdateDoctorDto extends (0, mapped_types_1.PartialType)(create_doctor_dto_1.CreateDoctorDto) {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value == 'true' ? true : value == 'false' ? false : value),
    (0, class_validator_1.ValidateIf)((obj) => obj.is_active),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateDoctorDto.prototype, "is_active", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => (0, bcrypt_1.hashSync)(value, 12)),
    __metadata("design:type", String)
], UpdateDoctorDto.prototype, "password", void 0);
exports.UpdateDoctorDto = UpdateDoctorDto;
//# sourceMappingURL=update-doctor.dto.js.map
//# debugId=464c212a-88d1-5d2a-ac78-617817bac024
