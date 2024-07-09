"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bfc8d6ff-9a7a-5447-a8d3-69c737eab01f")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentryInterceptor = void 0;
const common_1 = require("@nestjs/common");
const node_1 = require("@sentry/node");
const operators_1 = require("rxjs/operators");
let SentryInterceptor = class SentryInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.catchError)((error) => {
            if (error instanceof common_1.InternalServerErrorException) {
                (0, node_1.captureException)(error);
            }
            throw error;
        }));
    }
};
SentryInterceptor = __decorate([
    (0, common_1.Injectable)()
], SentryInterceptor);
exports.SentryInterceptor = SentryInterceptor;
//# sourceMappingURL=sentry.interceptor.js.map
//# debugId=bfc8d6ff-9a7a-5447-a8d3-69c737eab01f
