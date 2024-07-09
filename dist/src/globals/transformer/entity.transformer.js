"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a089ba97-e1d9-5a9d-8915-f3b4c448f20f")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.transformEntity = void 0;
const class_transformer_1 = require("class-transformer");
const transformEntity = (cls, plain, options) => (0, class_transformer_1.plainToInstance)(cls, plain, { excludeExtraneousValues: true, ...options });
exports.transformEntity = transformEntity;
//# sourceMappingURL=entity.transformer.js.map
//# debugId=a089ba97-e1d9-5a9d-8915-f3b4c448f20f
