declare class Routes {
    originName?: string;
    originNote?: string;
    originContactName: string;
    originContactPhone: string;
    originLatLong: string;
    originAddress?: string;
    destinationName?: string;
    destinationNote?: string;
    destinationContactName: string;
    destinationContactPhone: string;
    destinationLatLong: string;
    destinationAddress?: string;
    item: string;
    storeOrderId?: string;
}
export declare class BookingDto {
    paymentType?: '0' | '3';
    shipment_method: 'Instant' | 'SameDay';
    routes: Routes[];
}
export {};
