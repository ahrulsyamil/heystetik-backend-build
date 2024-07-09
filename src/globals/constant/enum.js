"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cd90ee9c-2231-5b39-a067-ce83b209cf56")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuAction = exports.ProductDiscountType = exports.BroadcastStatus = exports.SnipTipsStatus = exports.DoctorStatisticType = exports.BannerStatus = exports.BannerType = exports.AppSetting = exports.DoctorScheduleStatus = exports.PaymentStatus = exports.Currency = exports.Country = exports.LookupCategory = exports.XenditCustomerType = exports.XenditPaymentMethodReusability = exports.NotificationUserActivityType = exports.PaymentGateway = exports.TransactionFeeType = exports.NotificationSettingType = exports.VoucherDiscountType = exports.VoucherTargetBuyer = exports.VoucherPromotionType = exports.VourcherTarget = exports.VoucherType = exports.NotificationType = exports.Gender = exports.VerifyMethod = exports.ProductType = exports.PostTypeUserProfile = exports.TransactionType = exports.TransactionStatus = exports.OrderByTreatment = exports.TopicProductReview = exports.TopicTreatmentReview = exports.SortingTypeReview = exports.RatingOrder = exports.Order = exports.Role = exports.TypeOfPayment = exports.MethodOfPayment = exports.Lookup = exports.PriorityStatus = exports.VerifyType = void 0;
var VerifyType;
(function (VerifyType) {
    VerifyType["EMAIL"] = "email";
    VerifyType["PHONE"] = "phone";
})(VerifyType = exports.VerifyType || (exports.VerifyType = {}));
var PriorityStatus;
(function (PriorityStatus) {
    PriorityStatus["normal"] = "normal";
    PriorityStatus["high"] = "high";
})(PriorityStatus = exports.PriorityStatus || (exports.PriorityStatus = {}));
var Lookup;
(function (Lookup) {
    Lookup[Lookup["SKINCARE_CATEGORY"] = 0] = "SKINCARE_CATEGORY";
    Lookup[Lookup["SKINCARE_DISPLAY"] = 1] = "SKINCARE_DISPLAY";
    Lookup[Lookup["SKINCARE_TEXTURE"] = 2] = "SKINCARE_TEXTURE";
    Lookup[Lookup["SKINCARE_PACKAGING"] = 3] = "SKINCARE_PACKAGING";
    Lookup[Lookup["DRUGS_FORM"] = 4] = "DRUGS_FORM";
    Lookup[Lookup["DRUGS_CLASSIFICATION"] = 5] = "DRUGS_CLASSIFICATION";
    Lookup[Lookup["DRUGS_TYPE"] = 6] = "DRUGS_TYPE";
    Lookup[Lookup["DRUGS_PACKAGING"] = 7] = "DRUGS_PACKAGING";
    Lookup[Lookup["DRUGS_CATEGORY"] = 8] = "DRUGS_CATEGORY";
    Lookup[Lookup["NETTO"] = 9] = "NETTO";
    Lookup[Lookup["WEIGHT"] = 10] = "WEIGHT";
    Lookup[Lookup["SHIPPING"] = 11] = "SHIPPING";
})(Lookup = exports.Lookup || (exports.Lookup = {}));
var MethodOfPayment;
(function (MethodOfPayment) {
    MethodOfPayment["CARD"] = "CARD";
    MethodOfPayment["VIRTUAL_ACCOUNT"] = "VIRTUAL_ACCOUNT";
    MethodOfPayment["EWALLET"] = "EWALLET";
    MethodOfPayment["BANK_TRANSFER_MANUAL_VERIFICATION"] = "BANK_TRANSFER_MANUAL_VERIFICATION";
    MethodOfPayment["QR_CODE"] = "QR_CODE";
    MethodOfPayment["FREE"] = "FREE";
})(MethodOfPayment = exports.MethodOfPayment || (exports.MethodOfPayment = {}));
var TypeOfPayment;
(function (TypeOfPayment) {
    TypeOfPayment["CREDIT_CARD"] = "CREDIT_CARD";
    TypeOfPayment["BCA"] = "BCA";
    TypeOfPayment["BNI"] = "BNI";
    TypeOfPayment["BRI"] = "BRI";
    TypeOfPayment["MANDIRI"] = "MANDIRI";
    TypeOfPayment["PERMATA"] = "PERMATA";
    TypeOfPayment["GOPAY"] = "GOPAY";
    TypeOfPayment["OVO"] = "OVO";
    TypeOfPayment["SHOPEEPAY"] = "SHOPEEPAY";
    TypeOfPayment["QRIS"] = "QRIS";
    TypeOfPayment["FREE_VOUCHER"] = "FREE_VOUCHER";
    TypeOfPayment["DANA"] = "DANA";
    TypeOfPayment["LINKAJA"] = "LINKAJA";
    TypeOfPayment["ASTRAPAY"] = "ASTRAPAY";
    TypeOfPayment["JENIUSPAY"] = "JENIUSPAY";
    TypeOfPayment["BSI"] = "BSI";
    TypeOfPayment["BJB"] = "BJB";
    TypeOfPayment["BSS"] = "BSS";
    TypeOfPayment["CIMB"] = "CIMB";
    TypeOfPayment["MSB"] = "MSB";
})(TypeOfPayment = exports.TypeOfPayment || (exports.TypeOfPayment = {}));
var Role;
(function (Role) {
    Role[Role["Superadmin"] = 1] = "Superadmin";
    Role[Role["Doctor"] = 2] = "Doctor";
    Role[Role["Customer"] = 3] = "Customer";
})(Role = exports.Role || (exports.Role = {}));
var Order;
(function (Order) {
    Order["asc"] = "asc";
    Order["desc"] = "desc";
})(Order = exports.Order || (exports.Order = {}));
var RatingOrder;
(function (RatingOrder) {
    RatingOrder["LATEST"] = "LATEST";
    RatingOrder["HIGHEST"] = "HIGHEST";
    RatingOrder["LOWEST"] = "LOWEST";
})(RatingOrder = exports.RatingOrder || (exports.RatingOrder = {}));
var SortingTypeReview;
(function (SortingTypeReview) {
    SortingTypeReview["PALING_MEMBANTU"] = "PALING_MEMBANTU";
    SortingTypeReview["TERBARU"] = "TERBARU";
    SortingTypeReview["RATING_TERTINGGI"] = "RATING_TERTINGGI";
    SortingTypeReview["RATING_TERENDAH"] = "RATING_TERENDAH";
})(SortingTypeReview = exports.SortingTypeReview || (exports.SortingTypeReview = {}));
var TopicTreatmentReview;
(function (TopicTreatmentReview) {
    TopicTreatmentReview["CARE"] = "CARE";
    TopicTreatmentReview["SERVICE"] = "SERVICE";
    TopicTreatmentReview["MANAGEMENT"] = "MANAGEMENT";
})(TopicTreatmentReview = exports.TopicTreatmentReview || (exports.TopicTreatmentReview = {}));
var TopicProductReview;
(function (TopicProductReview) {
    TopicProductReview["EFFECTIVENESS"] = "EFFECTIVENESS";
    TopicProductReview["TEXTURE"] = "TEXTURE";
    TopicProductReview["PACKAGING"] = "PACKAGING";
})(TopicProductReview = exports.TopicProductReview || (exports.TopicProductReview = {}));
var OrderByTreatment;
(function (OrderByTreatment) {
    OrderByTreatment["RATING"] = "RATING";
    OrderByTreatment["POPULARITY"] = "POPULARITY";
    OrderByTreatment["DISTANCE"] = "DISTANCE";
})(OrderByTreatment = exports.OrderByTreatment || (exports.OrderByTreatment = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["MENUNGGU_PEMBAYARAN"] = "MENUNGGU_PEMBAYARAN";
    TransactionStatus["PESANAN_DIPROSES"] = "PESANAN_DIPROSES";
    TransactionStatus["DIKIRIM"] = "DIKIRIM";
    TransactionStatus["TERKIRIM"] = "TERKIRIM";
    TransactionStatus["MENUNGGU_KONFIRMASI_KLINIK"] = "MENUNGGU_KONFIRMASI_KLINIK";
    TransactionStatus["KLINIK_MENGKONFIRMASI"] = "KLINIK_MENGKONFIRMASI";
    TransactionStatus["READY"] = "READY";
    TransactionStatus["REVIEW"] = "REVIEW";
    TransactionStatus["AKTIF"] = "AKTIF";
    TransactionStatus["SELESAI"] = "SELESAI";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["CONSULTATION"] = "CONSULTATION";
    TransactionType["PRODUCT"] = "PRODUCT";
    TransactionType["TREATMENT"] = "TREATMENT";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
var PostTypeUserProfile;
(function (PostTypeUserProfile) {
    PostTypeUserProfile["ALL"] = "ALL";
    PostTypeUserProfile["STREAM"] = "STREAM";
    PostTypeUserProfile["REPLIES"] = "REPLIES";
    PostTypeUserProfile["MY_JOURNEY"] = "MY_JOURNEY";
    PostTypeUserProfile["POLLING"] = "POLLING";
    PostTypeUserProfile["LIKED"] = "LIKED";
    PostTypeUserProfile["SAVED"] = "SAVED";
})(PostTypeUserProfile = exports.PostTypeUserProfile || (exports.PostTypeUserProfile = {}));
var ProductType;
(function (ProductType) {
    ProductType["SKINCARE"] = "SKINCARE";
    ProductType["DRUGS"] = "DRUGS";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
var VerifyMethod;
(function (VerifyMethod) {
    VerifyMethod["WHATSAPP"] = "WHATSAPP";
    VerifyMethod["EMAIL"] = "EMAIL";
})(VerifyMethod = exports.VerifyMethod || (exports.VerifyMethod = {}));
var Gender;
(function (Gender) {
    Gender["Laki-laki"] = "Laki-laki";
    Gender["Perempuan"] = "Perempuan";
})(Gender = exports.Gender || (exports.Gender = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["GENERAL"] = "GENERAL";
    NotificationType["TRANSACTION_CONSULTATION_SUCCESS"] = "TRANSACTION_CONSULTATION_SUCCESS";
    NotificationType["CONSULTATION_DOCTOR_SCHEDULE"] = "CONSULTATION_DOCTOR_SCHEDULE";
    NotificationType["CONSULTATION_DOCTOR_SCHEDULE_EXPIRED"] = "CONSULTATION_DOCTOR_SCHEDULE_EXPIRED";
    NotificationType["CONSULTATION_DOCTOR_SCHEDULE_APPROVED"] = "CONSULTATION_DOCTOR_SCHEDULE_APPROVED";
    NotificationType["CONSULTATION_REVIEW"] = "CONSULTATION_REVIEW";
    NotificationType["CHAT"] = "CHAT";
    NotificationType["STREAM_LIKE"] = "STREAM_LIKE";
    NotificationType["STREAM_COMMENT"] = "STREAM_COMMENT";
    NotificationType["STREAM_COMMENT_LIKE"] = "STREAM_COMMENT_LIKE";
    NotificationType["STREAM_COMMENT_REPLY"] = "STREAM_COMMENT_REPLY";
    NotificationType["STREAM_COMMENT_REPLY_LIKE"] = "STREAM_COMMENT_REPLY_LIKE";
    NotificationType["STREAM_VOTE"] = "STREAM_VOTE";
    NotificationType["STREAM_USER_ACTIVITY"] = "STREAM_USER_ACTIVITY";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
var VoucherType;
(function (VoucherType) {
    VoucherType["Skincare Voucher"] = "Skincare Voucher";
    VoucherType["Medicine Voucher"] = "Medicine Voucher";
    VoucherType["Product Voucher"] = "Product Voucher";
    VoucherType["Treatment Voucher"] = "Treatment Voucher";
    VoucherType["Consultation Voucher"] = "Consultation Voucher";
    VoucherType["All Solution Voucher"] = "All Solution Voucher";
})(VoucherType = exports.VoucherType || (exports.VoucherType = {}));
var VourcherTarget;
(function (VourcherTarget) {
    VourcherTarget["Public"] = "Public";
    VourcherTarget["Special"] = "Special";
    VourcherTarget["Limited"] = "Limited";
})(VourcherTarget = exports.VourcherTarget || (exports.VourcherTarget = {}));
var VoucherPromotionType;
(function (VoucherPromotionType) {
    VoucherPromotionType["Free Shipping"] = "Free Shipping";
    VoucherPromotionType["Discount"] = "Discount";
})(VoucherPromotionType = exports.VoucherPromotionType || (exports.VoucherPromotionType = {}));
var VoucherTargetBuyer;
(function (VoucherTargetBuyer) {
    VoucherTargetBuyer["All Buyers"] = "All Buyers";
    VoucherTargetBuyer["First Purchase Buyers"] = "First Purchase Buyers";
})(VoucherTargetBuyer = exports.VoucherTargetBuyer || (exports.VoucherTargetBuyer = {}));
var VoucherDiscountType;
(function (VoucherDiscountType) {
    VoucherDiscountType["Fix Amount"] = "Fix Amount";
    VoucherDiscountType["Percentage"] = "Percentage";
})(VoucherDiscountType = exports.VoucherDiscountType || (exports.VoucherDiscountType = {}));
var NotificationSettingType;
(function (NotificationSettingType) {
    NotificationSettingType["NOTIF_STREAM_MENTION"] = "NOTIF_STREAM_MENTION";
    NotificationSettingType["NOTIF_STREAM_LIKE"] = "NOTIF_STREAM_LIKE";
    NotificationSettingType["NOTIF_STREAM_REPLY"] = "NOTIF_STREAM_REPLY";
    NotificationSettingType["NOTIF_STREAM_FOLLOWER"] = "NOTIF_STREAM_FOLLOWER";
    NotificationSettingType["NOTIF_STREAM_REPOST"] = "NOTIF_STREAM_REPOST";
    NotificationSettingType["NOTIF_STREAM_FOLLOWED_POST"] = "NOTIF_STREAM_FOLLOWED_POST";
    NotificationSettingType["NOTIF_STREAM_INAPP_NEW_FRIEND"] = "NOTIF_STREAM_INAPP_NEW_FRIEND";
})(NotificationSettingType = exports.NotificationSettingType || (exports.NotificationSettingType = {}));
var TransactionFeeType;
(function (TransactionFeeType) {
    TransactionFeeType["PERCENTAGE"] = "PERCENTAGE";
    TransactionFeeType["FIX_AMOUNT"] = "FIX_AMOUNT";
    TransactionFeeType["PERCENTAGE_FIX_AMOUNT"] = "PERCENTAGE_FIX_AMOUNT";
})(TransactionFeeType = exports.TransactionFeeType || (exports.TransactionFeeType = {}));
var PaymentGateway;
(function (PaymentGateway) {
    PaymentGateway["Midtrans"] = "Midtrans";
    PaymentGateway["Xendit"] = "Xendit";
    PaymentGateway["Heystetik"] = "Heystetik";
})(PaymentGateway = exports.PaymentGateway || (exports.PaymentGateway = {}));
var NotificationUserActivityType;
(function (NotificationUserActivityType) {
    NotificationUserActivityType["NOTIF_ACTIVITY_POSTS"] = "NOTIF_ACTIVITY_POSTS";
})(NotificationUserActivityType = exports.NotificationUserActivityType || (exports.NotificationUserActivityType = {}));
var XenditPaymentMethodReusability;
(function (XenditPaymentMethodReusability) {
    XenditPaymentMethodReusability["ONE_TIME_USE"] = "ONE_TIME_USE";
    XenditPaymentMethodReusability["MULTIPLE_USE"] = "MULTIPLE_USE";
})(XenditPaymentMethodReusability = exports.XenditPaymentMethodReusability || (exports.XenditPaymentMethodReusability = {}));
var XenditCustomerType;
(function (XenditCustomerType) {
    XenditCustomerType["INDIVIDUAL"] = "INDIVIDUAL";
    XenditCustomerType["BUSINESS"] = "BUSINESS";
})(XenditCustomerType = exports.XenditCustomerType || (exports.XenditCustomerType = {}));
var LookupCategory;
(function (LookupCategory) {
    LookupCategory["SKINCARE_CATEGORY"] = "SKINCARE_CATEGORY";
    LookupCategory["SKINCARE_TEXTURE"] = "SKINCARE_TEXTURE";
    LookupCategory["SKINCARE_PACKAGING"] = "SKINCARE_PACKAGING";
    LookupCategory["SKINCARE_NETTO_TYPE"] = "SKINCARE_NETTO_TYPE";
    LookupCategory["MEDICINE_FORM"] = "MEDICINE_FORM";
    LookupCategory["MEDICINE_CLASSIFICATION"] = "MEDICINE_CLASSIFICATION";
    LookupCategory["MEDICINE_TYPE"] = "MEDICINE_TYPE";
    LookupCategory["MEDICINE_PACKAGING"] = "MEDICINE_PACKAGING";
    LookupCategory["MEDICINE_CATEGORY"] = "MEDICINE_CATEGORY";
    LookupCategory["PRODUCT_DISPLAY"] = "PRODUCT_DISPLAY";
    LookupCategory["NETTO"] = "NETTO";
    LookupCategory["WEIGHT"] = "WEIGHT";
    LookupCategory["SHIPPING"] = "SHIPPING";
    LookupCategory["TREATMENT_TYPE"] = "TREATMENT_TYPE";
    LookupCategory["TREATMENT_CATEGORY"] = "TREATMENT_CATEGORY";
    LookupCategory["TREATMENT_METHOD"] = "TREATMENT_METHOD";
    LookupCategory["PRODUCT_REVIEW_USAGE_DURATION"] = "PRODUCT_REVIEW_USAGE_DURATION";
    LookupCategory["PRODUCT_REVIEW_WOULD_RECOMMEND"] = "PRODUCT_REVIEW_WOULD_RECOMMEND";
    LookupCategory["PRODUCT_REVIEW_WOULD_REPURCHASE"] = "PRODUCT_REVIEW_WOULD_REPURCHASE";
    LookupCategory["APOTEK_TYPE"] = "APOTEK_TYPE";
    LookupCategory["TITLE"] = "TITLE";
    LookupCategory["EDUCATION"] = "EDUCATION";
    LookupCategory["SKIN_GOALS_CORRECTIVE_FACE"] = "SKIN_GOALS_CORRECTIVE_FACE";
    LookupCategory["SKIN_GOALS_CORRECTIVE_BODY"] = "SKIN_GOALS_CORRECTIVE_BODY";
    LookupCategory["SKIN_GOALS_AUGMENTATION_FACE_BODY"] = "SKIN_GOALS_AUGMENTATION_FACE_BODY";
    LookupCategory["SKIN_GOALS_SEXUALLY_SKIN_DISEASES"] = "SKIN_GOALS_SEXUALLY_SKIN_DISEASES";
    LookupCategory["SKIN_GOALS_TREATMENT_HISTORY"] = "SKIN_GOALS_TREATMENT_HISTORY";
    LookupCategory["SKIN_GOALS_BUDGET"] = "SKIN_GOALS_BUDGET";
    LookupCategory["STREAM_REPORT_REASON"] = "STREAM_REPORT_REASON";
    LookupCategory["BROADCAST_TOPIC"] = "BROADCAST_TOPIC";
})(LookupCategory = exports.LookupCategory || (exports.LookupCategory = {}));
var Country;
(function (Country) {
    Country["ID"] = "ID";
    Country["PH"] = "PH";
    Country["VN"] = "VN";
    Country["TH"] = "TH";
    Country["MY"] = "MY";
})(Country = exports.Country || (exports.Country = {}));
var Currency;
(function (Currency) {
    Currency["IDR"] = "IDR";
    Currency["PHP"] = "PHP";
    Currency["VND"] = "VND";
    Currency["THB"] = "THB";
    Currency["MYR"] = "MYR";
})(Currency = exports.Currency || (exports.Currency = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["SUCCEEDED"] = "SUCCEEDED";
    PaymentStatus["PENDING"] = "PENDING";
    PaymentStatus["FAILED"] = "FAILED";
    PaymentStatus["EXPIRED"] = "EXPIRED";
    PaymentStatus["UNKNOWN"] = "UNKNOWN";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
var DoctorScheduleStatus;
(function (DoctorScheduleStatus) {
    DoctorScheduleStatus["ACTIVE"] = "ACTIVE";
    DoctorScheduleStatus["ONLEAVE"] = "ONLEAVE";
    DoctorScheduleStatus["RESTING"] = "RESTING";
})(DoctorScheduleStatus = exports.DoctorScheduleStatus || (exports.DoctorScheduleStatus = {}));
exports.AppSetting = {
    transaction_fee: 3000,
    transaction_tax: 0,
};
var BannerType;
(function (BannerType) {
    BannerType["home"] = "home";
    BannerType["solution"] = "solution";
    BannerType["treatment"] = "treatment";
    BannerType["skincare"] = "skincare";
})(BannerType = exports.BannerType || (exports.BannerType = {}));
var BannerStatus;
(function (BannerStatus) {
    BannerStatus["Published"] = "Published";
    BannerStatus["Unpublished"] = "Unpublished";
})(BannerStatus = exports.BannerStatus || (exports.BannerStatus = {}));
var DoctorStatisticType;
(function (DoctorStatisticType) {
    DoctorStatisticType["FINISHED_CHAT"] = "FINISHED_CHAT";
    DoctorStatisticType["UNFINISHED_CHAT"] = "UNFINISHED_CHAT";
})(DoctorStatisticType = exports.DoctorStatisticType || (exports.DoctorStatisticType = {}));
var SnipTipsStatus;
(function (SnipTipsStatus) {
    SnipTipsStatus["Published"] = "Published";
    SnipTipsStatus["Unpublished"] = "Unpublished";
})(SnipTipsStatus = exports.SnipTipsStatus || (exports.SnipTipsStatus = {}));
var BroadcastStatus;
(function (BroadcastStatus) {
    BroadcastStatus["Done"] = "Done";
    BroadcastStatus["Progress"] = "Progress";
    BroadcastStatus["Queue"] = "Queue";
    BroadcastStatus["Cancelled"] = "Cancelled";
    BroadcastStatus["Failed"] = "Failed";
})(BroadcastStatus = exports.BroadcastStatus || (exports.BroadcastStatus = {}));
var ProductDiscountType;
(function (ProductDiscountType) {
    ProductDiscountType["Fix Amount"] = "Fix Amount";
    ProductDiscountType["Percentage"] = "Percentage";
})(ProductDiscountType = exports.ProductDiscountType || (exports.ProductDiscountType = {}));
var MenuAction;
(function (MenuAction) {
    MenuAction["read"] = "read";
    MenuAction["create"] = "create";
    MenuAction["update"] = "update";
    MenuAction["delete"] = "delete";
})(MenuAction = exports.MenuAction || (exports.MenuAction = {}));
//# sourceMappingURL=enum.js.map
//# debugId=cd90ee9c-2231-5b39-a067-ce83b209cf56
