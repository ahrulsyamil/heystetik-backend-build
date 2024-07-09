"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6a728c8c-74d5-5675-a564-0f3c2770dfe8")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const dayjs = require("dayjs");
const prisma_service_1 = require("../prisma/prisma.service");
let DashboardService = class DashboardService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async monthlyRevenue() {
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT
            SERIES.*,
            (
              COALESCE((SELECT SUM(total_paid) FROM transaction_consultation WHERE payment_status = 'SUCCEEDED' AND date_part('year', created_at) = date_part('year', SERIES.date) AND date_part('month', created_at) = date_part('month', SERIES.date)), 0) 
              +
              COALESCE((SELECT SUM(transaction_product_item.subtotal) FROM transaction_product INNER JOIN transaction_product_item ON transaction_product_item.transaction_product_id = transaction_product.id WHERE transaction_product.payment_status = 'SUCCEEDED' AND date_part('year', transaction_product.created_at) = date_part('year', SERIES.date) AND date_part('month', transaction_product.created_at) = date_part('month', SERIES.date)), 0) 
              +
              COALESCE((SELECT SUM(total_paid) FROM transaction_treatment WHERE payment_status = 'SUCCEEDED' AND date_part('year', created_at) = date_part('year', SERIES.date) AND date_part('month', created_at) = date_part('month', SERIES.date)), 0) 
            ) AS value
          FROM (
            SELECT 
              to_char(date_trunc('month', current_date) - interval '1 month' * (s.n - 1), 'YYYY') AS year,
              to_char(date_trunc('month', current_date) - interval '1 month' * (s.n - 1), 'MM') AS month,
              to_char(date_trunc('month', current_date) - interval '1 month' * (s.n - 1), 'Mon') AS month_name,
              current_date - interval '1 month' * (s.n - 1) AS date
            FROM 
              generate_series(1, 7) as s(n)
          ) SERIES
          ORDER BY SERIES.date DESC
        `));
        });
    }
    async deliveryOption(year, month) {
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT 
            (
              SELECT 
                COUNT(*)
              FROM
                transaction_product
              INNER JOIN
                shipping_product ON shipping_product.transaction_product_id = transaction_product.id
              INNER JOIN
                shipping_method ON shipping_method.id = shipping_product.shipping_method_id
              WHERE
                shipping_method.type = SM.type
                AND transaction_product.payment_status = 'SUCCEEDED'
                AND date_part('year', transaction_product.created_at) = ${year}
                AND date_part('month', transaction_product.created_at) = ${month}
            ) AS value,
            SM.type AS option
          FROM 
            shipping_method SM
          GROUP BY type    
        `));
        });
    }
    async marketShare(year, month) {
        const previousMonth = dayjs().year(year).month(month).subtract(1, 'month');
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT 
            (
              ARRAY[ 'Consultation', 'Treatment', 
              'Skincare', 'Drugs' ]
            ) [generate_series] AS type, 
            CASE WHEN (
              ARRAY[ 'Consultation', 'Treatment', 
              'Skincare', 'Drugs' ]
            ) [generate_series] = 'Consultation' THEN COALESCE(
              (
                SELECT 
                  SUM(total_paid) 
                FROM 
                  transaction_consultation 
                WHERE 
                  payment_status = 'SUCCEEDED' 
                  AND date_part('year', created_at) = ${year} 
                  AND date_part('month', created_at) = ${month}
              ), 
              0
            ) WHEN (
              ARRAY[ 'Consultation', 'Treatment', 
              'Skincare', 'Drugs' ]
            ) [generate_series] = 'Treatment' THEN COALESCE(
              (
                SELECT 
                  SUM(total_paid) 
                FROM 
                  transaction_treatment 
                WHERE 
                  payment_status = 'SUCCEEDED' 
                  AND date_part('year', created_at) = ${year}
                  AND date_part('month', created_at) = ${month}
              ), 
              0
            ) WHEN (
              ARRAY[ 'Consultation', 'Treatment', 
              'Skincare', 'Drugs' ]
            ) [generate_series] = 'Skincare' THEN COALESCE(
              (
                SELECT 
                  SUM(
                    transaction_product_item.subtotal
                  ) 
                FROM 
                  transaction_product 
                  INNER JOIN transaction_product_item ON transaction_product_item.transaction_product_id = transaction_product.id 
                  INNER JOIN product ON product.id = transaction_product_item.product_id 
                WHERE 
                  transaction_product.payment_status = 'SUCCEEDED' 
                  AND product.type = 'SKINCARE' 
                  AND date_part(
                    'year', transaction_product.created_at
                  ) = ${year}
                  AND date_part(
                    'month', transaction_product.created_at
                  ) = ${month}
              ), 
              0
            ) ELSE COALESCE(
              (
                SELECT 
                  SUM(
                    transaction_product_item.subtotal
                  ) 
                FROM 
                  transaction_product 
                  INNER JOIN transaction_product_item ON transaction_product_item.transaction_product_id = transaction_product.id 
                  INNER JOIN product ON product.id = transaction_product_item.product_id 
                WHERE 
                  transaction_product.payment_status = 'SUCCEEDED' 
                  AND product.type = 'DRUGS' 
                  AND date_part(
                    'year', transaction_product.created_at
                  ) = ${year}
                  AND date_part(
                    'month', transaction_product.created_at
                  ) = ${year}
              ), 
              0
            ) END AS current, 
            CASE WHEN (
              ARRAY[ 'Consultation', 'Treatment', 
              'Skincare', 'Drugs' ]
            ) [generate_series] = 'Consultation' THEN COALESCE(
              (
                SELECT 
                  SUM(total_paid) 
                FROM 
                  transaction_consultation 
                WHERE 
                  payment_status = 'SUCCEEDED' 
                  AND date_part('year', created_at) = ${previousMonth.year()}
                  AND date_part('month', created_at) = ${previousMonth.month()}
              ), 
              0
            ) WHEN (
              ARRAY[ 'Consultation', 'Treatment', 
              'Skincare', 'Drugs' ]
            ) [generate_series] = 'Treatment' THEN COALESCE(
              (
                SELECT 
                  SUM(total_paid) 
                FROM 
                  transaction_treatment 
                WHERE 
                  payment_status = 'SUCCEEDED' 
                  AND date_part('year', created_at) = ${previousMonth.year()}
                  AND date_part('month', created_at) = ${previousMonth.month()}
              ), 
              0
            ) WHEN (
              ARRAY[ 'Consultation', 'Treatment', 
              'Skincare', 'Drugs' ]
            ) [generate_series] = 'Skincare' THEN COALESCE(
              (
                SELECT 
                  SUM(
                    transaction_product_item.subtotal
                  ) 
                FROM 
                  transaction_product 
                  INNER JOIN transaction_product_item ON transaction_product_item.transaction_product_id = transaction_product.id 
                  INNER JOIN product ON product.id = transaction_product_item.product_id 
                WHERE 
                  transaction_product.payment_status = 'SUCCEEDED' 
                  AND product.type = 'SKINCARE' 
                  AND date_part(
                    'year', transaction_product.created_at
                  ) = ${previousMonth.year()}
                  AND date_part(
                    'month', transaction_product.created_at
                  ) = ${previousMonth.month()}
              ), 
              0
            ) ELSE COALESCE(
              (
                SELECT 
                  SUM(
                    transaction_product_item.subtotal
                  ) 
                FROM 
                  transaction_product 
                  INNER JOIN transaction_product_item ON transaction_product_item.transaction_product_id = transaction_product.id 
                  INNER JOIN product ON product.id = transaction_product_item.product_id 
                WHERE 
                  transaction_product.payment_status = 'SUCCEEDED' 
                  AND product.type = 'DRUGS' 
                  AND date_part(
                    'year', transaction_product.created_at
                  ) = ${previousMonth.year()}
                  AND date_part(
                    'month', transaction_product.created_at
                  ) = ${previousMonth.year()}
              ), 
              0
            ) END AS previous 
          FROM 
            generate_series(1, 4);
        `));
        });
    }
    async totalOrder() {
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT
            SERIES.*,
            (
              COALESCE((SELECT COUNT(*) FROM transaction_product WHERE payment_status = 'SUCCEEDED' AND date_part('year', created_at) = date_part('year', SERIES.date) AND date_part('month', created_at) = date_part('month', SERIES.date)), 0)
            ) AS value
          FROM (
            SELECT 
              to_char(date_trunc('month', current_date) - interval '1 month' * (s.n - 1), 'YYYY') AS year,
              to_char(date_trunc('month', current_date) - interval '1 month' * (s.n - 1), 'MM') AS month,
              to_char(date_trunc('month', current_date) - interval '1 month' * (s.n - 1), 'Mon') AS month_name,
              current_date - interval '1 month' * (s.n - 1) AS date
            FROM 
              generate_series(1, 7) as s(n)
          ) SERIES
          ORDER BY SERIES.date DESC
        `));
        });
    }
    async topFiveSales(data) {
        const previousMonth = dayjs()
            .year(data.year)
            .month(data.month)
            .subtract(1, 'month');
        let whereQuery = '';
        if (data.type && data.type != 'All') {
            whereQuery += `AND type = '${data.type.toUpperCase()}'`;
        }
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT
            P.id,
            P.name AS product_name,
            P.product_stock AS remaining_stock,
            COALESCE((
                SELECT 
                  SUM(subtotal) 
                FROM
                  transaction_product_item
                INNER JOIN transaction_product ON transaction_product.id = transaction_product_item.transaction_product_id
                WHERE 
                  transaction_product_item.product_id = P.id
                  AND transaction_product.payment_status = 'SUCCEEDED'
                  AND date_part('year', transaction_product.created_at) = ${data.year}
                  AND date_part('month', transaction_product.created_at) = ${data.month}
            ), 0) AS current_revenue,
            COALESCE((
                SELECT 
                  SUM(subtotal) 
                FROM
                  transaction_product_item
                INNER JOIN transaction_product ON transaction_product.id = transaction_product_item.transaction_product_id
                WHERE 
                  transaction_product_item.product_id = P.id
                  AND transaction_product.payment_status = 'SUCCEEDED'
                  AND date_part('year', transaction_product.created_at) = ${previousMonth.year()}
                  AND date_part('month', transaction_product.created_at) = ${previousMonth.month()}
            ), 0) AS previous_revenue
          FROM
            product P
          WHERE
            deleted_at IS NULL
            ${whereQuery}
          ORDER BY
            current_revenue DESC
          LIMIT 5
        `));
        });
    }
    async activeDoctorConsultation() {
        const now = dayjs().format('YYYY-MM-DD');
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT  
            U.id,
            U.fullname AS doctor_name,
            (
                SELECT 
                  COUNT(*)
                FROM
                  consultation_doctor_schedule
                WHERE
                  doctor_id = U.id
                  AND created_at::DATE = '${now}'
            ) AS customer_request,
            (
                SELECT 
                  COUNT(*)
                FROM
                  consultation_doctor_schedule
                WHERE
                  doctor_id = U.id
                  AND created_at::DATE = '${now}'
                  AND status = 'DIAMBIL'
            ) AS interaction
          FROM
            users U
          INNER JOIN doctor_schedules DS ON DS."userId" = U.id AND DS.day_number = ${dayjs().day()} AND DS.is_active
          WHERE
            U."roleId" = 2
            AND U.deleted_at IS NULL
          ORDER BY
            customer_request DESC,
            interaction DESC
        `));
        });
    }
    async newUser() {
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT
            SERIES.*,
            (
                SELECT 
                  COUNT(*)
                FROM
                  users
                WHERE
                  date_part('year', created_at) = date_part('year', SERIES.date)
                  AND date_part('month', created_at) = date_part('month', SERIES.date)
                  AND "roleId" = 3
                  AND finish_register IS TRUE
            ) AS value
          FROM (
            SELECT 
                to_char(date_trunc('month', current_date) - interval '1 month' * (s.n - 1), 'YYYY') AS year,
                to_char(date_trunc('month', current_date) - interval '1 month' * (s.n - 1), 'MM') AS month,
                to_char(date_trunc('month', current_date) - interval '1 month' * (s.n - 1), 'Mon') AS month_name,
                current_date - interval '1 month' * (s.n - 1) AS date
            FROM 
                generate_series(1, 7) as s(n)
          ) SERIES
          ORDER BY SERIES.date DESC
        `));
        });
    }
    async partnerSales() {
        const previousMonth = dayjs()
            .year(Number(dayjs.tz().format('YYYY')))
            .month(Number(dayjs.tz().format('M')))
            .subtract(1, 'month');
        return await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT
            C.id,
            C.name AS clinic_name,
            KK.name AS city,
            COALESCE((
                SELECT 
                  SUM(subtotal) 
                FROM
                  transaction_treatment_item
                INNER JOIN transaction_treatment ON transaction_treatment.id = transaction_treatment_item.transaction_treatment_id
                INNER JOIN treatment ON treatment.id = transaction_treatment_item.treatment_id
                WHERE 
                  treatment.clinic_id = C.id
                  AND transaction_treatment.payment_status = 'SUCCEEDED'
                  AND date_part('year', transaction_treatment.created_at) = ${dayjs
                .tz()
                .format('YYYY')}
                  AND date_part('month', transaction_treatment.created_at) = ${dayjs
                .tz()
                .format('M')}
            ), 0) AS current_sales,
            COALESCE((
                SELECT 
                  SUM(subtotal) 
                FROM
                  transaction_treatment_item
                INNER JOIN transaction_treatment ON transaction_treatment.id = transaction_treatment_item.transaction_treatment_id
                INNER JOIN treatment ON treatment.id = transaction_treatment_item.treatment_id
                WHERE 
                  treatment.clinic_id = C.id
                  AND transaction_treatment.payment_status = 'SUCCEEDED'
                  AND date_part('year', transaction_treatment.created_at) = ${previousMonth.year()}
                  AND date_part('month', transaction_treatment.created_at) = ${previousMonth.month()}
            ), 0) AS previous_sales
          FROM
            clinic C
          INNER JOIN kota_kabupatens KK ON KK.id = C.city_id
          WHERE
            C.deleted_at IS NULL
          ORDER BY
            current_sales DESC
        `));
        });
    }
};
DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map
//# debugId=6a728c8c-74d5-5675-a564-0f3c2770dfe8
