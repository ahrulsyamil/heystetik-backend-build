"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f2e1c584-77f1-55b5-abbf-69b835933fc7")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.consultationSeed = void 0;
const client_1 = require("@prisma/client");
const base64_consultation_seed_1 = require("./base64-consultation.seed");
const media_1 = require("../../src/globals/helpers/media");
const media_2 = require("../../src/globals/constant/media");
const crypto_1 = require("crypto");
const enum_1 = require("../../src/globals/constant/enum");
async function consultationSeed() {
    const prisma = new client_1.PrismaClient();
    const customer = await prisma.users.findFirst({
        where: {
            email: 'sophiaclark@gmail.com',
        },
    });
    const doctor = await prisma.users.findFirst({
        where: {
            email: 'lulu@example.com',
        },
        include: {
            doctor_schedules: true,
        },
    });
    const medicalHistory = await prisma.medical_history.create({
        data: {
            customer_id: customer.id,
            interest_condition_id: 7,
            medical_history_items: {
                create: [
                    {
                        interest_condition_question_id: 1,
                        interest_condition_answer_id: 2,
                    },
                    {
                        interest_condition_question_id: 2,
                        interest_condition_answer_id: 6,
                    },
                    {
                        interest_condition_question_id: 4,
                        interest_condition_answer_id: 7,
                    },
                    {
                        interest_condition_question_id: 5,
                        interest_condition_answer_id: 11,
                    },
                    {
                        interest_condition_question_id: 6,
                        interest_condition_answer_id: 15,
                    },
                    {
                        interest_condition_question_id: 7,
                        interest_condition_answer_id: 16,
                    },
                    {
                        interest_condition_question_id: 8,
                        interest_condition_answer_id: 19,
                    },
                    {
                        interest_condition_question_id: 9,
                        interest_condition_answer_id: 20,
                    },
                    {
                        interest_condition_question_id: 10,
                        interest_condition_answer_id: 24,
                    },
                ],
            },
            media_medical_histories: {
                create: await Promise.all(base64_consultation_seed_1.base64MedicalHistory.map(async (base64) => {
                    const fileInfo = await (0, media_1.saveBase64ToFile)(base64, media_2.MEDIA_MEDICAL_HISTORY_DIR, 'medical-history');
                    const media = await prisma.media.create({
                        data: fileInfo,
                    });
                    return {
                        media_id: media.id,
                    };
                })),
            },
        },
    });
    const transactionUUID = (0, crypto_1.randomUUID)();
    const transactionConsultation = await prisma.transaction_consultation.create({
        data: {
            id: transactionUUID,
            customer_id: customer.id,
            medical_history_id: medicalHistory.id,
            duration: 30,
            total_fee: 45000,
            transaction_fee: 4000,
            tax: 0,
            total_discount: 0,
            total_paid: 45000,
            payment_method_id: 3,
            order_id: `CONSULTATION.${transactionUUID}`,
            payment_status: enum_1.PaymentStatus.SUCCEEDED,
            status: 'AKTIF',
        },
    });
    const consultationDoctorSchedule = await prisma.consultation_doctor_schedule.create({
        data: {
            customer_id: customer.id,
            doctor_id: doctor.id,
            doctor_schedule_id: doctor.doctor_schedules.find((x) => x.day_number == new Date().getDay()).id,
            transaction_consultation_id: transactionConsultation.id,
            status: 'DIAMBIL',
        },
    });
    await prisma.chat_room.create({
        data: {
            doctor_id: doctor.id,
            customer_id: customer.id,
            code: 'RX65E1M8U9',
            ended: false,
            chat: {
                create: [
                    {
                        sender_id: 0,
                        receiver_id: customer.id,
                        message: 'Selamat datang di chatroom konsultasi Heystetik.\nMohon tunggu sebentar ya, kak. Dokter sedang membaca dan memahami pre-assessment-mu dulu :)\nJangan khawatir, kami akan mengirimkan notifikasi setiap ada pesan baru dari dokter. Terima kasih sudah bersabar :)',
                    },
                ],
            },
        },
    });
    await prisma.consultation.create({
        data: {
            doctor_id: doctor.id,
            customer_id: customer.id,
            transaction_consultation_id: transactionConsultation.id,
            consultation_doctor_schedule_id: consultationDoctorSchedule.id,
            medical_history_id: medicalHistory.id,
            code: 'RX65E1M8U9',
            duration: 30,
            status: 'AKTIF',
        },
    });
    await prisma.$disconnect();
}
exports.consultationSeed = consultationSeed;
//# sourceMappingURL=consultation.seed.js.map
//# debugId=f2e1c584-77f1-55b5-abbf-69b835933fc7
