import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
export declare class ThrottleInterceptor implements NestInterceptor {
    private readonly configService;
    private redisClient;
    constructor(configService: ConfigService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
