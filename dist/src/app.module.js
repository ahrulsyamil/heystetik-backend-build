"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="34c46b6f-a5b6-5e47-b4f3-e22546d8e77b")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const express_1 = require("@bull-board/express");
const nestjs_1 = require("@bull-board/nestjs");
const bull_1 = require("@nestjs/bull");
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const redisStore = require("cache-manager-redis-store");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const bank_module_1 = require("./bank/bank.module");
const broadcast_module_1 = require("./broadcast/broadcast.module");
const chat_opening_module_1 = require("./chat-opening/chat-opening.module");
const chat_quick_reply_module_1 = require("./chat-quick-reply/chat-quick-reply.module");
const chat_module_1 = require("./chat/chat.module");
const clinic_module_1 = require("./clinic/clinic.module");
const concern_module_1 = require("./concern/concern.module");
const consultation_review_module_1 = require("./consultation-review/consultation-review.module");
const consultation_module_1 = require("./consultation/consultation.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const doctor_customer_schedules_module_1 = require("./doctor-customer-schedules/doctor_customer_schedules.module");
const doctor_schedule_module_1 = require("./doctor-schedule/doctor_schedule.module");
const doctor_module_1 = require("./doctor/doctor.module");
const fcm_module_1 = require("./fcm/fcm.module");
const geography_module_1 = require("./geography/geography.module");
const configuration_1 = require("./globals/config/configuration");
const is_active_validator_1 = require("./globals/validator/is-active.validator");
const is_exists_validator_1 = require("./globals/validator/is-exists.validator");
const is_not_exists_validator_1 = require("./globals/validator/is-not-exists.validator");
const interest_augmentation_skin_goals_module_1 = require("./interest-augmentation-skin-goals/interest-augmentation-skin-goals.module");
const interest_beauty_profile_module_1 = require("./interest-beauty-profile/interest_beauty_profile.module");
const interest_body_corrective_skin_goals_module_1 = require("./interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.module");
const interest_budget_skin_goals_module_1 = require("./interest-budget-skin-goals/interest_budget_skin_goals.module");
const interest_condition_customer_module_1 = require("./interest-condition-customer/interest-condition-customer.module");
const interest_face_corrective_skin_goals_module_1 = require("./interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.module");
const interest_history_treatment_skin_goals_module_1 = require("./interest-history-treatment-skin-goals/interest_history_treatment_skin_goals.module");
const interest_sexually_and_skin_diseases_skin_goals_module_1 = require("./interest-sexually-and-skin-diseases-skin-goals/interest-sexually-and-skin-diseases-skin-goals.module");
const interest_condition_module_1 = require("./interest_conditions/interest-condition.module");
const invoice_module_1 = require("./invoice/invoice.module");
const lookup_module_1 = require("./lookup/lookup.module");
const mail_module_1 = require("./mail/mail.module");
const media_module_1 = require("./media/media.module");
const medical_history_module_1 = require("./medical-history/medical-history.module");
const midtrans_module_1 = require("./midtrans/midtrans.module");
const minhey_module_1 = require("./minhey/minhey.module");
const my_journey_module_1 = require("./my-journey/my-journey.module");
const notification_module_1 = require("./notification/notification.module");
const order_management_module_1 = require("./order-management/order-management.module");
const payment_method_module_1 = require("./payment-method/payment-method.module");
const pharmacy_module_1 = require("./pharmacy/pharmacy.module");
const prisma_module_1 = require("./prisma/prisma.module");
const product_review_module_1 = require("./product-review/product-review.module");
const product_module_1 = require("./product/product.module");
const profile_doctor_module_1 = require("./profile-doctor/profile-doctor.module");
const profile_user_module_1 = require("./profile-user/profile-user.module");
const profile_module_1 = require("./profile/profile.module");
const psef_module_1 = require("./psef/psef.module");
const qontak_module_1 = require("./qontak/qontak.module");
const queue_email_processor_1 = require("./queue/queue-email.processor");
const queue_fcm_processor_1 = require("./queue/queue-fcm.processor");
const queue_task_schedule_processor_1 = require("./queue/queue-task-schedule.processor");
const queue_telegram_processor_1 = require("./queue/queue-telegram.processor");
const queue_verification_processor_1 = require("./queue/queue-verification.processor");
const queue_whatsapp_cloud_process_1 = require("./queue/queue-whatsapp-cloud.process");
const queue_module_1 = require("./queue/queue.module");
const recipe_recomendation_skincare_module_1 = require("./recipe-recomendation-skincare/recipe-recomendation-skincare.module");
const recipe_recomendation_treatment_module_1 = require("./recipe-recomendation-treatment/recipe-recomendation-treatment.module");
const registration_module_1 = require("./registration/registration.module");
const roles_module_1 = require("./roles/roles.module");
const shipment_gosend_module_1 = require("./shipment-gosend/shipment-gosend.module");
const shipment_sicepat_module_1 = require("./shipment-sicepat/shipment-sicepat.module");
const shipping_module_1 = require("./shipping/shipping.module");
const slideshow_banner_module_1 = require("./slideshow-banner/slideshow_banner.module");
const snips_tips_module_1 = require("./snips-tips/snips_tips.module");
const socket_module_1 = require("./socket/socket.module");
const solution_product_module_1 = require("./solution-product/solution-product.module");
const solution_treatment_module_1 = require("./solution-treatment/solution-treatment.module");
const stream_comment_module_1 = require("./stream-comment/stream-comment.module");
const stream_like_module_1 = require("./stream-like/stream-like.module");
const stream_save_module_1 = require("./stream-save/stream-save.module");
const stream_module_1 = require("./stream/stream.module");
const task_schedule_module_1 = require("./task-schedule/task-schedule.module");
const task_scheduler_module_1 = require("./task-scheduler/task-scheduler.module");
const telegram_mock_otp_module_1 = require("./telegram-mock-otp/telegram-mock-otp.module");
const transaction_consultation_module_1 = require("./transaction-consultation/transaction-consultation.module");
const transaction_product_module_1 = require("./transaction-product/transaction-product.module");
const transaction_treatment_module_1 = require("./transaction-treatment/transaction-treatment.module");
const transaction_module_1 = require("./transaction/transaction.module");
const treatment_review_module_1 = require("./treatment-review/treatment-review.module");
const treatment_module_1 = require("./treatment/treatment.module");
const user_account_verification_module_1 = require("./user-account-verification/user-account-verification.module");
const user_address_module_1 = require("./user-address/user-address.module");
const user_balance_module_1 = require("./user-balance/user-balance.module");
const user_bank_account_module_1 = require("./user-bank-account/user-bank-account.module");
const user_block_module_1 = require("./user-block/user-block.module");
const user_cart_treatment_module_1 = require("./user-cart-treatment/user-cart-treatment.module");
const user_cart_module_1 = require("./user-cart/user-cart.module");
const user_location_module_1 = require("./user-location/user-location.module");
const user_profile_module_1 = require("./user-profile/user-profile.module");
const user_review_module_1 = require("./user-review/user-review.module");
const user_wishlist_treatment_module_1 = require("./user-wishlist-treatment/user-wishlist-treatment.module");
const user_wishlist_module_1 = require("./user-wishlist/user-wishlist.module");
const users_module_1 = require("./users/users.module");
const verification_module_1 = require("./verification/verification.module");
const voucher_module_1 = require("./voucher/voucher.module");
const whatsapp_cloud_module_1 = require("./whatsapp-cloud/whatsapp-cloud.module");
const xendit_module_1 = require("./xendit/xendit.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
            }),
            cache_manager_1.CacheModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    store: redisStore,
                    host: configService.get('redis.host'),
                    port: configService.get('redis.port'),
                }),
                inject: [config_1.ConfigService],
            }),
            bull_1.BullModule.forRootAsync('queue-config', {
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    prefix: 'bull-queue',
                    redis: {
                        host: config.get('redis').host,
                        port: config.get('redis').port,
                    },
                    defaultJobOptions: {
                        removeOnComplete: true,
                        removeOnFail: false,
                    },
                }),
            }),
            nestjs_1.BullBoardModule.forRoot({
                route: '/queues',
                adapter: express_1.ExpressAdapter,
            }),
            schedule_1.ScheduleModule.forRoot(),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            interest_beauty_profile_module_1.InterestBeautyProfileModule,
            interest_face_corrective_skin_goals_module_1.InterestFaceCorrectiveSkinGoalsModule,
            interest_body_corrective_skin_goals_module_1.InterestBodyCorrectiveSkinGoalsModule,
            interest_history_treatment_skin_goals_module_1.InterestHistoryTreatmentSkinGoalsModule,
            interest_budget_skin_goals_module_1.InterestBudgetSkinGoalsModule,
            snips_tips_module_1.SnipsTipsModule,
            slideshow_banner_module_1.SlideshowBannerModule,
            geography_module_1.GeographyModule,
            doctor_schedule_module_1.DoctorScheduleModule,
            interest_augmentation_skin_goals_module_1.InterestAugmentationSkinGoalsModule,
            roles_module_1.RolesModule,
            doctor_customer_schedules_module_1.DoctorCustomerSchedulesModule,
            interest_condition_module_1.InterestConditionsModule,
            interest_condition_customer_module_1.InterestConditionCustomerModule,
            chat_module_1.ChatModule,
            chat_opening_module_1.ChatOpeningModule,
            chat_quick_reply_module_1.ChatQuickReplyModule,
            recipe_recomendation_skincare_module_1.RecipeRecomendationSkincareModule,
            recipe_recomendation_treatment_module_1.RecipeRecomendationTreatmentModule,
            user_balance_module_1.UserBalanceModule,
            user_address_module_1.UserAddressModule,
            user_bank_account_module_1.UserBankAccountModule,
            user_wishlist_module_1.UserWishlistModule,
            user_cart_module_1.UserCartModule,
            transaction_product_module_1.TransactionProductModule,
            transaction_treatment_module_1.TransactionTreatmentModule,
            transaction_consultation_module_1.TransactionConsultationModule,
            notification_module_1.NotificationModule,
            media_module_1.MediaModule,
            product_module_1.ProductModule,
            lookup_module_1.LookupModule,
            bank_module_1.BankModule,
            medical_history_module_1.MedicalHistoryModule,
            midtrans_module_1.MidtransModule,
            payment_method_module_1.PaymentMethodModule,
            transaction_module_1.TransactionModule,
            consultation_module_1.ConsultationModule,
            profile_doctor_module_1.ProfileDoctorModule,
            user_location_module_1.UserLocationModule,
            fcm_module_1.FcmModule,
            stream_module_1.StreamModule,
            concern_module_1.ConcernModule,
            task_scheduler_module_1.TaskSchedulerModule,
            socket_module_1.SocketModule,
            mail_module_1.MailModule,
            clinic_module_1.ClinicModule,
            treatment_module_1.TreatmentModule,
            solution_treatment_module_1.SolutionTreatmentModule,
            user_cart_treatment_module_1.UserCartTreatmentModule,
            solution_product_module_1.SolutionProductModule,
            user_wishlist_treatment_module_1.UserWishlistTreatmentModule,
            treatment_review_module_1.TreatmentReviewModule,
            consultation_review_module_1.ConsultationReviewModule,
            stream_like_module_1.StreamLikeModule,
            stream_comment_module_1.StreamCommentModule,
            stream_save_module_1.StreamSaveModule,
            whatsapp_cloud_module_1.WhatsappCloudModule,
            registration_module_1.RegistrationModule,
            profile_user_module_1.ProfileUserModule,
            profile_module_1.ProfileModule,
            user_review_module_1.UserReviewModule,
            user_block_module_1.UserBlockModule,
            my_journey_module_1.MyJourneyModule,
            user_profile_module_1.UserProfileModule,
            product_review_module_1.ProductReviewModule,
            verification_module_1.VerificationModule,
            dashboard_module_1.DashboardModule,
            user_account_verification_module_1.UserAccountVerificationModule,
            invoice_module_1.InvoiceModule,
            minhey_module_1.MinheyModule,
            broadcast_module_1.BroadcastModule,
            telegram_mock_otp_module_1.TelegramMockOtpModule,
            interest_sexually_and_skin_diseases_skin_goals_module_1.InterestSexuallyAndSkinDiseasesSkinGoalsModule,
            queue_module_1.QueueModule,
            pharmacy_module_1.PharmacyModule,
            shipment_sicepat_module_1.ShipmentSicepatModule,
            shipment_gosend_module_1.ShipmentGosendModule,
            task_schedule_module_1.TaskScheduleModule,
            shipping_module_1.ShippingModule,
            order_management_module_1.OrderManagementModule,
            psef_module_1.PsefModule,
            qontak_module_1.QontakModule,
            voucher_module_1.VoucherModule,
            xendit_module_1.XenditModule,
            doctor_module_1.DoctorModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            queue_email_processor_1.QueueEmailProcessor,
            queue_fcm_processor_1.QueueFcmProcessor,
            queue_telegram_processor_1.QueueTelegramProcessor,
            queue_whatsapp_cloud_process_1.QueueWhatsappCloudProcessor,
            queue_verification_processor_1.QueueVerificationProcessor,
            queue_task_schedule_processor_1.QueueTaskScheduleProcessor,
            is_exists_validator_1.IsExist,
            is_active_validator_1.IsActive,
            is_not_exists_validator_1.IsNotExist,
        ],
        exports: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
//# debugId=34c46b6f-a5b6-5e47-b4f3-e22546d8e77b
