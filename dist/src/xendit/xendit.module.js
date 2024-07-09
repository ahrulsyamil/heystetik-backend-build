"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f64af4d3-bffd-536e-9da5-9ba8038794dd")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XenditModule = void 0;
const common_1 = require("@nestjs/common");
const xendit_service_1 = require("./xendit.service");
const xendit_controller_1 = require("./xendit.controller");
let XenditModule = class XenditModule {
};
XenditModule = __decorate([
    (0, common_1.Module)({
        providers: [xendit_service_1.XenditService],
        controllers: [xendit_controller_1.XenditController],
    })
], XenditModule);
exports.XenditModule = XenditModule;
//# sourceMappingURL=xendit.module.js.map
//# debugId=f64af4d3-bffd-536e-9da5-9ba8038794dd
