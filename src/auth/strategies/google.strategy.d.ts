import { ConfigService } from '@nestjs/config';
import { Profile, VerifyCallback } from 'passport-google-oauth20';
import { MediaService } from 'src/media/media.service';
import { UsersService } from 'src/users/users.service';
declare const GoogleAuthStrategy_base: new (...args: any[]) => any;
export declare class GoogleAuthStrategy extends GoogleAuthStrategy_base {
    private readonly userService;
    private readonly configService;
    private readonly mediaService;
    constructor(userService: UsersService, configService: ConfigService, mediaService: MediaService);
    validate(_accessToken: string, _refreshToken: string, profile: Profile, done: VerifyCallback): Promise<any>;
}
export {};
