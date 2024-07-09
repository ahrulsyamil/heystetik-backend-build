"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e0284107-f977-5ab0-b1ad-baadbe58787a")}catch(e){}}();

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
exports.QueueWhatsappCloudProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const whatsapp_cloud_service_1 = require("../whatsapp-cloud/whatsapp-cloud.service");
let QueueWhatsappCloudProcessor = class QueueWhatsappCloudProcessor {
    constructor(whatsappCloudService) {
        this.whatsappCloudService = whatsappCloudService;
    }
    async sendVerificationCode(job) {
        const { data } = job;
        await this.whatsappCloudService.sendVerificationCode(data.mobileNumber, data.code);
    }
};
__decorate([
    (0, bull_1.Process)('sendVerificationCode'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueWhatsappCloudProcessor.prototype, "sendVerificationCode", null);
QueueWhatsappCloudProcessor = __decorate([
    (0, bull_1.Processor)('queueWhatsappCloud'),
    __metadata("design:paramtypes", [whatsapp_cloud_service_1.WhatsappCloudService])
], QueueWhatsappCloudProcessor);
exports.QueueWhatsappCloudProcessor = QueueWhatsappCloudProcessor;
//# sourceMappingURL=queue-whatsapp-cloud.process.js.map
//# debugId=e0284107-f977-5ab0-b1ad-baadbe58787a
