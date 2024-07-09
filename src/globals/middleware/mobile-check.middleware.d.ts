import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class MobileCheckMiddleware implements NestMiddleware {
    use(req: RequestWithMobileFlag, res: Response, next: NextFunction): void;
}
interface RequestWithMobileFlag extends Request {
    is_mobile: boolean;
}
export {};
