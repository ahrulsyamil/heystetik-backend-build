"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c64b5985-2bc2-5e75-bb27-01ad311291ae")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const dayjs = require("dayjs");
const timezone = require("dayjs/plugin/timezone");
const utc = require("dayjs/plugin/utc");
const media_1 = require("../../src/globals/constant/media");
const array_1 = require("../../src/globals/helpers/array");
const media_2 = require("../../src/globals/helpers/media");
const number_1 = require("../../src/globals/helpers/number");
const bank_seed_1 = require("./bank.seed");
const banner_seed_1 = require("./banner.seed");
const base64_banner_seed_1 = require("./base64-banner.seed");
const base64_clinic_logo_seed_1 = require("./base64-clinic-logo.seed");
const base64_clinic_seed_1 = require("./base64-clinic.seed");
const base64_concern_characteristics_1 = require("./base64-concern-characteristics");
const base64_concern_seed_1 = require("./base64-concern.seed");
const base64_customer_profile_picture_seed_1 = require("./base64-customer-profile-picture.seed");
const base64_doctor_npwp_idcard_seed_1 = require("./base64-doctor-npwp-idcard.seed");
const base64_doctor_profile_picture_seed_1 = require("./base64-doctor-profile-picture.seed");
const base64_payment_method_seed_1 = require("./base64-payment-method.seed");
const base64_pharmacy_seed_1 = require("./base64-pharmacy.seed");
const base64_product_seed_1 = require("./base64-product.seed");
const base64_treatment_seed_1 = require("./base64-treatment.seed");
const clinic_seed_1 = require("./clinic.seed");
const concern_seed_1 = require("./concern.seed");
const consultation_seed_1 = require("./consultation.seed");
const doctor_seed_1 = require("./doctor.seed");
const function_calculate_distance_query_1 = require("./function-calculate-distance.query");
const function_update_product_stock_query_1 = require("./function-update-product-stock.query");
const function_update_remaining_redeem_amount_recipe_drug_query_1 = require("./function-update_remaining_redeem_amount_recipe_drug.query");
const insert_kota_kabupatens_query_1 = require("./insert-kota-kabupatens.query");
const insert_provinces_query_1 = require("./insert-provinces.query");
const interest_conditions_seed_1 = require("./interest-conditions.seed");
const lookup_seed_1 = require("./lookup.seed");
const menu_seed_1 = require("./menu.seed");
const payment_method_seed_1 = require("./payment-method.seed");
const pharmacy_seed_1 = require("./pharmacy.seed");
const product_tags_seed_1 = require("./product-tags.seed");
const product_seed_1 = require("./product.seed");
const report_reason_seed_1 = require("./report-reason.seed");
const roles_seed_1 = require("./roles.seed");
const shipper_seed_1 = require("./shipper.seed");
const shipping_method_seed_1 = require("./shipping-method.seed");
const trigger_update_product_stock_query_1 = require("./trigger-update-product-stock.query");
const trigger_update_remaining_redeem_amount_recipe_drug_query_1 = require("./trigger_update_remaining-redeem-amount-recipe-drug.query");
const users_seed_1 = require("./users.seed");
const vourcher_seed_1 = require("./vourcher.seed");
const prisma = new client_1.PrismaClient();
async function main() {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.tz.setDefault('Asia/Jakarta');
    const createMedia = async (createMediaDto) => {
        return await prisma.media.create({
            data: createMediaDto,
        });
    };
    prisma.$transaction(async (transaction) => {
        await transaction.$executeRaw(client_1.Prisma.raw(function_calculate_distance_query_1.functionCalculateDistanceSql));
        await transaction.$executeRaw(client_1.Prisma.raw(insert_provinces_query_1.InsertProvincesQuerySql));
        await transaction.$executeRaw(client_1.Prisma.raw(insert_kota_kabupatens_query_1.InsertKotaKabupatensQuerySql));
        await transaction.$executeRaw(client_1.Prisma.raw(function_update_product_stock_query_1.functionUpdateProductStockQuerySql));
        await transaction.$executeRaw(client_1.Prisma.raw(trigger_update_product_stock_query_1.triggerUpdateProductStockQuerySql));
        await transaction.$executeRaw(client_1.Prisma.raw(function_update_remaining_redeem_amount_recipe_drug_query_1.functionUpdateRemainingRedeemAmountRecipeDrugQuerySql));
        await transaction.$executeRaw(client_1.Prisma.raw(trigger_update_remaining_redeem_amount_recipe_drug_query_1.triggerUpdateRemainingRedeemAmountRecipeDrugQuerySql));
    }, {
        maxWait: 5000,
        timeout: 10000,
    });
    const roles = await prisma.roles.createMany({
        data: roles_seed_1.RoleSeed,
    });
    const concern = await Promise.all(concern_seed_1.ConcernSeed.map(async (item, index) => {
        const fileInfo = await (0, media_2.saveBase64ToFile)(base64_concern_seed_1.base64Concern.find((x) => x.name == item.name).base64, media_1.MEDIA_CONCERN_DIR, 'concern');
        const media = await createMedia(fileInfo);
        return await prisma.concern.create({
            data: {
                ...item,
                media_concern: {
                    create: {
                        media_id: media.id,
                    },
                },
            },
        });
    }));
    const users = await Promise.all(users_seed_1.UsersSeed.map(async (user) => {
        const filterPhoto = base64_customer_profile_picture_seed_1.base64CustomerProfilePicture.filter((x) => x.gender == user.gender);
        const fileInfo = await (0, media_2.saveBase64ToFile)(filterPhoto[Math.floor(Math.random() * filterPhoto.length)].base64, media_1.MEDIA_PROFILE_PICTURE_DIR, 'profile-picture');
        const media = await createMedia(fileInfo);
        const [provinces, cities, interestFaceCorrective, interestBodyCorrective, interestAugmentation, interestSexAndSkin,] = await Promise.all([
            prisma.provinces.findMany({
                where: {
                    name: {
                        in: ['DKI JAKARTA', 'JAWA BARAT'],
                    },
                },
            }),
            prisma.kota_kabupatens.findMany({}),
            prisma.$queryRaw `SELECT * FROM concern WHERE segment = 'Korektif Wajah' ORDER BY RANDOM() LIMIT ${(0, number_1.getRandomNumber)(5)}`,
            prisma.$queryRaw `SELECT * FROM concern WHERE segment = 'Korektif Tubuh' ORDER BY RANDOM() LIMIT ${(0, number_1.getRandomNumber)(5)}`,
            prisma.$queryRaw `SELECT * FROM concern WHERE segment = 'Augmentation Wajah & Tubuh' ORDER BY RANDOM() LIMIT ${(0, number_1.getRandomNumber)(5)}`,
            prisma.$queryRaw `SELECT * FROM concern WHERE segment IN ('Penyakit Menular Seksual', 'Masalah Kulit Lainnya') ORDER BY RANDOM() LIMIT ${(0, number_1.getRandomNumber)(5)}`,
        ]);
        const provinceId = provinces[Math.floor(Math.random() * provinces.length)].id;
        return await prisma.users.create({
            data: {
                ...user,
                provinceId,
                cityId: cities.filter((x) => x.provinces_id == provinceId)[Math.floor(Math.random() *
                    cities.filter((x) => x.provinces_id == provinceId).length)].id,
                media_user_profile_picture: {
                    create: {
                        media_id: media.id,
                    },
                },
                interest_face_corrective_skin_goals: {
                    create: interestFaceCorrective.map((item) => ({
                        name_face_corrective: item.name,
                    })),
                },
                interest_body_corrective_skin_goals: {
                    create: interestBodyCorrective.map((item) => ({
                        name_body_corrective: item.name,
                    })),
                },
                interest_augmentation_skin_goals: {
                    create: interestAugmentation.map((item) => ({
                        name_augmentation: item.name,
                    })),
                },
                interest_sexually_and_skin_diseases_skin_goals: {
                    create: interestSexAndSkin.map((item) => ({
                        name: item.name,
                    })),
                },
            },
        });
    }));
    const interestConditions = Promise.all(interest_conditions_seed_1.InterestConditionsSeed.map(async (item) => {
        const images = base64_concern_characteristics_1.base64ConcernCharacteristicts.find((x) => x.name == item.concern.connect.name);
        let medias = [];
        if (images) {
            medias = await Promise.all(images.base64.map(async (base64) => {
                const fileInfo = await (0, media_2.saveBase64ToFile)(base64, media_1.MEDIA_INTEREST_CONDITION_CHARACTERISTICS_DIR, 'interest-condition-characteristics');
                const media = await createMedia(fileInfo);
                return media;
            }));
        }
        await prisma.interest_conditions.create({
            data: {
                ...item,
                media_interest_conditions_characteristics: {
                    create: medias.map((media) => ({
                        media_id: media.id,
                    })),
                },
            },
        });
    }));
    const bank = await prisma.bank.createMany({
        data: bank_seed_1.BankSeed,
    });
    const paymentMethod = await Promise.all(payment_method_seed_1.PaymentMethodSeed.map(async (item) => {
        const fileInfo = await (0, media_2.saveBase64ToFile)(base64_payment_method_seed_1.Base64PaymentMethodSeed.find((x) => x.type == item.type).base64, media_1.MEDIA_PAYMENT_METHOD_DIR, 'payment-method');
        const media = await createMedia(fileInfo);
        await prisma.payment_method.create({
            data: {
                ...item,
                media_payment_method: {
                    create: {
                        media_id: media.id,
                    },
                },
            },
        });
    }));
    const doctor = await Promise.all(doctor_seed_1.doctorSeed.map(async (doctor) => {
        const filterPhoto = base64_doctor_profile_picture_seed_1.base64DoctorProfilePicture.filter((x) => x.gender == doctor.gender);
        const [fileInfoProfilePicture, fileInfoIdcard, fileInfoNpwp] = await Promise.all([
            (0, media_2.saveBase64ToFile)(filterPhoto[Math.floor(Math.random() * filterPhoto.length)].base64, media_1.MEDIA_PROFILE_PICTURE_DIR, 'doctor-file'),
            (0, media_2.saveBase64ToFile)(base64_doctor_npwp_idcard_seed_1.Base64DoctorNpwpIdcard.idcard, media_1.MEDIA_DOCTOR_ID_CARD_DIR, 'doctor-file'),
            (0, media_2.saveBase64ToFile)(base64_doctor_npwp_idcard_seed_1.Base64DoctorNpwpIdcard.npwp, media_1.MEDIA_DOCTOR_NPWP_DIR, 'doctor-file'),
        ]);
        const [mediaProfilePicture, mediaIdcard, mediaNpwp] = await Promise.all([
            createMedia(fileInfoProfilePicture),
            createMedia(fileInfoIdcard),
            createMedia(fileInfoNpwp),
        ]);
        const selectedBank = [17, 86, 28, 24, 29][Math.floor(Math.random() * 5)];
        const [bank, provinces, cities] = await Promise.all([
            prisma.bank.findUnique({
                where: {
                    id: selectedBank,
                },
            }),
            prisma.provinces.findMany({
                where: {
                    name: {
                        in: ['DKI JAKARTA', 'JAWA BARAT'],
                    },
                },
            }),
            prisma.kota_kabupatens.findMany({}),
        ]);
        const accountNumber = (0, number_1.generateOTP)(9).toString();
        const provinceId = provinces[Math.floor(Math.random() * provinces.length)].id;
        const createdDoctor = await prisma.users.create({
            data: {
                ...doctor,
                username: doctor.email.split('@')[0],
                user_balance: {
                    create: {
                        balance: 5000000,
                    },
                },
                user_bank_accounts: {
                    create: [
                        {
                            name: doctor.fullname,
                            bank_id: bank.id,
                            account_number: accountNumber,
                        },
                    ],
                },
                media_user_profile_picture: {
                    create: {
                        media_id: mediaProfilePicture.id,
                    },
                },
                media_doctor_id_card: {
                    create: {
                        media_id: mediaIdcard.id,
                    },
                },
                media_doctor_npwp: {
                    create: {
                        media_id: mediaNpwp.id,
                    },
                },
                provinceId,
                cityId: cities.filter((x) => x.provinces_id == provinceId)[Math.floor(Math.random() *
                    cities.filter((x) => x.provinces_id == provinceId).length)].id,
            },
            include: {
                user_bank_accounts: true,
            },
        });
        await Promise.all([
            { current_balance: 9000000, amount: 1500000 },
            { current_balance: 7500000, amount: 1000000 },
            { current_balance: 6500000, amount: 1500000 },
        ].map(async (item) => {
            await prisma.user_balance_withdrawal.create({
                data: {
                    user_id: createdDoctor.id,
                    user_bank_account_id: createdDoctor.user_bank_accounts[0].id,
                    current_balance: item.current_balance,
                    amount: item.amount,
                    notes: `Withdrawal (${bank.name} - ${accountNumber} - ${doctor.fullname})`,
                    status: 'completed',
                    user_balance_withdrawal_histories: {
                        create: [
                            {
                                status: 'processed',
                                created_at: dayjs().toDate(),
                                updated_at: dayjs().toDate(),
                            },
                            {
                                status: 'completed',
                                created_at: dayjs().add(5, 'minute').toDate(),
                                updated_at: dayjs().add(5, 'minute').toDate(),
                            },
                        ],
                    },
                },
            });
        }));
    }));
    const banner = await Promise.all(banner_seed_1.BannerSeed.map(async (banner, index) => {
        const fileInfo = await (0, media_2.saveBase64ToFile)(base64_banner_seed_1.base64Banner.find((x) => x.title == banner.title).base64, media_1.MEDIA_BANNER_DIR, 'banner');
        const media = await createMedia(fileInfo);
        return await prisma.banner.create({
            data: {
                ...banner,
                media_banner: {
                    create: {
                        media_id: media.id,
                    },
                },
            },
        });
    }));
    const consultation = await (0, consultation_seed_1.consultationSeed)();
    const lookup = await prisma.lookup.createMany({
        data: lookup_seed_1.LookupSeed,
    });
    const product = await Promise.all(product_seed_1.ProductSeed.map(async (item, i) => {
        const fileInfo = await (0, media_2.saveBase64ToFile)(base64_product_seed_1.base64Product.find((x) => x.name == item.name).base64, media_1.MEDIA_PRODUCT_DIR, `product-${item.type.toLowerCase()}`);
        const media = await createMedia(fileInfo);
        const discountIsActive = i % 2 == 0 ? true : false;
        const discountType = ['Percentage', 'Fix Amount'];
        const discountPercentage = [5, 10, 15, 20];
        const discountAmount = [5000, 10000, 15000, 20000, 25000];
        const discount = {
            discount_is_active: discountIsActive,
            discount_type: null,
            discount_percentage: null,
            discount_fix_amount: null,
        };
        if (discountIsActive) {
            discount.discount_type =
                discountType[Math.floor(Math.random() * discountType.length)];
        }
        if (discount.discount_type == 'Percentage') {
            discount.discount_percentage =
                discountPercentage[Math.floor(Math.random() * discountPercentage.length)];
        }
        if (discount.discount_type == 'Fix Amount') {
            discount.discount_fix_amount =
                discountAmount[Math.floor(Math.random() * discountAmount.length)];
        }
        return await prisma.product.create({
            data: {
                ...item,
                ...discount,
                media_products: {
                    create: {
                        media_id: media.id,
                    },
                },
                product_concerns: {
                    create: (0, array_1.getRandomSubarray)(concern, Math.floor(Math.random() * 2) + 1).map((item) => ({
                        concern_id: item.id,
                    })),
                },
            },
        });
    }));
    const productTags = await Promise.all(product_tags_seed_1.ProductTags.map(async (item) => {
        return await prisma.product_tags.create({
            data: {
                ...item,
            },
        });
    }));
    const clinic = await Promise.all(clinic_seed_1.ClinicSeed.map(async (item) => {
        const mediaClinic = [];
        for (let i = 1; i <= Math.floor(Math.random() * 4) + 1; i++) {
            const fileInfo = await (0, media_2.saveBase64ToFile)(base64_clinic_seed_1.Base64Clinic[Math.floor(Math.random() * base64_clinic_seed_1.Base64Clinic.length)], media_1.MEDIA_CLINIC_DIR, `clinic`);
            const media = await createMedia(fileInfo);
            mediaClinic.push({
                media_id: media.id,
            });
        }
        const fileInfoLogo = await (0, media_2.saveBase64ToFile)(base64_clinic_logo_seed_1.Base64ClinicLogo.find((x) => x.name == item.name).base64, media_1.MEDIA_CLINIC_LOGO_DIR, `clinic-logo`);
        const mediaClinicLogo = await createMedia(fileInfoLogo);
        const [provinces, cities] = await Promise.all([
            prisma.provinces.findMany({
                where: {
                    name: {
                        in: ['DKI JAKARTA', 'JAWA BARAT'],
                    },
                },
            }),
            prisma.kota_kabupatens.findMany({}),
        ]);
        const provinceId = provinces[Math.floor(Math.random() * provinces.length)].id;
        return await prisma.clinic.create({
            data: {
                ...item,
                province_id: provinceId,
                city_id: cities.filter((x) => x.provinces_id == provinceId)[Math.floor(Math.random() *
                    cities.filter((x) => x.provinces_id == provinceId).length)].id,
                treatments: {
                    create: await Promise.all(item.treatments.create.map(async (item) => {
                        const mediaTreatment = [];
                        for (let i = 1; i <= Math.floor(Math.random() * 4) + 1; i++) {
                            const fileInfo = await (0, media_2.saveBase64ToFile)(base64_treatment_seed_1.Base64Treatment[Math.floor(Math.random() * base64_treatment_seed_1.Base64Treatment.length)], media_1.MEDIA_TREATMENT_DIR, `treatment`);
                            const media = await createMedia(fileInfo);
                            mediaTreatment.push({
                                media_id: media.id,
                            });
                        }
                        return {
                            ...item,
                            media_treatments: {
                                create: mediaTreatment,
                            },
                            treatment_concerns: {
                                create: (0, array_1.getRandomSubarray)(concern, Math.floor(Math.random() * 2) + 1).map((item) => ({
                                    concern_id: item.id,
                                })),
                            },
                        };
                    })),
                },
                media_clinics: {
                    create: mediaClinic,
                },
                media_clinic_logo: {
                    create: {
                        media_id: mediaClinicLogo.id,
                    },
                },
            },
        });
    }));
    const shippingMethod = await prisma.shipping_method.createMany({
        data: shipping_method_seed_1.ShippingMethodSeed,
    });
    const shipper = await prisma.shipper.createMany({
        data: shipper_seed_1.ShipperSeed,
    });
    const sicepatDestinationCsv = await (0, media_2.readCsv)('prisma/seed/destination.csv', { headers: false }, (row) => ({
        province: row[0],
        city: row[1],
        subdistrict: row[2],
        village: row[3],
        zip_code: row[4],
        destination_code: row[5],
    }));
    const sicepatDestinationChunkData = (0, array_1.chunkWithMinSize)(sicepatDestinationCsv, 10000);
    sicepatDestinationChunkData.forEach(async (item) => {
        await prisma.sicepat_destination.createMany({
            data: item,
        });
    });
    const pharmacy = await Promise.all(pharmacy_seed_1.PharmacySeed.map(async (item) => {
        const fileInfo = await (0, media_2.saveBase64ToFile)(base64_pharmacy_seed_1.base64Pharmacy.find((x) => x.name == item.name).base64, media_1.MEDIA_PHARMACY_NPWP_PICTURE_DIR, 'npwp-picture');
        const media = await createMedia(fileInfo);
        return await prisma.pharmacy.create({
            data: {
                ...item,
                media_pharmacy_npwp: {
                    create: {
                        media_id: media.id,
                    },
                },
            },
        });
    }));
    const reportReason = await Promise.all(report_reason_seed_1.reportReasonSeed.map((item) => prisma.report_reason.create({
        data: item,
    })));
    const voucher = await prisma.voucher.createMany({
        data: vourcher_seed_1.voucherSeed,
    });
    const menuParent = await Promise.all(menu_seed_1.MenuSeed.filter((x) => !x.hasOwnProperty('parent')).map(async (item) => await prisma.menu.create({
        data: {
            ...item,
            menu_roles: {
                create: {
                    role_id: 1,
                },
            },
        },
    })));
    const menuChildren = await Promise.all(menu_seed_1.MenuSeed.filter((x) => x.hasOwnProperty('parent')).map(async (item) => await prisma.menu.create({
        data: {
            ...item,
            menu_roles: {
                create: {
                    role_id: 1,
                },
            },
        },
    })));
    console.log({
        roles,
        users,
        interestConditions,
        bank,
        paymentMethod,
        doctor,
        banner,
        consultation,
        lookup,
        concern,
        product,
        shippingMethod,
        shipper,
        reportReason,
        voucher,
        pharmacy,
        menuParent,
        menuChildren,
    });
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map
//# debugId=c64b5985-2bc2-5e75-bb27-01ad311291ae
