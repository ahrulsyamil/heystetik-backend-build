export declare class BookingInfoEntity {
    constructor(partial: Partial<BookingInfoEntity>);
    id: number;
    orderNo: string;
    status: string;
    driverId: number;
    driverName: string;
    driverPhone: string;
    driverPhoto: string;
    totalPrice: number;
    receiverName: string;
    orderCreatedTime: string;
    orderDispatchTime: string;
    orderArrivalTime: string;
    sellerAddressName: string;
    sellerAddressDetail: string;
    buyerAddressName: string;
    buyerAddressDetail: string;
    storeOrderId: string;
    cancelDescription: string;
    bookingType: string;
}
