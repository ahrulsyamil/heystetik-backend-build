"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5836c33f-5634-5425-98c8-278ae35292a9")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const useragent = require("express-useragent");
const fs = require("fs");
const path = require("path");
const app_service_1 = require("./app.service");
const auth_guard_1 = require("./auth/auth.guard");
const user_agent_decorator_1 = require("./decorators/user-agent.decorator");
const enum_1 = require("./globals/constant/enum");
class TestTimeoutDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], TestTimeoutDto.prototype, "timeout", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    __metadata("design:type", Number)
], TestTimeoutDto.prototype, "process_time", void 0);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getItems(userAgent, request) {
        return {
            request: request,
            'user-agent-info': userAgent,
        };
    }
    deepLink(userAgent, url, res) {
        if (!url)
            throw new common_1.BadRequestException('Query url not set');
        if (!userAgent.isMobile) {
            res.send('This page is only accessible on a mobile device');
        }
        else {
            res.redirect(302, url);
        }
    }
    addItem(item) {
        return this.appService.addItem(item.name);
    }
    seeUploadedImage(image, res) {
        return res.sendFile(image, { root: './uploads/images' });
    }
    async seeUploadedFile(filepath, res) {
        if (fs.existsSync(path.join('./uploads', filepath))) {
            return res.sendFile(filepath, { root: './uploads' });
        }
        else {
            throw new common_1.NotFoundException('File not found');
        }
    }
    async testTimeout(query) {
        if (isNaN(query.process_time) ||
            isNaN(query.timeout) ||
            query.process_time <= 0 ||
            query.timeout <= 0) {
            throw new common_1.BadRequestException('Invalid process_time or timeout parameter');
        }
        return new Promise((resolve, reject) => {
            const requestTimeout = setTimeout(() => {
                reject(new common_1.GatewayTimeoutException('Gateway timeout has occurred'));
            }, query.timeout);
            setTimeout(() => {
                clearTimeout(requestTimeout);
                resolve({ message: 'Request completed successfully' });
            }, query.process_time);
        });
    }
    async appSetting() {
        return enum_1.AppSetting;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_agent_decorator_1.UserAgent)()),
    __param(1, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof useragent !== "undefined" && useragent.Details) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getItems", null);
__decorate([
    (0, common_1.Get)('deeplink'),
    __param(0, (0, user_agent_decorator_1.UserAgent)()),
    __param(1, (0, common_1.Query)('url')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof useragent !== "undefined" && useragent.Details) === "function" ? _b : Object, String, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deepLink", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "addItem", null);
__decorate([
    (0, common_1.Get)('/images/:imgpath'),
    __param(0, (0, common_1.Param)('imgpath')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "seeUploadedImage", null);
__decorate([
    (0, common_1.Get)('/files/*'),
    __param(0, (0, common_1.Param)('0')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "seeUploadedFile", null);
__decorate([
    (0, common_1.Get)('test-timeout'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TestTimeoutDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "testTimeout", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('app-setting'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "appSetting", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map
//# debugId=5836c33f-5634-5425-98c8-278ae35292a9
