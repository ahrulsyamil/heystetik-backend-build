"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="04266044-621b-5547-8fff-cf342e4baee1")}catch(e){}}();

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
exports.InterestSexuallyAndSkinDiseasesSkinGoalsController = void 0;
const common_1 = require("@nestjs/common");
const interest_sexually_and_skin_diseases_skin_goals_service_1 = require("./interest-sexually-and-skin-diseases-skin-goals.service");
const create_interest_sexually_and_skin_diseases_skin_goals_1 = require("./dto/create-interest-sexually-and-skin-diseases-skin-goals");
let InterestSexuallyAndSkinDiseasesSkinGoalsController = class InterestSexuallyAndSkinDiseasesSkinGoalsController {
    constructor(interestSexuallyAndSkinDiseasesSkinGoals) {
        this.interestSexuallyAndSkinDiseasesSkinGoals = interestSexuallyAndSkinDiseasesSkinGoals;
    }
    create(response, data) {
        this.interestSexuallyAndSkinDiseasesSkinGoals.create(data);
        return response.status(201).json({
            data: null,
            message: 'Success Create Interest Sexually And Skin Diseases Skin Goals',
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_interest_sexually_and_skin_diseases_skin_goals_1.CreateInterestSexuallyAndSkinDiseasesSkinGoalsDto]),
    __metadata("design:returntype", void 0)
], InterestSexuallyAndSkinDiseasesSkinGoalsController.prototype, "create", null);
InterestSexuallyAndSkinDiseasesSkinGoalsController = __decorate([
    (0, common_1.Controller)('interest-sexually-and-skin-diseases-skin-goals'),
    __metadata("design:paramtypes", [interest_sexually_and_skin_diseases_skin_goals_service_1.InterestSexuallyAndSkinDiseasesSkinGoalsService])
], InterestSexuallyAndSkinDiseasesSkinGoalsController);
exports.InterestSexuallyAndSkinDiseasesSkinGoalsController = InterestSexuallyAndSkinDiseasesSkinGoalsController;
//# sourceMappingURL=interest-sexually-and-skin-diseases-skin-goals.controller.js.map
//# debugId=04266044-621b-5547-8fff-cf342e4baee1
