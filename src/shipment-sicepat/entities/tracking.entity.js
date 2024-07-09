"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6fad03fe-ce8c-56b9-8356-caf9b47951c2")}catch(e){}}();

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
exports.TrackingEntity = void 0;
const class_transformer_1 = require("class-transformer");
const sicepat_entity_1 = require("./sicepat.entity");
const entity_transformer_1 = require("../../globals/transformer/entity.transformer");
class LastStatus {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LastStatus.prototype, "date_time", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LastStatus.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LastStatus.prototype, "receiver_name", void 0);
class TrackHistory {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TrackHistory.prototype, "date_time", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TrackHistory.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TrackHistory.prototype, "city", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TrackHistory.prototype, "receiver_name", void 0);
class Track {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "waybill_number", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "kodeasal", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "kodetujuan", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "service", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], Track.prototype, "weight", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "partner", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "sender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "sender_address", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "receiver_address", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "receiver_name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], Track.prototype, "realprice", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "POD_receiver", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "POD_receiver_time", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "send_date", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        return (0, entity_transformer_1.transformEntity)(TrackHistory, value);
    }),
    __metadata("design:type", Array)
], Track.prototype, "track_history", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ value }) => (0, entity_transformer_1.transformEntity)(LastStatus, value)),
    __metadata("design:type", LastStatus)
], Track.prototype, "last_status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "perwakilan", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "pop_sigesit_img_path", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "pod_sigesit_img_path", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "pod_sign_img_path", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Track.prototype, "pod_img_path", void 0);
class TrackingEntity {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ value }) => new sicepat_entity_1.SicepatEntity({
        ...value,
    })),
    __metadata("design:type", sicepat_entity_1.SicepatEntity)
], TrackingEntity.prototype, "sicepat", void 0);
exports.TrackingEntity = TrackingEntity;
//# sourceMappingURL=tracking.entity.js.map
//# debugId=6fad03fe-ce8c-56b9-8356-caf9b47951c2
