"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0ce9ee3c-025d-5974-9070-8d818a4978fe")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueValues = exports.chunkWithMinSize = exports.convertObjectToString = exports.getRandomSubarray = void 0;
const getRandomSubarray = (arr, length) => {
    if (length > arr.length) {
        throw new Error('Desired length exceeds array length.');
    }
    const startIndex = Math.floor(Math.random() * (arr.length - length + 1));
    const endIndex = startIndex + length;
    return arr.slice(startIndex, endIndex);
};
exports.getRandomSubarray = getRandomSubarray;
const convertObjectToString = (obj) => {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = String(obj[key]);
        }
    }
    return result;
};
exports.convertObjectToString = convertObjectToString;
const chunkWithMinSize = (arr, chunkSize, minChunkSize = 0) => {
    const remainder = arr.length % chunkSize;
    const isLastChunkTooSmall = remainder < minChunkSize;
    const totalChunks = isLastChunkTooSmall
        ? Math.floor(arr.length / chunkSize)
        : Math.ceil(arr.length / chunkSize);
    return Array.from({ length: totalChunks }, (_, i) => {
        const chunk = arr.slice(i * chunkSize, i * chunkSize + chunkSize);
        if (i === totalChunks - 1 && isLastChunkTooSmall) {
            chunk.push(...arr.slice(-remainder));
        }
        return chunk;
    });
};
exports.chunkWithMinSize = chunkWithMinSize;
const getUniqueValues = (arr) => {
    const uniqueValues = new Set();
    arr.forEach((value) => {
        uniqueValues.add(value);
    });
    return Array.from(uniqueValues);
};
exports.getUniqueValues = getUniqueValues;
//# sourceMappingURL=array.js.map
//# debugId=0ce9ee3c-025d-5974-9070-8d818a4978fe
