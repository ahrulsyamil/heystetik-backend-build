"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dda4559e-56a4-542b-bacf-f293ea54e719")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.voucherSeed = void 0;
const dayjs = require("dayjs");
exports.voucherSeed = [
    {
        type: 'All Solution Voucher',
        name: 'Semua Solusi Heystetik Diskon 15% s/d 25RB',
        period_start: dayjs().toDate(),
        period_end: dayjs().add(1, 'month').toDate(),
        target_voucher: 'Public',
        code: null,
        promotion_type: 'Discount',
        discount_type: 'Percentage',
        discount_percentage: 15,
        discount_percentage_maximum_amount: 25000,
        minimum_purchase: 30000,
        quota: 100,
        target_buyer: 'All Buyers',
    },
    {
        type: 'All Solution Voucher',
        name: 'Potongan Langsung 20RB di Semua Solusi Heystetik',
        period_start: dayjs().toDate(),
        period_end: dayjs().add(1, 'month').toDate(),
        target_voucher: 'Public',
        code: null,
        promotion_type: 'Discount',
        discount_type: 'Fix Amount',
        discount_fix_amount: 20000,
        minimum_purchase: 60000,
        quota: 100,
        target_buyer: 'All Buyers',
    },
    {
        type: 'Product Voucher',
        name: 'Gratis Ongkir s/d 20RB',
        period_start: dayjs().toDate(),
        period_end: dayjs().add(1, 'month').toDate(),
        target_voucher: 'Public',
        code: null,
        promotion_type: 'Free Shipping',
        free_shipping_amount: 20000,
        minimum_purchase: 0,
        target_buyer: 'All Buyers',
    },
    {
        type: 'All Solution Voucher',
        name: 'Diskon 50RB',
        period_start: dayjs().toDate(),
        target_voucher: 'Special',
        code: 'DISC50K',
        promotion_type: 'Discount',
        discount_type: 'Fix Amount',
        discount_fix_amount: 50000,
        minimum_purchase: 100000,
        target_buyer: 'All Buyers',
    },
    {
        type: 'Skincare Voucher',
        name: 'Skincare - Diskon 15%',
        period_start: dayjs().toDate(),
        period_end: dayjs().add(1, 'month').toDate(),
        target_voucher: 'Public',
        code: null,
        promotion_type: 'Discount',
        discount_type: 'Percentage',
        discount_percentage: 15,
        discount_percentage_maximum_amount: 20000,
        minimum_purchase: 50000,
        quota: 50,
        target_buyer: 'All Buyers',
    },
    {
        type: 'Treatment Voucher',
        name: 'Treatment - Diskon 20%',
        period_start: dayjs().toDate(),
        period_end: dayjs().add(1, 'month').toDate(),
        target_voucher: 'Public',
        code: null,
        promotion_type: 'Discount',
        discount_type: 'Percentage',
        discount_percentage: 20,
        discount_percentage_maximum_amount: 50000,
        minimum_purchase: 800000,
        quota: 50,
        target_buyer: 'All Buyers',
    },
    {
        type: 'Medicine Voucher',
        name: 'Obat - Diskon 15%',
        period_start: dayjs().toDate(),
        period_end: dayjs().add(1, 'month').toDate(),
        target_voucher: 'Public',
        code: null,
        promotion_type: 'Discount',
        discount_type: 'Percentage',
        discount_percentage: 15,
        discount_percentage_maximum_amount: 20000,
        minimum_purchase: 60000,
        quota: 50,
        target_buyer: 'All Buyers',
    },
    {
        type: 'Consultation Voucher',
        name: 'Konsultasi - Diskon 10%',
        period_start: dayjs().toDate(),
        period_end: dayjs().add(1, 'month').toDate(),
        target_voucher: 'Public',
        code: null,
        promotion_type: 'Discount',
        discount_type: 'Percentage',
        discount_percentage: 10,
        discount_percentage_maximum_amount: 10000,
        minimum_purchase: 30000,
        quota: 50,
        target_buyer: 'All Buyers',
    },
    {
        type: 'Consultation Voucher',
        name: 'Gratis Konsultasi Pertamamu',
        period_start: dayjs().toDate(),
        target_voucher: 'Public',
        code: null,
        promotion_type: 'Discount',
        discount_type: 'Percentage',
        discount_percentage: 100,
        discount_percentage_maximum_amount: 100000,
        minimum_purchase: 30000,
        target_buyer: 'First Purchase Buyers',
    },
];
//# sourceMappingURL=vourcher.seed.js.map
//# debugId=dda4559e-56a4-542b-bacf-f293ea54e719
