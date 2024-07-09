"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f46a8ad2-0710-5a96-9541-8c820b4cf9fc")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestConditionsSeed = void 0;
exports.InterestConditionsSeed = [
    {
        concern: {
            connect: {
                name: 'Bekas Flek Hitam & Melasma',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Berwarna kecoklatan atau kehitaman.',
                },
                {
                    characteristic: 'Berbentuk bintik atau bercak dan berukuran simetris.',
                },
                {
                    characteristic: 'Terdapat disekitar pipi, biasanya pada tulang pipi, dekat hidung atau dibawah mata.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Menurutmu, kulit wajahmu termasuk tipe yang mana?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Normal',
                                position: 1,
                            },
                            {
                                name: 'Berminyak',
                                position: 2,
                            },
                            {
                                name: 'Kering',
                                position: 3,
                            },
                            {
                                name: 'Kombinasi',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mempunyai kulit yang sensitif?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Sudah berapa lama flek hitam muncul?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'sejak ada jerawat/luka pada wajah',
                                position: 1,
                            },
                            {
                                name: 'beberapa bulan sampai beberapa tahun',
                                position: 2,
                            },
                            {
                                name: 'sejak kecil',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Seberapa sering beraktifitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Sering',
                                position: 1,
                            },
                            {
                                name: 'Hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'Jarang',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Seberapa sering kamu beraktivitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'sering',
                                position: 1,
                            },
                            {
                                name: 'hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'Jarang',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah menggunakan sunscreen setiap hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada produk skincare yang rutin kamu gunakan untuk wajahmu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya, saat ini pakai racikan dokter',
                                position: 1,
                            },
                            {
                                name: 'Ya, produk OTC',
                                position: 2,
                            },
                            {
                                name: 'Tidak ada',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu gunakan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada obat-obatan yang rutin dikonsumsi saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Bekas Jerawat PIE & PIH',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'PIE:',
                },
                {
                    characteristic: 'Noda pada jerawat yang biasanya berwarna kemerahan, merah muda atau ungu.',
                },
                {
                    characteristic: 'Tidak ada rasa gatal.',
                },
                {
                    characteristic: 'Biasanya lebih susah hilang.',
                },
                {
                    characteristic: 'Terjadi akibat inflamasi/setelah mengalami jerawat.',
                },
                {
                    characteristic: 'PIH:',
                },
                {
                    characteristic: 'Noda bekas jerawat yang biasanya berwarna kehitaman atau kecoklatan.',
                },
                {
                    characteristic: 'Terjadi akibat inflamasi/setelah mengalami jerawat.',
                },
                {
                    characteristic: 'Tidak ada rasa gatal.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Menurutmu, kulit wajahmu termasuk tipe yang mana?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Normal',
                                position: 1,
                            },
                            {
                                name: 'Berminyak',
                                position: 2,
                            },
                            {
                                name: 'Kering',
                                position: 3,
                            },
                            {
                                name: 'Kombinasi',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mempunyai kulit yang sensitif?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Sudah berapa lama bekas jerawat (PIE & PIH) muncul?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Sejak remaja',
                                position: 1,
                            },
                            {
                                name: 'Beberapa bulan setelah jerawat sembuh',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Seberapa sering kamu beraktivitas dibawah matahari',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Sering',
                                position: 1,
                            },
                            {
                                name: 'Hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah menggunakan sunscreen setiap hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada produk skincare yang rutin kamu gunakan untuk wajahmu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya, saat ini pakai racikan dokter',
                                position: 1,
                            },
                            {
                                name: 'Ya, product OTC',
                                position: 2,
                            },
                            {
                                name: 'Tidak ada',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu gunakan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah punya riwayat alergi?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah warna bekas jerawat kamu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Kemerahan',
                                position: 1,
                            },
                            {
                                name: 'Kehitaman',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada obat-obatan yang rutin dikonsumsi saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Bekas Luka (Scar)',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Bekas luka sering memiliki warna yang berbeda dari kulit sekitarnya.',
                },
                {
                    characteristic: 'Bekas luka sering memiliki tekstur yang berbeda dari kulit normal.',
                },
                {
                    characteristic: 'Bekas luka yang masih dalam proses penyembuhan mungkin tampak bengkak atau menonjol.',
                },
                {
                    characteristic: 'Beberapa bekas luka bisa menjadi nyeri atau gatal, terutama jika luka tersebut masih baru atau terkena gesekan.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Menurutmu, kulit wajahmu termasuk tipe yang mana?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Normal',
                                position: 1,
                            },
                            {
                                name: 'Berminyak',
                                position: 2,
                            },
                            {
                                name: 'Kering',
                                position: 3,
                            },
                            {
                                name: 'Kombinasi',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mempunyai kulit yang sensitif?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Sudah berapa lama bekas luka berada?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Sejak remaja',
                                position: 1,
                            },
                            {
                                name: 'Beberapa bulan setelah jerawat sembuh',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Seberapa sering kamu beraktivitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Sering',
                                position: 1,
                            },
                            {
                                name: 'Hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'Jarang',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah bekas luka kamu berbentuk keloid?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah bekas luka kamu masih terasa sakit/perih?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu gunakan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah punya riwayat alergi?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah warna bekas jerawat kamu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Kemerahan',
                                position: 1,
                            },
                            {
                                name: 'Kehitaman',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada obat-obatan yang rutin dikonsumsi saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Bibir Gelap',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Mengalami gelap di area bibir.',
                },
                {
                    characteristic: 'Biasanya disertai dengan kondisi kulit bibir yang kering.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apakah kamu sering melakukan aktivitas di luar ruangan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu menggunakan sunscreen setiap hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering mengonsumsi alkohol, kafein & merokok?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada obat-obatan yang rutin dikonsumsi saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu memiliki riwayat penyakit?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu memiliki riwayat alergi?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Double Chin',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Mengalami penumpukkan lemak di bawah dagu atau pipi.',
                },
                {
                    characteristic: 'Pipi terasa lebih chubby.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Menurutmu, kulit wajahmu termasuk tipe yang mana?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Normal',
                                position: 1,
                            },
                            {
                                name: 'Berminyak',
                                position: 2,
                            },
                            {
                                name: 'Kering',
                                position: 3,
                            },
                            {
                                name: 'Kombinasi',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mempunyai kulit yang sensitif?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mengalami kenaikan berat badan selama 3 bulan terakhir?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu lakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada obat-obatan yang rutin dikonsumsi saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu memiliki riwayat penyakit?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu rajin berolahraga?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu gunakan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada obat-obatan yang rutin dikonsumsi saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Sudah sejak kapan kamu mengalami jerawat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Kurang dari 6 bulan',
                                position: 1,
                            },
                            {
                                name: 'Lebih dari 6 bulan',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Gummy Smile',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Gingiva pada rahang atas depan terlihat.',
                },
                {
                    characteristic: 'Gingiva yang diukur dari tepi gingiva ke batas bawah bibir atas ketinggiannya lebih dari 2mm..',
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Jerawat',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Benjolan berwarna kemerahan atau kuning (karena mengandung nanah).',
                },
                {
                    characteristic: 'Benjolan kecil (papul) yang muncul di atas kulit.',
                },
                {
                    characteristic: 'Sensasi panas atau terbakar akibat adanya peradangan.',
                },
                {
                    characteristic: 'Timbul rasa gatal pada benjolan.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Menurutmu, kulit wajahmu termasuk tipe yang mana?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Normal',
                                position: 1,
                            },
                            {
                                name: 'Berminyak',
                                position: 2,
                            },
                            {
                                name: 'Kering',
                                position: 3,
                            },
                            {
                                name: 'Kombinasi',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mempunyai kulit yang sensitif?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Area mana yang terdapat acne/jerawat?',
                    type: 'medis',
                    type_answer: 'description',
                },
                {
                    name: 'Apakah kamu selalu pakai full make up setiap hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                            {
                                name: 'Ringan',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Seberapa sering beraktifitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Sering',
                                position: 1,
                            },
                            {
                                name: 'Hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'Jarang',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada produk skincare yang rutin kamu gunakan untuk wajahmu?',
                    type: 'medis',
                    type_answer: 'description',
                },
                {
                    name: 'Apakah punya riwayat alergi?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada kondisi medis/penyakit yang kamu miliki?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada obat-obatan yang rutin dikonsumsi saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Kantong Mata',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Kulit kering dibawah mata atau kendur.',
                },
                {
                    characteristic: 'Lingkaran hitam di sekitar mata.',
                },
                {
                    characteristic: 'Kulit agak bengkak di bawah mata.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Menurutmu, kulit wajahmu termasuk tipe yang mana?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Normal',
                                position: 1,
                            },
                            {
                                name: 'Berminyak',
                                position: 2,
                            },
                            {
                                name: 'Kering',
                                position: 3,
                            },
                            {
                                name: 'Kombinasi',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mempunyai kulit yang sensitif?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering kurang tidur?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (masukkan berapa lama jam tidurnya?)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Seberapa sering kamu beraktivitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Sering',
                                position: 1,
                            },
                            {
                                name: 'Hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'Jarang',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah menggunakan sunscreen setiap hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada produk skincare yang rutin kamu gunakan untuk wajahmu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya, saat ini pakai racikan dokter',
                                position: 1,
                            },
                            {
                                name: 'Ya, produk OTC',
                                position: 2,
                            },
                            {
                                name: 'Tidak ada',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu gunakan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu memiliki riwayat penyakit atopik?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                            {
                                name: 'Tidak Tahu',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering mengonsumsi alkohol & merokok?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Kebotakan Rambut',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Mengalami kerontokan rambut lebih dari 100 helai per hari.',
                },
                {
                    characteristic: 'Mengalami kebotakan/hair loss di beberapa area rambut.',
                },
                {
                    characteristic: 'Rambut menjadi lebih menipis.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Sudah berapa lama mengalami kebotakan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Baru beberapa bulan',
                                position: 1,
                            },
                            {
                                name: 'Lebih dari setahun',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kebotakan/kerontokan rambut berlangsung perlahan-lahan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada keluarga yang memiliki riwayat kebotakan rambut?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah memiliki riwayat penyakit tertentu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah Anda mengalami gatal atau peradangan pada kulit kepala?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah Anda mengalami perubahan pada siklus menstruasi (jika Anda seorang wanita)?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah Anda menggunakan obat-obatan atau suplemen tertentu yang dapat memengaruhi rambut Anda?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah Anda merasa stres atau cemas karena kebotakan Anda?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Kemerahan',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Muncul ruam kemerahan pada kulit.',
                },
                {
                    characteristic: 'Bisa disertai dengan kulit yang kering.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Menurutmu, kulit wajahmu termasuk tipe yang mana?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Normal',
                                position: 1,
                            },
                            {
                                name: 'Berminyak',
                                position: 2,
                            },
                            {
                                name: 'Kering',
                                position: 3,
                            },
                            {
                                name: 'Kombinasi',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mempunyai kulit yang sensitif?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Seberapa sering kamu beraktivitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Sering',
                                position: 1,
                            },
                            {
                                name: 'hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'jarang',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada kondisi penyakit tertentu yang sedang dialami saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah jika kamu mengonsumsi makanan pedas timbul kemerahan pada wajah?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu menggunakan sunscreen setiap hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada produk skincare yang rutin kamu gunakan untuk wajahmu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya, saat ini pakai racikan dokter',
                                position: 1,
                            },
                            {
                                name: 'Ya, produk OTC',
                                position: 2,
                            },
                            {
                                name: 'Tidak ada',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu lakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Kerutan',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Munculnya garis halus pada wajah.',
                },
                {
                    characteristic: 'Garis halus biasanya muncul di area yang rentan seperti area sudut mata, garis senyum. ',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Menurutmu, kulit wajahmu termasuk tipe yang mana?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Normal',
                                position: 1,
                            },
                            {
                                name: 'Berminyak',
                                position: 2,
                            },
                            {
                                name: 'Kering',
                                position: 3,
                            },
                            {
                                name: 'Kombinasi',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mempunyai kulit yang sensitif?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Seberapa sering kamu beraktivitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'sering',
                                position: 1,
                            },
                            {
                                name: 'hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'jarang',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah menggunakan sunscreen setiap hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada produk skincare yang rutin kamu gunakan untuk wajahmu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya, saat ini pakai racikan dokter',
                                position: 1,
                            },
                            {
                                name: 'Ya, produk OTC',
                                position: 2,
                            },
                            {
                                name: 'Tidak ada',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu gunakan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering mengonsumsi alkohol & merokok?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Kulit Berminyak',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Kulit wajah terlihat lengket, mengkilap, basah, dan berkilau.',
                },
                {
                    characteristic: 'Banyak tumbuh komedo.',
                },
                {
                    characteristic: 'Pori-pori terlihat besar dan jelas pada kulit wajah.',
                },
                {
                    characteristic: 'Wajah mudah berjerawat.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Menurutmu, kulit wajahmu termasuk tipe yang mana?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Normal',
                                position: 1,
                            },
                            {
                                name: 'Berminyak',
                                position: 2,
                            },
                            {
                                name: 'Kering',
                                position: 3,
                            },
                            {
                                name: 'Kombinasi',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mempunyai kulit yang sensitif?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Seberapa sering kamu beraktivitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'sering',
                                position: 1,
                            },
                            {
                                name: 'hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'jarang',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah menggunakan sunscreen setiap hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada produk skincare yang rutin kamu gunakan untuk wajahmu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya, saat ini pakai racikan dokter',
                                position: 1,
                            },
                            {
                                name: 'Ya, produk OTC',
                                position: 2,
                            },
                            {
                                name: 'Tidak ada',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu lakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering mengonsumsi alkohol & merokok?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Kulit Kering',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Cenderung bersisik.',
                },
                {
                    characteristic: 'Memiliki permukaan yang kasar.',
                },
                {
                    characteristic: 'Pori-pori yang mudah terlihat akibat kelembapan kulit yang rendah.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Menurutmu, kulit wajahmu termasuk tipe yang mana?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Normal',
                                position: 1,
                            },
                            {
                                name: 'Berminyak',
                                position: 2,
                            },
                            {
                                name: 'Kering',
                                position: 3,
                            },
                            {
                                name: 'Kombinasi',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mempunyai kulit yang sensitif?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Seberapa sering kamu beraktivitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'sering',
                                position: 1,
                            },
                            {
                                name: 'hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'jarang',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah menggunakan sunscreen setiap hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada produk skincare yang rutin kamu gunakan untuk wajahmu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya, saat ini pakai racikan dokter',
                                position: 1,
                            },
                            {
                                name: 'Ya, produk OTC',
                                position: 2,
                            },
                            {
                                name: 'Tidak ada',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu lakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering mengonsumsi alkohol & merokok?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mengonsumsi air putih yang cukup? (8 gelas per hari)',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sedang menggunakan obat-obatan tertentu saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu memiliki riwayat penyakit tertentu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Kulit Kusam',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Tampilan wajah yang tampak tidak sehat, kurang bercahaya, dan tidak bersemangat.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Menurutmu, kulit wajahmu termasuk tipe yang mana?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Normal',
                                position: 1,
                            },
                            {
                                name: 'Berminyak',
                                position: 2,
                            },
                            {
                                name: 'Kering',
                                position: 3,
                            },
                            {
                                name: 'Kombinasi',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mempunyai kulit yang sensitif?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Seberapa sering kamu beraktivitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'sering',
                                position: 1,
                            },
                            {
                                name: 'hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'jarang',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah menggunakan sunscreen setiap hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada produk skincare yang rutin kamu gunakan untuk wajahmu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya, saat ini pakai racikan dokter',
                                position: 1,
                            },
                            {
                                name: 'Ya, produk OTC',
                                position: 2,
                            },
                            {
                                name: 'Tidak ada',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu lakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering mengonsumsi alkohol & merokok?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mengonsumsi air putih yang cukup? (8 gelas per hari)',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Kulit Sensitif',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Mudah kering dan bersisik.',
                },
                {
                    characteristic: 'Tingkat kelembapan alami yang rendah.',
                },
                {
                    characteristic: 'Mudah kering, bersisik, hingga mengelupas.',
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Mata Panda',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Kulit kering di bawah mata atau kendur, lingkaran hitam di sekitar mata',
                },
                {
                    characteristic: 'Kulit agak bengkak di bawah mata.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Menurutmu, kulit wajahmu termasuk tipe yang mana?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Normal',
                                position: 1,
                            },
                            {
                                name: 'Berminyak',
                                position: 2,
                            },
                            {
                                name: 'Kering',
                                position: 3,
                            },
                            {
                                name: 'Kombinasi',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mempunyai kulit yang sensitif?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering kurang tidur?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (masukkan berapa lama jam tidurnya?)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Seberapa sering beraktifitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Sering',
                                position: 1,
                            },
                            {
                                name: 'Hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'Jarang',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah menggunakan sunscreen setiap hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada produk skincare yang rutin kamu gunakan untuk wajahmu?',
                    type: 'medis',
                    type_answer: 'description',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya, saat ini pakai racikan dokter',
                                position: 1,
                            },
                            {
                                name: 'Ya, produk OTC',
                                position: 2,
                            },
                            {
                                name: 'Tidak ada',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu lakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu memiliki riwayat penyakit atopik?',
                    type: 'medis',
                    type_answer: 'description',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                            {
                                name: 'Tidak Tahu',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering mengonsumsi alkohol & merokok?',
                    type: 'medis',
                    type_answer: 'description',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Rambut Rontok',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Rambut menipis secara bertahap.',
                },
                {
                    characteristic: 'Ada bagian kulit kepala yang pitak (bintik botak), garis rambut menipis, serta rambut yang diikat lebih tipis.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apakah perkiraan rambut rontok yang kamu alami lebih dari 100 helai per hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sedang dalam kondisi pasca melahirkan dalam 3-6 bulan terakhir?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mengonsumsi obat-obatan tertentu saat ini?',
                    type: 'medis',
                    type_answer: 'description',
                },
                {
                    name: 'Apakah ada riwayat penyakit yang sedang kamu alami?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik atau dirumah yang sebelumnya pernah kamu lakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Tahi Lalat',
            },
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Seberapa sering kamu beraktivitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'sering',
                                position: 1,
                            },
                            {
                                name: 'hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'jarang',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Sejak kapan tahi lalat ini muncul?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'sejak lahir',
                                position: 1,
                            },
                            {
                                name: 'belum lama ini muncul',
                                position: 2,
                            },
                            {
                                name: 'tidak menyadari kemunculannya',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah tahi lalat yang dimiliki mudah berdarah?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah tahi lalat yang dimiliki terasa semakin membesar?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada produk obat/skincare yang rutin kamu gunakan untuk wajahmu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya, saat ini pakai racikan dokter',
                                position: 1,
                            },
                            {
                                name: 'Ya, produk OTC',
                                position: 2,
                            },
                            {
                                name: 'Tidak ada',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu gunakan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Kutil',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Benjolan kecil di kulit.',
                },
                {
                    characteristic: 'Bisa bertekstur kasar atau halus, dengan warna seperti kulit, cokelat, atau hitam.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Seberapa sering kamu beraktivitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'sering',
                                position: 1,
                            },
                            {
                                name: 'hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'jarang',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah menggunakan sunscreen setiap hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat keluarga yang memiliki kondisi yang sama?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sedang mengalami kehamilan saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Sejak kapan kutil ini muncul?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'sejak lahir',
                                position: 1,
                            },
                            {
                                name: 'belum lama ini muncul',
                                position: 2,
                            },
                            {
                                name: 'tidak menyadari kemunculannya',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kutil yang dimiliki mudah berdarah?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kutil yang dimiliki terasa semakin membesar?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada produk obat/cara yang kamu gunakan untuk mengobati kutilmu?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ada (sebutkan jenis obat/nama & cara pengobatannya)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak ada',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu lakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Lemak Membandel',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Membuncit di beberapa area tubuh misalnya paha, lengan, perut ataupun pipi.',
                },
                {
                    characteristic: 'Mengalami kenaikan berat badan dalam beberapa waktu terakhir.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apakah kamu mengalami kenaikan berat badan drastis selama beberapa bulan terakhir?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sedang hamil saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu gunakan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada obat-obatan yang rutin dikonsumsi saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu memiliki riwayat penyakit?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Selulit',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Memiliki kerutan kulit.',
                },
                {
                    characteristic: 'Memiliki garis-garis kulit yang berwarna kemerahan, biru, coklat.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apakah kamu mengalami kenaikan berat badan drastis selama beberapa bulan terakhir?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sedang hamil saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu gunakan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada obat-obatan yang rutin dikonsumsi saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu memiliki riwayat penyakit?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Stretch Mark',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Muncul goresan atau garis membentang di beberapa bagian tubuh yang mengandung lemak.',
                },
                {
                    characteristic: 'Muncul garis-garis halus berwarna merah, merah muda, hingga keunguan.',
                },
                {
                    characteristic: 'Warna garis-garis yang muncul perlahan memudar menjadi lebih cerah.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apakah kamu mengalami kenaikan berat badan drastis selama beberapa bulan terakhir?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sedang hamil saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada perawatan di klinik yang sebelumnya pernah kamu gunakan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada obat-obatan yang rutin dikonsumsi saat ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu memiliki riwayat penyakit?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Vitiligo',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Muncul bintik atau bercak kulit berwarna terang.',
                },
                {
                    characteristic: 'Bercak kulit meluas.',
                },
                {
                    characteristic: 'Bercak kulit terasa gatal.',
                },
                {
                    characteristic: 'Muncul uban pada rambut.',
                },
                {
                    characteristic: 'Perubahan warna mata.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Seberapa sering kamu beraktivitas dibawah matahari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'sering',
                                position: 1,
                            },
                            {
                                name: 'hanya saat dalam perjalanan, selebihnya aktifitas di ruangan',
                                position: 2,
                            },
                            {
                                name: 'jarang',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah menggunakan sunscreen setiap hari?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat keluarga yang memiliki kondisi serupa?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sudah pernah mengobati masalah vitiligo ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Bibir Lebih Ideal',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Kedua bibir tampak seimbang dan serupa.',
                },
                {
                    characteristic: 'Memiliki warna merah alami atau merona.',
                },
                {
                    characteristic: 'Kulit di sekitar bibir harus sehat, bebas dari masalah kulit.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apakah kamu memiliki bibir yang tipis?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu menyukai perawatan injeksi?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Dibawah ini, hasil apa yang kamu harapkan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Bibir lebih berisi',
                                position: 1,
                            },
                            {
                                name: 'Bibir lebih cerah',
                                position: 2,
                            },
                            {
                                name: 'Bibir lebih lembab',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Bokong Berisi',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Bokong yang berisi sering terlihat besar dan berotot.',
                },
                {
                    characteristic: 'Bokong yang berisi sering terlihat kencang dan tidak kendur.',
                },
                {
                    characteristic: 'Bokong yang berisi harus seimbang dengan proporsi tubuh secara keseluruhan.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apakah saat ini kamu memiliki bokong rata?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu menyukai perawatan injeksi/tindakan bedah',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Dibawah ini, hasil apa yang kamu harapkan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Bokong lebih berisi',
                                position: 1,
                            },
                            {
                                name: 'Bokong lebih lifting',
                                position: 2,
                            },
                            {
                                name: 'Lainnya (jelaskan...)',
                                position: 3,
                                with_description: true,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah sebelumnya kamu pernah melakukan tindakan untuk membuat bokong menjadi lebih berisi?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Dagu Lancip',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Dagu lancip memiliki bentuk yang tajam, runcing, dan tegas.',
                },
                {
                    characteristic: 'Kedua sisi dagu terlihat serupa satu sama lain.',
                },
                {
                    characteristic: 'Dagu lancip sering bebas dari lemak berlebih atau gandaan yang dapat membuat dagu terlihat lebih bulat.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apa yang membuat Anda tertarik pada prosedur dagu lancip atau perbaikan dagu?',
                    type: 'medis',
                    type_answer: 'description',
                },
                {
                    name: 'Apakah kamu menyukai perawatan injeksi/tindakan bedah',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Dibawah ini, hasil apa yang kamu harapkan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Dagu lebih berisi',
                                position: 1,
                            },
                            {
                                name: 'Dagu lebih lancip',
                                position: 2,
                            },
                            {
                                name: 'Lainya (jelaskan...)',
                                position: 3,
                                with_description: true,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah sebelumnya kamu pernah melakukan tindakan untuk membuat dagu menjadi lebih lancip?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Hidung Mancung',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Memiliki bentuk yang tajam, runcing, dan seringkali sempurna lurus.',
                },
                {
                    characteristic: 'Cenderung memiliki tepi yang halus dan tegas.',
                },
                {
                    characteristic: 'Ukurannya tidak terlalu besar atau terlalu kecil dalam konteks wajah.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apa yang Anda harapkan dari prosedur ini, dan apa yang menjadi tujuan estetik Anda?',
                    type: 'medis',
                    type_answer: 'description',
                },
                {
                    name: 'Apakah Anda memiliki riwayat medis atau riwayat bedah kosmetik sebelumnya yang relevan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah Anda memiliki batasan waktu tertentu untuk prosedur ini (misalnya, sebelum acara khusus atau peristiwa tertentu)?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Kulit Mulus Bebas Bulu',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Memiliki tekstur yang halus dan bebas dari tekstur kasar, jerawat, atau bintik-bintik.',
                },
                {
                    characteristic: 'Memiliki warna yang merata, tanpa noda, bintik-bintik.',
                },
                {
                    characteristic: 'Biasanya bebas dari bekas luka atau cacat, seperti bekas jerawat atau luka bakar.',
                },
                {
                    characteristic: 'Biasanya tidak ditumbuhi bulu-bulu halus.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apakah Anda telah mencoba perawatan penghilangan bulu sebelumnya?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah Anda memiliki riwayat masalah kulit tertentu, seperti alergi, kulit sensitif, atau masalah dermatologis lainnya?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah Anda memiliki preferensi terhadap metode penghilangan bulu tertentu, seperti waxing, shaving, laser hair removal, atau elektrolisis?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Otot Tubuh',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Tampilan Otot yang Terdefinisi.',
                },
                {
                    characteristic: 'Otot yang terlatih dengan baik sering memiliki garis-garis atau bentuk yang terlihat lebih jelas saat otot berkontraksi.',
                },
                {
                    characteristic: 'Orang dengan otot yang lebih berkembang sering memiliki otot yang lebih besar dalam hal lingkar atau volume|.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apakah kamu sering melakukan olahraga untuk membentuk otot tubuh?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu pernah melakukan perawatan untuk membentuk otot tubuh?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Payudara Besar',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Umumnya memiliki ukuran yang lebih besar daripada rata-rata dan terlihat lebih penuh.',
                },
                {
                    characteristic: 'Cenderung memiliki bentuk yang bulat atau berdaging, dengan kelenjar susu yang cukup berkembang.',
                },
                {
                    characteristic: 'Biasanya memiliki kulit yang kencang dan elastis untuk mendukung volume dan beratnya.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apakah saat ini kamu memiliki payudara kecil?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu menyukai perawatan injeksi/tindakan bedah',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah sebelumnya kamu pernah melakukan tindakan untuk membuat payudara menjadi lebih berisi?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Payudara Kencang',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Cenderung berada pada posisi yang lebih tinggi dan menopang dengan baik di dada, tanpa banyak jaringan jatuh atau kulit berlebih di bawahnya.',
                },
                {
                    characteristic: 'Kulit di sekitar payudara kencang biasanya memiliki elastisitas yang baik dan tidak kendur.',
                },
                {
                    characteristic: 'Memiliki kontur yang lebih tajam, dengan garis kontur yang tegas dan runcing.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apakah saat ini kamu memiliki payudara kendur?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu menyukai perawatan injeksi/tindakan bedah',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah sebelumnya kamu pernah melakukan tindakan untuk membuat payudara menjadi lebih kencang?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Pipi Tirus',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Pipi tirus sering memiliki kontur yang tajam dan runcing, dengan sudut yang lebih jelas di sekitar tulang pipi dan rahang.',
                },
                {
                    characteristic: 'Cenderung memiliki sedikit jaringan lemak subkutan, yang membuatnya tampak lebih tirus dan bercahaya.',
                },
                {
                    characteristic: 'Biasanya menyatu dengan rahang yang tajam, menciptakan tampilan wajah yang lebih simetris.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apakah saat ini kamu memiliki Pipi yang chubby?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu menyukai perawatan injeksi/tindakan bedah',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah sebelumnya kamu pernah melakukan tindakan untuk membuat pipi menjadi lebih tirus?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Rahang Tegas',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Rahang yang tegas biasanya memiliki garis kontur yang tajam, dengan sudut yang lebih jelas dan runcing.',
                },
                {
                    characteristic: 'Rahang yang tegas sering simetris, dengan kedua sisi rahang terlihat serupa satu sama lain.',
                },
                {
                    characteristic: 'Rahang yang tegas cenderung memiliki sedikit atau tanpa jaringan lemak berlebih.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Apakah saat ini kamu memiliki bentuk rahang yang tidak proporsional?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu menyukai perawatan injeksi/tindakan bedah',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah sebelumnya kamu pernah melakukan tindakan untuk membuat rahang menjadi lebih tegas?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Kencing Nanah',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Munculnya nanah atau cairan kental berwarna putih kuning, atau kehijauan dari penis.',
                },
                {
                    characteristic: 'Testis terasa nyeri dan membengkak.',
                },
                {
                    characteristic: 'Meningkatnya frekuensi buang air kecil.',
                },
                {
                    characteristic: 'Terasa nyeri dan muncul sensasi terbakar saat buang air kecil.',
                },
                {
                    characteristic: 'Gatal di area dubur.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Jika bersedia, sebutkan ketertarikan seksual yang kamu miliki?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'heteroseksual',
                                position: 1,
                            },
                            {
                                name: 'homoseksual',
                                position: 2,
                            },
                            {
                                name: 'bisexual',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Sudah berapa kali kamu mengalami kondisi seperti ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Baru Pertama Kali',
                                position: 1,
                            },
                            {
                                name: 'Lebih dari 1x',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada rasa nyeri atau tidak saat buang air kecil?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah sudah pernah berhubungan seksual?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Jika sudah, apakah berhubungan seksual menggunakan alat kontrasepsi penghalang (kondom)?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering bergonta-ganti pasangan seksual?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah pasangan seksual mengalami kondisi serupa?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat pengobatan yang pernah dilakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat penyakit infeksi menular lainya yang sedang dialami?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Keputihan',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Keluar Cairan bersifat keruh dan kental, jumlahnya banyak.',
                },
                {
                    characteristic: 'Cairan berwarna putih susu, kekuningan, keabu-abuan, atau kehijauan.',
                },
                {
                    characteristic: 'Cairan berbau tidak sedap, busuk atau amis.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Jika bersedia, sebutkan ketertarikan seksual yang kamu miliki?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'heteroseksual',
                                position: 1,
                            },
                            {
                                name: 'homoseksual',
                                position: 2,
                            },
                            {
                                name: 'bisexual',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Saat kapan keputihan itu muncul?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'saat menjelang menstruasi',
                                position: 1,
                            },
                            {
                                name: 'saat hamil',
                                position: 2,
                            },
                            {
                                name: 'saat stress',
                                position: 3,
                            },
                            {
                                name: 'Lainnya',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Sudah berapa kali kamu mengalami kondisi seperti ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Baru Pertama Kali',
                                position: 1,
                            },
                            {
                                name: 'Lebih dari 1x',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah sudah pernah berhubungan seksual?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Jika sudah, apakah berhubungan seksual menggunakan alat kontrasepsi penghalang (kondom)?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering bergonta-ganti pasangan seksual?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah pasangan seksual mengalami kondisi serupa?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                            {
                                name: 'tidak tahu',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat pengobatan yang pernah dilakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat penyakit infeksi menular lainya yang sedang dialami?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Sifilis',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Luka di Mulut, Miss V atau Anus.',
                },
                {
                    characteristic: 'Demam dan Pembengkakan Kelenjar Getah Bening.',
                },
                {
                    characteristic: 'Ruam Kulit.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Jika bersedia, sebutkan ketertarikan seksual yang kamu miliki?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'heteroseksual',
                                position: 1,
                            },
                            {
                                name: 'homoseksual',
                                position: 2,
                            },
                            {
                                name: 'bisexual',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Sudah berapa kali kamu mengalami kondisi seperti ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Baru Pertama Kali',
                                position: 1,
                            },
                            {
                                name: 'Lebih dari 1x',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada rasa nyeri atau tidak pada luka tersebut?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah sudah pernah berhubungan seksual?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Jika sudah, apakah berhubungan seksual menggunakan alat kontrasepsi penghalang (kondom)?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering bergonta-ganti pasangan seksual?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah pasangan seksual mengalami kondisi serupa?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat pengobatan yang pernah dilakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat penyakit infeksi menular seksual lainya yang sedang dialami?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Luka Lecet Pada Kemaluan',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Perih atau sakit saat kencing.',
                },
                {
                    characteristic: 'Keluar cairan dari penis.',
                },
                {
                    characteristic: 'Vagina terasa panas atau gatal.',
                },
                {
                    characteristic: 'Nyeri saat seks.',
                },
                {
                    characteristic: 'Keputihan abnormal atau perdarahan vagina.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Jika bersedia, sebutkan ketertarikan seksual yang kamu miliki?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'heteroseksual',
                                position: 1,
                            },
                            {
                                name: 'homoseksual',
                                position: 2,
                            },
                            {
                                name: 'bisexual',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Sudah berapa kali kamu mengalami kondisi seperti ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Baru Pertama Kali',
                                position: 1,
                            },
                            {
                                name: 'Lebih dari 1x',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada rasa nyeri atau tidak pada luka tersebut?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah luka pada kemaluan mudah berdarah atau tidak?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah sudah pernah berhubungan seksual?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Jika sudah, apakah berhubungan seksual menggunakan alat kontrasepsi penghalang (kondom)?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering bergonta-ganti pasangan seksual?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah pasangan seksual mengalami kondisi serupa?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat pengobatan yang pernah dilakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat penyakit infeksi menular seksual lainya yang sedang dialami?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Kutil Kelamin',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Muncul benjolan kecil di area kelamin.',
                },
                {
                    characteristic: 'Nyeri dan gatal pada organ intim.',
                },
                {
                    characteristic: 'Sensasi terbakar pada organ intim.',
                },
                {
                    characteristic: 'Perdarahan dari organ intim, terutama setelah melakukan hubungan seksual.',
                },
                {
                    characteristic: 'Rasa tidak nyaman pada organ intim.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Jika bersedia, sebutkan ketertarikan seksual yang kamu miliki?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'heteroseksual',
                                position: 1,
                            },
                            {
                                name: 'homoseksual',
                                position: 2,
                            },
                            {
                                name: 'bisexual',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Sudah berapa kali kamu mengalami kondisi seperti ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Baru Pertama Kali',
                                position: 1,
                            },
                            {
                                name: 'Lebih dari 1x',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kutil pada kemaluan mudah berdarah atau tidak?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah sudah pernah berhubungan seksual?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Jika sudah, apakah berhubungan seksual menggunakan alat kontrasepsi penghalang (kondom)?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering bergonta-ganti pasangan seksual?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah pasangan seksual mengalami kondisi serupa?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat pengobatan yang pernah dilakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat penyakit infeksi menular seksual lainya yang sedang dialami?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah sudah pernah melakukan vaksin HPV?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Kutu Kemaluan',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Pruritus (gatal parah) di daerah berbulu, terutama rambut kemaluan.',
                },
                {
                    characteristic: 'Bercak darah di celana dalam.',
                },
                {
                    characteristic: 'Bintik-bintik putih kecil pada rambut kemaluan yang sulit dihilangkan.',
                },
                {
                    characteristic: 'Bintik-bintik kebiruan pucat di paha, bokong, dan perut bagian bawah.',
                },
                {
                    characteristic: 'Demam ringan dan merasa lemas.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Jika bersedia, sebutkan ketertarikan seksual yang kamu miliki?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'heteroseksual',
                                position: 1,
                            },
                            {
                                name: 'homoseksual',
                                position: 2,
                            },
                            {
                                name: 'bisexual',
                                position: 3,
                            },
                        ],
                    },
                },
                {
                    name: 'Sudah berapa kali kamu mengalami kondisi seperti ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Baru Pertama Kali',
                                position: 1,
                            },
                            {
                                name: 'Lebih dari 1x',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada kutu di bagian tubuh lainnya?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah sudah pernah berhubungan seksual?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering bergonta-ganti pasangan seksual?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah pasangan seksual mengalami kondisi serupa?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat pengobatan yang pernah dilakukan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat penyakit infeksi menular seksual lainya yang sedang dialami?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering bertukar pakaian dalam/handuk dengan orang lain?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Eksim',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Kulit kering dan gatal-gatal.',
                },
                {
                    characteristic: 'Bercak merah di area kulit yang gatal.',
                },
                {
                    characteristic: 'Kulit tampak berkerut.',
                },
                {
                    characteristic: 'Kulit menjadi sensitif dan bengkak saat digaruk.',
                },
                {
                    characteristic: 'Kulit menebal, bersisik, dan pecah-pecah.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Menurutmu, kulit wajahmu termasuk tipe yang mana?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Normal',
                                position: 1,
                            },
                            {
                                name: 'Berminyak',
                                position: 2,
                            },
                            {
                                name: 'Kering',
                                position: 3,
                            },
                            {
                                name: 'Kombinasi',
                                position: 4,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu mempunyai kulit yang sensitif?',
                    type: 'general',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu baru pertama kali mengalami hal ini?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak (jika tidak, sudah berapa kali)',
                                position: 2,
                                with_description: true,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat keluarga dengan kondisi yang sama?',
                    type: 'medis',
                    type_answer: 'description',
                },
                {
                    name: 'Apakah ada riwayat alergi?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah kamu sering menggunakan pelembab?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah ada riwayat pengobatan yang pernah kamu lakukan sebelumnya?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah memiliki riwayat penyakit lain?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Psoriasis',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Kulit bersisik.',
                },
                {
                    characteristic: 'Kulit kering.',
                },
                {
                    characteristic: 'Kulit yang muncul bercak terasa gatal atau terbakar tak tertahankan.',
                },
                {
                    characteristic: 'Muncul ketombe pada penderita psoriasis kulit kepala.',
                },
                {
                    characteristic: 'Rambut rontok.',
                },
                {
                    characteristic: 'Kulit kering, pecah-pecah dan terkadang hingga berdarah.',
                },
                {
                    characteristic: 'Nyeri pada sendi dan bengkak.',
                },
            ],
        },
        interest_conditions_question: {
            create: [
                {
                    name: 'Kapan pertama kali anda mengalami psoriasis?',
                    type: 'medis',
                    type_answer: 'description',
                },
                {
                    name: 'Apakah Anda memiliki riwayat keluarga yang memiliki psoriasis atau penyakit kulit lainnya?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: 'Apakah Anda memiliki riwayat medis atau riwayat obat-obatan?',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya (Sebutkan)',
                                position: 1,
                                with_description: true,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
                {
                    name: '"Apakah anda mengalami gejala dibawah ini (kemerahan, bersisik, ruam, rasa gatal/terbakar)',
                    type: 'medis',
                    type_answer: 'multiple_choice',
                    interest_conditions_answer: {
                        create: [
                            {
                                name: 'Ya',
                                position: 1,
                            },
                            {
                                name: 'Tidak',
                                position: 2,
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Bopeng',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Bekas luka yang tampak cekung menyerupai lubang.',
                },
                {
                    characteristic: 'Permukaan kulit tidak rata',
                },
            ],
        },
    },
    {
        concern: {
            connect: {
                name: 'Bruntusan',
            },
        },
        interest_conditions_characteristics: {
            create: [
                {
                    characteristic: 'Berukuran lebih kecil.',
                },
                {
                    characteristic: 'Memiliki puncak kepala putih yang berisi nanah dan lemak.',
                },
                {
                    characteristic: 'Muncul dalam jumlah yang banyak dan merata di permukaan kulit.',
                },
                {
                    characteristic: 'Terkadang kulit di sekitarnya berwarna merah akibat peradangan yang parah.',
                },
            ],
        },
    },
];
//# sourceMappingURL=interest-conditions.seed.js.map
//# debugId=f46a8ad2-0710-5a96-9541-8c820b4cf9fc
