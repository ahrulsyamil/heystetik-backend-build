"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5953d954-ad90-5012-b73b-ecbcf54c7cce")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideshowBannerModule = void 0;
const common_1 = require("@nestjs/common");
const slideshow_banner_service_1 = require("./slideshow_banner.service");
const slideshow_banner_controller_1 = require("./slideshow_banner.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const media_service_1 = require("../media/media.service");
let SlideshowBannerModule = class SlideshowBannerModule {
};
SlideshowBannerModule = __decorate([
    (0, common_1.Module)({
        controllers: [slideshow_banner_controller_1.SlideshowBannerController],
        providers: [slideshow_banner_service_1.SlideshowBannerService, media_service_1.MediaService],
        imports: [prisma_module_1.PrismaModule],
    })
], SlideshowBannerModule);
exports.SlideshowBannerModule = SlideshowBannerModule;
//# sourceMappingURL=slideshow_banner.module.js.map
//# debugId=5953d954-ad90-5012-b73b-ecbcf54c7cce
