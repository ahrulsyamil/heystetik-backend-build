import { ConfigService } from '@nestjs/config';
import { Profile } from 'passport-apple';
declare const AppleStrategy_base: new (...args: any[]) => import("passport-apple");
export declare class AppleStrategy extends AppleStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(_accessToken: string, _refreshToken: string, profile: Profile): Promise<{
        emailAddress: any;
        firstName: any;
        lastName: any;
    }>;
}
export {};
