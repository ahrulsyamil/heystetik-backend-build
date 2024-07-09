import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
export declare class JwtHelper {
    private configService;
    constructor(configService: ConfigService);
    decode(token: string): jwt.JwtPayload;
}
