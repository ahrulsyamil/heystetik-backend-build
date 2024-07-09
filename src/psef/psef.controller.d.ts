import { PsefService } from './psef.service';
import { PharmacyService } from 'src/pharmacy/pharmacy.service';
import { Response } from 'express';
export declare class PsefController {
    private readonly psefService;
    private readonly pharmacyService;
    constructor(psefService: PsefService, pharmacyService: PharmacyService);
    pharmacy(res: Response): Promise<Response<any, Record<string, any>>>;
}
