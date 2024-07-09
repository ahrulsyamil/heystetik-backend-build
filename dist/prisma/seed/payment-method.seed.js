"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4d1b9f03-f3db-5c4f-af17-dc3017962402")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodSeed = void 0;
const enum_1 = require("../../src/globals/constant/enum");
exports.PaymentMethodSeed = [
    {
        name: 'Free Voucher',
        method: enum_1.MethodOfPayment.FREE,
        payment_gateway: enum_1.PaymentGateway.Heystetik,
        type: enum_1.TypeOfPayment.FREE_VOUCHER,
        channel_code: enum_1.TypeOfPayment.FREE_VOUCHER,
        transaction_fee_type: enum_1.TransactionFeeType.FIX_AMOUNT,
        transaction_fee_fix_amount: 0,
        account_number: null,
        segment: 'Voucher',
        description: null,
        is_active: true,
        is_displayed: false,
    },
    {
        name: 'Credit Card',
        method: enum_1.MethodOfPayment.CARD,
        payment_gateway: enum_1.PaymentGateway.Midtrans,
        type: enum_1.TypeOfPayment.CREDIT_CARD,
        channel_code: enum_1.TypeOfPayment.CREDIT_CARD.toLowerCase(),
        transaction_fee_type: enum_1.TransactionFeeType.PERCENTAGE_FIX_AMOUNT,
        transaction_fee_percentage: 2.9,
        transaction_fee_fix_amount: 2000,
        account_number: null,
        segment: 'Kartu Kredit',
        description: 'Biaya transaksi: 2.9% + IDR 2.000',
        is_active: false,
        deleted_at: new Date(),
    },
    {
        name: 'Gopay',
        method: enum_1.MethodOfPayment.EWALLET,
        payment_gateway: enum_1.PaymentGateway.Midtrans,
        type: enum_1.TypeOfPayment.GOPAY,
        channel_code: enum_1.TypeOfPayment.GOPAY.toLowerCase(),
        transaction_fee_type: enum_1.TransactionFeeType.PERCENTAGE,
        transaction_fee_percentage: 2,
        account_number: null,
        segment: 'Pembayaran Instan',
        description: 'Biaya transaksi: 2%',
        is_active: true,
        is_displayed: true,
        how_to_pays: {
            create: [
                {
                    name: 'Default',
                    steps: '1. Tap Pay using GoPay.\n2. You will be redirected to Gojek app or GoPay App.\n3. Verify your payment details and then click Pay.\n4. Verify your Security PIN and finish your transaction.',
                },
            ],
        },
    },
    {
        name: 'BCA Virtual Account',
        method: enum_1.MethodOfPayment.VIRTUAL_ACCOUNT,
        payment_gateway: enum_1.PaymentGateway.Midtrans,
        type: enum_1.TypeOfPayment.BCA,
        channel_code: enum_1.TypeOfPayment.BCA.toLowerCase(),
        transaction_fee_type: enum_1.TransactionFeeType.FIX_AMOUNT,
        transaction_fee_fix_amount: 4000,
        account_number: null,
        segment: 'Transfer Virtual Account',
        description: 'Biaya transaksi: IDR 4.000',
        is_active: true,
        is_displayed: true,
        how_to_pays: {
            create: [
                {
                    name: 'ATM BCA',
                    steps: '1. Select other transactions on the main menu.\n2. Select transfer.\n3. Select to BCA virtual account.\n4. Insert BCA Virtual account number.\n5. Insert the payable amount, then confirm.\n6. Payment completed.',
                },
                {
                    name: 'Klik BCA',
                    steps: '1. Select fund transfer.\n2. Select transfer to BCA virtual account.\n3. Insert BCA virtual account number.\n4. Insert the payable amount, then confirm.\n5. Payment completed.',
                },
                {
                    name: 'm-BCA',
                    steps: '1. Select m-Transfer.\n2. Select BCA virtual account.\n3. Insert BCA virtual account number.\n4. Insert the payable amount, then confirm.\n5. Payment completed.',
                },
            ],
        },
    },
    {
        name: 'BNI Virtual Account',
        method: enum_1.MethodOfPayment.VIRTUAL_ACCOUNT,
        payment_gateway: enum_1.PaymentGateway.Midtrans,
        type: enum_1.TypeOfPayment.BNI,
        channel_code: enum_1.TypeOfPayment.BNI.toLowerCase(),
        transaction_fee_type: enum_1.TransactionFeeType.FIX_AMOUNT,
        transaction_fee_fix_amount: 4000,
        account_number: null,
        segment: 'Transfer Virtual Account',
        description: 'Biaya transaksi: IDR 4.000',
        is_active: true,
        is_displayed: true,
        how_to_pays: {
            create: [
                {
                    name: 'ATM BNI',
                    steps: '1. Select others on the main menu.\n2. Select transfer.\n3. Select to BNI account.\n4. Insert the payment account number.\n5. Insert the payable amount, then confirm.\n6. Payment completed.',
                },
                {
                    name: 'Internet Banking',
                    steps: '1. Select transaction, then transfer administration info.\n2. Select set destination account.\n3. Insert account info, then Confirm.\n4. Select transfer, then transfer to BNI account.\n5. Insert payment details, then confirm.\n6. Payment completed.',
                },
                {
                    name: 'Mobile Banking',
                    steps: '1. Select transfer.\n2. Select virtual account billing.\n3. Select the debit account you want to use.\n4. Insert the virtual account number, then confirm.\n5. Payment completed.',
                },
                {
                    name: 'Via other banks',
                    steps: '1. Select your preferred bank & payment channel (ATM/internet/mobile banking).\n2. Select transfer to other bank.\n3. Input BNI virtual account number.\n4. Input the payable amount, then confirm.\n5. Payment complete.',
                },
            ],
        },
    },
    {
        name: 'BRI Virtual Account',
        method: enum_1.MethodOfPayment.VIRTUAL_ACCOUNT,
        payment_gateway: enum_1.PaymentGateway.Midtrans,
        type: enum_1.TypeOfPayment.BRI,
        channel_code: enum_1.TypeOfPayment.BRI.toLowerCase(),
        transaction_fee_type: enum_1.TransactionFeeType.FIX_AMOUNT,
        transaction_fee_fix_amount: 4000,
        account_number: null,
        segment: 'Transfer Virtual Account',
        description: 'Biaya transaksi: IDR 4.000',
        is_active: false,
        is_displayed: false,
        deleted_at: new Date(),
        how_to_pays: {
            create: [
                {
                    name: 'ATM BRI',
                    steps: '1. Select other transactions on the main menu.\n2. Select payment.\n3. Select other.\n4. Select BRIVA.\n5. Insert BRIVA number, then confirm.\n6. Payment completed.',
                },
                {
                    name: 'IB BRI',
                    steps: '1. Select payment & purchase.\n2. Select BRIVA.\n3. Insert BRIVA Number, then confirm.\n4. Payment completed.',
                },
                {
                    name: 'BRImo',
                    steps: '1. Select payment.\n2. Select BRIVA.\n3. Insert BRIVA number, then confirm.\n4. Payment completed.',
                },
                {
                    name: 'Via other banks',
                    steps: '1. Select your preferred bank & payment channel (ATM/internet/mobile banking).\n2. Select transfer to other bank.\n3. Input BRIVA number.\n4. Input the payable amount, then confirm.\n5. Payment complete.',
                },
            ],
        },
    },
    {
        name: 'BRI Virtual Account',
        method: enum_1.MethodOfPayment.VIRTUAL_ACCOUNT,
        payment_gateway: enum_1.PaymentGateway.Xendit,
        type: enum_1.TypeOfPayment.BRI,
        channel_code: enum_1.TypeOfPayment.BRI,
        transaction_fee_type: enum_1.TransactionFeeType.FIX_AMOUNT,
        transaction_fee_fix_amount: 4000,
        account_number: null,
        segment: 'Transfer Virtual Account',
        description: 'Biaya transaksi: IDR 4.000',
        is_active: true,
        is_displayed: true,
        how_to_pays: {
            create: [
                {
                    name: 'ATM',
                    steps: '1. Insert the card, select the language and then enter your PIN.\n2. Select "Other Menu" and select "Payment".\n3. Select "Other Payment" and select "Briva".\n4. Enter virtual account number and the nominal that you want to pay.\n5. Check the transaction data and press "YES".\n6. Input payment code, then confirm.\n7. Payment confirmation will be displayed. Select "YES", to proceed.',
                },
                {
                    name: 'MBANKING',
                    steps: '1. Login to BRI Mobile Banking, enter your USER ID and PIN.\n2. Select "Payment" and select "Briva".\n3. Enter your Virtual Account Number and the amount that you want to pay.\n4. Input your PIN and click "Send".',
                },
            ],
        },
    },
    {
        name: 'BSI Virtual Account',
        method: enum_1.MethodOfPayment.VIRTUAL_ACCOUNT,
        payment_gateway: enum_1.PaymentGateway.Xendit,
        type: enum_1.TypeOfPayment.BSI,
        channel_code: enum_1.TypeOfPayment.BSI,
        transaction_fee_type: enum_1.TransactionFeeType.FIX_AMOUNT,
        transaction_fee_fix_amount: 4000,
        account_number: null,
        segment: 'Transfer Virtual Account',
        description: 'Biaya transaksi: IDR 4.000',
        is_active: true,
        is_displayed: true,
        how_to_pays: {
            create: [
                {
                    name: 'ATM',
                    steps: '1. Insert your BSI ATM card and PIN.\n2. Enter your ATM PIN.\n3. Select Menu "Payment/Purchase".\n4. Select "Institution".\n5. Enter BSI VA code Virtual Account Number.\n6. Details displayed: NIM, Name, and Total Bill.\n7. Confirm your transaction details displayed.',
                },
                {
                    name: 'IBANKING',
                    steps: '1. Open https://bsinet.bankbsi.co.id.\n2. Enter User ID and Password.\n3. Choose "Payment".\n4. Choose your source of payment.\n5. Choose "Institution".\n6. Enter Xendit as institution name (code 9347).\n7. Enter Virtual Account Number.\n8. Enter PIN.\n9. Check your detail information.',
                },
                {
                    name: 'MBANKING',
                    steps: '1. Open BSI Mobile app.\n2. Ensure your BSI Mobile Account has been activated.\n3. Choose "Payment".\n4. Choose "Institution".\n5. Choose your source of payment.\n6. Enter Xendit as institution name (code 9347).\n7. Enter Virtual Account Number.\n8. Enter PIN.\n9. Check your detail information.',
                },
                {
                    name: 'INTERBANK',
                    steps: '1. Open your bank Mobile app.\n2. Enter User ID and Password.\n3. Choose "Transfer".\n4. Choose "Interbank".\n5. Enter BSI VA Code 900 + Virtual Account Number\nNote: For interbank via ATM, you need to include BSI Bank Code "451" before BSI VA Code "900".\n6. Input the nominal that you need to pay.\n7. Select account type.\n8. Confirm your transaction details displayed.',
                },
            ],
        },
    },
    {
        name: 'Mandiri Virtual Account',
        method: enum_1.MethodOfPayment.VIRTUAL_ACCOUNT,
        payment_gateway: enum_1.PaymentGateway.Xendit,
        type: enum_1.TypeOfPayment.MANDIRI,
        channel_code: enum_1.TypeOfPayment.MANDIRI,
        transaction_fee_type: enum_1.TransactionFeeType.FIX_AMOUNT,
        transaction_fee_fix_amount: 4000,
        account_number: null,
        segment: 'Transfer Virtual Account',
        description: 'Biaya transaksi: IDR 4.000',
        is_active: true,
        is_displayed: true,
        how_to_pays: {
            create: [
                {
                    name: 'Livin’ by Mandiri',
                    steps: '1. Open Livin by Mandiri, then enter your PASSWORD or do face verification.\n2. Select "IDR Transfer".\n3. Select “Transfer to new recipient”.\n4. Enter your virtual account number.\n5. Confirm the VA detail and click “continue”.\n6. Review and confirm the transaction details and click “Continue”.\n6. Complete the transaction by entering your MPIN',
                },
                {
                    name: 'ATM Mandiri',
                    steps: '1. Select "PAYMENT", then select "MULTIPAYMENT".\n2. Enter company code "88908" (88908 XENDIT) for closed amount and ‘88608’ (88608 XENDIT) for open amount, then press "CORRECT".\n3. Enter Virtual Account Number, then press "CORRECT".\n4. Merchant details will be displayed, choose number 1 according to the amount billed and then press "YES".\n5. Input payment code, then confirm.\n6. Payment confirmation will be displayed. Select "YES", to proceed.',
                },
                {
                    name: 'Mandiri Internet Banking',
                    steps: '1. Go to Mandiri Internet Banking website https://ibank.bankmandiri.co.id.\n2. Login with your USER ID and PASSWORD.\n3. Go to the Home page, then select "Payment".\n4. Select "Multi Payment".\n5. Select 88908 XENDIT (for closed VA) and 88608 XENDIT (for open VA) as service provider.\n6. 2. Enter your Virtual Account Number.\n7. Press continue.\n8. If all details are correct and then click on "CONFIRM"\n9. Enter PIN / Challenge Code Token.',
                },
            ],
        },
    },
    {
        name: 'Mandiri Virtual Account',
        method: enum_1.MethodOfPayment.VIRTUAL_ACCOUNT,
        payment_gateway: enum_1.PaymentGateway.Midtrans,
        type: enum_1.TypeOfPayment.MANDIRI,
        channel_code: enum_1.TypeOfPayment.MANDIRI.toLowerCase(),
        transaction_fee_type: enum_1.TransactionFeeType.FIX_AMOUNT,
        transaction_fee_fix_amount: 4000,
        account_number: null,
        segment: 'Transfer Virtual Account',
        description: 'Biaya transaksi: IDR 4.000',
        is_active: false,
        deleted_at: new Date(),
        how_to_pays: {
            create: [
                {
                    name: 'Livin’ by Mandiri',
                    steps: '1. Select payment on the main menu.\n2. Select Ecommerce.\n3. Select Midtrans in the service provider field.\n4. Input virtual account number in the payment code field.\n5. Click continue to confirm.\n6. Payment complete.',
                },
                {
                    name: 'ATM Mandiri',
                    steps: '1. Select pay/buy on the main menu.\n2. Select others.\n3. Select multi payment.\n4. Input Midtrans company code 70012.\n5. Input payment code, then confirm.\n6. Payment complete.',
                },
                {
                    name: 'Mandiri Internet Banking',
                    steps: '1. Select payment on the main menu.\n2. Select multi payment.\n3. Select from account.\n4. Select Midtrans in the service provider field.\n5. Input payment code, then confirm.\n6. Payment complete.',
                },
            ],
        },
    },
    {
        name: 'Permata Virtual Account',
        method: enum_1.MethodOfPayment.VIRTUAL_ACCOUNT,
        payment_gateway: enum_1.PaymentGateway.Midtrans,
        type: enum_1.TypeOfPayment.PERMATA,
        channel_code: enum_1.TypeOfPayment.PERMATA.toLowerCase(),
        transaction_fee_type: enum_1.TransactionFeeType.FIX_AMOUNT,
        transaction_fee_fix_amount: 4000,
        account_number: null,
        segment: 'Transfer Virtual Account',
        description: 'Biaya transaksi: IDR 4.000',
        is_active: true,
        is_displayed: true,
        how_to_pays: {
            create: [
                {
                    name: 'ATM Permata/ALTO',
                    steps: '1. Select other transactions on the main menu.\n2. Select payment.\n3. Select other payments.\n4. Select virtual account.\n5. Insert virtual account number, then confirm.\n6. Payment completed.',
                },
                {
                    name: 'Via other banks',
                    steps: '1. Select your preferred bank & payment channel (ATM/internet/mobile banking).\n2. Select transfer to other bank.\n3. Input virtual account number.\n4. Input the payable amount, then confirm.\n5. Payment complete.',
                },
            ],
        },
    },
    {
        name: 'Transfer Bank Mandiri',
        method: enum_1.MethodOfPayment.BANK_TRANSFER_MANUAL_VERIFICATION,
        payment_gateway: enum_1.PaymentGateway.Midtrans,
        type: enum_1.TypeOfPayment.MANDIRI,
        channel_code: enum_1.TypeOfPayment.MANDIRI,
        transaction_fee_type: enum_1.TransactionFeeType.FIX_AMOUNT,
        transaction_fee_fix_amount: 0,
        segment: 'Transfer Bank (Verifikasi Manual)',
        account_number: '13300156606244',
        description: 'Tidak tersedia untuk transaksi ini',
        is_active: false,
        is_displayed: true,
    },
    {
        name: 'OVO',
        method: enum_1.MethodOfPayment.EWALLET,
        payment_gateway: enum_1.PaymentGateway.Xendit,
        type: enum_1.TypeOfPayment.OVO,
        channel_code: enum_1.TypeOfPayment.OVO,
        transaction_fee_type: enum_1.TransactionFeeType.PERCENTAGE,
        transaction_fee_percentage: 2.73,
        segment: 'Pembayaran Instan',
        account_number: null,
        description: 'Biaya transaksi: 2.73%',
        is_active: true,
        is_displayed: true,
        how_to_pays: {
            create: [
                {
                    name: 'Default',
                    steps: '1. Tap Pay using OVO.\n2. You will receive a notification on the OVO App.\n3. Verify your payment details.\n4. Click pay and finish your transaction.',
                },
            ],
        },
    },
    {
        name: 'ShopeePay',
        method: enum_1.MethodOfPayment.EWALLET,
        payment_gateway: enum_1.PaymentGateway.Xendit,
        type: enum_1.TypeOfPayment.SHOPEEPAY,
        channel_code: enum_1.TypeOfPayment.SHOPEEPAY,
        transaction_fee_type: enum_1.TransactionFeeType.PERCENTAGE,
        transaction_fee_percentage: 2,
        segment: 'Pembayaran Instan',
        account_number: null,
        description: 'Biaya transaksi: 2%',
        is_active: true,
        is_displayed: true,
        how_to_pays: {
            create: [
                {
                    name: 'Default',
                    steps: '1. Tap Pay using ShopeePay.\n2. You will be redirected to Shopee app or ShopeePay App.\n3. ShopeePay confirms sufficient balance to pay.\n4. Enter your ShopeePay pin for verification.\n5. Verify your payment details.\n6. Click pay and finish your transaction.',
                },
            ],
        },
    },
    {
        name: 'QRIS',
        method: enum_1.MethodOfPayment.QR_CODE,
        payment_gateway: enum_1.PaymentGateway.Xendit,
        type: enum_1.TypeOfPayment.QRIS,
        channel_code: enum_1.MethodOfPayment.QR_CODE,
        transaction_fee_type: enum_1.TransactionFeeType.PERCENTAGE,
        transaction_fee_percentage: 0.7,
        segment: 'QR Payments',
        account_number: null,
        description: 'Biaya transaksi: 0.7%',
        is_active: true,
        is_displayed: true,
        how_to_pays: {
            create: [
                {
                    name: 'Default',
                    steps: '1. Open any supporting QRIS payment app.\n2. Screenshot and upload the QR code on your mobile banking/e-wallet app or scan it on your desktop monitor.\n3. Confirm payment in the app.\n4. Payment completed.',
                },
            ],
        },
    },
];
//# sourceMappingURL=payment-method.seed.js.map
//# debugId=4d1b9f03-f3db-5c4f-af17-dc3017962402
