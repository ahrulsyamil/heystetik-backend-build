"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a5255db9-4fd2-54c7-937f-44f3597e466a")}catch(e){}}();

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
exports.IsNotExist = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const prisma_service_1 = require("../../prisma/prisma.service");
let IsNotExist = class IsNotExist {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async validate(value, args) {
        const model = args.constraints[0];
        const field = args.constraints[1];
        const result = await this.prismaService[model].findFirst({
            where: {
                NOT: {
                    [field]: value ? Number(value) : undefined,
                },
                deleted_at: null,
            },
        });
        return !!result;
    }
    defaultMessage(args) {
        return args.constraints[2] ?? `${args.constraints[0]} is exist.`;
    }
};
IsNotExist = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], IsNotExist);
exports.IsNotExist = IsNotExist;
//# sourceMappingURL=is-not-exists.validator.js.map
//# debugId=a5255db9-4fd2-54c7-937f-44f3597e466a
