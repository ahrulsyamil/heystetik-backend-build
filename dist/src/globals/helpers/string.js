"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cbcf2756-e651-51dc-a038-73ae78c40b92")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = exports.generateAuthKey = exports.transformPhoneNumber = exports.generateRandomUsernameFromFullname = exports.generateRandomUsernameFromEmail = exports.isNotNullOrEmpty = exports.randomString = void 0;
const crypto = require("crypto");
const randomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
exports.randomString = randomString;
const isNotNullOrEmpty = (value) => {
    return value !== null && value !== '' && value !== undefined;
};
exports.isNotNullOrEmpty = isNotNullOrEmpty;
const generateRandomUsernameFromEmail = (email) => {
    const [username] = email.split('@');
    const randomString = crypto.randomBytes(4).toString('hex');
    const randomUsername = `${username}_${randomString}`;
    return randomUsername;
};
exports.generateRandomUsernameFromEmail = generateRandomUsernameFromEmail;
const generateRandomUsernameFromFullname = (fullname) => {
    const randomString = crypto.randomBytes(4).toString('hex');
    const randomUsername = `${fullname.replaceAll(' ', '')}_${randomString}`;
    return randomUsername;
};
exports.generateRandomUsernameFromFullname = generateRandomUsernameFromFullname;
const transformPhoneNumber = (phoneNumber) => {
    const cleanedPhoneNumber = phoneNumber.replace(/^08/, '8');
    return cleanedPhoneNumber.startsWith('+62')
        ? cleanedPhoneNumber
        : `+62${cleanedPhoneNumber}`;
};
exports.transformPhoneNumber = transformPhoneNumber;
const generateAuthKey = async () => {
    const k = await window.crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
    const jwk = await window.crypto.subtle.exportKey('jwk', k);
    return jwk.k;
};
exports.generateAuthKey = generateAuthKey;
const formatCurrency = (amount, prefix = '') => {
    const formattedAmount = amount
        .toFixed(0)
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${prefix}${formattedAmount}`;
};
exports.formatCurrency = formatCurrency;
//# sourceMappingURL=string.js.map
//# debugId=cbcf2756-e651-51dc-a038-73ae78c40b92
