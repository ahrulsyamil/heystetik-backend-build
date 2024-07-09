"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e93002c1-5dae-5534-8e71-13422c155e91")}catch(e){}}();

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
exports.PageOptionsTransactionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const page_options_dto_1 = require("../../decorators/page-options.dto");
const enum_1 = require("../../globals/constant/enum");
const is_optional_enum_validator_1 = require("../../globals/validator/is-optional-enum.validator");
class PageOptionsTransactionDto extends page_options_dto_1.PageOptionsDto {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], PageOptionsTransactionDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayUnique)(),
    (0, is_optional_enum_validator_1.IsOptionalEnum)(enum_1.TransactionStatus, { each: true }),
    __metadata("design:type", Array)
], PageOptionsTransactionDto.prototype, "transaction_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayUnique)(),
    (0, is_optional_enum_validator_1.IsOptionalEnum)(enum_1.TransactionType, { each: true }),
    __metadata("design:type", Array)
], PageOptionsTransactionDto.prototype, "transaction_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.end_date),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], PageOptionsTransactionDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateIf)((obj) => obj.start_date),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], PageOptionsTransactionDto.prototype, "end_date", void 0);
exports.PageOptionsTransactionDto = PageOptionsTransactionDto;
//# sourceMappingURL=page-options-transaction.dto.js.map
//# debugId=e93002c1-5dae-5534-8e71-13422c155e91
