"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="898fdb87-5467-5be1-8914-1c0355e0de3c")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationController = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_1 = require("@prisma/client");
const dayjs = require("dayjs");
const fs = require("fs");
const htmlPdf = require("html-pdf-node");
const path = require("path");
const auth_guard_1 = require("../auth/auth.guard");
const chat_opening_service_1 = require("../chat-opening/chat-opening.service");
const chat_service_1 = require("../chat/chat.service");
const roles_decorator_1 = require("../decorators/roles.decorator");
const skip_guard_decorator_1 = require("../decorators/skip-guard.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const doctor_schedule_service_1 = require("../doctor-schedule/doctor_schedule.service");
const enum_1 = require("../globals/constant/enum");
const media_1 = require("../globals/constant/media");
const roles_guard_1 = require("../globals/guards/roles.guard");
const string_1 = require("../globals/helpers/string");
const date_to_local_transformer_1 = require("../globals/transformer/date-to-local.transformer");
const invoice_service_1 = require("../invoice/invoice.service");
const media_service_1 = require("../media/media.service");
const medical_history_service_1 = require("../medical-history/medical-history.service");
const my_journey_service_1 = require("../my-journey/my-journey.service");
const notification_service_1 = require("../notification/notification.service");
const product_service_1 = require("../product/product.service");
const socket_gateway_1 = require("../socket/socket.gateway");
const socket_service_1 = require("../socket/socket.service");
const task_scheduler_service_1 = require("../task-scheduler/task-scheduler.service");
const transaction_consultation_service_1 = require("../transaction-consultation/transaction-consultation.service");
const user_entity_1 = require("../users/entities/user.entity");
const consultation_service_1 = require("./consultation.service");
const create_consultation_doctor_note_dto_1 = require("./dto/create-consultation-doctor-note.dto");
const page_option_consultation_schedule_dto_1 = require("./dto/page-option-consultation-schedule.dto");
const page_options_galery_file_dto_1 = require("./dto/page-options-galery-file.dto");
let ConsultationController = class ConsultationController {
    constructor(consultationService, transactionConsultationService, socketService, chatService, chatOpeningService, doctorScheduleService, taskScheduleService, productService, notificationService, invoiceService, configService, medicalHistoryService, mediaService, myJourneyService, socketGateway, queueFcm, queueTaskSchedule) {
        this.consultationService = consultationService;
        this.transactionConsultationService = transactionConsultationService;
        this.socketService = socketService;
        this.chatService = chatService;
        this.chatOpeningService = chatOpeningService;
        this.doctorScheduleService = doctorScheduleService;
        this.taskScheduleService = taskScheduleService;
        this.productService = productService;
        this.notificationService = notificationService;
        this.invoiceService = invoiceService;
        this.configService = configService;
        this.medicalHistoryService = medicalHistoryService;
        this.mediaService = mediaService;
        this.myJourneyService = myJourneyService;
        this.socketGateway = socketGateway;
        this.queueFcm = queueFcm;
        this.queueTaskSchedule = queueTaskSchedule;
    }
    async initiateChat(user, transaction_id) {
        const findTransaction = await this.transactionConsultationService.find(transaction_id);
        if (!findTransaction)
            throw new common_1.BadRequestException('Transaction not found');
        if (findTransaction.customer_id != user.id)
            throw new common_1.ForbiddenException();
        if (findTransaction.payment_status != enum_1.PaymentStatus.SUCCEEDED)
            throw new common_1.BadRequestException('Invalid payment status');
        if (findTransaction.status != enum_1.TransactionStatus.READY)
            throw new common_1.BadRequestException('Invalid request payment status');
        const findConsultationDoctorSchedules = await this.consultationService.findCustomConsultationDoctorSchedule({
            transaction_consultation_id: findTransaction.id,
        });
        if (findConsultationDoctorSchedules.filter((x) => x.status == 'PENDING')
            .length >= 1) {
            throw new common_1.BadRequestException('Please wait for the doctor to accept the consultation schedule. We appreciate your patience.');
        }
        if (findConsultationDoctorSchedules.filter((x) => x.status == 'DIAMBIL')
            .length >= 1) {
            throw new common_1.BadRequestException('Invalid request');
        }
        const findDoctors = await this.consultationService.findDoctorForConsultation();
        if (!findDoctors)
            throw new common_1.BadRequestException('Doctor not found');
        if (findDoctors.length == 0)
            throw new common_1.BadRequestException('Doctor not found, there are no active doctors on the schedule at this time');
        let selectedDoctor = null;
        for (const doctor of findDoctors) {
            if (findConsultationDoctorSchedules.filter((item) => item.status == 'EXPIRED' && item.doctor_id == doctor.doctor_id).length < 2) {
                selectedDoctor = {
                    doctor_id: doctor.doctor_id,
                    doctor_schedule_id: doctor.doctor_schedule_id,
                    doctor_name: doctor.doctor_name,
                };
                break;
            }
        }
        if (!selectedDoctor)
            throw new common_1.BadRequestException('Doctor not found, there are no doctors currently online.');
        const consultationDoctorSchedule = await this.consultationService.createConsultationDoctorSchedule({
            customer_id: user.id,
            doctor_id: selectedDoctor.doctor_id,
            doctor_schedule_id: selectedDoctor.doctor_schedule_id,
            transaction_consultation_id: findTransaction.id,
        });
        const findConsultationDoctorSchedule = await this.consultationService.findConsultationDoctorSchedule(consultationDoctorSchedule.id);
        const socketClient = await this.socketService.getClientByUserId(selectedDoctor.doctor_id);
        if (socketClient) {
            this.socketGateway.consultationDoctorSchedule(socketClient.id, findConsultationDoctorSchedule);
        }
        const scheduled = await this.taskScheduleService.createSchedule({
            task_name: 'consultation_doctor_schedule_expire',
            schedule_time: new Date(new Date().getTime() + 2 * 60 * 1000),
            data: {
                transaction_consultation_id: findTransaction.id,
                consultation_doctor_schedule_id: consultationDoctorSchedule.id,
                doctor_id: selectedDoctor.doctor_id,
                doctor_name: selectedDoctor.doctor_name,
                customer_id: user.id,
                customer_name: user.fullname,
            },
        });
        this.queueTaskSchedule.add('expireConsultationSchedule', scheduled, {
            delay: 2 * 60000,
        });
        const notification = await this.notificationService.create({
            type: enum_1.NotificationType.CONSULTATION_DOCTOR_SCHEDULE,
            sender_id: 0,
            recipient_id: selectedDoctor.doctor_id,
            title: `📝 ${user.fullname} telah membuat jadwal konsultasi denganmu`,
            data: {
                consultation_doctor_schedule_id: consultationDoctorSchedule.id,
                schedule_date: consultationDoctorSchedule.created_at,
                customer_name: user.fullname,
                category: findTransaction.medical_history.interest_condition.concern.segment,
                topic: findTransaction.medical_history.interest_condition.concern.name,
            },
        });
        this.queueFcm.add('sendNotificationToTopic', {
            topic: selectedDoctor.doctor_id.toString(),
            title: notification.title,
            data: {
                type: notification.type,
                consultation_doctor_schedule_id: consultationDoctorSchedule.id,
            },
        });
        return consultationDoctorSchedule;
    }
    async findAllConsultationDoctorSchedule(user, id, pageOptionsDto) {
        const find = await this.doctorScheduleService.findOne(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.userId != user.id)
            throw new common_1.ForbiddenException();
        return await this.consultationService.findConsultationDoctorScheduleTime(id, user.id, pageOptionsDto);
    }
    async approveConsultationDoctorSchedule(user, id) {
        const find = await this.consultationService.findConsultationDoctorSchedule(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.doctor_id != user.id)
            throw new common_1.ForbiddenException();
        if (find.status != 'PENDING')
            throw new common_1.BadRequestException('Invalid consultation doctor schedule status');
        const findTransaction = await this.transactionConsultationService.find(find.transaction_consultation_id);
        if (!findTransaction)
            throw new common_1.BadRequestException('Transaction not found');
        const roomCode = (0, string_1.randomString)(10);
        await this.chatService.createChatRoom({
            doctor_id: user.id,
            customer_id: find.customer_id,
            code: roomCode,
            ended: false,
        });
        const consultation = await this.consultationService.createConsultation({
            doctor_id: user.id,
            customer_id: find.customer_id,
            transaction_consultation_id: findTransaction.id,
            consultation_doctor_schedule_id: find.id,
            medical_history_id: findTransaction.medical_history_id,
            code: roomCode,
            duration: 30,
        });
        const medicalHistory = await this.medicalHistoryService.findOne(findTransaction.medical_history_id);
        const mediaMyJourney = await Promise.all(medicalHistory.media_medical_histories.map(async (file) => {
            const key = (0, string_1.randomString)(10);
            const filename = `my-journey-initial-condition-${Date.now()}-${(0, string_1.randomString)(10)}`;
            const filePath = path.join(media_1.MEDIA_MEDICAL_HISTORY_DIR, file.media.filename);
            const fileContent = fs.readFileSync(filePath);
            if (!fs.existsSync(media_1.MEDIA_MY_JOURNEY_DIR)) {
                fs.mkdirSync(media_1.MEDIA_MY_JOURNEY_DIR, { recursive: true });
            }
            const destinationPath = path.join(media_1.MEDIA_MY_JOURNEY_DIR, filename);
            fs.writeFileSync(destinationPath, fileContent);
            const media = await this.mediaService.createMedia({
                filename,
                ext: file.media.ext,
                size: file.media.size,
                mime: file.media.mime,
                destination: filePath.replaceAll('\\', '/'),
                path: filePath.replaceAll('\\', '/').replace('uploads/', ''),
            });
            return {
                media_id: media.id,
                key,
                category: client_1.category_media_journey.INITIAL_CONDITION,
            };
        }));
        await Promise.all([
            this.myJourneyService.create({
                user_id: findTransaction.customer_id,
                concern_id: findTransaction.medical_history.interest_condition.concern_id,
                consultation_id: consultation.id,
            }, mediaMyJourney),
            this.transactionConsultationService.update(findTransaction.id, {
                status: 'REVIEW',
            }),
            this.invoiceService.createConsultationInvoice({
                customer_id: find.customer_id,
                transaction_consultation_id: findTransaction.id,
                invoice_number: await this.invoiceService.generateConsultationInvoiceNumber(),
                consultation_id: roomCode,
                consultation_date: consultation.created_at,
                doctor_name: consultation.doctor.fullname,
                doctor_npwp: consultation.doctor.npwp_no ?? '00.000.000.0-0.000',
                doctor_address: consultation.doctor.address,
                customer_name: findTransaction.customer.fullname,
                customer_npwp: findTransaction.customer.npwp_no ?? '00.000.000.0-0.000',
                transaction_detail: `Konsultasi dengan ${consultation.doctor.fullname} ${consultation.doctor.sip ? `SIP ${consultation.doctor.sip}` : ''}`,
                total_fee: findTransaction.total_fee,
                total_discount: findTransaction.total_discount,
                total_paid: findTransaction.total_paid,
            }),
        ]);
        const socketClient = await this.socketService.getClientByUserId(consultation.customer_id);
        if (socketClient) {
            this.socketGateway.emitListenApp(socketClient.id, {
                success: true,
                event: 'consultationScheduleApproved',
                message: `Consultation with doctor ${user.fullname} approved`,
                data: consultation,
            });
        }
        const result = await this.consultationService.updateStatusConsultationDoctorSchedule(id, 'DIAMBIL');
        const notifyUser = await this.notificationService.create({
            type: enum_1.NotificationType.CONSULTATION_DOCTOR_SCHEDULE_APPROVED,
            sender_id: 0,
            recipient_id: find.customer_id,
            title: 'Konsultasi',
            body: `Yeay, Dokter ${user.fullname} menerima jadwal konsultasi denganmu. Mohon tunggu sebentar ya, dokter sedang membaca dan memahami pre-assesment-mu dulu.`,
            data: {
                consultation_id: consultation.id,
                chat_room: consultation.code,
            },
        });
        this.queueFcm.add('sendNotificationToTopic', {
            topic: find.customer_id.toString(),
            title: notifyUser.title,
            body: notifyUser.body,
            data: {
                type: notifyUser.type,
                consultation_id: consultation.id,
                chat_room: consultation.code,
            },
        });
        return result;
    }
    async finishReviewConsultation(user, id) {
        const find = await this.consultationService.findConsultation(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.doctor_id != user.id)
            throw new common_1.ForbiddenException();
        const findTransaction = await this.transactionConsultationService.find(find.transaction_consultation_id);
        if (!findTransaction)
            throw new common_1.BadRequestException('Transaction not found');
        if (findTransaction.status != 'REVIEW')
            throw new common_1.BadRequestException(`Invalid request status transaction ${findTransaction.status}`);
        const chatOpening = await this.chatOpeningService.findOne(user.id);
        if (chatOpening && chatOpening.is_active) {
            await this.chatService.createMessage({
                sender_id: user.id,
                receiver_id: find.customer_id,
                chat_room_id: find.chat_room.id,
                message: chatOpening.message,
            });
        }
        await this.transactionConsultationService.update(findTransaction.id, {
            status: 'AKTIF',
        });
        const consultation = await this.consultationService.updateConsultation(id, {
            status: 'AKTIF',
            end_date: dayjs().add(30, 'minute').toDate(),
        });
        const [socketClientDoctor, socketClientCustomer] = await Promise.all([
            this.socketService.getClientByUserId(find.doctor_id),
            this.socketService.getClientByUserId(find.customer_id),
        ]);
        if (socketClientDoctor) {
            this.socketGateway.emitListenApp(socketClientDoctor.id, {
                success: true,
                event: 'consultationSessionIsActive',
                message: `The consultation session with doctor ${user.fullname} has been active`,
                data: find,
            });
        }
        if (socketClientCustomer) {
            this.socketGateway.emitListenApp(socketClientCustomer.id, {
                success: true,
                event: 'consultationSessionIsActive',
                message: `The consultation session with doctor ${user.fullname} has been active`,
                data: find,
            });
        }
        const notifyUser = await this.notificationService.create({
            type: 'CHAT',
            sender_id: 0,
            recipient_id: find.customer_id,
            title: 'Konsultasi',
            body: `Dokter ${find.doctor.fullname} telah selesai review pre-assesment mu, sekarang kamu bisa mulai kirim pesan ke dokter`,
            data: {
                consultation_id: find.id,
                chat_room: find.chat_room.code,
            },
        });
        this.queueFcm.add('sendNotificationToTopic', {
            topic: notifyUser.recipient_id.toString(),
            title: notifyUser.title,
            body: notifyUser.body,
            data: {
                type: notifyUser.type,
                consultation_id: find.id,
                chat_room: find.chat_room.code,
            },
        });
        return consultation;
    }
    async DoctorSchedule(user) {
        const day_number = dayjs(dayjs.tz(dayjs()).format())
            .hour(0)
            .minute(0)
            .second(0)
            .day();
        const data = await this.doctorScheduleService.findScheduleByUser(user.id, day_number);
        if (!data)
            return null;
        const currentSchedule = data.doctor_schedule_times.filter((schedule) => {
            const startTime = dayjs(new Date(`${dayjs().format('YYYY-MM-DD')} ${dayjs(schedule.start_time).hour()}:${dayjs(schedule.start_time).minute()}:`));
            const endTime = dayjs(new Date(`${dayjs().format('YYYY-MM-DD')} ${dayjs(schedule.end_time).hour()}:${dayjs(schedule.end_time).minute()}:`));
            return dayjs().isBetween(startTime, endTime);
        })[0] ?? null;
        if (currentSchedule) {
            currentSchedule.start_time = dayjs()
                .hour(dayjs(currentSchedule.start_time).hour())
                .minute(dayjs(currentSchedule.start_time).minute())
                .toDate();
            currentSchedule.end_time = dayjs()
                .hour(dayjs(currentSchedule.end_time).hour())
                .minute(dayjs(currentSchedule.end_time).minute())
                .toDate();
        }
        const nextSchedule = data.doctor_schedule_times
            .filter((schedule) => {
            const startTime = dayjs(new Date(`${dayjs().format('YYYY-MM-DD')} ${dayjs(schedule.start_time).hour()}:${dayjs(schedule.start_time).minute()}:`));
            return startTime.isAfter(dayjs());
        })
            .sort((a, b) => dayjs(a.start_time).diff(dayjs(b.start_time)))[0] ??
            null;
        if (nextSchedule) {
            nextSchedule.start_time = dayjs()
                .hour(dayjs(nextSchedule.start_time).hour())
                .minute(dayjs(nextSchedule.start_time).minute())
                .toDate();
            nextSchedule.end_time = dayjs()
                .hour(dayjs(nextSchedule.end_time).hour())
                .minute(dayjs(nextSchedule.end_time).minute())
                .toDate();
        }
        const result = {
            current_schedule: currentSchedule,
            next_schedule: nextSchedule,
            schedule_times: data.doctor_schedule_times.sort((a, b) => {
                const startTimeA = new Date(`${dayjs().format('YYYY-MM-DD')} ${dayjs(a.start_time).hour()}:${dayjs(a.start_time).minute()}:`).getTime();
                const startTimeB = new Date(`${dayjs().format('YYYY-MM-DD')} ${dayjs(b.start_time).hour()}:${dayjs(b.start_time).minute()}:`).getTime();
                const endTimeA = new Date(`${dayjs().format('YYYY-MM-DD')} ${dayjs(a.end_time).hour()}:${dayjs(a.end_time).minute()}:`).getTime();
                const endTimeB = new Date(`${dayjs().format('YYYY-MM-DD')} ${dayjs(b.end_time).hour()}:${dayjs(b.end_time).minute()}:`).getTime();
                return startTimeA - startTimeB || endTimeA - endTimeB;
            }),
        };
        return (0, date_to_local_transformer_1.transformDatesToLocal)([result])[0];
    }
    async consultationDetail(user, id) {
        const find = await this.consultationService.findConsultation(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        return find;
    }
    async createDoctorNote(user, id, data) {
        const find = await this.consultationService.findConsultation(id);
        if (!find)
            throw new common_1.BadRequestException('Consultation not found');
        if (find.doctor_id != user.id)
            throw new common_1.ForbiddenException();
        if (find.status != 'AKTIF')
            throw new common_1.BadRequestException('Invalid request for consultation status is not AKTIF');
        if (data.recomendation_skincare_items &&
            data.recomendation_skincare_items.length > 0) {
            for (let i = 0; i < data.recomendation_skincare_items.length; i++) {
                const findSkincare = await this.productService.find(data.recomendation_skincare_items[i].skincare_id);
                if (!findSkincare)
                    throw new common_1.BadRequestException(`Skincare with id ${data.recomendation_skincare_items[i].skincare_id} not found`);
                if (findSkincare.type != 'SKINCARE')
                    throw new common_1.BadRequestException(`Skincare id ${data.recomendation_skincare_items[i].skincare_id} is not valid skincare type`);
            }
        }
        if (data.recipe_drug_items && data.recipe_drug_items.length > 0) {
            for (let i = 0; i < data.recipe_drug_items.length; i++) {
                const findMedicine = await this.productService.find(data.recipe_drug_items[i].drug_id);
                if (!findMedicine)
                    throw new common_1.BadRequestException(`Drug with id ${data.recipe_drug_items[i].drug_id} not found`);
                if (findMedicine.type != 'DRUGS')
                    throw new common_1.BadRequestException(`Drug id ${data.recipe_drug_items[i].drug_id} is not valid drug type`);
            }
        }
        data.consultation_id = id;
        data.customer_id = find.customer_id;
        if (data.profile_verified) {
            data.name = null;
            data.gender = null;
            data.age = null;
        }
        return await this.consultationService.createDoctorNote(data);
    }
    async findDoctorNote(user, id) {
        const consultation = await this.consultationService.findConsultation(id);
        if (!consultation)
            throw new common_1.BadRequestException('Consultation not found');
        if (!(consultation.customer_id == user.id || consultation.doctor_id == user.id))
            throw new common_1.ForbiddenException();
        const data = await this.consultationService.findDoctorNote(consultation.id);
        if (!data)
            return null;
        return data.consultation;
    }
    async finishConsultation(user, id) {
        const find = await this.consultationService.findConsultation(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (![find.doctor_id, find.customer_id].includes(user.id))
            throw new common_1.ForbiddenException();
        if (find.doctor_id == user.id && dayjs().isBefore(dayjs(find.end_date))) {
            throw new common_1.BadRequestException('Invalid request, duration of consultation is still ongoing');
        }
        const findTransaction = await this.transactionConsultationService.find(find.transaction_consultation_id);
        if (!findTransaction)
            throw new common_1.BadRequestException('Transaction not found');
        if (findTransaction.status != 'AKTIF')
            throw new common_1.BadRequestException(`Invalid request status transaction ${findTransaction.status}`);
        await Promise.all([
            this.transactionConsultationService.update(findTransaction.id, {
                status: 'SELESAI',
            }),
            this.consultationService.updateChatRoom(findTransaction.consultation.code, {
                ended: true,
            }),
        ]);
        const endedConsultation = await this.consultationService.updateConsultation(id, {
            status: 'SELESAI',
        });
        const [socketClientDoctor, socketClientCustomer] = await Promise.all([
            this.socketService.getClientByUserId(find.doctor_id),
            this.socketService.getClientByUserId(find.customer_id),
        ]);
        if (socketClientDoctor) {
            this.socketGateway.emitListenApp(socketClientDoctor.id, {
                success: true,
                event: 'consultationSessionEnded',
                message: `The consultation session with doctor ${user.fullname} has ended`,
                data: find,
            });
        }
        if (socketClientCustomer) {
            this.socketGateway.emitListenApp(socketClientCustomer.id, {
                success: true,
                event: 'consultationSessionEnded',
                message: `The consultation session with doctor ${user.fullname} has ended`,
                data: find,
            });
        }
        return endedConsultation;
    }
    async galeryFiles(user, id, pageOptionsDto) {
        const find = await this.consultationService.findConsultation(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (user.roleId == 3 && find.customer_id != user.id)
            throw new common_1.ForbiddenException();
        if (user.roleId == 2 && find.doctor_id != user.id)
            throw new common_1.ForbiddenException();
        pageOptionsDto.customer_id = user.id;
        pageOptionsDto.consultation_id = find.id;
        return this.consultationService.findAllGaleryFile(pageOptionsDto);
    }
    async medicalPrescription(transactionId) {
        const data = await this.transactionConsultationService.find(transactionId);
        if (!data) {
            throw new common_1.BadRequestException('Data not found');
        }
        const prescription = await this.consultationService.findDoctorNote(data.consultation.id);
        const result = {};
        const customer_gender = data.customer.gender;
        const customer_age = data.dob
            ? dayjs().diff(dayjs(data.dob, 'YYYY-MM-DD'), 'year')
            : null;
        let customer_detail = [customer_gender, `${customer_age} tahun`].join(',');
        if (!customer_gender && customer_age)
            customer_detail = `${customer_age} tahun`;
        if (customer_gender && !customer_age)
            customer_detail = customer_gender;
        if (!customer_gender && !customer_age)
            customer_detail = null;
        result.base_url = process.env.APP_BASE_URL;
        result.consultation_date = dayjs
            .tz(data.consultation_date)
            .format('D MMMM YYYY');
        result.doctor_name = data.consultation.doctor.fullname;
        result.doctor_sip = data.consultation.doctor.sip ?? '-';
        result.customer_name = data.customer.fullname;
        result.customer_gender = customer_gender;
        result.customer_age = customer_age;
        result.customer_detail = customer_detail ? `- ${customer_detail}` : null;
        result.prescriptions = !prescription
            ? []
            : [
                ...prescription.consultation.consultation_recipe_drug.map((item) => ({
                    name: item.product.name,
                    note: item.notes,
                    qty: item.redeem_amount,
                    packaging: item.product.drug_detail.specification_packaging,
                })),
                ...prescription.consultation.consultation_recomendation_skincare.map((item) => ({
                    name: item.product.name,
                    note: item.notes,
                    qty: item.qty,
                    packaging: item.product.skincare_detail.specification_packaging_type,
                })),
            ];
        return result;
    }
    async medicalPrescriptionPreview(transactionId) {
        const data = await this.transactionConsultationService.find(transactionId);
        if (!data) {
            throw new common_1.BadRequestException('Data not found');
        }
        const prescription = await this.consultationService.findDoctorNote(data.consultation.id);
        const customer_gender = data.customer.gender;
        const customer_age = data.dob
            ? dayjs().diff(dayjs(data.dob, 'YYYY-MM-DD'), 'year')
            : null;
        let customer_detail = [customer_gender, `${customer_age} tahun`].join(',');
        if (!customer_gender && customer_age)
            customer_detail = `${customer_age} tahun`;
        if (customer_gender && !customer_age)
            customer_detail = customer_gender;
        if (!customer_gender && !customer_age)
            customer_detail = null;
        data.base_url = process.env.APP_BASE_URL;
        data.consultation_date = dayjs
            .tz(data.consultation_date)
            .format('D MMMM YYYY');
        data.doctor_name = data.consultation.doctor.fullname;
        data.doctor_sip = data.consultation.doctor.sip ?? '-';
        data.customer_name = data.customer.fullname;
        data.customer_gender = customer_gender;
        data.customer_age = customer_age;
        data.customer_detail = customer_detail ? `- ${customer_detail}` : null;
        data.prescriptions = !prescription
            ? []
            : [
                ...prescription.consultation.consultation_recipe_drug.map((item) => ({
                    name: item.product.name,
                    note: item.notes,
                    qty: item.redeem_amount,
                    packaging: item.product.drug_detail.specification_packaging,
                })),
                ...prescription.consultation.consultation_recomendation_skincare.map((item) => ({
                    name: item.product.name,
                    note: item.notes,
                    qty: item.qty,
                    packaging: item.product.skincare_detail.specification_packaging_type,
                })),
            ];
        return data;
    }
    async medicalPrescriptionDownload(user, transactionId, res) {
        const find = await this.transactionConsultationService.find(transactionId);
        if (!find) {
            throw new common_1.BadRequestException('Data not found');
        }
        if (find.customer_id != user.id)
            throw new common_1.ForbiddenException();
        const options = { format: 'A4' };
        const file = {
            url: `${this.configService.get('app').base_url}/consultation/${transactionId}/medical-prescription/preview`,
        };
        const buffer = await htmlPdf.generatePdf(file, options);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=medical-prescription.pdf`);
        res.send(buffer);
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/initiate/:transaction_id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('transaction_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "initiateChat", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Doctor),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)('doctor-schedule/:id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, page_option_consultation_schedule_dto_1.PageOptionConsultationDoctorScheduleDto]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "findAllConsultationDoctorSchedule", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Doctor),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Patch)('doctor-schedule/:id/approve'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "approveConsultationDoctorSchedule", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Doctor),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id/finish-review'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "finishReviewConsultation", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Doctor),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)('current-schedule'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "DoctorSchedule", null);
__decorate([
    (0, common_1.Get)(':id/detail'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "consultationDetail", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Doctor),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(':id/doctor-note'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, create_consultation_doctor_note_dto_1.CreateConsultationDoctorNoteDto]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "createDoctorNote", null);
__decorate([
    (0, common_1.Get)(':id/doctor-note'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "findDoctorNote", null);
__decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer, enum_1.Role.Doctor),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id/finish'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "finishConsultation", null);
__decorate([
    (0, common_1.Get)(':id/galery/files'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, page_options_galery_file_dto_1.PageOptionsGaleryFileDto]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "galeryFiles", null);
__decorate([
    (0, common_1.Get)(':transactionId/medical-prescription'),
    __param(0, (0, common_1.Param)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "medicalPrescription", null);
__decorate([
    (0, skip_guard_decorator_1.SkipGuard)(),
    (0, common_1.Get)(':transactionId/medical-prescription/preview'),
    (0, common_1.Render)('consultation/medical-prescription'),
    (0, common_1.SetMetadata)('render', true),
    __param(0, (0, common_1.Param)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "medicalPrescriptionPreview", null);
__decorate([
    (0, common_1.Get)(':transactionId/medical-prescription/download'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('transactionId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, Object]),
    __metadata("design:returntype", Promise)
], ConsultationController.prototype, "medicalPrescriptionDownload", null);
ConsultationController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('consultation'),
    __param(14, (0, common_1.Inject)(socket_gateway_1.SocketGateway)),
    __param(15, (0, bull_1.InjectQueue)('queueFcm')),
    __param(16, (0, bull_1.InjectQueue)('queueTaskSchedule')),
    __metadata("design:paramtypes", [consultation_service_1.ConsultationService,
        transaction_consultation_service_1.TransactionConsultationService,
        socket_service_1.SocketService,
        chat_service_1.ChatService,
        chat_opening_service_1.ChatOpeningService,
        doctor_schedule_service_1.DoctorScheduleService,
        task_scheduler_service_1.TaskSchedulerService,
        product_service_1.ProductService,
        notification_service_1.NotificationService,
        invoice_service_1.InvoiceService,
        config_1.ConfigService,
        medical_history_service_1.MedicalHistoryService,
        media_service_1.MediaService,
        my_journey_service_1.MyJourneyService,
        socket_gateway_1.SocketGateway, Object, Object])
], ConsultationController);
exports.ConsultationController = ConsultationController;
//# sourceMappingURL=consultation.controller.js.map
//# debugId=898fdb87-5467-5be1-8914-1c0355e0de3c
