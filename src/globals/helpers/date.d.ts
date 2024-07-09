export declare const isValidDate: (dateString: string) => boolean;
export declare const isValidTime: (timeString: string) => boolean;
export declare const getAllDaysInMonth: (year: number, month: number) => Date[];
export declare const dateIsWithinRange: (x_start_date: Date, x_end_date: Date, y_start_date: Date, y_end_date: Date) => boolean;
export declare const calculateDelay: (target: Date) => number;
