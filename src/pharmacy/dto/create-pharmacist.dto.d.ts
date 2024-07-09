export declare class CreatePharmacistDto {
    pharmacy_id: number;
    name: string;
    sipa_no: string;
    phone: string;
    schedules: DayHourDto[];
}
declare class DayHourDto {
    day: string;
    start_time: string | Date;
    end_time: string | Date;
}
export {};
