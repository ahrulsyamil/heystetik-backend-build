"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c1b67ca7-1582-569a-af53-37d7617aadfd")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const compression = require("compression");
const dayjs = require("dayjs");
const id = require("dayjs/locale/id");
const localizedFormat = require("dayjs/plugin/localizedFormat");
const timezone = require("dayjs/plugin/timezone");
const utc = require("dayjs/plugin/utc");
const dotenv_1 = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./globals/filters/http-exception.filter");
const validation_options_1 = require("./globals/helpers/validation-options");
const response_interceptor_1 = require("./globals/interceptors/response.interceptor");
const throttle_interceptor_1 = require("./globals/interceptors/throttle.interceptor");
const timeout_interceptor_1 = require("./globals/interceptors/timeout.interceptor");
const CustomIoAdapter_1 = require("./socket/CustomIoAdapter");
const class_validator_1 = require("class-validator");
(0, dotenv_1.config)();
async function bootstrap() {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.extend(localizedFormat);
    dayjs.locale(id);
    dayjs.tz.setDefault('Asia/Jakarta');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    const configService = app.get(config_1.ConfigService);
    app.useStaticAssets((0, path_1.resolve)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.resolve)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Heystetik Desacode')
        .setDescription('The Heystetik Desacode API description')
        .setVersion('0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        exceptionFactory: validation_options_1.formatValidationError,
    }));
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor(app.get(core_1.Reflector)));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter(configService));
    app.useGlobalInterceptors(new throttle_interceptor_1.ThrottleInterceptor(configService));
    app.useGlobalInterceptors(new timeout_interceptor_1.TimeoutInterceptor(parseInt(configService.get('app').timeout)));
    app.use(session({
        secret: 'asiodasjoddjdoasddasoidjasiodasdjaiodd',
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60000,
        },
    }));
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(compression());
    app.enableShutdownHooks();
    app.useWebSocketAdapter(new CustomIoAdapter_1.CustomIoAdapter(app));
    await app.listen(configService.get('app').port);
}
bootstrap();
//# sourceMappingURL=main.js.map
//# debugId=c1b67ca7-1582-569a-af53-37d7617aadfd
