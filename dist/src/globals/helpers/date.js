"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d832f075-6b2a-51ee-a309-8e040a0760a8")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDelay = exports.dateIsWithinRange = exports.getAllDaysInMonth = exports.isValidTime = exports.isValidDate = void 0;
const dayjs = require("dayjs");
const isValidDate = (dateString) => {
    const date = new Date(dateString).getTime();
    return !isNaN(date);
};
exports.isValidDate = isValidDate;
const isValidTime = (timeString) => {
    return /^([01]\d|2[0-3]):([0-5]\d)$/.test(timeString);
};
exports.isValidTime = isValidTime;
const getAllDaysInMonth = (year, month) => {
    const daysInMonth = [];
    const firstDayOfMonth = dayjs(`${year}-${month}-01`);
    const lastDayOfMonth = firstDayOfMonth.endOf('month');
    let currentDay = firstDayOfMonth;
    while (currentDay.isBefore(lastDayOfMonth, 'day') ||
        currentDay.isSame(lastDayOfMonth, 'day')) {
        daysInMonth.push(currentDay.toDate());
        currentDay = currentDay.add(1, 'day');
    }
    return daysInMonth;
};
exports.getAllDaysInMonth = getAllDaysInMonth;
const dateIsWithinRange = (x_start_date, x_end_date, y_start_date, y_end_date) => {
    if ([x_start_date, x_end_date, y_start_date, y_end_date].includes(null))
        return false;
    const xStartDate = dayjs(x_start_date);
    const xEndDate = dayjs(x_end_date);
    const yStartDate = dayjs(y_start_date);
    const yEndDate = dayjs(y_end_date);
    return ((xStartDate.isSame(yStartDate) || xStartDate.isAfter(yStartDate)) &&
        (xEndDate.isSame(yEndDate) || xEndDate.isBefore(yEndDate)));
};
exports.dateIsWithinRange = dateIsWithinRange;
const calculateDelay = (target) => {
    const currentDate = dayjs();
    const targetDate = dayjs(target);
    const durationInMilliseconds = targetDate.diff(currentDate);
    return Math.max(durationInMilliseconds, 0);
};
exports.calculateDelay = calculateDelay;
//# sourceMappingURL=date.js.map
//# debugId=d832f075-6b2a-51ee-a309-8e040a0760a8
