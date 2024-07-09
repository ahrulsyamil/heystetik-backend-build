"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="36b36f5f-6c1d-59c2-8034-a14a90f7f993")}catch(e){}}();

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
exports.QontakController = void 0;
const common_1 = require("@nestjs/common");
const qontak_service_1 = require("./qontak.service");
const auth_guard_1 = require("../auth/auth.guard");
let QontakController = class QontakController {
    constructor(qontakService) {
        this.qontakService = qontakService;
    }
    async authToken() {
        return await this.qontakService.authToken();
    }
    async integrationChannel() {
        return await this.qontakService.integrationChannel();
    }
};
__decorate([
    (0, common_1.Post)('auth/token'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QontakController.prototype, "authToken", null);
__decorate([
    (0, common_1.Get)('integration-channel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QontakController.prototype, "integrationChannel", null);
QontakController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('qontak'),
    __metadata("design:paramtypes", [qontak_service_1.QontakService])
], QontakController);
exports.QontakController = QontakController;
//# sourceMappingURL=qontak.controller.js.map
//# debugId=36b36f5f-6c1d-59c2-8034-a14a90f7f993
