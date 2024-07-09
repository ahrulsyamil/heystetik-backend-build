import { INestApplication, OnModuleInit, OnModuleDestroy, OnApplicationShutdown } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
export declare class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, 'query'> implements OnModuleInit, OnModuleDestroy, OnApplicationShutdown {
    private readonly logger;
    constructor(configService: ConfigService);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    onApplicationShutdown(): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
}
