"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0237eb54-e9ad-5379-903b-b2305ed41dbb")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.SicepatTrackingMockData = void 0;
exports.SicepatTrackingMockData = {
    sicepat: {
        status: {
            code: 200,
            description: 'OK',
        },
        result: {
            waybill_number: '000356352964',
            kodeasal: 'CGK10107',
            kodetujuan: 'SUB20719',
            service: 'REG',
            weight: 1,
            partner: 'FIFADA',
            sender: 'MIMI CELL TAMBORA',
            sender_address: 'Jakarta Barat',
            receiver_address: 'Krian, Kab. Sidoarjo',
            receiver_name: 'Muhahmad Ichsan',
            realprice: 0,
            totalprice: 23500,
            POD_receiver: 'Paket diterima oleh [Ichsan - (YBS) Yang Bersangkutan]',
            POD_receiver_time: '2024-04-24 08:55',
            send_date: '2024-04-22 23:23',
            track_history: [
                {
                    date_time: '2024-04-21 14:19',
                    status: 'PICKREQ',
                    city: 'Terima permintaan pick up dari [FIFADA]',
                },
                {
                    date_time: '2024-04-22 15:31',
                    status: 'PICK',
                    city: 'Paket telah di pick up oleh [SIGESIT - Muchamad Ikbal Sany]',
                },
                {
                    date_time: '2024-04-22 16:23',
                    status: 'IN',
                    city: 'Paket telah di input (manifested) di Jakarta Barat [Jakbar Angke]',
                },
                {
                    date_time: '2024-04-22 22:08',
                    status: 'OUT',
                    city: 'Paket keluar dari Jakarta Barat [Jakbar Angke]',
                },
                {
                    date_time: '2024-04-23 01:11',
                    status: 'IN',
                    city: 'Paket telah di terima di Jakarta Utara [Line Haul Darat Jakarta 1]',
                },
                {
                    date_time: '2024-04-23 01:12',
                    status: 'OUT',
                    city: 'Paket keluar dari Jakarta Utara [Line Haul Darat Jakarta 1]',
                },
                {
                    date_time: '2024-04-24 02:37',
                    status: 'IN',
                    city: 'Paket telah di terima di Sidoarjo [Surabaya Sortation]',
                },
                {
                    date_time: '2024-04-24 05:17',
                    status: 'OUT',
                    city: 'Paket keluar dari Sidoarjo [Surabaya Sortation]',
                },
                {
                    date_time: '2024-04-24 06:14',
                    status: 'IN',
                    city: 'Paket telah di terima di Sidoarjo [Sidoarjo Krian]',
                },
                {
                    date_time: '2024-04-24 07:00',
                    status: 'ANT',
                    city: 'Paket dibawa [SIGESIT - Andy Prasetyo]',
                },
                {
                    date_time: '2024-04-24 08:55',
                    status: 'DELIVERED',
                    receiver_name: 'Paket diterima oleh [Ichsan - (YBS) Yang Bersangkutan]',
                },
            ],
            last_status: {
                date_time: '2024-04-24 08:55',
                status: 'DELIVERED',
                receiver_name: 'Paket diterima oleh [Ichsan - (YBS) Yang Bersangkutan]',
            },
            perwakilan: 'SDA',
            pop_sigesit_img_path: null,
            pod_sigesit_img_path: 'https://imgproxy.sicepat.com/OCXUbMUR_-fAzN3cZzj8wmf23Ccx-_9JQ8xKn-aXKiA/rs:fit:768:1024:0/g:no/aHR0cHM6Ly9zaWNlcGF0bWFzdGVyZGF0YS5zMy5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL2ltYWdlcy9lbXBsb3llZS8yMTA2MTM4NS5qcGc.jpg',
            pod_sign_img_path: 'https://imgproxy.sicepat.com/B4r4PBYH-cUcs8P5Nwf0mVaajx6uXyEXKCMd8dTnYVU/rs:fit:768:1024:0/g:no/aHR0cHM6Ly9zaWNlcGF0bWFzdGVyZGF0YS5zMy5hbWF6b25hd3MuY29tL2F0dGFjaG1lbnRzL3NpZ25hdHVyZVBPRC8wMDAzNTYzNTI5NjQ.jpg',
            pod_img_path: 'https://imgproxy.sicepat.com/FubEZ87AeHKvmk0vElp8eKG1i-Xa9YQmnSUTrum-iBc/rs:fit:768:1024:0/g:no/aHR0cHM6Ly9zaWNlcGF0bWFzdGVyZGF0YS5zMy5hbWF6b25hd3MuY29tL2F0dGFjaG1lbnRzL3Bob3RvUE9ELzAwMDM1NjM1Mjk2NA.jpg',
            pop_img_path: 'https://imgproxy.sicepat.com/e0fp04g0KpDAl_P98SHC2SHH5E3PKD4mvJkX4l_RzHU/rs:fit:768:1024:0/g:no/aHR0cHM6Ly9zaWNlcGF0bWFzdGVyZGF0YS5zMy5hbWF6b25hd3MuY29tL2F0dGFjaG1lbnRzL3BpY2t1cC1pbWFnZXMvMjAyNC80LzIyL2RhZDYwZTc5LTA2NzMtNDVkOC1hYmRiLTkxMDg5NWQ5ZjAzM2ltYWdlbWFya2VyLmpwZw.jpg',
            por_img_path: null,
            por_sign_img_path: null,
            manifested_img_path: 'https://imgproxy.sicepat.com/S6iDiXliFJLrMoXI_T8mctwITFXurBKDunk1oSG-WAc/rs:fit:768:1024:0/g:no/aHR0cHM6Ly9zaWNlcGF0cmVzaS5zMy5hbWF6b25hd3MuY29tLzAwMDM1NjMvMDAwMzU2MzUyOTY0LmpwZw.jpg',
        },
    },
};
//# sourceMappingURL=sicepat-tracking.mock.js.map
//# debugId=0237eb54-e9ad-5379-903b-b2305ed41dbb
