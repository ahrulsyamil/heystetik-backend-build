"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a5dab0a6-fa70-5482-a434-50fea14dc737")}catch(e){}}();

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
exports.ResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const core_1 = require("@nestjs/core");
let ResponseInterceptor = class ResponseInterceptor {
    constructor(reflector) {
        this.reflector = reflector;
    }
    intercept(context, next) {
        const hasRenderDecorator = this.reflector.get('render', context.getHandler());
        if (hasRenderDecorator) {
            return next.handle();
        }
        const responseMessage = this.reflector.get('message', context.getHandler()) ?? 'Success';
        return next.handle().pipe((0, operators_1.map)((data) => {
            const customResponse = {
                success: true,
                message: responseMessage,
                data,
            };
            return customResponse;
        }));
    }
};
ResponseInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], ResponseInterceptor);
exports.ResponseInterceptor = ResponseInterceptor;
//# sourceMappingURL=response.interceptor.js.map
//# debugId=a5dab0a6-fa70-5482-a434-50fea14dc737
