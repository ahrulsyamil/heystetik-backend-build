"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ccc99686-b37b-5836-9909-ddd5cd3a6566")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipGuard = void 0;
const common_1 = require("@nestjs/common");
const SkipGuard = () => (0, common_1.SetMetadata)('skipGuard', true);
exports.SkipGuard = SkipGuard;
//# sourceMappingURL=skip-guard.decorator.js.map
//# debugId=ccc99686-b37b-5836-9909-ddd5cd3a6566
