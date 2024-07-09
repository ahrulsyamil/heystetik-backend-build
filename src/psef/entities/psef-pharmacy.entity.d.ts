export declare class PsefPharmacyEntity {
    constructor(partial: Partial<PsefPharmacyEntity>);
    nama_apotek: string;
    nomor_izin_apotek: string;
    lokasi_apotek: string;
    url_lokasi_apotek: string;
    nomor_telepon: string;
    nama_apoteker: string;
    nomor_sip_apoteker: string;
    jadwal_praktik_apoteker: PsefPharmacyOperationHours[];
}
declare class PsefPharmacyOperationHours {
    constructor(partial: Partial<PsefPharmacyOperationHours>);
    hari: string;
    jam: string;
}
export {};
