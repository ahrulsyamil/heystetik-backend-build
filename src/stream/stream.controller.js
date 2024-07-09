"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b45bbec8-e19d-50e4-9426-9cad2a5a076f")}catch(e){}}();

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
exports.StreamController = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const dayjs = require("dayjs");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const media_1 = require("../globals/constant/media");
const roles_guard_1 = require("../globals/guards/roles.guard");
const file_upload_interceptor_1 = require("../globals/interceptors/file-upload.interceptor");
const interest_augmentation_skin_goals_service_1 = require("../interest-augmentation-skin-goals/interest-augmentation-skin-goals.service");
const interest_body_corrective_skin_goals_service_1 = require("../interest-body-corrective-skin-goals/interest_body_corrective_skin_goals.service");
const interest_face_corrective_skin_goals_service_1 = require("../interest-face-corrective-skin-goals/interest_face_corrective_skin_goals.service");
const interest_sexually_and_skin_diseases_skin_goals_service_1 = require("../interest-sexually-and-skin-diseases-skin-goals/interest-sexually-and-skin-diseases-skin-goals.service");
const lookup_service_1 = require("../lookup/lookup.service");
const media_service_1 = require("../media/media.service");
const notification_service_1 = require("../notification/notification.service");
const stream_like_service_1 = require("../stream-like/stream-like.service");
const stream_save_service_1 = require("../stream-save/stream-save.service");
const user_entity_1 = require("../users/entities/user.entity");
const create_polling_dto_1 = require("./dto/create-polling.dto");
const create_stream_report_dto_1 = require("./dto/create-stream-report.dto");
const create_stream_dto_1 = require("./dto/create-stream.dto");
const delete_polling_dto_1 = require("./dto/delete-polling.dto");
const page_options_stream_followed_dto_1 = require("./dto/page-options-stream-followed.dto");
const page_options_stream_hashtag_suggestion_dto_1 = require("./dto/page-options-stream-hashtag-suggestion.dto");
const page_options_stream_hashtag_dto_1 = require("./dto/page-options-stream-hashtag.dto");
const page_options_stream_home_dto_1 = require("./dto/page-options-stream-home.dto");
const page_options_stream_interest_dto_1 = require("./dto/page-options-stream-interest.dto");
const page_options_stream_mention_dto_1 = require("./dto/page-options-stream-mention.dto");
const page_options_stream_recent_dto_1 = require("./dto/page-options-stream-recent.dto");
const page_options_stream_report_reason_dto_1 = require("./dto/page-options-stream-report-reason.dto");
const page_options_stream_trending_dto_1 = require("./dto/page-options-stream-trending.dto");
const stream_service_1 = require("./stream.service");
const user_service_1 = require("../auth/user/user.service");
let StreamController = class StreamController {
    constructor(streamService, streamSaveService, streamLikeService, mediaService, interestFaceCorrectiveSkinGoalService, interestBodyCorrectiveSkinGoalService, interestAugmentationSkinGoalService, interestSexuallyAndSkinDiseasesSkinGoalService, notificationService, configService, lookupService, userService, queueFcm, queueEmail) {
        this.streamService = streamService;
        this.streamSaveService = streamSaveService;
        this.streamLikeService = streamLikeService;
        this.mediaService = mediaService;
        this.interestFaceCorrectiveSkinGoalService = interestFaceCorrectiveSkinGoalService;
        this.interestBodyCorrectiveSkinGoalService = interestBodyCorrectiveSkinGoalService;
        this.interestAugmentationSkinGoalService = interestAugmentationSkinGoalService;
        this.interestSexuallyAndSkinDiseasesSkinGoalService = interestSexuallyAndSkinDiseasesSkinGoalService;
        this.notificationService = notificationService;
        this.configService = configService;
        this.lookupService = lookupService;
        this.userService = userService;
        this.queueFcm = queueFcm;
        this.queueEmail = queueEmail;
    }
    async isInCircle(streamer_id, user_id) {
        const circleUser = await this.streamService.findUserInCircle(streamer_id, user_id);
        if (circleUser.length == 0) {
            return false;
        }
        return true;
    }
    async findAllHome(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        pageOptionsDto.username = user.username;
        const result = await this.streamService.findAllHome(pageOptionsDto);
        result.data = await Promise.all(result.data.map(async (item) => {
            const [stream, saved, like, follow, votedOption] = await Promise.all([
                this.streamService.find(item.id),
                this.streamSaveService.findBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamLikeService.findBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamService.findStreamFollowerBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamService.findStreamPollingBy({
                    user_id: user.id,
                    stream_poll: {
                        stream_id: item.id,
                        id: item?.stream_poll?.id,
                    },
                }),
            ]);
            return {
                ...stream,
                saved: saved ? true : false,
                like: like ? true : false,
                follow: follow ? true : false,
                voted: votedOption ? true : false,
                voted_option: votedOption,
            };
        }));
        return result;
    }
    async findAllInterest(user, pageOptionsDto) {
        const interestFaceCorrectiveSkinGoals = await this.interestFaceCorrectiveSkinGoalService.findAllBy({
            userId: user.id,
        });
        pageOptionsDto.interest_face_corrective_skin_goals =
            interestFaceCorrectiveSkinGoals.map((item) => item.name_face_corrective);
        const interestBodyCorrectiveSkinGoals = await this.interestBodyCorrectiveSkinGoalService.findAllBy({
            userId: user.id,
        });
        pageOptionsDto.interest_body_corrective_skin_goals =
            interestBodyCorrectiveSkinGoals.map((item) => item.name_body_corrective);
        const interestAugmentationSkinGoals = await this.interestAugmentationSkinGoalService.findAllBy({
            userId: user.id,
        });
        pageOptionsDto.interest_augmentation_skin_goals =
            interestAugmentationSkinGoals.map((item) => item.name_augmentation);
        pageOptionsDto.user_id = user.id;
        const interestSexuallyAndSkinDiseasesSkinGoals = await this.interestSexuallyAndSkinDiseasesSkinGoalService.findAllBy({
            userId: user.id,
        });
        pageOptionsDto.interest_sexually_and_skin_diseases_skin_goals =
            interestSexuallyAndSkinDiseasesSkinGoals.map((item) => item.name);
        pageOptionsDto.user_id = user.id;
        const result = await this.streamService.findAllInterest(pageOptionsDto);
        result.data = await Promise.all(result.data.map(async (item) => {
            const [saved, like, follow, votedOption] = await Promise.all([
                this.streamSaveService.findBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamLikeService.findBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamService.findStreamFollowerBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamService.findStreamPollingBy({
                    user_id: user.id,
                    stream_poll: {
                        stream_id: item.id,
                        id: item?.stream_poll?.id,
                    },
                }),
            ]);
            return {
                ...item,
                saved: saved ? true : false,
                like: like ? true : false,
                follow: follow ? true : false,
                voted: votedOption ? true : false,
                voted_option: votedOption,
            };
        }));
        return result;
    }
    async findAllTrending(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        const result = await this.streamService.findAllTrending(pageOptionsDto);
        result.data = await Promise.all(result.data.map(async (item) => {
            const [stream, saved, like, follow, votedOption] = await Promise.all([
                this.streamService.find(item.id),
                this.streamSaveService.findBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamLikeService.findBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamService.findStreamFollowerBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamService.findStreamPollingBy({
                    user_id: user.id,
                    stream_poll: {
                        stream_id: item.id,
                        id: item?.stream_poll?.id,
                    },
                }),
            ]);
            return {
                ...stream,
                saved: saved ? true : false,
                like: like ? true : false,
                follow: follow ? true : false,
                voted: votedOption ? true : false,
                voted_option: votedOption,
            };
        }));
        return result;
    }
    async findAllFollowed(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        pageOptionsDto.username = user.username;
        const result = await this.streamService.findAllFollowed(pageOptionsDto);
        result.data = await Promise.all(result.data.map(async (item) => {
            const [stream, saved, like, follow, votedOption] = await Promise.all([
                this.streamService.find(item.id),
                this.streamSaveService.findBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamLikeService.findBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamService.findStreamFollowerBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamService.findStreamPollingBy({
                    user_id: user.id,
                    stream_poll: {
                        stream_id: item.id,
                        id: item?.stream_poll?.id,
                    },
                }),
            ]);
            return {
                ...stream,
                saved: saved ? true : false,
                like: like ? true : false,
                follow: follow ? true : false,
                voted: votedOption ? true : false,
                voted_option: votedOption,
            };
        }));
        return result;
    }
    async create(user, files, data) {
        let media = [];
        if (files.length > 0) {
            media = await this.mediaService.insertMediaData(files);
        }
        data.user_id = user.id;
        const stream = await this.streamService.create(data, media);
        if (data.stream_poll) {
            await this.streamService.createStreamPoll(stream.id, data.stream_poll);
        }
        if (data.mentions && data.mentions.length > 0) {
            const [usersNotificationSetting, findAllUserMentions] = await Promise.all([
                this.notificationService.findAllNotificationSettingBy({
                    user: {
                        username: {
                            in: data.mentions.map((user) => user.username),
                        },
                    },
                }),
                this.userService.findAllBy({
                    username: {
                        in: data.mentions.map((user) => user.username),
                    },
                }),
            ]);
            await Promise.all(data.mentions.map(async (mention) => {
                const targetUser = usersNotificationSetting.find((x) => x.user.username == mention.username &&
                    x.type == 'NOTIF_STREAM_MENTION');
                const userId = findAllUserMentions.find((x) => x.username == mention.username).id;
                if ((targetUser && targetUser?.is_enabled) ?? true) {
                    const notification = await this.notificationService.create({
                        type: 'STREAM_MENTION',
                        sender_id: 0,
                        recipient_id: targetUser?.user_id ?? userId,
                        title: 'Stream',
                        body: `${user.username} telah menyebut Anda dalam sebuah postingan`,
                        data: {
                            stream_id: stream.id,
                            user_id: stream.user_id,
                        },
                    });
                    this.queueFcm.add('sendNotificationToTopic', {
                        topic: (targetUser?.user_id ?? userId).toString(),
                        title: notification.title,
                        body: notification.body,
                        data: {
                            type: notification.type,
                            stream_id: stream.id,
                            user_id: stream.user_id,
                        },
                    });
                }
                return null;
            }));
        }
        const notifyUserActivity = await this.notificationService.findAllNotificationUserActivityBy({
            user_id: user.id,
            is_enabled: true,
        });
        if (notifyUserActivity && notifyUserActivity.length > 0) {
            Promise.all(notifyUserActivity.map(async (item) => {
                const notification = await this.notificationService.create({
                    type: 'STREAM_USER_ACTIVITY',
                    sender_id: 0,
                    recipient_id: item.follower_id,
                    title: 'Stream',
                    body: `${user.username} telah memposting stream baru. Lihat sekarang untuk melihat apa yang dia posting!`,
                    data: {
                        stream_id: stream.id,
                        user_id: stream.user_id,
                        follower_id: item.follower_id,
                    },
                });
                this.queueFcm.add('sendNotificationToTopic', {
                    topic: item.follower_id.toString(),
                    title: notification.title,
                    body: notification.body,
                    data: {
                        type: notification.type,
                        stream_id: stream.id,
                        user_id: stream.user_id,
                        follower_id: item.follower_id,
                    },
                });
                return item;
            }));
        }
        return stream;
    }
    async createPolling(user, data) {
        const find = await this.streamService.find(data.stream_id);
        if (!find)
            throw new common_1.BadRequestException('Stream not found');
        if (find.visibility == 'CIRCLE') {
            if (!(await this.isInCircle(find.user_id, user.id)))
                throw new common_1.ForbiddenException();
        }
        if (!find.stream_poll)
            throw new common_1.BadRequestException('Invalid request');
        const streamPoll = await this.streamService.findStreamPoll(data.stream_poll_id);
        if (!streamPoll)
            throw new common_1.BadRequestException('Data not found');
        if (dayjs().isAfter(streamPoll.end_time)) {
            throw new common_1.BadRequestException('The polling time has ended');
        }
        data.user_id = user.id;
        const polling = await this.streamService.streamPolling(data);
        const notificationSetting = await this.notificationService.findAllNotificationSetting(find.user_id);
        if (user.id != find.user_id &&
            (notificationSetting.find((x) => x.type == 'NOTIF_STREAM_REPLY')
                ?.is_enabled ??
                true)) {
            const notification = await this.notificationService.create({
                type: 'STREAM_VOTE',
                sender_id: 0,
                recipient_id: find.user_id,
                title: 'Stream',
                body: `${user.username} telah memberi voting pada postingan Anda`,
                data: {
                    stream_id: find.id,
                    stream_poll_id: polling.id,
                    user_id: polling.user_id,
                },
            });
            this.queueFcm.add('sendNotificationToTopic', {
                topic: find.user_id.toString(),
                title: notification.title,
                body: notification.body,
                data: {
                    type: notification.type,
                    stream_id: find.id,
                    stream_poll_id: polling.id,
                    user_id: polling.user_id,
                },
            });
        }
        const streamFollower = await this.streamService.findAllStreamFollower(find.id);
        await Promise.all(streamFollower
            .filter((x) => x.user_id != user.id)
            .map(async (item) => {
            if (item.user.notification_settings.find((x) => x.type == 'NOTIF_STREAM_FOLLOWED_POST')?.is_enabled ??
                true) {
                const notification = await this.notificationService.create({
                    type: 'STREAM_VOTE',
                    sender_id: 0,
                    recipient_id: item.user_id,
                    title: 'Stream',
                    body: `${user.username} telah memberi voting pada postingan yang Anda ikuti`,
                    data: {
                        stream_id: find.id,
                        stream_poll_id: polling.id,
                        user_id: polling.user_id,
                    },
                });
                this.queueFcm.add('sendNotificationToTopic', {
                    topic: item.user_id.toString(),
                    title: notification.title,
                    body: notification.body,
                    data: {
                        type: notification.type,
                        stream_id: find.id,
                        stream_poll_id: polling.id,
                        user_id: polling.user_id,
                    },
                });
                return notification;
            }
            return null;
        }));
        return polling;
    }
    async deletePolling(user, data) {
        data.user_id = user.id;
        const find = await this.streamService.find(data.stream_id);
        if (!find)
            throw new common_1.BadRequestException('Stream not found');
        if (find.visibility == 'CIRCLE') {
            if (!(await this.isInCircle(find.user_id, user.id)))
                throw new common_1.ForbiddenException();
        }
        const streamPoll = await this.streamService.findStreamPoll(data.stream_poll_id);
        if (!streamPoll)
            throw new common_1.BadRequestException('Data not found');
        const streamPolling = await this.streamService.findStreamPollingBy({
            stream_poll_id: data.stream_poll_id,
            stream_poll_option_id: data.stream_poll_option_id,
            user_id: data.user_id,
        });
        if (!streamPolling)
            throw new common_1.BadRequestException('Data not found');
        if (streamPolling.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.streamService.deletePolling(data);
    }
    async findAllMention(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        return await this.streamService.findAllMention(pageOptionsDto);
    }
    async delete(user, id) {
        const find = await this.streamService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.streamService.delete(id);
    }
    async streamRecent(user, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        return await this.streamService.findAllRecentFile(pageOptionsDto);
    }
    async streamTag(pageOptionsDto) {
        return await this.streamService.findAllSuggestionHashtag(pageOptionsDto);
    }
    async streamHashtag(user, hashtag, pageOptionsDto) {
        pageOptionsDto.user_id = user.id;
        pageOptionsDto.username = user.username;
        const result = await this.streamService.findAllStreamHashtagByTag(hashtag, pageOptionsDto);
        result.data = await Promise.all(result.data.map(async (item) => {
            const [stream, saved, like, follow] = await Promise.all([
                this.streamService.find(item.id),
                this.streamSaveService.findBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamLikeService.findBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
                this.streamService.findStreamFollowerBy({
                    stream_id: item.id,
                    user_id: user.id,
                }),
            ]);
            return {
                ...stream,
                saved: saved ? true : false,
                like: like ? true : false,
                follow: follow ? true : false,
            };
        }));
        return result;
    }
    async findAllReportReason(pageOptionsDto) {
        return await this.streamService.findAllReportStream(pageOptionsDto);
    }
    async streamReportOld(user, data) {
        const [find, findReportReason] = await Promise.all([
            this.streamService.find(data.stream_id),
            this.lookupService.findBy({
                category: 'STREAM_REPORT_REASON',
                value: data.report_reason,
            }),
        ]);
        if (!find)
            throw new common_1.BadRequestException('Stream not found');
        if (find.user_id == user.id)
            throw new common_1.BadRequestException('Invalid request, this post is yours');
        if (find.visibility == 'CIRCLE') {
            if (!(await this.isInCircle(find.user_id, user.id)))
                throw new common_1.ForbiddenException();
        }
        if (!findReportReason)
            throw new common_1.BadRequestException('Invalid report reason');
        this.queueEmail.add('sendEmailReportStream', {
            email: this.configService.get('email').stream_report_destination,
            data: {
                details: [
                    {
                        label: 'Stream ID',
                        value: find.id,
                    },
                    {
                        label: 'Reported By',
                        value: `${user.fullname} (ID: ${user.id})`,
                    },
                    {
                        label: 'Reason for Report',
                        value: data.report_reason,
                    },
                    {
                        label: 'Detail Reason',
                        value: data.report_detail,
                    },
                ],
            },
        });
        data.user_id = user.id;
        return await this.streamService.createReportStream(data);
    }
    async followThisPost(user, id) {
        const find = await this.streamService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Stream not found');
        if (find.visibility == 'CIRCLE') {
            if (!(await this.isInCircle(find.user_id, user.id)))
                throw new common_1.ForbiddenException();
        }
        if (find.user_id == user.id)
            throw new common_1.BadRequestException('Invalid request, this post is yours');
        return await this.streamService.createStreamFollower({
            user_id: user.id,
            stream_id: id,
        });
    }
    async unfollowThisPost(user, id) {
        const find = await this.streamService.findStreamFollowerBy({
            user_id: user.id,
            stream_id: id,
        });
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        if (find.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.streamService.deleteStreamFollower(find.id);
    }
    async find(user, id) {
        const find = await this.streamService.find(id);
        if (!find)
            throw new common_1.BadRequestException('Data not found');
        const [saved, like, follow] = await Promise.all([
            this.streamSaveService.findBy({
                stream_id: find.id,
                user_id: user.id,
            }),
            this.streamLikeService.findBy({
                stream_id: find.id,
                user_id: user.id,
            }),
            this.streamService.findStreamFollowerBy({
                stream_id: find.id,
                user_id: user.id,
            }),
        ]);
        return {
            ...find,
            saved: saved ? true : false,
            like: like ? true : false,
            follow: follow ? true : false,
        };
    }
};
__decorate([
    (0, common_1.Get)('home'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_stream_home_dto_1.PageOptionsStreamHomeDto]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "findAllHome", null);
__decorate([
    (0, common_1.Get)('interest'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_stream_interest_dto_1.PageOptionsStreamInterestDto]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "findAllInterest", null);
__decorate([
    (0, common_1.Get)('trending'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_stream_trending_dto_1.PageOptionsStreamTrendingDto]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "findAllTrending", null);
__decorate([
    (0, common_1.Get)('followed'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_stream_followed_dto_1.PageOptionsStreamFollowedDto]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "findAllFollowed", null);
__decorate([
    (0, common_1.UseInterceptors)((0, file_upload_interceptor_1.FileUploadInterceptor)({
        name: 'files',
        dirPath: media_1.MEDIA_STREAM_DIR,
        prefixName: 'stream',
    })),
    (0, common_1.Post)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Array, create_stream_dto_1.CreateStreamDto]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('polling'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        create_polling_dto_1.CreatePollingDto]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "createPolling", null);
__decorate([
    (0, common_1.Delete)('polling'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        delete_polling_dto_1.DeletePollingDto]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "deletePolling", null);
__decorate([
    (0, common_1.Get)('find-mention-user'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_stream_mention_dto_1.PageOptionsStreamMentionDto]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "findAllMention", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('recent'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        page_options_stream_recent_dto_1.PageOptionsStreamRecentDto]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "streamRecent", null);
__decorate([
    (0, common_1.Get)('hashtag'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_stream_hashtag_suggestion_dto_1.PageOptionsStreamHashtagSuggestionDto]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "streamTag", null);
__decorate([
    (0, common_1.Get)('hashtag/:hashtag'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('hashtag')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, page_options_stream_hashtag_dto_1.PageOptionsStreamHashtagDto]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "streamHashtag", null);
__decorate([
    (0, common_1.Get)('report/reason'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_stream_report_reason_dto_1.PageOptionsStreamReportReasonDto]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "findAllReportReason", null);
__decorate([
    (0, common_1.Post)('report'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        create_stream_report_dto_1.CreateStreamReportDto]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "streamReportOld", null);
__decorate([
    (0, common_1.Post)(':id/follow-this-post'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "followThisPost", null);
__decorate([
    (0, common_1.Delete)(':id/unfollow-this-post'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "unfollowThisPost", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number]),
    __metadata("design:returntype", Promise)
], StreamController.prototype, "find", null);
StreamController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiTags)('Stream'),
    (0, common_1.Controller)('stream'),
    __param(12, (0, bull_1.InjectQueue)('queueFcm')),
    __param(13, (0, bull_1.InjectQueue)('queueEmail')),
    __metadata("design:paramtypes", [stream_service_1.StreamService,
        stream_save_service_1.StreamSaveService,
        stream_like_service_1.StreamLikeService,
        media_service_1.MediaService,
        interest_face_corrective_skin_goals_service_1.InterestFaceCorrectiveSkinGoalsService,
        interest_body_corrective_skin_goals_service_1.InterestBodyCorrectiveSkinGoalsService,
        interest_augmentation_skin_goals_service_1.InterestAugmentationSkinGoalsService,
        interest_sexually_and_skin_diseases_skin_goals_service_1.InterestSexuallyAndSkinDiseasesSkinGoalsService,
        notification_service_1.NotificationService,
        config_1.ConfigService,
        lookup_service_1.LookupService,
        user_service_1.UserService, Object, Object])
], StreamController);
exports.StreamController = StreamController;
//# sourceMappingURL=stream.controller.js.map
//# debugId=b45bbec8-e19d-50e4-9426-9cad2a5a076f
