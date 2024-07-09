import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsBase64ArrayConstraint implements ValidatorConstraintInterface {
    validate(value: any): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsBase64Array(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
