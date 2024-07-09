import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class IsExist implements ValidatorConstraintInterface {
    protected readonly prismaService: PrismaService;
    constructor(prismaService: PrismaService);
    validate(value: any, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): any;
}
