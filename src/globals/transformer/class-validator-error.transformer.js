"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e3314756-bd07-53d8-8155-d99d1ee6c4a5")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassValidatorErrorTransformer = void 0;
const ClassValidatorErrorTransformer = (errors) => {
    const errs = {};
    errors.forEach((err) => {
        errs[err.property] = errs[err.property] || [];
        const messages = [];
        for (const key in err.constraints) {
            messages.push(err.constraints[key]);
        }
        errs[err.property] = messages;
    });
    return errs;
};
exports.ClassValidatorErrorTransformer = ClassValidatorErrorTransformer;
//# sourceMappingURL=class-validator-error.transformer.js.map
//# debugId=e3314756-bd07-53d8-8155-d99d1ee6c4a5
