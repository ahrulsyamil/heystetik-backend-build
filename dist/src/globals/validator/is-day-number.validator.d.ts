import { ValidatorConstraintInterface } from 'class-validator';
export declare class IsValidDayNumberConstraint implements ValidatorConstraintInterface {
    validate(value: any): boolean;
    defaultMessage(): string;
}
export declare function IsDayNumber(validationOptions?: any): (object: Record<string, any>, propertyName: string) => void;
