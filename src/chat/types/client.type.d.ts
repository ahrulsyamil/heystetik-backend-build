export declare enum ERole {
    Superadmin = "Superadmin",
    Doctor = "Doctor",
    Customer = "Customer"
}
export type TClient = {
    id: string;
    user_id: number;
    user_fullname: string;
    role: ERole;
};
