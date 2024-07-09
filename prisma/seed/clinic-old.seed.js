"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="55105aad-b78c-57a6-af25-65987c9a51d3")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.clinicSeed = void 0;
const client_1 = require("@prisma/client");
const media_1 = require("../../src/globals/constant/media");
const media_2 = require("../../src/globals/helpers/media");
const base64_clinic_old_seed_1 = require("./base64-clinic-old.seed");
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];
const data = [
    {
        name: 'Clinic 1',
        address: '123 Main St',
        pinpoint_latitude: 51.5074,
        pinpoint_longitude: -0.1278,
        pinpoint_address: 'London, UK',
        province_id: 11,
        city_id: 1106,
        postal_code: 12345,
        registration_number: 123456789,
        phone: '123-456-7890',
        email: 'clinic1@example.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        company_name: 'ABC Company',
        company_address: '456 Business Rd',
        company_city_id: 11,
        company_province_id: 1105,
        company_postal_code: '54321',
        npwp: '1234567890',
        pic_name: 'John Doe',
        pic_phone: '987-654-3210',
        contract_expired_date: new Date('2023-12-31'),
        treatments: {
            create: [
                {
                    name: 'Treatment 1',
                    category: 'Category 1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    duration: '1 hour',
                    downtime: 'No downtime',
                    treatment_type: 'Type 1',
                    treatment_step: 'Step 1',
                    price: 100,
                    is_active: true,
                },
            ],
        },
        clinic_operation_hours: {
            create: days.map((day) => {
                return {
                    day,
                    start_time: '2023-07-10T09:00:00Z',
                    end_time: '2023-07-10T17:00:00Z',
                    is_active: true,
                };
            }),
        },
    },
];
const createMedia = async (createMediaDto) => {
    const prisma = new client_1.PrismaClient();
    const data = await prisma.media.create({
        data: createMediaDto,
    });
    await prisma.$disconnect();
    return data;
};
const clinicSeed = async () => {
    const mediaClinics = [];
    const mediaTreatments = [];
    const clinicPromises = data.map(async (clinic) => {
        const fileClinicInfo1 = await (0, media_2.saveBase64ToFile)(base64_clinic_old_seed_1.base64Clinic, media_1.MEDIA_CLINIC_DIR, 'clinic');
        const mediaClinic1 = await createMedia(fileClinicInfo1);
        mediaClinics.push({
            media_id: mediaClinic1.id,
        });
        const fileClinicInfo2 = await (0, media_2.saveBase64ToFile)(base64_clinic_old_seed_1.base64Clinic, media_1.MEDIA_CLINIC_DIR, 'clinic');
        const mediaClinic2 = await createMedia(fileClinicInfo2);
        mediaClinics.push({
            media_id: mediaClinic2.id,
        });
        return {
            ...clinic,
            media_clinics: {
                create: mediaClinics,
            },
        };
    });
    const seedData = await Promise.all(clinicPromises);
    const result = seedData.map(async (item) => {
        const treatment = await item.treatments.create.map(async (treatment) => {
            const fileTreatmentInfo1 = await (0, media_2.saveBase64ToFile)(base64_clinic_old_seed_1.base64Treatment, media_1.MEDIA_TREATMENT_DIR, 'treatment');
            const fileTreatmentInfo2 = await (0, media_2.saveBase64ToFile)(base64_clinic_old_seed_1.base64Treatment, media_1.MEDIA_TREATMENT_DIR, 'treatment');
            const mediaTreatment1 = await createMedia(fileTreatmentInfo1);
            const mediaTreatment2 = await createMedia(fileTreatmentInfo2);
            mediaTreatments.push({
                media_id: mediaTreatment1.id,
            });
            mediaTreatments.push({
                media_id: mediaTreatment2.id,
            });
            return {
                ...treatment,
                media_treatments: {
                    create: mediaTreatments,
                },
            };
        });
        return {
            ...item,
            treatments: {
                create: await Promise.all(treatment),
            },
        };
    });
    return await Promise.all(result);
};
exports.clinicSeed = clinicSeed;
//# sourceMappingURL=clinic-old.seed.js.map
//# debugId=55105aad-b78c-57a6-af25-65987c9a51d3
