"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5a348f71-3c1a-58aa-b9fa-8566e70a2543")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSeed = void 0;
exports.NotificationSeed = [
    {
        targetRole: 2,
        type: 'GENERAL',
        title: '🔔 [Reminder] 10 menit lagi jadwal konsultasi dengan pasienmu akan dimulai.',
        body: '',
        data: '',
    },
    {
        targetRole: 2,
        type: 'CONSULTATION_DOCTOR_SCHEDULE',
        title: '📝 Dila btw telah membuat jadwal konsultasi denganmu',
        body: '',
        data: {
            consultation_doctor_schedule_id: 1,
            schedule_date: '2023-07-29T11:31:38+07:00',
            customer_name: 'Dila',
            category: 'Korektif Wajah',
            topic: 'Bekas Jerawat',
        },
    },
    {
        targetRole: 2,
        type: 'CONSULTATION_REVIEW',
        title: 'Yeay, Jane Cooper telah memberikan rating & ulasan untuk Anda 🎉🎉',
        body: 'Lihat rating & ulasannya, yuk!',
        data: {
            consultation_review_id: 1,
        },
    },
    {
        targetRole: 3,
        type: 'CHAT',
        title: 'Dokter mengirim pesan untukmu! 📨',
        body: 'Yuk! Baca sekarang :)',
        data: {
            chat_room: 'RX65E1M8U9',
            consultation_id: 1,
        },
    },
    {
        targetRole: 3,
        type: 'TRANSACTION_CONSULTATION_SUCCESS',
        title: 'Yeay, Transkasimu berhasil! 🎉🎉',
        body: 'Sekarang kamu bisa mulai konsultasi dengan Dokter.',
        data: {
            transaction_id: '62dd8ded-89ee-4a03-92b7-74de618aab9f',
        },
    },
];
//# sourceMappingURL=notification.seed.js.map
//# debugId=5a348f71-3c1a-58aa-b9fa-8566e70a2543
