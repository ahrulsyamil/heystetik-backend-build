"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e8149a60-7423-5e94-bbf1-77f68f4131ea")}catch(e){}}();

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
exports.QueueFcmProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const fcm_service_1 = require("../fcm/fcm.service");
let QueueFcmProcessor = class QueueFcmProcessor {
    constructor(fcmService) {
        this.fcmService = fcmService;
    }
    async sendNotificationToTopic(job) {
        const { data } = job;
        await this.fcmService.sendNotificationToTopic(data);
    }
};
__decorate([
    (0, bull_1.Process)('sendNotificationToTopic'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QueueFcmProcessor.prototype, "sendNotificationToTopic", null);
QueueFcmProcessor = __decorate([
    (0, bull_1.Processor)('queueFcm'),
    __metadata("design:paramtypes", [fcm_service_1.FcmService])
], QueueFcmProcessor);
exports.QueueFcmProcessor = QueueFcmProcessor;
//# sourceMappingURL=queue-fcm.processor.js.map
//# debugId=e8149a60-7423-5e94-bbf1-77f68f4131ea
