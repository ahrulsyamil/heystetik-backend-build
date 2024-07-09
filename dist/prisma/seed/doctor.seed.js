"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b9a6463e-f4b0-5105-9b8b-fc85a8b2d182")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorSeed = void 0;
const bcrypt_1 = require("bcrypt");
const enum_1 = require("../../src/globals/constant/enum");
exports.doctorSeed = [
    {
        fullname: 'dr. Stanley Setiawan, Sp.KK',
        email: 'stanley@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+6281298367890',
        gender: 'Laki-laki',
        address: 'Jalan Pemuda',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[09:00-11:00,13:00-15:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[14:00-16:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00,16:00-18:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00,17:00-19:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 17:00'),
                                end_time: new Date('2024-01-12 19:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:00-10:00,12:00-14:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:00'),
                                end_time: new Date('2024-01-12 10:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 12:00'),
                                end_time: new Date('2024-01-12 14:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[16:00-18:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Melindungi Kulit dari Paparan Sinar Matahari',
                    doctor_title: 'Dermatologist',
                    tips: 'Gunakan tabir surya dengan SPF tinggi dan kenakan perlindungan matahari seperti topi dan kacamata hitam untuk melindungi kulit dari kerusakan akibat sinar matahari.',
                    position: 1,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Lulu Dwiarti Ningtias, Sp.DV',
        email: 'lulu@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+62898763554321',
        gender: 'Perempuan',
        address: 'Jalan Kenangan',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[00:00-23:59]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 00:00'),
                                end_time: new Date('2024-01-12 23:59'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[00:00-23:59]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 00:00'),
                                end_time: new Date('2024-01-12 23:59'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[00:00-23:59]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 00:00'),
                                end_time: new Date('2024-01-12 23:59'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[00:00-23:59]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 00:00'),
                                end_time: new Date('2024-01-12 23:59'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[00:00-23:59]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 00:00'),
                                end_time: new Date('2024-01-12 23:59'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[00:00-23:59]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 00:00'),
                                end_time: new Date('2024-01-12 23:59'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[00:00-23:59]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 00:00'),
                                end_time: new Date('2024-01-12 23:59'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Perawatan Anti-Penuaan dengan Botox',
                    doctor_title: 'Cosmetic Dermatologist',
                    tips: 'Botox dapat membantu mengurangi tampilan kerutan dan garis-garis halus pada wajah. Konsultasikan dengan dokter Anda untuk mengetahui apakah ini adalah pilihan yang tepat untuk Anda.',
                    position: 2,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Dartri Cahyawari, Sp.DV',
        email: 'dartri@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '9876586210',
        gender: 'Laki-laki',
        address: 'Jalan Harapan',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[09:30-11:30]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:30'),
                                end_time: new Date('2024-01-12 11:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:30-15:30,17:30-19:30]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:30'),
                                end_time: new Date('2024-01-12 15:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 17:30'),
                                end_time: new Date('2024-01-12 19:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:30-12:30,14:30-16:30]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:30'),
                                end_time: new Date('2024-01-12 12:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:30-13:30,15:30-17:30]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:30'),
                                end_time: new Date('2024-01-12 13:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:30'),
                                end_time: new Date('2024-01-12 17:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[14:00-16:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[16:00-18:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Perawatan Kulit dengan Pelembap yang Cocok',
                    doctor_title: 'Dermatologist',
                    tips: 'Pilih pelembap yang sesuai dengan jenis kulit Anda untuk menjaga kelembapan dan kesehatan kulit.',
                    position: 3,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Yuri Yogya, Sp.DV',
        email: 'yuri@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+62812342456789',
        gender: 'Perempuan',
        address: 'Jalan Bahagia',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00,17:00-19:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 17:00'),
                                end_time: new Date('2024-01-12 19:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,15:00-17:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,17:00-19:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 17:00'),
                                end_time: new Date('2024-01-12 19:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:00-10:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:00'),
                                end_time: new Date('2024-01-12 10:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00,16:00-18:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[15:00-17:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Penggunaan Serum Vitamin C untuk Kulit Cerah',
                    doctor_title: 'Aesthetic Medicine Specialist',
                    tips: 'Serum yang mengandung vitamin C dapat membantu mencerahkan kulit dan mengurangi tampilan noda dan pigmentasi.',
                    position: 4,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Andrew Wijaya, Sp.KK',
        email: 'andrew@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '3526322423',
        gender: 'Laki-laki',
        address: 'Jalan Setia',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00,17:00-19:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 17:00'),
                                end_time: new Date('2024-01-12 19:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,15:00-17:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,17:00-19:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 17:00'),
                                end_time: new Date('2024-01-12 19:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:00-10:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:00'),
                                end_time: new Date('2024-01-12 10:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00,16:00-18:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[15:00-17:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Perawatan Rambut dengan Nutrisi yang Tepat',
                    doctor_title: 'Hair Restoration Specialist',
                    tips: 'Pastikan untuk memberikan nutrisi yang cukup bagi rambut Anda dengan makan makanan bergizi dan menggunakan produk perawatan rambut yang tepat.',
                    position: 5,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Amanda Soewono, Sp.KK',
        email: 'amanda@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+62894367354321',
        gender: 'Perempuan',
        address: 'Jalan Mewah',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,15:00-17:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,13:00-15:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:00-14:00,16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:00'),
                                end_time: new Date('2024-01-12 14:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:00-10:00,13:00-15:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:00'),
                                end_time: new Date('2024-01-12 10:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Mengatasi Jerawat dengan Perawatan yang Tepat',
                    doctor_title: 'Dermatologist',
                    tips: 'Konsultasikan dengan dermatologist Anda untuk mendapatkan perawatan yang sesuai untuk mengatasi jerawat dan menjaga kesehatan kulit.',
                    position: 6,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Benny Tanjung, Sp.KK',
        email: 'benny@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+6287723658',
        gender: 'Laki-laki',
        address: 'Jalan Kecantikan',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,15:00-17:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,13:00-15:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:00-14:00,16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:00'),
                                end_time: new Date('2024-01-12 14:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:00-10:00,13:00-15:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:00'),
                                end_time: new Date('2024-01-12 10:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00, 18:30-21:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 18:30'),
                                end_time: new Date('2024-01-12 21:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Pentingnya Penggunaan Pelembap Bibir',
                    doctor_title: 'Cosmetic Dermatologist',
                    tips: 'Gunakan pelembap bibir secara teratur untuk mencegah bibir kering dan pecah-pecah.',
                    position: 7,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Cindy Sutanto, Sp.KK',
        email: 'cindy@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+628772835795',
        gender: 'Perempuan',
        address: 'Jalan Cantik Raya',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[08:00-10:30,15:00-17:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 18:00'),
                                end_time: new Date('2024-01-12 10:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[14:00-16:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Perawatan Kulit dengan Pengelupasan Kimia',
                    doctor_title: 'Aesthetic Medicine Specialist',
                    tips: 'Pengelupasan kimia dapat membantu menghilangkan sel-sel kulit mati dan merangsang regenerasi kulit baru. Namun, konsultasikan dengan dokter Anda untuk mendapatkan perawatan yang sesuai.',
                    position: 8,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Erika Gunawan, Sp.KK',
        email: 'erika@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+628767263852',
        gender: 'Perempuan',
        address: 'Jalan Kecantikan Indah',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,14:00-16:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,13:00-15:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:00-14:00,16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:00'),
                                end_time: new Date('2024-01-12 14:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:30-10:30,13:00-14:30]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:30'),
                                end_time: new Date('2024-01-12 10:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 14:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00,14:30-16:30]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[17:00-19:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 17:00'),
                                end_time: new Date('2024-01-12 19:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Menjaga Kelembapan Kulit dengan Masker',
                    doctor_title: 'Dermatologist',
                    tips: 'Masker wajah dapat memberikan kelembapan ekstra bagi kulit. Pilih masker yang sesuai dengan jenis kulit Anda dan gunakan secara teratur.',
                    position: 9,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Felix Tan, Sp.KK',
        email: 'felix@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+6282738502662',
        gender: 'Laki-laki',
        address: 'Jalan Kecantikan Sejahtera',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,15:00-17:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,13:00-15:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:00-14:00,16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:00'),
                                end_time: new Date('2024-01-12 14:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:00-10:00,13:00-15:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:00'),
                                end_time: new Date('2024-01-12 10:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Penggunaan Pelembap Mata untuk Mengurangi Kerutan',
                    doctor_title: 'Cosmetic Dermatologist',
                    tips: 'Pelembap mata khusus dapat membantu menghidrasi dan mengurangi tampilan kerutan di sekitar mata.',
                    position: 10,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Grace Lim, Sp.KK',
        email: 'grace@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+6287866588',
        gender: 'Perempuan',
        address: 'Jalan Kecantikan Mulia',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,13:00-15:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,13:00-15:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00,15:00-17:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[16:00-18:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Pentingnya Perawatan Kuku yang Tepat',
                    doctor_title: 'Dermatologist',
                    tips: 'Jaga kebersihan kuku dan gunakan produk perawatan kuku yang sesuai untuk mencegah kerusakan dan infeksi.',
                    position: 11,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Henry Soegiarto, Sp.KK',
        email: 'henry@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+62823579283',
        gender: 'Laki-laki',
        address: 'Jalan Kecantikan Makmur',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[08:00-10:00,19:00-21:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 10:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 19:00'),
                                end_time: new Date('2024-01-12 21:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,15:00-17:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,18:00-20:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 18:00'),
                                end_time: new Date('2024-01-12 20:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:00-14:00,16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:00'),
                                end_time: new Date('2024-01-12 14:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:00-10:00,19:00-21:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 19:00'),
                                end_time: new Date('2024-01-12 10:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 19:00'),
                                end_time: new Date('2024-01-12 21:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Pentingnya Pembersihan Riasan Sebelum Tidur',
                    doctor_title: 'Aesthetic Medicine Specialist',
                    tips: 'Pastikan untuk membersihkan riasan secara menyeluruh sebelum tidur untuk menghindari penumpukan dan kerusakan kulit.',
                    position: 12,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Isabella Tjandra, Sp.KK',
        email: 'isabella@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+6286745765',
        gender: 'Perempuan',
        address: 'Jalan Kecantikan Abadi',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[10:00-12:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,15:00-17:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:00-14:00,16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:00'),
                                end_time: new Date('2024-01-12 14:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:00-10:00,13:00-15:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:00'),
                                end_time: new Date('2024-01-12 10:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[19:00-21:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 19:00'),
                                end_time: new Date('2024-01-12 21:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Perawatan Kulit dengan Terapi Laser',
                    doctor_title: 'Dermatologist',
                    tips: 'Terapi laser dapat membantu mengatasi berbagai masalah kulit, seperti bekas luka, noda, dan tanda penuaan. Konsultasikan dengan dokter Anda untuk mengetahui apakah ini adalah pilihan yang tepat untuk Anda.',
                    position: 13,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Jacky Wibowo, Sp.KK',
        email: 'jacky@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+62854643667',
        gender: 'Laki-laki',
        address: 'Jalan Kecantikan Permai',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: false,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,15:00-17:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,13:00-15:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[17:00-19:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 17:00'),
                                end_time: new Date('2024-01-12 19:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00,14:00-16:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00, 15:30-17:30]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:30'),
                                end_time: new Date('2024-01-12 17:30'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Perawatan Kulit dengan Peeling Enzim',
                    doctor_title: 'Aesthetic Medicine Specialist',
                    tips: 'Peeling enzim dapat membantu menghilangkan sel-sel kulit mati dan meningkatkan tekstur kulit. Namun, konsultasikan dengan dokter Anda untuk mendapatkan perawatan yang tepat.',
                    position: 14,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Katrina Liman, Sp.KK',
        email: 'katrina@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+62875354679',
        gender: 'Perempuan',
        address: 'Jalan Kecantikan Gemilang',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,15:30-16:30]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:30'),
                                end_time: new Date('2024-01-12 16:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:00-14:00,16:30-17:30]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:00'),
                                end_time: new Date('2024-01-12 14:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:30'),
                                end_time: new Date('2024-01-12 17:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:00-10:00,13:00-15:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:00'),
                                end_time: new Date('2024-01-12 10:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:00-10:00,13:00-15:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:00'),
                                end_time: new Date('2024-01-12 10:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Pentingnya Konsumsi Air yang Cukup',
                    doctor_title: 'Dermatologist',
                    tips: 'Minumlah cukup air setiap hari untuk menjaga kelembapan kulit dari dalam dan membantu menjaga kesehatan kulit secara keseluruhan.',
                    position: 15,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Lawrence Gunawan, Sp.KK',
        email: 'lawrence@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+62885764654',
        gender: 'Laki-laki',
        address: 'Jalan Kecantikan Harmoni',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: false,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,15:00-17:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,13:00-15:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:00-14:00,16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:00'),
                                end_time: new Date('2024-01-12 14:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:00-10:00,13:00-15:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:00'),
                                end_time: new Date('2024-01-12 10:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
            ],
        },
        snips_tips: {
            create: [
                {
                    title: 'Pentingnya Penggunaan Pelembap Tubuh',
                    doctor_title: 'Cosmetic Dermatologist',
                    tips: 'Gunakan pelembap tubuh secara teratur setelah mandi untuk menjaga kelembapan kulit dan mencegah kekeringan.',
                    position: 1,
                    status: enum_1.SnipTipsStatus.Published,
                },
            ],
        },
    },
    {
        fullname: 'dr. Natalia Santoso, Sp.KK',
        email: 'natalia@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+628777687685',
        gender: 'Perempuan',
        address: 'Jalan Kecantikan Mewah',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,15:00-17:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,13:00-15:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:00-14:00,16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:00'),
                                end_time: new Date('2024-01-12 14:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:00-10:00,13:00-15:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:00'),
                                end_time: new Date('2024-01-12 10:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        fullname: 'dr. Oscar Liman, Sp.KK',
        email: 'oscar@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+62878545687',
        gender: 'Laki-laki',
        address: 'Jalan Kecantikan Mulia',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[08:00-10:30,15:00-17:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:00'),
                                end_time: new Date('2024-01-12 10:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[14:00-16:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        fullname: 'dr. Patricia Tandjung, Sp.KK',
        email: 'patricia@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+628768575478',
        gender: 'Perempuan',
        address: 'Jalan Kecantikan Berseri',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,14:00-16:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,13:00-15:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:00-14:00,16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:00'),
                                end_time: new Date('2024-01-12 14:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:30-10:30,13:00-14:30]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:30'),
                                end_time: new Date('2024-01-12 10:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 14:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00,14:30-16:30]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[17:00-19:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 17:00'),
                                end_time: new Date('2024-01-12 19:00'),
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        fullname: 'dr. Quincy Wibowo, Sp.KK',
        email: 'quincy@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+628327982632',
        gender: 'Laki-laki',
        address: 'Jalan Kecantikan Elegan',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: false,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,14:00-16:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,13:00-15:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:00-14:00,16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:00'),
                                end_time: new Date('2024-01-12 14:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:30-10:30,13:00-14:30]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:30'),
                                end_time: new Date('2024-01-12 10:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 14:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00,14:30-16:30]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[17:00-19:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 17:00'),
                                end_time: new Date('2024-01-12 19:00'),
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        fullname: 'dr. Rachel Gunawan, Sp.KK',
        email: 'rachel@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+628325897926',
        gender: 'Perempuan',
        address: 'Jalan Kecantikan Indah Jaya',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[08:30-10:30,14:30-16:30]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:30'),
                                end_time: new Date('2024-01-12 10:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:30-14:30,16:30-18:30]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:30'),
                                end_time: new Date('2024-01-12 14:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:30'),
                                end_time: new Date('2024-01-12 18:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:30-11:30,13:30-15:30]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:30'),
                                end_time: new Date('2024-01-12 11:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:30'),
                                end_time: new Date('2024-01-12 15:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:30-13:30,15:30-17:30]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:30'),
                                end_time: new Date('2024-01-12 13:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:30'),
                                end_time: new Date('2024-01-12 17:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:30-12:30,14:30-16:30]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:30'),
                                end_time: new Date('2024-01-12 12:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:30-15:30]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:30'),
                                end_time: new Date('2024-01-12 15:30'),
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        fullname: 'dr. Samuel Tjandra, Sp.KK',
        email: 'samuel@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+628273985792',
        gender: 'Laki-laki',
        address: 'Jalan Kecantikan Sejahtera',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[08:00-10:30,15:00-17:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:00'),
                                end_time: new Date('2024-01-12 10:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:00'),
                                end_time: new Date('2024-01-12 17:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[14:00-16:00]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:00-15:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        fullname: 'dr. Tania Santoso, Sp.KK',
        email: 'tania@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+628236593722',
        gender: 'Perempuan',
        address: 'Jalan Kecantikan Terang',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[08:30-10:30,14:30-16:30]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:30'),
                                end_time: new Date('2024-01-12 10:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:30-14:30,16:30-18:30]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:30'),
                                end_time: new Date('2024-01-12 14:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:30'),
                                end_time: new Date('2024-01-12 18:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:30-11:30,13:30-15:30]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:30'),
                                end_time: new Date('2024-01-12 11:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:30'),
                                end_time: new Date('2024-01-12 15:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:30-13:30,15:30-17:30]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:30'),
                                end_time: new Date('2024-01-12 13:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:30'),
                                end_time: new Date('2024-01-12 17:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:30-12:30,14:30-16:30]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:30'),
                                end_time: new Date('2024-01-12 12:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:30-15:30]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:30'),
                                end_time: new Date('2024-01-12 15:30'),
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        fullname: 'dr. Uci Liman, Sp.KK',
        email: 'uci@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+62838279537',
        gender: 'Perempuan',
        address: 'Jalan Kecantikan Bahagia',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: false,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[10:00-12:00,14:00-16:00]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:00-13:00,14:00-16:00]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:00'),
                                end_time: new Date('2024-01-12 13:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:00-11:00,13:00-15:00]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:00'),
                                end_time: new Date('2024-01-12 11:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 15:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:00-14:00,16:00-18:00]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:00'),
                                end_time: new Date('2024-01-12 14:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[08:30-10:30,13:00-14:30]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:30'),
                                end_time: new Date('2024-01-12 10:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:00'),
                                end_time: new Date('2024-01-12 14:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:00-12:00,14:30-16:30]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:00'),
                                end_time: new Date('2024-01-12 12:00'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[17:00-19:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 17:00'),
                                end_time: new Date('2024-01-12 19:00'),
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        fullname: 'dr. Vicky Tandjung, Sp.KK',
        email: 'vicky@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+6288239723324',
        gender: 'Laki-laki',
        address: 'Jalan Kecantikan Makmur Jaya',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[09:30-11:30]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:30'),
                                end_time: new Date('2024-01-12 11:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:30-15:30,17:30-19:30]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:30'),
                                end_time: new Date('2024-01-12 15:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 17:30'),
                                end_time: new Date('2024-01-12 19:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:30-12:30,14:30-16:30]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:30'),
                                end_time: new Date('2024-01-12 12:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:30-13:30,15:30-17:30]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:30'),
                                end_time: new Date('2024-01-12 13:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:30'),
                                end_time: new Date('2024-01-12 17:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[14:00-16:00]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 14:00'),
                                end_time: new Date('2024-01-12 16:00'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[16:00-18:00]',
                    day: 'Sunday',
                    day_number: 0,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 16:00'),
                                end_time: new Date('2024-01-12 18:00'),
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        fullname: 'dr. Wendy Wibowo, Sp.KK',
        email: 'wendy@example.com',
        password: (0, bcrypt_1.hashSync)('123456', 12),
        no_phone: '+628237987326',
        gender: 'Laki-laki',
        address: 'Jalan Kecantikan Harmoni Indah',
        photo_profile: 'photo_profile',
        referral_code: 'referral_code',
        roleId: 2,
        is_active: true,
        verified_phone_at: new Date(),
        verified_email_at: new Date(),
        finish_register: true,
        doctor_schedule_status: enum_1.DoctorScheduleStatus.ACTIVE,
        doctor_schedules: {
            create: [
                {
                    start_end_time: '[08:30-10:30,14:30-16:30]',
                    day: 'Monday',
                    day_number: 1,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 08:30'),
                                end_time: new Date('2024-01-12 10:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[12:30-14:30,16:30-18:30]',
                    day: 'Tuesday',
                    day_number: 2,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 12:30'),
                                end_time: new Date('2024-01-12 14:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 16:30'),
                                end_time: new Date('2024-01-12 18:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[09:30-11:30,13:30-15:30]',
                    day: 'Wednesday',
                    day_number: 3,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 09:30'),
                                end_time: new Date('2024-01-12 11:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 13:30'),
                                end_time: new Date('2024-01-12 15:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[11:30-13:30,15:30-17:30]',
                    day: 'Thursday',
                    day_number: 4,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 11:30'),
                                end_time: new Date('2024-01-12 13:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 15:30'),
                                end_time: new Date('2024-01-12 17:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[10:30-12:30,14:30-16:30]',
                    day: 'Friday',
                    day_number: 5,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 10:30'),
                                end_time: new Date('2024-01-12 12:30'),
                            },
                            {
                                start_time: new Date('2024-01-12 14:30'),
                                end_time: new Date('2024-01-12 16:30'),
                            },
                        ],
                    },
                },
                {
                    start_end_time: '[13:30-15:30]',
                    day: 'Saturday',
                    day_number: 6,
                    is_active: true,
                    doctor_schedule_times: {
                        create: [
                            {
                                start_time: new Date('2024-01-12 13:30'),
                                end_time: new Date('2024-01-12 15:30'),
                            },
                        ],
                    },
                },
            ],
        },
    },
];
//# sourceMappingURL=doctor.seed.js.map
//# debugId=b9a6463e-f4b0-5105-9b8b-fc85a8b2d182
