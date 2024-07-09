"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="022e2236-6484-568d-9131-5caec1dbeea0")}catch(e){}}();

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
exports.JwtHelper = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt = require("jsonwebtoken");
let JwtHelper = class JwtHelper {
    constructor(configService) {
        this.configService = configService;
    }
    decode(token) {
        try {
            const isValid = jwt.verify(token, this.configService.get('jwt').secret);
            if (!isValid)
                return null;
            const decodeToken = jwt.decode(token, { json: true });
            if (!decodeToken.sub)
                return null;
            return decodeToken;
        }
        catch {
            return null;
        }
    }
};
JwtHelper = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], JwtHelper);
exports.JwtHelper = JwtHelper;
//# sourceMappingURL=jwt.js.map
//# debugId=022e2236-6484-568d-9131-5caec1dbeea0
