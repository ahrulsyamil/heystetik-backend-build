"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c7a0e404-64ce-5115-8c14-fb78b769f023")}catch(e){}}();

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
exports.XenditController = void 0;
const common_1 = require("@nestjs/common");
const xendit_service_1 = require("./xendit.service");
let XenditController = class XenditController {
    constructor(xenditService) {
        this.xenditService = xenditService;
    }
};
XenditController = __decorate([
    (0, common_1.Controller)('xendit'),
    __metadata("design:paramtypes", [xendit_service_1.XenditService])
], XenditController);
exports.XenditController = XenditController;
//# sourceMappingURL=xendit.controller.js.map
//# debugId=c7a0e404-64ce-5115-8c14-fb78b769f023
