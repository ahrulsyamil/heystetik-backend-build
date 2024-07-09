"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="34144fb3-174b-5245-8457-447129c4939b")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.readCsv = exports.imageUrlToBase64 = exports.saveBase64ToFile = void 0;
const fileType = require("file-type");
const fs = require("fs");
const mime = require("mime-types");
const path = require("path");
const string_1 = require("./string");
const axios_1 = require("axios");
const fastcsv = require("fast-csv");
const saveBase64ToFile = async (base64String, dirPath, prefixFileName) => {
    const base64Data = base64String.replace(/^data:[^,]+,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const fileInfo = await fileType.fromBuffer(buffer);
    const size = buffer.length;
    const mimeType = fileInfo?.mime || mime.lookup(base64Data) || 'application/octet-stream';
    const ext = fileInfo?.ext || mime.extension(mimeType) || 'unknown';
    const filename = `${prefixFileName ? `${prefixFileName}-` : null}${Date.now()}-${(0, string_1.randomString)(10).toLowerCase()}.${ext}`;
    const filePath = path.join(dirPath, filename);
    const binaryData = Buffer.from(base64Data, 'base64');
    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFile(filePath, binaryData, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        }
        else {
            console.log('File saved successfully:', filePath);
        }
    });
    return {
        filename,
        ext,
        size,
        mime: mimeType,
        destination: filePath.replaceAll('\\', '/'),
        path: filePath.replaceAll('\\', '/').replace('uploads/', ''),
    };
};
exports.saveBase64ToFile = saveBase64ToFile;
const imageUrlToBase64 = async (imageUrl) => {
    try {
        const response = await axios_1.default.get(imageUrl, { responseType: 'arraybuffer' });
        const contentType = response.headers['content-type'] || 'image/jpeg';
        const base64String = `data:${contentType};base64,${Buffer.from(response.data, 'binary').toString('base64')}`;
        return base64String;
    }
    catch (error) {
        console.error('Error converting image to base64:', error);
        throw error;
    }
};
exports.imageUrlToBase64 = imageUrlToBase64;
const readCsv = (path, options, rowProcessor) => {
    return new Promise((resolve, reject) => {
        const data = [];
        fastcsv
            .parseFile(path, options)
            .on('error', reject)
            .on('data', (row) => {
            const obj = rowProcessor(row);
            if (obj)
                data.push(obj);
        })
            .on('end', () => {
            resolve(data);
        });
    });
};
exports.readCsv = readCsv;
//# sourceMappingURL=media.js.map
//# debugId=34144fb3-174b-5245-8457-447129c4939b
