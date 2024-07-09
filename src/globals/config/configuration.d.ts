declare const _default: () => {
    app: {
        environment: string;
        port: number;
        instances: string | number;
        base_url: string;
        client_base_url: string;
        timeout: string;
    };
    throttle: {
        ttl: number;
        limit: number;
    };
    jwt: {
        secret: string;
    };
    database: {
        url: string;
    };
    redis: {
        host: string;
        port: string;
        url: string;
    };
    google: {
        client_id: string;
        client_secret: string;
        callback_url: string;
        user_info_url: string;
    };
    facebook: {
        app_id: string;
        app_secret: string;
        callback_url: string;
        user_info_url: string;
    };
    apple: {
        client_id: string;
        team_id: string;
        key_id: string;
        user_info_url: string;
    };
    midtrans: {
        merchant_id: string;
        client_key: string;
        server_key: string;
        sandbox_api_base_url: string;
        production_api_base_url: string;
    };
    mail: {
        host: string;
        port: string;
        user: string;
        pass: string;
        from: string;
    };
    whatsapp: {
        access_token: string;
        phone_number_id: string;
        business_account_id: string;
        version: string;
    };
    sicepat: {
        development_pickup_api_base_url: string;
        development_pickup_api_key: string;
        production_pickup_api_base_url: string;
        production_pickup_api_key: string;
        production_tracking_base_url: string;
        production_tracking_api_key: string;
        origin_code: string;
    };
    telegram: {
        bot_base_url: string;
        mock_otp_token: string;
        mock_otp_chat_id: string;
    };
    gosend: {
        webhook_auth_key: string;
        integration_base_url: string;
        integration_client_id: string;
        integration_pass_key: string;
        production_base_url: string;
        production_client_id: string;
        production_pass_key: string;
        origin_latlong: string;
    };
    qontak: {
        base_url: string;
        username: string;
        password: string;
        client_id: string;
        client_secret: string;
        otp_message_template_id: string;
        otp_channel_integration_id: string;
    };
    xendit: {
        secret_key: string;
        api_base_url: string;
    };
    email: {
        stream_report_destination: string;
    };
};
export default _default;
