import { ConfigService } from '@nestjs/config';
import Strategy from 'passport-headerapikey';
declare const HeaderWebhookAuthKeyStrategy_base: new (...args: any[]) => Strategy;
export declare class HeaderWebhookAuthKeyStrategy extends HeaderWebhookAuthKeyStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate: (authKey: string, done: (error: Error, data: any) => void) => void;
}
export {};
