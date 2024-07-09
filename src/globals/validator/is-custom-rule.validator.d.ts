import { ValidationOptions } from 'class-validator';
export declare function IsCustomRule(rule: Function, message: string, validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
