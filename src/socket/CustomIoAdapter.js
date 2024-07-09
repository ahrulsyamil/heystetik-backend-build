"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dfd4b6f9-9f5c-52fc-bdef-2cdd571fab43")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomIoAdapter = void 0;
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
class CustomIoAdapter extends platform_socket_io_1.IoAdapter {
    createIOServer(port, options) {
        const server = super.createIOServer(port, {
            ...options,
            maxHttpBufferSize: 1e8,
        });
        return server;
    }
}
exports.CustomIoAdapter = CustomIoAdapter;
//# sourceMappingURL=CustomIoAdapter.js.map
//# debugId=dfd4b6f9-9f5c-52fc-bdef-2cdd571fab43
