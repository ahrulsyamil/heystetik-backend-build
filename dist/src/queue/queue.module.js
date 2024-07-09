"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a165db06-62fe-5d2c-adfe-127a97440faa")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueModule = void 0;
const bullAdapter_1 = require("@bull-board/api/bullAdapter");
const nestjs_1 = require("@bull-board/nestjs");
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
let QueueModule = class QueueModule {
};
QueueModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            bull_1.BullModule.registerQueueAsync({
                configKey: 'queue-config',
                name: 'queueEmail',
            }, {
                configKey: 'queue-config',
                name: 'queueFcm',
            }, {
                configKey: 'queue-config',
                name: 'queueTelegram',
            }, {
                configKey: 'queue-config',
                name: 'queueWhatsappCloud',
            }, {
                configKey: 'queue-config',
                name: 'queueVerification',
            }, {
                configKey: 'queue-config',
                name: 'queueTaskSchedule',
            }),
            nestjs_1.BullBoardModule.forFeature({
                name: 'queueTaskSchedule',
                adapter: bullAdapter_1.BullAdapter,
            }),
        ],
        exports: [bull_1.BullModule],
    })
], QueueModule);
exports.QueueModule = QueueModule;
//# sourceMappingURL=queue.module.js.map
//# debugId=a165db06-62fe-5d2c-adfe-127a97440faa
