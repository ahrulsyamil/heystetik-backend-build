"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e2ea21cd-76f9-5ae5-acdb-0a5a772a7ab9")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramMockOtpModule = void 0;
const common_1 = require("@nestjs/common");
const telegram_mock_otp_service_1 = require("./telegram-mock-otp.service");
let TelegramMockOtpModule = class TelegramMockOtpModule {
};
TelegramMockOtpModule = __decorate([
    (0, common_1.Module)({
        providers: [telegram_mock_otp_service_1.TelegramMockOtpService],
        exports: [telegram_mock_otp_service_1.TelegramMockOtpService],
    })
], TelegramMockOtpModule);
exports.TelegramMockOtpModule = TelegramMockOtpModule;
//# sourceMappingURL=telegram-mock-otp.module.js.map
//# debugId=e2ea21cd-76f9-5ae5-acdb-0a5a772a7ab9
