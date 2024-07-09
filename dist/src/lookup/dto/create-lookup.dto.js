"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="88f16bb4-4d8e-5a40-8fbd-669cf2feaf31")}catch(e){}}();

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
exports.CreateLookupDto = void 0;
const class_validator_1 = require("class-validator");
const enum_1 = require("../../globals/constant/enum");
class CreateLookupDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLookupDto.prototype, "value", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enum_1.LookupCategory, { each: true }),
    __metadata("design:type", String)
], CreateLookupDto.prototype, "category", void 0);
exports.CreateLookupDto = CreateLookupDto;
//# sourceMappingURL=create-lookup.dto.js.map
//# debugId=88f16bb4-4d8e-5a40-8fbd-669cf2feaf31
