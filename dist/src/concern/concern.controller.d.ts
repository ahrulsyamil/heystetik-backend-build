import { ConcernService } from './concern.service';
import { PageOptionsConcernDto } from './dto/page-options-concern.dto';
export declare class ConcernController {
    private readonly concernService;
    constructor(concernService: ConcernService);
    findAll(pageOptionsDto: PageOptionsConcernDto): Promise<any>;
}
