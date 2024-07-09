import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsValidDateString implements ValidatorConstraintInterface {
    validate(value: any): boolean;
    defaultMessage(args: ValidationArguments): string;
}
