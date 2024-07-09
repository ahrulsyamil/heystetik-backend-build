"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3c15efca-61e4-5238-8dbb-fb5a5f63f85b")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.Sample = void 0;
const common_1 = require("@nestjs/common");
const Sample = (...data) => (0, common_1.SetMetadata)('sample', data);
exports.Sample = Sample;
//# sourceMappingURL=sample.decorator.js.map
//# debugId=3c15efca-61e4-5238-8dbb-fb5a5f63f85b
