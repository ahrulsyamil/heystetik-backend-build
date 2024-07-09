"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="887cd123-3d82-5dbe-9031-376e5b6861bc")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDistance = void 0;
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
function calculateDistance(lat1, lon1, lat2, lon2, unit = 'km') {
    const R = unit === 'm' ? 6371000 : 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}
exports.calculateDistance = calculateDistance;
//# sourceMappingURL=distance.js.map
//# debugId=887cd123-3d82-5dbe-9031-376e5b6861bc
