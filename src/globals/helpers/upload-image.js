"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="bd1c2a46-09c2-5f7d-84ae-954baf0a2825")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.filename = exports.fileFilter = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const fileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new common_1.HttpException({
            status: common_1.HttpStatus.UNSUPPORTED_MEDIA_TYPE,
            message: 'files does not support. please upload jpg, jpeg, png, gif',
        }, common_1.HttpStatus.UNSUPPORTED_MEDIA_TYPE), false);
    }
    callback(null, true);
};
exports.fileFilter = fileFilter;
const filename = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = (0, path_1.extname)(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
};
exports.filename = filename;
//# sourceMappingURL=upload-image.js.map
//# debugId=bd1c2a46-09c2-5f7d-84ae-954baf0a2825
