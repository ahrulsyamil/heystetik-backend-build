"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ac4121f8-f002-5141-93d8-91a804babf09")}catch(e){}}();

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
exports.ChatQuickReplyEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class ChatQuickReplyEntity {
    constructor() {
        this.is_active = true;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ChatQuickReplyEntity.prototype, "doctor_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, nullable: false }),
    __metadata("design:type", String)
], ChatQuickReplyEntity.prototype, "shortcut", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, nullable: false }),
    __metadata("design:type", String)
], ChatQuickReplyEntity.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, nullable: false }),
    __metadata("design:type", Boolean)
], ChatQuickReplyEntity.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ChatQuickReplyEntity.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ChatQuickReplyEntity.prototype, "updated_at", void 0);
exports.ChatQuickReplyEntity = ChatQuickReplyEntity;
//# sourceMappingURL=chat-quick-reply.entity.js.map
//# debugId=ac4121f8-f002-5141-93d8-91a804babf09
