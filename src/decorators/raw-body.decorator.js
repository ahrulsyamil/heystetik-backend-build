"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="aa1f3d89-c04a-588f-ba22-4da7396bff6d")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.RawBody = void 0;
const common_1 = require("@nestjs/common");
exports.RawBody = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.body;
});
//# sourceMappingURL=raw-body.decorator.js.map
//# debugId=aa1f3d89-c04a-588f-ba22-4da7396bff6d
