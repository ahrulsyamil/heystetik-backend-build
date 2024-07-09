"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1039b2af-0d04-56ce-a622-6087a5e486ce")}catch(e){}}();

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
exports.StoreNotificationUserActivityDto = exports.NotificationUserActivityDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enum_1 = require("../../globals/constant/enum");
const boolean_1 = require("../../globals/helpers/boolean");
class NotificationUserActivityDto {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], NotificationUserActivityDto.prototype, "user_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], NotificationUserActivityDto.prototype, "follower_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(enum_1.NotificationUserActivityType),
    __metadata("design:type", String)
], NotificationUserActivityDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => (0, boolean_1.convertToBoolean)(value)),
    __metadata("design:type", Boolean)
], NotificationUserActivityDto.prototype, "is_enabled", void 0);
exports.NotificationUserActivityDto = NotificationUserActivityDto;
class StoreNotificationUserActivityDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_transformer_1.Type)(() => NotificationUserActivityDto),
    __metadata("design:type", Array)
], StoreNotificationUserActivityDto.prototype, "data", void 0);
exports.StoreNotificationUserActivityDto = StoreNotificationUserActivityDto;
//# sourceMappingURL=store-notification-user-activity.dto.js.map
//# debugId=1039b2af-0d04-56ce-a622-6087a5e486ce
