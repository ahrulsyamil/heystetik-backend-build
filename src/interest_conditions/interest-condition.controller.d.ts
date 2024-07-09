import { Response } from 'express';
import { CreateInterestConditionAnswersDto } from './dto/create-interest_condition_answers.dto';
import { CreateInterestConditionQuestionsDto } from './dto/create-interest_condition_questions.dto';
import { CreateInterestConditionsDto } from './dto/create-interest_conditions.dto';
import { UpdateInterestConditionsDto } from './dto/update-interest_conditions.dto';
import { InterestConditionsService } from './interest-condition.service';
export declare class InterestConditionsController {
    private readonly snipsTipsService;
    constructor(snipsTipsService: InterestConditionsService);
    create(response: Response, createInterestConditionsDto: CreateInterestConditionsDto): Promise<Response<any, Record<string, any>>>;
    createQuestion(response: Response, req: CreateInterestConditionQuestionsDto): Promise<Response<any, Record<string, any>>>;
    createAnswer(response: Response, req: CreateInterestConditionAnswersDto): Promise<Response<any, Record<string, any>>>;
    findAll(response: Response): Promise<Response<any, Record<string, any>>>;
    findAllQuestion(response: Response): Promise<Response<any, Record<string, any>>>;
    findAllAnswer(response: Response): Promise<Response<any, Record<string, any>>>;
    findOne(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
    update(response: Response, id: string, updateInterestConditionsDto: UpdateInterestConditionsDto): Promise<Response<any, Record<string, any>>>;
    remove(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
}
