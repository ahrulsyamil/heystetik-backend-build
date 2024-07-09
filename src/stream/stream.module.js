"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5c92c383-06a8-562e-af93-3d07a6ee1dc4")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../auth/user/user.service");
const interest_augmentation_skin_goals_service_1 = require("../interest-augmentation-skin-goals/interest-augmentation-skin-goals.service");
const interest_body_corrective_skin_goals_service_1 = require("../interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.service");
const interest_face_corrective_skin_goals_service_1 = require("../interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.service");
const interest_sexually_and_skin_diseases_skin_goals_service_1 = require("../interest-sexually-and-skin-diseases-skin-goals/interest-sexually-and-skin-diseases-skin-goals.service");
const lookup_service_1 = require("../lookup/lookup.service");
const media_service_1 = require("../media/media.service");
const notification_service_1 = require("../notification/notification.service");
const prisma_module_1 = require("../prisma/prisma.module");
const stream_like_service_1 = require("../stream-like/stream-like.service");
const stream_save_service_1 = require("../stream-save/stream-save.service");
const stream_controller_1 = require("./stream.controller");
const stream_service_1 = require("./stream.service");
let StreamModule = class StreamModule {
};
StreamModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [stream_controller_1.StreamController],
        providers: [
            stream_service_1.StreamService,
            user_service_1.UserService,
            stream_save_service_1.StreamSaveService,
            stream_like_service_1.StreamLikeService,
            media_service_1.MediaService,
            interest_face_corrective_skin_goals_service_1.InterestFaceCorrectiveSkinGoalsService,
            interest_body_corrective_skin_goals_service_1.InterestBodyCorrectiveSkinGoalsService,
            interest_augmentation_skin_goals_service_1.InterestAugmentationSkinGoalsService,
            interest_sexually_and_skin_diseases_skin_goals_service_1.InterestSexuallyAndSkinDiseasesSkinGoalsService,
            notification_service_1.NotificationService,
            lookup_service_1.LookupService,
        ],
    })
], StreamModule);
exports.StreamModule = StreamModule;
//# sourceMappingURL=stream.module.js.map
//# debugId=5c92c383-06a8-562e-af93-3d07a6ee1dc4
