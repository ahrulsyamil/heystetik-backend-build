import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class TimeoutInterceptor implements NestInterceptor {
    private readonly timeoutInMillis;
    constructor(timeoutInMillis: number);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
