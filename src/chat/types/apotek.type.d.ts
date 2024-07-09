export type TApotekOperationHourResponse = {
    day: string;
    time: string;
};
export type TApotekOperationHour = {
    id: number;
    day: string;
    start_time: string;
    apotek_id: number;
    end_time: string;
    created_by: number;
    updated_by: number;
};
