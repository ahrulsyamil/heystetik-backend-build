import { QontakService } from './qontak.service';
export declare class QontakController {
    private readonly qontakService;
    constructor(qontakService: QontakService);
    authToken(): Promise<any>;
    integrationChannel(): Promise<any>;
}
