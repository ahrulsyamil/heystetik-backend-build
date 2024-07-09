import { OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosHeaders, AxiosInstance, HeadersDefaults, RawAxiosRequestHeaders } from 'axios';
export declare class QontakService implements OnApplicationBootstrap {
    private readonly configService;
    private redisClient;
    private axios;
    onApplicationBootstrap(): Promise<void>;
    constructor(configService: ConfigService);
    createAxios(header?: RawAxiosRequestHeaders | AxiosHeaders | Partial<HeadersDefaults>): Promise<AxiosInstance>;
    setToken(accessToken: string, refreshToken: string): Promise<void>;
    authToken(): Promise<any>;
    authRefreshToken(refreshToken: string): Promise<any>;
    integrationChannel(): Promise<any>;
    sendVerificationCode(name: string, mobileNumber: string, code: string): Promise<any>;
}
