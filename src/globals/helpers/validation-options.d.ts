import { UnprocessableEntityException } from '@nestjs/common';
import { ValidationError } from 'class-validator';
export declare function formattingError(errors: ValidationError[]): Record<string, any>;
export declare function formatValidationError(errors: ValidationError[]): UnprocessableEntityException;
