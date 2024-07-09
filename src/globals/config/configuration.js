"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2afe29ce-f59e-59ee-a3aa-101810a97477")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    app: {
        environment: process.env.environment || 'development',
        port: parseInt(process.env.APP_PORT, 10) || 8192,
        instances: process.env.APP_INSTANCES || 0,
        base_url: process.env.APP_BASE_URL,
        client_base_url: process.env.APP_CLIENT_BASE_URL,
        timeout: process.env.APP_TIMEOUT,
    },
    throttle: {
        ttl: 60,
        limit: 100,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    database: {
        url: process.env.DATABASE_URL,
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
    },
    google: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        callback_url: process.env.GOOGLE_CALLBACK_URL,
        user_info_url: process.env.GOOGLE_USER_INFO_URL,
    },
    facebook: {
        app_id: process.env.FACEBOOK_APP_ID,
        app_secret: process.env.FACEBOOK_APP_SECRET,
        callback_url: process.env.FACEBOOK_CALLBACK_URL,
        user_info_url: process.env.FACEBOOK_USER_INFO_URL,
    },
    apple: {
        client_id: process.env.APPLE_CLIENT_ID,
        team_id: process.env.APPLE_TEAM_ID,
        key_id: process.env.APPLE_KEY_ID,
        user_info_url: process.env.APPLE_USER_INFO_URL,
    },
    midtrans: {
        merchant_id: process.env.MIDTRANS_MERCHANT_ID,
        client_key: process.env.MIDTRANS_CLIENT_KEY,
        server_key: process.env.MIDTRANS_SERVER_KEY,
        sandbox_api_base_url: process.env.MIDTRANS_SANDBOX_API_BASE_URL,
        production_api_base_url: process.env.MIDTRANS_PRODUCTION_API_BASE_URL,
    },
    mail: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
        from: process.env.MAIL_FROM,
    },
    whatsapp: {
        access_token: process.env.WHATSAPP_CLOUD_ACCESS_TOKEN,
        phone_number_id: process.env.WHATSAPP_CLOUD_PHONE_NUMBER_ID,
        business_account_id: process.env.WHATSAPP_CLOUD_ACCOUNT_ID,
        version: process.env.WHATSAPP_CLOUD_VERSION,
    },
    sicepat: {
        development_pickup_api_base_url: process.env.SICEPAT_DEVELOPMENT_PICKUP_API_BASE_URL,
        development_pickup_api_key: process.env.SICEPAT_DEVELOPMENT_PICKUP_API_KEY,
        production_pickup_api_base_url: process.env.SICEPAT_PRODUCTION_PICKUP_API_BASE_URL,
        production_pickup_api_key: process.env.SICEPAT_PRODUCTON_PICKUP_API_KEY,
        production_tracking_base_url: process.env.SICEPAT_PRODUCTION_TRACKING_BASE_URL,
        production_tracking_api_key: process.env.SICEPAT_PRODUCTION_TRACKING_API_KEY,
        origin_code: process.env.SICEPAT_ORIGIN_CODE,
    },
    telegram: {
        bot_base_url: process.env.TELEGRAM_BOT_API_BASE_URL,
        mock_otp_token: process.env.TELEGRAM_MOCK_OTP_TOKEN,
        mock_otp_chat_id: process.env.TELEGRAM_MOCK_OTP_CHAT_ID,
    },
    gosend: {
        webhook_auth_key: process.env.GOSEND_WEBHOOK_AUTH_KEY,
        integration_base_url: process.env.GOSEND_INTEGRATION_BASE_URL,
        integration_client_id: process.env.GOSEND_INTEGRATION_CLIENT_ID,
        integration_pass_key: process.env.GOSEND_INTEGRATION_PASS_KEY,
        production_base_url: process.env.GOSEND_PRODUCTION_BASE_URL,
        production_client_id: process.env.GOSEND_PRODUCTION_CLIENT_ID,
        production_pass_key: process.env.GOSEND_PRODUCTION_PASS_KEY,
        origin_latlong: process.env.GOSEND_ORIGIN_LATLONG,
    },
    qontak: {
        base_url: process.env.QONTAK_BASE_URL,
        username: process.env.QONTAK_USERNAME,
        password: process.env.QONTAK_PASSWORD,
        client_id: process.env.QONTAK_CLIENT_ID,
        client_secret: process.env.QONTAK_CLIENT_SECRET,
        otp_message_template_id: process.env.QONTAK_OTP_MESSAGE_TEMPLATE_ID,
        otp_channel_integration_id: process.env.QONTAK_OTP_CHANNEL_INTEGRATION_ID,
    },
    xendit: {
        secret_key: process.env.XENDIT_SECRET_KEY,
        api_base_url: process.env.XENDIT_API_BASE_URL,
    },
    email: {
        stream_report_destination: process.env.EMAIL_STREAM_REPORT_DESTINATION,
    },
});
//# sourceMappingURL=configuration.js.map
//# debugId=2afe29ce-f59e-59ee-a3aa-101810a97477
