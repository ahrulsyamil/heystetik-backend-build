"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5542659c-8d32-58fc-8b91-cbe09be8ccbc")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionProductModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../auth/user/user.service");
const consultation_service_1 = require("../consultation/consultation.service");
const midtrans_service_1 = require("../midtrans/midtrans.service");
const payment_method_service_1 = require("../payment-method/payment-method.service");
const prisma_module_1 = require("../prisma/prisma.module");
const shipment_gosend_service_1 = require("../shipment-gosend/shipment-gosend.service");
const shipment_sicepat_service_1 = require("../shipment-sicepat/shipment-sicepat.service");
const transaction_product_controller_1 = require("./transaction-product.controller");
const transaction_product_service_1 = require("./transaction-product.service");
const shipping_service_1 = require("../shipping/shipping.service");
const user_address_service_1 = require("../user-address/user-address.service");
const voucher_service_1 = require("../voucher/voucher.service");
const transaction_service_1 = require("../transaction/transaction.service");
const xendit_service_1 = require("../xendit/xendit.service");
let TransactionProductModule = class TransactionProductModule {
};
TransactionProductModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [transaction_product_controller_1.TransactionProductController],
        providers: [
            transaction_product_service_1.TransactionProductService,
            user_service_1.UserService,
            midtrans_service_1.MidtransService,
            payment_method_service_1.PaymentMethodService,
            consultation_service_1.ConsultationService,
            shipment_sicepat_service_1.ShipmentSicepatService,
            shipment_gosend_service_1.ShipmentGosendService,
            shipping_service_1.ShippingService,
            user_address_service_1.UserAddressService,
            voucher_service_1.VoucherService,
            transaction_service_1.TransactionService,
            xendit_service_1.XenditService,
        ],
    })
], TransactionProductModule);
exports.TransactionProductModule = TransactionProductModule;
//# sourceMappingURL=transaction-product.module.js.map
//# debugId=5542659c-8d32-58fc-8b91-cbe09be8ccbc
