import { ExecutionContext } from '@nestjs/common';
declare const AppleAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AppleAuthGuard extends AppleAuthGuard_base {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
