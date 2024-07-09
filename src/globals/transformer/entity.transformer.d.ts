import { ClassConstructor, ClassTransformOptions } from 'class-transformer';
declare const transformEntity: <T, V>(cls: ClassConstructor<T>, plain: V | V[], options?: ClassTransformOptions) => any;
export { transformEntity };
