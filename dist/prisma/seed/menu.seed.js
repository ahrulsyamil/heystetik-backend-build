"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="be54218b-3442-5d0b-9e79-e910010b6075")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuSeed = void 0;
const enum_1 = require("../../src/globals/constant/enum");
exports.MenuSeed = [
    {
        name: 'Dashboard',
        path: '/',
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
            ],
        },
    },
    {
        name: 'Content Management',
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
            ],
        },
    },
    {
        name: 'Banner Management',
        path: '/content-management/banner-management',
        parent: {
            connect: {
                name: 'Content Management',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
                {
                    action: enum_1.MenuAction.create,
                },
                {
                    action: enum_1.MenuAction.update,
                },
                {
                    action: enum_1.MenuAction.delete,
                },
            ],
        },
    },
    {
        name: 'Snips Tips',
        path: '/content-management/snips-tips',
        parent: {
            connect: {
                name: 'Content Management',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
                {
                    action: enum_1.MenuAction.create,
                },
                {
                    action: enum_1.MenuAction.update,
                },
                {
                    action: enum_1.MenuAction.delete,
                },
            ],
        },
    },
    {
        name: 'Doctor',
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
            ],
        },
    },
    {
        name: 'Doctor Schedule',
        path: '/doctor/schedule',
        parent: {
            connect: {
                name: 'Doctor',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
            ],
        },
    },
    {
        name: 'Doctor Leave',
        path: '/doctor/leave',
        parent: {
            connect: {
                name: 'Doctor',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
            ],
        },
    },
    {
        name: 'Doctor Database',
        path: '/doctor/database',
        parent: {
            connect: {
                name: 'Doctor',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
                {
                    action: enum_1.MenuAction.create,
                },
                {
                    action: enum_1.MenuAction.update,
                },
                {
                    action: enum_1.MenuAction.delete,
                },
            ],
        },
    },
    {
        name: 'Clinic & Treatment',
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
            ],
        },
    },
    {
        name: 'Clinic Database',
        path: '/clinic-treatment/clinic-database',
        parent: {
            connect: {
                name: 'Clinic & Treatment',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
                {
                    action: enum_1.MenuAction.create,
                },
                {
                    action: enum_1.MenuAction.update,
                },
                {
                    action: enum_1.MenuAction.delete,
                },
            ],
        },
    },
    {
        name: 'Treatment List',
        path: '/clinic-treatment/treatment-list',
        parent: {
            connect: {
                name: 'Clinic & Treatment',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
                {
                    action: enum_1.MenuAction.create,
                },
                {
                    action: enum_1.MenuAction.update,
                },
                {
                    action: enum_1.MenuAction.delete,
                },
            ],
        },
    },
    {
        name: 'Product',
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
            ],
        },
    },
    {
        name: 'Skincare & Drugs',
        path: '/product/skin-care-drugs',
        parent: {
            connect: {
                name: 'Product',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
                {
                    action: enum_1.MenuAction.create,
                },
                {
                    action: enum_1.MenuAction.update,
                },
                {
                    action: enum_1.MenuAction.delete,
                },
            ],
        },
    },
    {
        name: 'Notification',
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
            ],
        },
    },
    {
        name: 'Scheduled Broadcast',
        path: '/notification/scheduled-broadcast',
        parent: {
            connect: {
                name: 'Notification',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
                {
                    action: enum_1.MenuAction.create,
                },
            ],
        },
    },
    {
        name: 'Pharmacy Management',
        path: '/pharmacy/management',
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
                {
                    action: enum_1.MenuAction.create,
                },
                {
                    action: enum_1.MenuAction.update,
                },
                {
                    action: enum_1.MenuAction.delete,
                },
            ],
        },
    },
    {
        name: 'Order',
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
            ],
        },
    },
    {
        name: 'Order Management',
        path: '/order/order-management',
        parent: {
            connect: {
                name: 'Order',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
                {
                    action: enum_1.MenuAction.update,
                },
            ],
        },
    },
    {
        name: 'Promotion',
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
            ],
        },
    },
    {
        name: 'Voucher',
        path: '/promotion/voucher',
        parent: {
            connect: {
                name: 'Promotion',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
                {
                    action: enum_1.MenuAction.create,
                },
                {
                    action: enum_1.MenuAction.update,
                },
                {
                    action: enum_1.MenuAction.delete,
                },
            ],
        },
    },
    {
        name: 'User Management',
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
            ],
        },
    },
    {
        name: 'Permission',
        path: '/user-management/permission',
        parent: {
            connect: {
                name: 'User Management',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
                {
                    action: enum_1.MenuAction.update,
                },
            ],
        },
    },
    {
        name: 'Role',
        path: '/user-management/role',
        parent: {
            connect: {
                name: 'User Management',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
                {
                    action: enum_1.MenuAction.create,
                },
                {
                    action: enum_1.MenuAction.update,
                },
                {
                    action: enum_1.MenuAction.delete,
                },
            ],
        },
    },
    {
        name: 'User',
        path: '/user-management/user',
        parent: {
            connect: {
                name: 'User Management',
            },
        },
        menu_actions: {
            create: [
                {
                    action: enum_1.MenuAction.read,
                },
                {
                    action: enum_1.MenuAction.create,
                },
                {
                    action: enum_1.MenuAction.update,
                },
                {
                    action: enum_1.MenuAction.delete,
                },
            ],
        },
    },
];
//# sourceMappingURL=menu.seed.js.map
//# debugId=be54218b-3442-5d0b-9e79-e910010b6075
