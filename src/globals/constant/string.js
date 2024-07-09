"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5893f26d-f7d5-5e58-9adb-bfdca72829d0")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.GosendDeliveryStatus = exports.SicepatDeliveryStatus = exports.SicepatWaybillExample = exports.HoursOneDay = exports.DayOfWeek = void 0;
exports.DayOfWeek = [
    {
        name: 'Sunday',
        value: 0,
    },
    {
        name: 'Monday',
        value: 1,
    },
    {
        name: 'Tuesday',
        value: 2,
    },
    {
        name: 'Wednesday',
        value: 3,
    },
    {
        name: 'Thursday',
        value: 4,
    },
    {
        name: 'Friday',
        value: 5,
    },
    {
        name: 'Saturday',
        value: 6,
    },
];
exports.HoursOneDay = [
    { value: '01:00', label: '01:00' },
    { value: '02:00', label: '02:00' },
    { value: '03:00', label: '03:00' },
    { value: '04:00', label: '04:00' },
    { value: '05:00', label: '05:00' },
    { value: '06:00', label: '06:00' },
    { value: '07:00', label: '07:00' },
    { value: '08:00', label: '08:00' },
    { value: '09:00', label: '09:00' },
    { value: '10:00', label: '10:00' },
    { value: '11:00', label: '11:00' },
    { value: '12:00', label: '12:00' },
    { value: '13:00', label: '13:00' },
    { value: '14:00', label: '14:00' },
    { value: '15:00', label: '15:00' },
    { value: '16:00', label: '16:00' },
    { value: '17:00', label: '17:00' },
    { value: '18:00', label: '18:00' },
    { value: '19:00', label: '19:00' },
    { value: '20:00', label: '20:00' },
    { value: '21:00', label: '21:00' },
    { value: '22:00', label: '22:00' },
    { value: '23:00', label: '23:00' },
    { value: '00:00', label: '00:00' },
];
exports.SicepatWaybillExample = [
    '000356352964',
    '000550716732',
    '000956333208',
];
exports.SicepatDeliveryStatus = [
    {
        key: 'PICKREQ',
        status: 'Pickup Request',
    },
    {
        key: 'PICK',
        status: 'Picked',
    },
    {
        key: 'IN',
        status: 'Enter Sorting Area',
    },
    {
        key: 'OUT',
        status: 'Exit Sorting Area',
    },
    {
        key: 'ANT',
        status: 'Enroute Destination',
    },
    {
        key: 'DELIVERED',
        status: 'Delivered',
    },
];
exports.GosendDeliveryStatus = [
    {
        key: 'confirmed',
        status: 'Finding Driver',
        description: 'Booking is received and order number is created',
    },
    {
        key: 'allocated',
        status: 'Driver Allocated',
        description: 'Driver is found',
    },
    {
        key: 'out_for_pickup',
        status: 'Enroute Pickup',
        description: 'Driver is on their way to pick-up location',
    },
    {
        key: 'picked',
        status: 'Picked',
        description: 'Item is successfully picked up by the driver',
    },
    {
        key: 'out_for_delivery',
        status: 'Enroute Drop',
        description: 'Driver is enroute to deliver the item',
    },
    {
        key: 'on_hold',
        status: 'On Hold',
        description: 'Pending delivery because of reasons; recipient can’t be contacted, demonstration, weather, etc',
    },
    {
        key: 'cancelled',
        status: 'Cancelled',
        description: 'Booking is cancelled by CS',
    },
    {
        key: 'delivered',
        status: 'Delivered',
        description: 'Item is successfully delivered to recipient',
    },
    {
        key: 'rejected',
        status: 'Rejected',
        description: 'Driver returns the item to sender because recipient unable to receive the item (drop-off failure)',
    },
    {
        key: 'no_driver',
        status: 'Driver not found',
        description: 'Driver not found',
    },
];
//# sourceMappingURL=string.js.map
//# debugId=5893f26d-f7d5-5e58-9adb-bfdca72829d0
