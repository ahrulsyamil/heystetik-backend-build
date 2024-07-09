"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8a502cbc-409b-5f75-b53f-d610ad5ec3cf")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../auth/user/user.service");
const clinic_service_1 = require("../clinic/clinic.service");
const date_to_local_transformer_1 = require("../globals/transformer/date-to-local.transformer");
const product_service_1 = require("../product/product.service");
const dashboard_service_1 = require("./dashboard.service");
const get_dashboard_marketshare_dto_1 = require("./dto/get-dashboard-marketshare.dto");
const get_dashboard_top_five_sales_dto_1 = require("./dto/get-dashboard-top-five-sales.dto");
let DashboardController = class DashboardController {
    constructor(dashboardService, productService, userService, clinicService) {
        this.dashboardService = dashboardService;
        this.productService = productService;
        this.userService = userService;
        this.clinicService = clinicService;
    }
    async getMonthlyRevenue() {
        const result = await this.dashboardService.monthlyRevenue();
        return (0, date_to_local_transformer_1.transformDatesToLocal)(result
            .map((item, i) => {
            if (i == result.length - 1)
                return;
            const currentValue = item.value;
            const previousValue = result[i + 1].value;
            let percentage = 0;
            if (previousValue !== 0) {
                percentage = ((currentValue - previousValue) / previousValue) * 100;
            }
            else {
                percentage = currentValue === 0 ? 0 : 100;
            }
            return {
                ...item,
                year: Number(item.year),
                month: Number(item.month),
                date: new Date(item.date),
                percentage: Number.isInteger(percentage)
                    ? Number(percentage)
                    : Number(percentage.toFixed(2)),
            };
        })
            .slice(0, -1));
    }
    async getMarketShare(query) {
        const result = await this.dashboardService.marketShare(query.year, query.month);
        return result.map((item) => {
            let percentage = 0;
            const total = result.reduce((sum, item) => sum + item.current, 0);
            if (item.previous !== 0) {
                percentage = ((item.current - item.previous) / item.previous) * 100;
            }
            else {
                percentage = item.current === 0 ? 0 : 100;
            }
            return {
                ...item,
                percentage: Number.isInteger(percentage)
                    ? Number(percentage)
                    : Number(percentage.toFixed(2)),
                ratio: total === 0
                    ? 0
                    : Number.isInteger((item.current / total) * 100)
                        ? Number((item.current / total) * 100)
                        : Number(((item.current / total) * 100).toFixed(2)),
            };
        });
    }
    async getDeliveryOption(query) {
        const result = await this.dashboardService.deliveryOption(query.year, query.month);
        return result.map((item) => {
            const total = result.reduce((sum, item) => sum + item.value, 0);
            return {
                ...item,
                percentage: total === 0
                    ? 0
                    : Number.isInteger((item.value / total) * 100)
                        ? (item.value / total) * 100
                        : ((item.value / total) * 100).toFixed(2),
            };
        });
    }
    async totalOrder() {
        const result = await this.dashboardService.totalOrder();
        return (0, date_to_local_transformer_1.transformDatesToLocal)(result
            .map((item, i) => {
            if (i == result.length - 1)
                return;
            const currentValue = item.value;
            const previousValue = result[i + 1].value;
            let percentage = 0;
            if (previousValue !== 0) {
                percentage = ((currentValue - previousValue) / previousValue) * 100;
            }
            else {
                percentage = currentValue === 0 ? 0 : 100;
            }
            return {
                ...item,
                year: Number(item.year),
                month: Number(item.month),
                date: new Date(item.date),
                percentage: Number.isInteger(percentage)
                    ? Number(percentage)
                    : Number(percentage.toFixed(2)),
            };
        })
            .slice(0, -1));
    }
    async getTopFiveSales(query) {
        const result = await this.dashboardService.topFiveSales(query);
        return await Promise.all(result.map(async (item) => {
            let percentage = 0;
            if (item.previous_revenue !== 0) {
                percentage =
                    ((item.current_revenue - item.previous_revenue) /
                        item.previous_revenue) *
                        100;
            }
            else {
                percentage = item.current_revenue === 0 ? 0 : 100;
            }
            const product = await this.productService.find(item.id);
            return {
                ...item,
                percentage,
                media_products: product.media_products,
            };
        }));
    }
    async getActiveConsultationDoctor() {
        const result = await this.dashboardService.activeDoctorConsultation();
        return await Promise.all(result.map(async (item) => {
            const doctor = await this.userService.find(item.id);
            return {
                ...item,
                media_user_profile_picture: doctor.media_user_profile_picture,
            };
        }));
    }
    async getNewUser() {
        const result = await this.dashboardService.newUser();
        return (0, date_to_local_transformer_1.transformDatesToLocal)(result
            .map((item, i) => {
            if (i == result.length - 1)
                return;
            return {
                ...item,
                year: Number(item.year),
                month: Number(item.month),
                date: new Date(item.date),
            };
        })
            .slice(0, -1));
    }
    async getPartnerSales() {
        const result = await this.dashboardService.partnerSales();
        return await Promise.all(result.map(async (item) => {
            let percentage = 0;
            if (item.previous_sales !== 0) {
                percentage =
                    ((item.current_sales - item.previous_sales) / item.previous_sales) *
                        100;
            }
            else {
                percentage = item.current_sales === 0 ? 0 : 100;
            }
            const clinic = await this.clinicService.findOne(item.id);
            return {
                ...item,
                percentage,
                media_clinic_logo: clinic.media_clinic_logo,
            };
        }));
    }
};
__decorate([
    (0, common_1.Get)('monthly-revenue'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getMonthlyRevenue", null);
__decorate([
    (0, common_1.Get)('market-share'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_dashboard_marketshare_dto_1.GetDashboardMarketshareDto]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getMarketShare", null);
__decorate([
    (0, common_1.Get)('delivery-option'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_dashboard_marketshare_dto_1.GetDashboardMarketshareDto]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDeliveryOption", null);
__decorate([
    (0, common_1.Get)('total-order'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "totalOrder", null);
__decorate([
    (0, common_1.Get)('top-five-sales'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_dashboard_top_five_sales_dto_1.GetDashboardTopFiveSalesDto]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getTopFiveSales", null);
__decorate([
    (0, common_1.Get)('active-consultation-doctor'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getActiveConsultationDoctor", null);
__decorate([
    (0, common_1.Get)('new-user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getNewUser", null);
__decorate([
    (0, common_1.Get)('partner-sales'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getPartnerSales", null);
DashboardController = __decorate([
    (0, common_1.Controller)('dashboard'),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService,
        product_service_1.ProductService,
        user_service_1.UserService,
        clinic_service_1.ClinicService])
], DashboardController);
exports.DashboardController = DashboardController;
//# sourceMappingURL=dashboard.controllers.js.map
//# debugId=8a502cbc-409b-5f75-b53f-d610ad5ec3cf
