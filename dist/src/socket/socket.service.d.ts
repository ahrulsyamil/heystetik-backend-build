import { ConfigService } from '@nestjs/config';
import { TClient } from 'src/chat/types/client.type';
export declare class SocketService {
    private readonly configService;
    private redisClient;
    constructor(configService: ConfigService);
    getOnlineClients(): Promise<TClient[]>;
    removeClient(id: string): Promise<void>;
    getClient(id: string): Promise<TClient>;
    getClientByUserId(user_id: number): Promise<TClient>;
    replaceClientByUserId(user_id: number, client: TClient): Promise<void>;
    resetClient(): Promise<void>;
}
