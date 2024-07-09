import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class IsNotExist implements ValidatorConstraintInterface {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    validate(value: any, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): any;
}
