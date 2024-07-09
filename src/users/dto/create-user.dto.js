"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="35bb7e6b-2c02-5ce4-bbb2-0c9aec6e98ff")}catch(e){}}();

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
exports.CreateUserDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const boolean_1 = require("../../globals/helpers/boolean");
const string_1 = require("../../globals/helpers/string");
const is_custom_rule_validator_1 = require("../../globals/validator/is-custom-rule.validator");
const is_exists_validator_1 = require("../../globals/validator/is-exists.validator");
const no_whitespace_validator_1 = require("../../globals/validator/no-whitespace.validator");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, no_whitespace_validator_1.NoWhitespace)({ message: 'Username should not contain whitespace' }),
    (0, class_transformer_1.Transform)(({ value }) => (value ? `${value}`.toLowerCase() : value)),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "department", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, is_custom_rule_validator_1.IsCustomRule)((value) => (0, class_validator_1.isPhoneNumber)(value, 'ID'), 'is not valid phone number'),
    (0, class_transformer_1.Transform)(({ value }) => (0, string_1.transformPhoneNumber)(value)),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => (0, boolean_1.convertToBoolean)(value)),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "is_active", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.Validate)(is_exists_validator_1.IsExist, ['roles', 'id']),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "role_id", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map
//# debugId=35bb7e6b-2c02-5ce4-bbb2-0c9aec6e98ff
