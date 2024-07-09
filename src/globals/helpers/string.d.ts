export declare const randomString: (length: number) => string;
export declare const isNotNullOrEmpty: (value: any) => boolean;
export declare const generateRandomUsernameFromEmail: (email: string) => string;
export declare const generateRandomUsernameFromFullname: (fullname: string) => string;
export declare const transformPhoneNumber: (phoneNumber: string) => string;
export declare const generateAuthKey: () => Promise<string>;
export declare const formatCurrency: (amount: number, prefix?: string) => string;
