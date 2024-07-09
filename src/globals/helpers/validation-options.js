"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fa8b465a-19b4-57a1-a259-a8712964433f")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatValidationError = exports.formattingError = void 0;
const common_1 = require("@nestjs/common");
function formattingError(errors) {
    const formattedErrors = {};
    errors.forEach((error) => {
        const { property, constraints, children } = error;
        if (children && children.length > 0) {
            formattedErrors[property] = formattingError(children);
        }
        else {
            formattedErrors[property] = Object.values(constraints);
        }
    });
    return formattedErrors;
}
exports.formattingError = formattingError;
function formatValidationError(errors) {
    return new common_1.UnprocessableEntityException({
        success: false,
        message: 'Validation error',
        errors: formattingError(errors),
    });
}
exports.formatValidationError = formatValidationError;
//# sourceMappingURL=validation-options.js.map
//# debugId=fa8b465a-19b4-57a1-a259-a8712964433f
