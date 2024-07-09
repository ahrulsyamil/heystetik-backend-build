"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9cd98f68-8111-5863-bd90-d91ff530c71a")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodSeed = void 0;
exports.ShippingMethodSeed = [
    {
        name: 'GoSend Instant Delivery',
        provider: 'gosend',
        description: 'Pengiriman barang yang lebih cepat',
        type: 'Instant',
        provider_service_code: 'Instant',
    },
    {
        name: 'GoSend Same Day Delivery',
        provider: 'gosend',
        description: 'Pengiriman barang yang lebih hemat',
        type: 'Same_Day',
        provider_service_code: 'SameDay',
    },
    {
        name: 'SiCepat Reguler',
        provider: 'sicepat',
        description: 'Layanan pengiriman cepat yang murah dengan harga regular',
        type: 'Regular',
        provider_service_code: 'REG',
    },
    {
        name: 'SiCepat Best',
        provider: 'sicepat',
        description: 'Besok Sampai Tujuan. Barang cepat sampai tujuan hanya dengan estimasi 1 hari sampai',
        type: 'Next_Day',
        provider_service_code: 'BEST',
    },
    {
        name: 'SiCepat BBM',
        provider: 'sicepat',
        description: 'Berani Bayar Murah. Layanan pengiriman dengan tarif ekonomis',
        type: 'Economy',
        provider_service_code: 'BBM',
    },
];
//# sourceMappingURL=shipping-method.seed.js.map
//# debugId=9cd98f68-8111-5863-bd90-d91ff530c71a
