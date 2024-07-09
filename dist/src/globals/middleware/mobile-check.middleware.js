"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="32210a58-1b1f-57d0-8c21-6cd556bfd796")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCheckMiddleware = void 0;
const common_1 = require("@nestjs/common");
let MobileCheckMiddleware = class MobileCheckMiddleware {
    use(req, res, next) {
        const userAgent = req.header('User-Agent') || '';
        const isMobile = /Mobile|Android|iPhone|iPad|iPod|Windows Phone/i.test(userAgent);
        req.is_mobile = isMobile;
        next();
    }
};
MobileCheckMiddleware = __decorate([
    (0, common_1.Injectable)()
], MobileCheckMiddleware);
exports.MobileCheckMiddleware = MobileCheckMiddleware;
//# sourceMappingURL=mobile-check.middleware.js.map
//# debugId=32210a58-1b1f-57d0-8c21-6cd556bfd796
