"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a9d979c5-7151-5f5e-bfc1-df13f711477b")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAgent = void 0;
const common_1 = require("@nestjs/common");
const useragent = require("express-useragent");
exports.UserAgent = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return useragent.parse(request.headers['user-agent']);
});
//# sourceMappingURL=user-agent.decorator.js.map
//# debugId=a9d979c5-7151-5f5e-bfc1-df13f711477b
