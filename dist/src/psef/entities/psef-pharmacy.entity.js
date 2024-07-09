"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="81409c30-c106-5114-8b47-4f9f2c3bac06")}catch(e){}}();

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
exports.PsefPharmacyEntity = void 0;
const class_transformer_1 = require("class-transformer");
const dayjs = require("dayjs");
const entity_transformer_1 = require("../../globals/transformer/entity.transformer");
const dayNameMap = {
    Sunday: 'Minggu',
    Monday: 'Senin',
    Tuesday: 'Selasa',
    Wednesday: 'Rabu',
    Thursday: 'Kamis',
    Friday: 'Jumat',
    Saturday: 'Sabtu',
};
class PsefPharmacyEntity {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, class_transformer_1.Expose)({ name: 'name' }),
    __metadata("design:type", String)
], PsefPharmacyEntity.prototype, "nama_apotek", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'permit_no' }),
    __metadata("design:type", String)
], PsefPharmacyEntity.prototype, "nomor_izin_apotek", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'address' }),
    __metadata("design:type", String)
], PsefPharmacyEntity.prototype, "lokasi_apotek", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'address_gmaps_url' }),
    __metadata("design:type", String)
], PsefPharmacyEntity.prototype, "url_lokasi_apotek", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'telp' }),
    __metadata("design:type", String)
], PsefPharmacyEntity.prototype, "nomor_telepon", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'pharmacists' }),
    (0, class_transformer_1.Transform)(({ value }) => value[0]?.name),
    __metadata("design:type", String)
], PsefPharmacyEntity.prototype, "nama_apoteker", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'pharmacists' }),
    (0, class_transformer_1.Transform)(({ value }) => value[0]?.sipa_no),
    __metadata("design:type", String)
], PsefPharmacyEntity.prototype, "nomor_sip_apoteker", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'pharmacy_operation_hours' }),
    (0, class_transformer_1.Transform)(({ value }) => (0, entity_transformer_1.transformEntity)(PsefPharmacyOperationHours, value)),
    __metadata("design:type", Array)
], PsefPharmacyEntity.prototype, "jadwal_praktik_apoteker", void 0);
exports.PsefPharmacyEntity = PsefPharmacyEntity;
class PsefPharmacyOperationHours {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, class_transformer_1.Expose)({ name: 'day' }),
    (0, class_transformer_1.Transform)(({ value }) => dayNameMap[value]),
    __metadata("design:type", String)
], PsefPharmacyOperationHours.prototype, "hari", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ obj }) => `${dayjs(obj?.start_time).format('HH.mm')} - ${dayjs(obj?.end_time).format('HH.mm')}`),
    __metadata("design:type", String)
], PsefPharmacyOperationHours.prototype, "jam", void 0);
//# sourceMappingURL=psef-pharmacy.entity.js.map
//# debugId=81409c30-c106-5114-8b47-4f9f2c3bac06
