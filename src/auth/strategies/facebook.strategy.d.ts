import { ConfigService } from '@nestjs/config';
import { Profile, VerifyCallback } from 'passport-facebook';
import { MediaService } from 'src/media/media.service';
import { UsersService } from 'src/users/users.service';
declare const FacebookAuthStrategy_base: new (...args: any[]) => any;
export declare class FacebookAuthStrategy extends FacebookAuthStrategy_base {
    private readonly userService;
    private readonly configService;
    private readonly mediaService;
    constructor(userService: UsersService, configService: ConfigService, mediaService: MediaService);
    validate(_accessToken: string, _refreshToken: string, profile: Profile, done: VerifyCallback): Promise<any>;
}
export {};
