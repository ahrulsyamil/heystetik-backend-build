import { payment_method, product, voucher } from '@prisma/client';
export declare const generateOTP: (length: number) => string;
export declare const generateReceiptNumber: (length?: number) => string;
export declare const calculateVoucherAmount: (purchaseAmount: number, voucher: voucher) => number;
export declare const calculateProductFinalPrice: (product: product) => number;
export declare const calculateTransactionFee: (purchaseAmount: number, paymentMethod: payment_method) => number;
export declare const isNumeric: (value: any) => boolean;
export declare const getRandomNumber: (max: number) => number;
