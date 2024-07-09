export interface IAppConfig {
    environment: string;
    port: number;
    instances: number;
    base_url: string;
    client_base_url: string;
    timeout: string;
}
export interface IThrottleConfig {
    ttl: number;
    limit: number;
}
export interface IJwtConfig {
    secret: string;
}
export interface IDatabaseConfig {
    url: string;
}
export interface IRedisConfig {
    host: string;
    port: number;
    url: string;
}
export interface IGoogleConfig {
    client_id: string;
    client_secret: string;
    callback_url: string;
    user_info_url: string;
}
export interface IFacebookConfig {
    app_id: number;
    app_secret: string;
    callback_url: string;
    user_info_url: string;
}
export interface IAppleConfig {
    client_id: string;
    team_id: string;
    key_id: string;
    user_info_url: string;
}
export interface IMidtransConfig {
    merchant_id: string;
    client_key: string;
    server_key: string;
    sandbox_api_base_url: string;
    production_api_base_url: string;
}
export interface IMailConfig {
    host: string;
    port: number;
    user: string;
    pass: string;
    from: string;
}
export interface IWhatsappConfig {
    access_token: string;
    phone_number_id: number;
    business_account_id: number;
    version: string;
}
export interface ISicepatConfig {
    development_pickup_api_base_url: string;
    development_pickup_api_key: string;
    production_pickup_api_base_url: string;
    production_pickup_api_key: string;
    production_tracking_base_url: string;
    production_tracking_api_key: string;
    origin_code: string;
}
export interface ITelegramConfig {
    bot_base_url: string;
    mock_otp_token: string;
    mock_otp_chat_id: string;
}
export interface IGoSendConfig {
    webhook_auth_key: string;
    integration_base_url: string;
    integration_client_id: string;
    integration_pass_key: string;
    production_base_url: string;
    production_client_id: string;
    production_pass_key: string;
    origin_latlong: string;
}
export interface IQontakConfig {
    base_url: string;
    username: string;
    password: string;
    client_id: string;
    client_secret: string;
    otp_message_template_id: string;
    otp_channel_integration_id: string;
}
export interface IXenditConfig {
    secret_key: string;
    api_base_url: string;
}
export interface IEmailConfig {
    stream_report_destination: string;
}
