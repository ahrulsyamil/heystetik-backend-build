/// <reference types="qs" />
import { Request, Response } from 'express';
import * as useragent from 'express-useragent';
import { AppService } from './app.service';
declare class TestTimeoutDto {
    timeout: number;
    process_time: number;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getItems(userAgent: useragent.Details, request: Request): Promise<{
        request: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
        'user-agent-info': useragent.Details;
    }>;
    deepLink(userAgent: useragent.Details, url: string, res: Response): void;
    addItem(item: {
        name: string;
    }): any;
    seeUploadedImage(image: any, res: any): any;
    seeUploadedFile(filepath: any, res: any): Promise<any>;
    testTimeout(query: TestTimeoutDto): Promise<unknown>;
    appSetting(): Promise<{
        transaction_fee: number;
        transaction_tax: number;
    }>;
}
export {};
