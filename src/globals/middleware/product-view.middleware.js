"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a6d5d4e4-b137-5462-81b1-489c83c47273")}catch(e){}}();

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
exports.ProductViewMiddleware = void 0;
const common_1 = require("@nestjs/common");
const solution_product_service_1 = require("../../solution-product/solution-product.service");
const jwt_1 = require("../helpers/jwt");
let ProductViewMiddleware = class ProductViewMiddleware {
    constructor(solutionProductService, jwtHelper) {
        this.solutionProductService = solutionProductService;
        this.jwtHelper = jwtHelper;
    }
    async use(req, _res, next) {
        const token = req.headers?.authorization ?? null;
        const bearerToken = token.split(' ')[1];
        const user_id = this.jwtHelper.decode(bearerToken).sub;
        const product_id = req.params.id;
        await this.solutionProductService.createProductView({
            user_id: Number(user_id),
            product_id: Number(product_id),
        });
        next();
    }
};
ProductViewMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [solution_product_service_1.SolutionProductService,
        jwt_1.JwtHelper])
], ProductViewMiddleware);
exports.ProductViewMiddleware = ProductViewMiddleware;
//# sourceMappingURL=product-view.middleware.js.map
//# debugId=a6d5d4e4-b137-5462-81b1-489c83c47273
