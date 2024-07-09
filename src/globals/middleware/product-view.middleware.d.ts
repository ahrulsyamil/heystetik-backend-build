import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import AppRequest from '../interfaces/request.interface';
import { SolutionProductService } from 'src/solution-product/solution-product.service';
import { JwtHelper } from '../helpers/jwt';
export declare class ProductViewMiddleware implements NestMiddleware {
    private readonly solutionProductService;
    private readonly jwtHelper;
    constructor(solutionProductService: SolutionProductService, jwtHelper: JwtHelper);
    use(req: AppRequest, _res: Response, next: NextFunction): Promise<void>;
}
