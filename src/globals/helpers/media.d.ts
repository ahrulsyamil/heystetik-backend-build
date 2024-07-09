import { IFile } from '../interfaces/file.interface';
import * as fastcsv from 'fast-csv';
export declare const saveBase64ToFile: (base64String: string, dirPath: string, prefixFileName?: string) => Promise<IFile>;
export declare const imageUrlToBase64: (imageUrl: string) => Promise<string>;
type RowProcessor<T> = (row: string[]) => T | null;
export declare const readCsv: <T>(path: string, options?: fastcsv.ParserOptionsArgs, rowProcessor?: RowProcessor<T>) => Promise<T[]>;
export {};
