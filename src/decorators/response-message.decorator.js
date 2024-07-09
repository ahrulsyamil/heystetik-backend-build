"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1d264969-81eb-56a2-854f-2d40101baec3")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMessage = void 0;
const common_1 = require("@nestjs/common");
const ResponseMessage = (message) => (0, common_1.SetMetadata)('message', message);
exports.ResponseMessage = ResponseMessage;
//# sourceMappingURL=response-message.decorator.js.map
//# debugId=1d264969-81eb-56a2-854f-2d40101baec3
