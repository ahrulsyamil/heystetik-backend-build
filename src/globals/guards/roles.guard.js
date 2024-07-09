"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bcf1fe30-9b89-5b20-b181-52fa82b2dd01")}catch(e){}}();

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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const enum_1 = require("../constant/enum");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const skipAuth = this.reflector.get('skipGuard', context.getHandler());
        if (skipAuth) {
            return true;
        }
        const roles = this.reflector.getAllAndOverride('roles', [
            context.getClass(),
            context.getHandler(),
        ]);
        if (!roles.length) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        if (!roles.includes(request.user?.roleId)) {
            const roleNames = roles.map((role) => enum_1.Role[role]).join(', ');
            throw new common_1.ForbiddenException(`Forbidden resource. ${roleNames} only`);
        }
        return true;
    }
};
RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=roles.guard.js.map
//# debugId=bcf1fe30-9b89-5b20-b181-52fa82b2dd01
