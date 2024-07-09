"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="41c35375-52bb-5337-a3a3-9d3345bc7401")}catch(e){}}();

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
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InvoiceService = class InvoiceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createConsultationInvoice(data) {
        return this.prisma.consultation_invoice.create({
            data,
        });
    }
    async findConsultationInvoice(id) {
        return this.prisma.consultation_invoice.findUnique({
            where: {
                id,
            },
        });
    }
    async findConsultationInvoiceBy(where) {
        return this.prisma.consultation_invoice.findFirst({
            where,
        });
    }
    async findUniqueConsultationInvoice(where) {
        return this.prisma.consultation_invoice.findUnique({
            where,
        });
    }
    async generateConsultationInvoiceNumber() {
        const today = new Date();
        const formattedDate = today.toISOString().slice(0, 10).replace(/-/g, '');
        const invoicesOnThisDay = await this.prisma.consultation_invoice.count({
            where: {
                invoice_number: {
                    startsWith: `INV/${formattedDate}`,
                },
            },
        });
        const sequentialNumber = (invoicesOnThisDay + 1)
            .toString()
            .padStart(3, '0');
        return `INV/${formattedDate}/${sequentialNumber}/KD`;
    }
    async createProductInvoice(data) {
        return this.prisma.product_invoice.create({
            data,
        });
    }
    async createProductItemInvoice(data) {
        return this.prisma.product_invoice_item.createMany({
            data,
        });
    }
    async findProductInvoice(id) {
        return this.prisma.product_invoice.findUnique({
            where: {
                id,
            },
        });
    }
    async findProductInvoiceBy(where) {
        return this.prisma.product_invoice.findUnique({
            where,
            include: {
                product_invoice_items: true,
            },
        });
    }
    async findUniqueProductInvoice(where) {
        return this.prisma.product_invoice.findUnique({
            where,
        });
    }
    async generateProductInvoiceNumber() {
        const today = new Date();
        const formattedDate = today.toISOString().slice(0, 10).replace(/-/g, '');
        const invoicesOnThisDay = await this.prisma.product_invoice.count({
            where: {
                invoice_number: {
                    startsWith: `INV/${formattedDate}`,
                },
            },
        });
        const sequentialNumber = (invoicesOnThisDay + 1)
            .toString()
            .padStart(3, '0');
        return `INV/${formattedDate}/${sequentialNumber}/PP`;
    }
};
InvoiceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InvoiceService);
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map
//# debugId=41c35375-52bb-5337-a3a3-9d3345bc7401
