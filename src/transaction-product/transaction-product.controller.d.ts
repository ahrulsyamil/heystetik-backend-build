import { users } from '@prisma/client';
import { ConsultationService } from 'src/consultation/consultation.service';
import { MidtransService } from 'src/midtrans/midtrans.service';
import { PaymentMethodService } from 'src/payment-method/payment-method.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShipmentGosendService } from 'src/shipment-gosend/shipment-gosend.service';
import { ShipmentSicepatService } from 'src/shipment-sicepat/shipment-sicepat.service';
import { ShippingService } from 'src/shipping/shipping.service';
import { TransactionService } from 'src/transaction/transaction.service';
import { UserAddressService } from 'src/user-address/user-address.service';
import { VoucherService } from 'src/voucher/voucher.service';
import { XenditService } from 'src/xendit/xendit.service';
import { CreateTransactionProductDto } from './dto/create-transaction-product.dto';
import { TransactionProductService } from './transaction-product.service';
export declare class TransactionProductController {
    private readonly paymentMethodService;
    private readonly midtransService;
    private readonly transactionProductService;
    private readonly consultationService;
    private readonly prisma;
    private readonly shippingMethodService;
    private readonly shipmentSicepatService;
    private readonly shipmentGosendService;
    private readonly shippingService;
    private readonly userAddressService;
    private readonly voucherService;
    private readonly transactionService;
    private readonly xenditService;
    constructor(paymentMethodService: PaymentMethodService, midtransService: MidtransService, transactionProductService: TransactionProductService, consultationService: ConsultationService, prisma: PrismaService, shippingMethodService: ShippingService, shipmentSicepatService: ShipmentSicepatService, shipmentGosendService: ShipmentGosendService, shippingService: ShippingService, userAddressService: UserAddressService, voucherService: VoucherService, transactionService: TransactionService, xenditService: XenditService);
    create(user: users, data: CreateTransactionProductDto): Promise<{
        transaction: any;
        payment: any;
    }>;
}
