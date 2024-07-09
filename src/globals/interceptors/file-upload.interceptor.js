"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="957f381d-8abf-5e97-ab8d-5c9d4a4d31f4")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadFieldsInterceptor = exports.FileUploadInterceptor = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const upload_image_1 = require("../helpers/upload-image");
const fs = require("fs");
const string_1 = require("../helpers/string");
const FileUploadInterceptor = ({ name, dirPath, prefixName, maxSize = 6, maxCount = 20, }) => (0, platform_express_1.FilesInterceptor)(name, maxCount, {
    storage: (0, multer_1.diskStorage)({
        destination: (_req, _file, callback) => {
            fs.mkdirSync(dirPath, { recursive: true });
            callback(null, dirPath);
        },
        filename: (_req, file, callback) => {
            const extension = file.originalname.split('.').pop();
            callback(null, `${prefixName ? `${prefixName}-` : null}${Date.now()}-${(0, string_1.randomString)(10).toLowerCase()}.${extension}`);
        },
    }),
    fileFilter: upload_image_1.fileFilter,
    limits: { fileSize: maxSize * 1024 * 1024 },
});
exports.FileUploadInterceptor = FileUploadInterceptor;
const FileUploadFieldsInterceptor = ({ fields = [], dirPath, prefixName, maxSize = 6, }) => (0, platform_express_1.FileFieldsInterceptor)(fields.map((item) => ({ name: item.name, maxCount: item.maxCount })), {
    storage: (0, multer_1.diskStorage)({
        destination: (_req, file, callback) => {
            const fieldDirPath = fields.find((x) => x.name == file.fieldname)?.dirPath;
            if (fieldDirPath) {
                fs.mkdirSync(fieldDirPath, { recursive: true });
                callback(null, fieldDirPath);
            }
            else {
                fs.mkdirSync(dirPath, { recursive: true });
                callback(null, dirPath);
            }
        },
        filename: (_req, file, callback) => {
            const extension = file.originalname.split('.').pop();
            callback(null, `${prefixName ? `${prefixName}-` : null}${Date.now()}-${(0, string_1.randomString)(10).toLowerCase()}.${extension}`);
        },
    }),
    fileFilter: upload_image_1.fileFilter,
    limits: { fileSize: maxSize * 1024 * 1024 },
});
exports.FileUploadFieldsInterceptor = FileUploadFieldsInterceptor;
//# sourceMappingURL=file-upload.interceptor.js.map
//# debugId=957f381d-8abf-5e97-ab8d-5c9d4a4d31f4
