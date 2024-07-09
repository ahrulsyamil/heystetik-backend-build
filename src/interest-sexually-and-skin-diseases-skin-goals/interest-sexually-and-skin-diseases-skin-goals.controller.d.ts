import { InterestSexuallyAndSkinDiseasesSkinGoalsService } from './interest-sexually-and-skin-diseases-skin-goals.service';
import { CreateInterestSexuallyAndSkinDiseasesSkinGoalsDto } from './dto/create-interest-sexually-and-skin-diseases-skin-goals';
import { Response } from 'express';
export declare class InterestSexuallyAndSkinDiseasesSkinGoalsController {
    private readonly interestSexuallyAndSkinDiseasesSkinGoals;
    constructor(interestSexuallyAndSkinDiseasesSkinGoals: InterestSexuallyAndSkinDiseasesSkinGoalsService);
    create(response: Response, data: CreateInterestSexuallyAndSkinDiseasesSkinGoalsDto): Response<any, Record<string, any>>;
}
