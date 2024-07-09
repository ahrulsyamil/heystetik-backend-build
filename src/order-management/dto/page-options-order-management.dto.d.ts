import { shipping_method_type, transaction_product_order_status } from '@prisma/client';
import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { Order, PaymentStatus } from 'src/globals/constant/enum';
export declare class PageOptionsOrderManagementDto extends PageOptionsDto {
    payment_status: PaymentStatus;
    start_date: Date;
    end_date: Date;
    order_status: transaction_product_order_status;
    shipping_method_id: number;
    shipping_type: shipping_method_type;
    sort_by: 'created_at' | 'total_paid' | 'updated_at';
    sort_type: Order;
}
