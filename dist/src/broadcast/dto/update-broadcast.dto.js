"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f8180781-9f78-55a8-85d4-644c18a8bbc0")}catch(e){}}();

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
exports.UpdateBroadcastDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_broadcast_dto_1 = require("./create-broadcast.dto");
const enum_1 = require("../../globals/constant/enum");
const class_validator_1 = require("class-validator");
class UpdateBroadcastDto extends (0, mapped_types_1.PartialType)(create_broadcast_dto_1.CreateBroadcastDto) {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enum_1.BroadcastStatus),
    __metadata("design:type", String)
], UpdateBroadcastDto.prototype, "status", void 0);
exports.UpdateBroadcastDto = UpdateBroadcastDto;
//# sourceMappingURL=update-broadcast.dto.js.map
//# debugId=f8180781-9f78-55a8-85d4-644c18a8bbc0
