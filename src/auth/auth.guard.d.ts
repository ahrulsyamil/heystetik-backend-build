import { CanActivate, ExecutionContext } from '@nestjs/common';
import { UserService } from './user/user.service';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
export declare class AuthGuard implements CanActivate {
    private readonly user;
    private readonly configService;
    private readonly reflector;
    constructor(user: UserService, configService: ConfigService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
