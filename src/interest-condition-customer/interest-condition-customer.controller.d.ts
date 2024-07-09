import { Response } from 'express';
import { CreateInterestConditionCustomerDto } from './dto/create-interest_condition_answers.dto';
import { InterestConditionsService } from './interest-condition-customer.service';
export declare class InterestConditionsController {
    private readonly snipsTipsService;
    constructor(snipsTipsService: InterestConditionsService);
    create(response: Response, createInterestConditionCustomerDto: CreateInterestConditionCustomerDto): Promise<Response<any, Record<string, any>>>;
}
