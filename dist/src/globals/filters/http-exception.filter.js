"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="29717e6f-cf29-5b08-b78c-7e95f7a9b2da")}catch(e){}}();

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
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger();
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const exceptFilter = ['/shipment-gosend/webhook/booking-status'];
        if (exceptFilter.includes(request.originalUrl)) {
            return response.status(status).json();
        }
        let error;
        let message = 'Internal server error';
        if (exception instanceof Error) {
            error = exception.message;
        }
        if (exception instanceof common_1.HttpException) {
            message = exception.message;
            error = undefined;
        }
        let errors;
        let data;
        if (status == common_1.HttpStatus.UNPROCESSABLE_ENTITY &&
            exception.getResponse()?.errors) {
            errors = exception.getResponse().errors;
        }
        else {
            data = exception?.response;
            if (data) {
                delete data.message;
                delete data.error;
                delete data.statusCode;
                if (Object.keys(data).length === 0)
                    data = undefined;
            }
        }
        this.configService.get('app').environment != 'development'
            ? (error = undefined)
            : this.logger.error(message, exception?.stack);
        response.status(status).json({
            success: false,
            message,
            data,
            errors,
            error,
        });
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map
//# debugId=29717e6f-cf29-5b08-b78c-7e95f7a9b2da
