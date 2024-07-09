"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0da5f88b-0655-5173-8f17-eb124fa61ffb")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_product_dto_1 = require("./create-product.dto");
class UpdateProductDto extends (0, mapped_types_1.PartialType)(create_product_dto_1.CreateProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update-product.dto..js.map
//# debugId=0da5f88b-0655-5173-8f17-eb124fa61ffb
