export declare enum VerifyType {
    EMAIL = "email",
    PHONE = "phone"
}
export declare enum PriorityStatus {
    normal = "normal",
    high = "high"
}
export declare enum Lookup {
    SKINCARE_CATEGORY = 0,
    SKINCARE_DISPLAY = 1,
    SKINCARE_TEXTURE = 2,
    SKINCARE_PACKAGING = 3,
    DRUGS_FORM = 4,
    DRUGS_CLASSIFICATION = 5,
    DRUGS_TYPE = 6,
    DRUGS_PACKAGING = 7,
    DRUGS_CATEGORY = 8,
    NETTO = 9,
    WEIGHT = 10,
    SHIPPING = 11
}
export declare enum MethodOfPayment {
    CARD = "CARD",
    VIRTUAL_ACCOUNT = "VIRTUAL_ACCOUNT",
    EWALLET = "EWALLET",
    BANK_TRANSFER_MANUAL_VERIFICATION = "BANK_TRANSFER_MANUAL_VERIFICATION",
    QR_CODE = "QR_CODE",
    FREE = "FREE"
}
export declare enum TypeOfPayment {
    CREDIT_CARD = "CREDIT_CARD",
    BCA = "BCA",
    BNI = "BNI",
    BRI = "BRI",
    MANDIRI = "MANDIRI",
    PERMATA = "PERMATA",
    GOPAY = "GOPAY",
    OVO = "OVO",
    SHOPEEPAY = "SHOPEEPAY",
    QRIS = "QRIS",
    FREE_VOUCHER = "FREE_VOUCHER",
    DANA = "DANA",
    LINKAJA = "LINKAJA",
    ASTRAPAY = "ASTRAPAY",
    JENIUSPAY = "JENIUSPAY",
    BSI = "BSI",
    BJB = "BJB",
    BSS = "BSS",
    CIMB = "CIMB",
    MSB = "MSB"
}
export declare enum Role {
    'Superadmin' = 1,
    'Doctor' = 2,
    'Customer' = 3
}
export declare enum Order {
    asc = "asc",
    desc = "desc"
}
export declare enum RatingOrder {
    LATEST = "LATEST",
    HIGHEST = "HIGHEST",
    LOWEST = "LOWEST"
}
export declare enum SortingTypeReview {
    PALING_MEMBANTU = "PALING_MEMBANTU",
    TERBARU = "TERBARU",
    RATING_TERTINGGI = "RATING_TERTINGGI",
    RATING_TERENDAH = "RATING_TERENDAH"
}
export declare enum TopicTreatmentReview {
    CARE = "CARE",
    SERVICE = "SERVICE",
    MANAGEMENT = "MANAGEMENT"
}
export declare enum TopicProductReview {
    EFFECTIVENESS = "EFFECTIVENESS",
    TEXTURE = "TEXTURE",
    PACKAGING = "PACKAGING"
}
export declare enum OrderByTreatment {
    RATING = "RATING",
    POPULARITY = "POPULARITY",
    DISTANCE = "DISTANCE"
}
export declare enum TransactionStatus {
    MENUNGGU_PEMBAYARAN = "MENUNGGU_PEMBAYARAN",
    PESANAN_DIPROSES = "PESANAN_DIPROSES",
    DIKIRIM = "DIKIRIM",
    TERKIRIM = "TERKIRIM",
    MENUNGGU_KONFIRMASI_KLINIK = "MENUNGGU_KONFIRMASI_KLINIK",
    KLINIK_MENGKONFIRMASI = "KLINIK_MENGKONFIRMASI",
    READY = "READY",
    REVIEW = "REVIEW",
    AKTIF = "AKTIF",
    SELESAI = "SELESAI"
}
export declare enum TransactionType {
    CONSULTATION = "CONSULTATION",
    PRODUCT = "PRODUCT",
    TREATMENT = "TREATMENT"
}
export declare enum PostTypeUserProfile {
    ALL = "ALL",
    STREAM = "STREAM",
    REPLIES = "REPLIES",
    MY_JOURNEY = "MY_JOURNEY",
    POLLING = "POLLING",
    LIKED = "LIKED",
    SAVED = "SAVED"
}
export declare enum ProductType {
    SKINCARE = "SKINCARE",
    DRUGS = "DRUGS"
}
export declare enum VerifyMethod {
    WHATSAPP = "WHATSAPP",
    EMAIL = "EMAIL"
}
export declare enum Gender {
    'Laki-laki' = "Laki-laki",
    'Perempuan' = "Perempuan"
}
export declare enum NotificationType {
    'GENERAL' = "GENERAL",
    'TRANSACTION_CONSULTATION_SUCCESS' = "TRANSACTION_CONSULTATION_SUCCESS",
    'CONSULTATION_DOCTOR_SCHEDULE' = "CONSULTATION_DOCTOR_SCHEDULE",
    'CONSULTATION_DOCTOR_SCHEDULE_EXPIRED' = "CONSULTATION_DOCTOR_SCHEDULE_EXPIRED",
    'CONSULTATION_DOCTOR_SCHEDULE_APPROVED' = "CONSULTATION_DOCTOR_SCHEDULE_APPROVED",
    'CONSULTATION_REVIEW' = "CONSULTATION_REVIEW",
    'CHAT' = "CHAT",
    'STREAM_LIKE' = "STREAM_LIKE",
    'STREAM_COMMENT' = "STREAM_COMMENT",
    'STREAM_COMMENT_LIKE' = "STREAM_COMMENT_LIKE",
    'STREAM_COMMENT_REPLY' = "STREAM_COMMENT_REPLY",
    'STREAM_COMMENT_REPLY_LIKE' = "STREAM_COMMENT_REPLY_LIKE",
    'STREAM_VOTE' = "STREAM_VOTE",
    'STREAM_USER_ACTIVITY' = "STREAM_USER_ACTIVITY"
}
export declare enum VoucherType {
    'Skincare Voucher' = "Skincare Voucher",
    'Medicine Voucher' = "Medicine Voucher",
    'Product Voucher' = "Product Voucher",
    'Treatment Voucher' = "Treatment Voucher",
    'Consultation Voucher' = "Consultation Voucher",
    'All Solution Voucher' = "All Solution Voucher"
}
export declare enum VourcherTarget {
    'Public' = "Public",
    'Special' = "Special",
    'Limited' = "Limited"
}
export declare enum VoucherPromotionType {
    'Free Shipping' = "Free Shipping",
    'Discount' = "Discount"
}
export declare enum VoucherTargetBuyer {
    'All Buyers' = "All Buyers",
    'First Purchase Buyers' = "First Purchase Buyers"
}
export declare enum VoucherDiscountType {
    'Fix Amount' = "Fix Amount",
    'Percentage' = "Percentage"
}
export declare enum NotificationSettingType {
    'NOTIF_STREAM_MENTION' = "NOTIF_STREAM_MENTION",
    'NOTIF_STREAM_LIKE' = "NOTIF_STREAM_LIKE",
    'NOTIF_STREAM_REPLY' = "NOTIF_STREAM_REPLY",
    'NOTIF_STREAM_FOLLOWER' = "NOTIF_STREAM_FOLLOWER",
    'NOTIF_STREAM_REPOST' = "NOTIF_STREAM_REPOST",
    'NOTIF_STREAM_FOLLOWED_POST' = "NOTIF_STREAM_FOLLOWED_POST",
    'NOTIF_STREAM_INAPP_NEW_FRIEND' = "NOTIF_STREAM_INAPP_NEW_FRIEND"
}
export declare enum TransactionFeeType {
    'PERCENTAGE' = "PERCENTAGE",
    'FIX_AMOUNT' = "FIX_AMOUNT",
    'PERCENTAGE_FIX_AMOUNT' = "PERCENTAGE_FIX_AMOUNT"
}
export declare enum PaymentGateway {
    'Midtrans' = "Midtrans",
    'Xendit' = "Xendit",
    'Heystetik' = "Heystetik"
}
export declare enum NotificationUserActivityType {
    'NOTIF_ACTIVITY_POSTS' = "NOTIF_ACTIVITY_POSTS"
}
export declare enum XenditPaymentMethodReusability {
    'ONE_TIME_USE' = "ONE_TIME_USE",
    'MULTIPLE_USE' = "MULTIPLE_USE"
}
export declare enum XenditCustomerType {
    'INDIVIDUAL' = "INDIVIDUAL",
    'BUSINESS' = "BUSINESS"
}
export declare enum LookupCategory {
    'SKINCARE_CATEGORY' = "SKINCARE_CATEGORY",
    'SKINCARE_TEXTURE' = "SKINCARE_TEXTURE",
    'SKINCARE_PACKAGING' = "SKINCARE_PACKAGING",
    'SKINCARE_NETTO_TYPE' = "SKINCARE_NETTO_TYPE",
    'MEDICINE_FORM' = "MEDICINE_FORM",
    'MEDICINE_CLASSIFICATION' = "MEDICINE_CLASSIFICATION",
    'MEDICINE_TYPE' = "MEDICINE_TYPE",
    'MEDICINE_PACKAGING' = "MEDICINE_PACKAGING",
    'MEDICINE_CATEGORY' = "MEDICINE_CATEGORY",
    'PRODUCT_DISPLAY' = "PRODUCT_DISPLAY",
    'NETTO' = "NETTO",
    'WEIGHT' = "WEIGHT",
    'SHIPPING' = "SHIPPING",
    'TREATMENT_TYPE' = "TREATMENT_TYPE",
    'TREATMENT_CATEGORY' = "TREATMENT_CATEGORY",
    'TREATMENT_METHOD' = "TREATMENT_METHOD",
    'PRODUCT_REVIEW_USAGE_DURATION' = "PRODUCT_REVIEW_USAGE_DURATION",
    'PRODUCT_REVIEW_WOULD_RECOMMEND' = "PRODUCT_REVIEW_WOULD_RECOMMEND",
    'PRODUCT_REVIEW_WOULD_REPURCHASE' = "PRODUCT_REVIEW_WOULD_REPURCHASE",
    'APOTEK_TYPE' = "APOTEK_TYPE",
    'TITLE' = "TITLE",
    'EDUCATION' = "EDUCATION",
    'SKIN_GOALS_CORRECTIVE_FACE' = "SKIN_GOALS_CORRECTIVE_FACE",
    'SKIN_GOALS_CORRECTIVE_BODY' = "SKIN_GOALS_CORRECTIVE_BODY",
    'SKIN_GOALS_AUGMENTATION_FACE_BODY' = "SKIN_GOALS_AUGMENTATION_FACE_BODY",
    'SKIN_GOALS_SEXUALLY_SKIN_DISEASES' = "SKIN_GOALS_SEXUALLY_SKIN_DISEASES",
    'SKIN_GOALS_TREATMENT_HISTORY' = "SKIN_GOALS_TREATMENT_HISTORY",
    'SKIN_GOALS_BUDGET' = "SKIN_GOALS_BUDGET",
    'STREAM_REPORT_REASON' = "STREAM_REPORT_REASON",
    'BROADCAST_TOPIC' = "BROADCAST_TOPIC"
}
export declare enum Country {
    ID = "ID",
    PH = "PH",
    VN = "VN",
    TH = "TH",
    MY = "MY"
}
export declare enum Currency {
    IDR = "IDR",
    PHP = "PHP",
    VND = "VND",
    THB = "THB",
    MYR = "MYR"
}
export declare enum PaymentStatus {
    SUCCEEDED = "SUCCEEDED",
    PENDING = "PENDING",
    FAILED = "FAILED",
    EXPIRED = "EXPIRED",
    UNKNOWN = "UNKNOWN"
}
export declare enum DoctorScheduleStatus {
    ACTIVE = "ACTIVE",
    ONLEAVE = "ONLEAVE",
    RESTING = "RESTING"
}
export declare const AppSetting: {
    transaction_fee: number;
    transaction_tax: number;
};
export declare enum BannerType {
    home = "home",
    solution = "solution",
    treatment = "treatment",
    skincare = "skincare"
}
export declare enum BannerStatus {
    'Published' = "Published",
    'Unpublished' = "Unpublished"
}
export declare enum DoctorStatisticType {
    'FINISHED_CHAT' = "FINISHED_CHAT",
    'UNFINISHED_CHAT' = "UNFINISHED_CHAT"
}
export declare enum SnipTipsStatus {
    'Published' = "Published",
    'Unpublished' = "Unpublished"
}
export declare enum BroadcastStatus {
    'Done' = "Done",
    'Progress' = "Progress",
    'Queue' = "Queue",
    'Cancelled' = "Cancelled",
    'Failed' = "Failed"
}
export declare enum ProductDiscountType {
    'Fix Amount' = "Fix Amount",
    'Percentage' = "Percentage"
}
export declare enum MenuAction {
    'read' = "read",
    'create' = "create",
    'update' = "update",
    'delete' = "delete"
}
