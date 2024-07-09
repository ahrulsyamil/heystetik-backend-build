"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d0ae3bc6-a530-556c-b39d-1335cccd6fd5")}catch(e){}}();

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
exports.StreamCommentController = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const user_service_1 = require("../auth/user/user.service");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const enum_1 = require("../globals/constant/enum");
const roles_guard_1 = require("../globals/guards/roles.guard");
const notification_service_1 = require("../notification/notification.service");
const stream_service_1 = require("../stream/stream.service");
const user_entity_1 = require("../users/entities/user.entity");
const create_stream_comment_reply_dto_1 = require("./dto/create-stream-comment-reply.dto");
const create_stream_comment_dto_1 = require("./dto/create-stream-comment.dto");
const like_unlike_stream_comment_reply_dto_1 = require("./dto/like-unlike-stream-comment-reply.dto");
const like_unlike_stream_comment_dto_1 = require("./dto/like-unlike-stream-comment.dto");
const page_options_comment_reply_dto_1 = require("./dto/page-options-comment-reply.dto");
const page_options_comment_dto_1 = require("./dto/page-options-comment.dto");
const stream_comment_service_1 = require("./stream-comment.service");
let StreamCommentController = class StreamCommentController {
    constructor(streamCommentService, streamService, notificationService, userService, queueFcm) {
        this.streamCommentService = streamCommentService;
        this.streamService = streamService;
        this.notificationService = notificationService;
        this.userService = userService;
        this.queueFcm = queueFcm;
    }
    async isInCircle(streamer_id, user_id) {
        const circleUser = await this.streamService.findUserInCircle(streamer_id, user_id);
        if (circleUser.length == 0) {
            return false;
        }
        return true;
    }
    async findAll(user, id, pageOptions) {
        const findStream = await this.streamService.find(id);
        if (!findStream)
            throw new common_1.BadRequestException('Stream not found');
        if (findStream.visibility == 'CIRCLE') {
            this.isInCircle(findStream.user_id, user.id);
        }
        const result = await this.streamCommentService.findAllByStream(id, pageOptions);
        result.data = await Promise.all(result.data.map(async (item) => {
            const like = await this.streamCommentService.findLikeBy({
                user_id: user.id,
            });
            return {
                ...item,
                like: like ? true : false,
            };
        }));
        return result;
    }
    async findAllReply(user, id, comment_id, pageOptions) {
        const findStream = await this.streamService.find(id);
        if (!findStream)
            throw new common_1.BadRequestException('Stream not found');
        if (findStream.visibility == 'CIRCLE') {
            this.isInCircle(findStream.user_id, user.id);
        }
        const findStreamComment = await this.streamCommentService.find(comment_id);
        if (!findStreamComment)
            throw new common_1.BadRequestException('Stream comment not found');
        const result = await this.streamCommentService.findAllByStreamComment(id, comment_id, pageOptions);
        result.data = await Promise.all(result.data.map(async (item) => {
            const like = await this.streamCommentService.findReplyLikeBy({
                stream_comment_reply_id: item.id,
                stream_comment_id: item.stream_comment_id,
                user_id: user.id,
            });
            return {
                ...item,
                like: like ? true : false,
            };
        }));
        return result;
    }
    async create(user, data, id) {
        data.user_id = user.id;
        data.stream_id = id;
        const [findStream, notificationSetting, usersNotificationSetting] = await Promise.all([
            this.streamService.find(id),
            this.notificationService.findAllNotificationSetting(user.id),
            data.mentions
                ? this.notificationService.findAllNotificationSettingBy({
                    user: {
                        username: {
                            in: data.mentions.map((user) => user.username),
                        },
                    },
                })
                : [],
        ]);
        if (!findStream)
            throw new common_1.BadRequestException('Stream not found');
        if (findStream.visibility == 'CIRCLE') {
            this.isInCircle(findStream.user_id, user.id);
        }
        const comment = await this.streamCommentService.create(data);
        if (user.id != findStream.user_id &&
            (notificationSetting.find((x) => x.type == 'NOTIF_STREAM_REPLY')
                ?.is_enabled ??
                true)) {
            const notification = await this.notificationService.create({
                type: 'STREAM_COMMENT',
                sender_id: 0,
                recipient_id: findStream.user_id,
                title: 'Stream',
                body: `${user.username} telah berkomentar pada postingan Anda: "${data.content}"`,
                data: {
                    stream_id: findStream.id,
                    stream_comment_id: comment.id,
                    user_id: comment.user_id,
                },
            });
            this.queueFcm.add('sendNotificationToTopic', {
                topic: findStream.user_id.toString(),
                title: notification.title,
                body: notification.body,
                data: {
                    type: notification.type,
                    stream_id: findStream.id,
                    stream_comment_id: comment.id,
                    user_id: comment.user_id,
                },
            });
        }
        const streamFollower = await this.streamService.findAllStreamFollower(findStream.id);
        await Promise.all(streamFollower
            .filter((x) => x.user_id != user.id)
            .map(async (item) => {
            if (item.user.notification_settings.find((x) => x.type == 'NOTIF_STREAM_FOLLOWED_POST')?.is_enabled ??
                true) {
                const notification = await this.notificationService.create({
                    type: 'STREAM_COMMENT',
                    sender_id: 0,
                    recipient_id: item.user_id,
                    title: 'Stream',
                    body: `${user.username} telah berkomentar pada postingan yang anda ikuti: "${data.content}"`,
                    data: {
                        stream_id: findStream.id,
                        stream_comment_id: comment.id,
                        user_id: comment.user_id,
                    },
                });
                this.queueFcm.add('sendNotificationToTopic', {
                    topic: item.user_id.toString(),
                    title: notification.title,
                    body: notification.body,
                    data: {
                        type: notification.type,
                        stream_id: findStream.id,
                        stream_comment_id: comment.id,
                        user_id: comment.user_id,
                    },
                });
                return notification;
            }
            return null;
        }));
        if (data.mentions && data.mentions.length > 0) {
            const findAllUserMentions = await this.userService.findAllBy({
                username: {
                    in: data.mentions.map((user) => user.username),
                },
            });
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
                        body: `${user.username} telah menyebut Anda dalam sebuah komentar di postingan`,
                        data: {
                            stream_id: findStream.id,
                            user_id: findStream.user_id,
                        },
                    });
                    this.queueFcm.add('sendNotificationToTopic', {
                        topic: (targetUser?.user_id ?? userId).toString(),
                        title: notification.title,
                        body: notification.body,
                        data: {
                            type: notification.type,
                            stream_id: findStream.id,
                            user_id: findStream.user_id,
                        },
                    });
                }
                return null;
            }));
        }
        return comment;
    }
    async createReply(user, data, id, comment_id) {
        data.user_id = user.id;
        data.stream_id = id;
        data.stream_comment_id = comment_id;
        const [findStream, findStreamComment, usersNotificationSetting] = await Promise.all([
            this.streamService.find(id),
            this.streamCommentService.find(comment_id),
            this.notificationService.findAllNotificationSettingBy({
                user: {
                    username: {
                        in: data.mentions.map((user) => user.username),
                    },
                },
            }),
        ]);
        if (!findStream)
            throw new common_1.BadRequestException('Stream not found');
        if (findStream.visibility == 'CIRCLE') {
            this.isInCircle(findStream.user_id, user.id);
        }
        if (!findStreamComment)
            throw new common_1.BadRequestException('Stream comment not found');
        const commentReply = await this.streamCommentService.createReply(data);
        const [notifSettingForOwner, notifOwnerForCommenter] = await Promise.all([
            this.notificationService.findAllNotificationSetting(findStream.user_id),
            this.notificationService.findAllNotificationSetting(findStreamComment.user_id),
        ]);
        const notifications = await Promise.all([
            user.id == findStream.user_id
                ? null
                : notifSettingForOwner.find((x) => x.type == 'NOTIF_STREAM_REPLY')
                    ?.is_enabled ?? true
                    ? this.notificationService.create({
                        type: 'STREAM_COMMENT_REPLY',
                        sender_id: 0,
                        recipient_id: findStream.user_id,
                        title: 'Stream',
                        body: `${user.username} telah berkomentar pada komentar di postingan Anda: "${data.content}"`,
                        data: {
                            stream_id: findStream.id,
                            stream_comment_id: findStreamComment.id,
                            stream_comment_reply_id: commentReply.id,
                            stream_comment_user_id: findStreamComment.user_id,
                            user_id: commentReply.user_id,
                        },
                    })
                    : null,
            notifOwnerForCommenter.find((x) => x.type == 'NOTIF_STREAM_REPLY')
                ?.is_enabled ?? true
                ? this.notificationService.create({
                    type: 'STREAM_COMMENT_REPLY',
                    sender_id: 0,
                    recipient_id: findStreamComment.user_id,
                    title: 'Stream',
                    body: `${user.username} telah berkomentar pada komentar Anda: "${data.content}"`,
                    data: {
                        stream_id: findStream.id,
                        stream_comment_id: findStreamComment.id,
                        stream_comment_reply_id: commentReply.id,
                        stream_comment_user_id: findStreamComment.user_id,
                        user_id: commentReply.user_id,
                    },
                })
                : null,
        ]);
        notifications.forEach((notif) => {
            if (notif) {
                this.queueFcm.add('sendNotificationToTopic', {
                    topic: findStreamComment.user_id.toString(),
                    title: notif.title,
                    body: notif.body,
                    data: {
                        type: notif.type,
                        stream_id: findStream.id,
                        stream_comment_id: findStreamComment.id,
                        stream_comment_reply_id: commentReply.id,
                        stream_comment_user_id: findStreamComment.user_id,
                        user_id: commentReply.user_id,
                    },
                });
            }
        });
        const streamFollower = await this.streamService.findAllStreamFollower(findStream.id);
        await Promise.all(streamFollower
            .filter((x) => x.user_id != user.id && x.user_id != findStreamComment.user_id)
            .map(async (item) => {
            if (item.user.notification_settings.find((x) => x.type == 'NOTIF_STREAM_FOLLOWED_POST')?.is_enabled ??
                true) {
                const notification = await this.notificationService.create({
                    type: 'STREAM_COMMENT_REPLY',
                    sender_id: 0,
                    recipient_id: item.user_id,
                    title: 'Stream',
                    body: `${user.username} telah berkomentar pada komentar di postingan Anda ikuti: "${data.content}"`,
                    data: {
                        stream_id: findStream.id,
                        stream_comment_id: findStreamComment.id,
                        stream_comment_reply_id: commentReply.id,
                        stream_comment_user_id: findStreamComment.user_id,
                        user_id: commentReply.user_id,
                    },
                });
                this.queueFcm.add('sendNotificationToTopic', {
                    topic: findStreamComment.user_id.toString(),
                    title: notification.title,
                    body: notification.body,
                    data: {
                        type: notification.type,
                        stream_id: findStream.id,
                        stream_comment_id: findStreamComment.id,
                        stream_comment_reply_id: commentReply.id,
                        stream_comment_user_id: findStreamComment.user_id,
                        user_id: commentReply.user_id,
                    },
                });
                return notification;
            }
            return null;
        }));
        if (data.mentions && data.mentions.length > 0) {
            const findAllUserMentions = await this.userService.findAllBy({
                username: {
                    in: data.mentions.map((user) => user.username),
                },
            });
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
                        body: `${user.username} telah menyebut Anda dalam sebuah komentar di postingan`,
                        data: {
                            stream_id: findStream.id,
                            user_id: findStream.user_id,
                        },
                    });
                    this.queueFcm.add('sendNotificationToTopic', {
                        topic: (targetUser?.user_id ?? userId).toString(),
                        title: notification.title,
                        body: notification.body,
                        data: {
                            type: notification.type,
                            stream_id: findStream.id,
                            user_id: findStream.user_id,
                        },
                    });
                }
                return null;
            }));
        }
        return commentReply;
    }
    async delete(user, id, comment_id) {
        const [findStream, findStreamComment] = await Promise.all([
            this.streamService.find(id),
            this.streamCommentService.findBy({
                id: comment_id,
                stream_id: id,
            }),
        ]);
        if (!findStream)
            throw new common_1.BadRequestException('Stream not found');
        if (findStream.visibility == 'CIRCLE') {
            this.isInCircle(findStream.user_id, user.id);
        }
        if (!findStreamComment)
            throw new common_1.BadRequestException('Stream comment not found');
        if (findStreamComment.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.streamCommentService.deleteComment(comment_id);
    }
    async deleteReply(user, id, comment_id, comment_reply_id) {
        const [findStream, findStreamComment, findStreamCommentReply] = await Promise.all([
            this.streamService.find(id),
            this.streamCommentService.findBy({
                stream_id: id,
                id: comment_id,
            }),
            this.streamCommentService.findReplyBy({
                stream_id: id,
                stream_comment_id: comment_id,
                id: comment_reply_id,
            }),
        ]);
        if (!findStream)
            throw new common_1.BadRequestException('Stream not found');
        if (findStream.visibility == 'CIRCLE') {
            this.isInCircle(findStream.user_id, user.id);
        }
        if (!findStreamComment)
            throw new common_1.BadRequestException('Stream comment not found');
        if (!findStreamCommentReply)
            throw new common_1.BadRequestException('Stream comment reply not found');
        if (findStreamCommentReply.user_id != user.id)
            throw new common_1.ForbiddenException();
        return await this.streamCommentService.deleteReplyComment(comment_reply_id);
    }
    async likeComment(user, data, id, comment_id) {
        data.user_id = user.id;
        data.stream_comment_id = comment_id;
        const [findStream, findStreamComment, notificationSetting] = await Promise.all([
            this.streamService.find(id),
            this.streamCommentService.find(comment_id),
            this.notificationService.findAllNotificationSetting(user.id),
        ]);
        if (!findStream)
            throw new common_1.BadRequestException('Stream not found');
        if (findStream.visibility == 'CIRCLE') {
            this.isInCircle(findStream.user_id, user.id);
        }
        if (!findStreamComment)
            throw new common_1.BadRequestException('Stream comment not found');
        const commentLike = await this.streamCommentService.likeComment(data);
        if (user.id != findStreamComment.user_id &&
            (notificationSetting.find((x) => x.type == 'NOTIF_STREAM_LIKE')
                ?.is_enabled ??
                true)) {
            const notification = await this.notificationService.create({
                type: 'STREAM_COMMENT_LIKE',
                sender_id: 0,
                recipient_id: findStreamComment.user_id,
                title: 'Stream',
                body: `${user.username} telah memberi "like" pada komentar Anda: "${findStreamComment.content}"`,
                data: {
                    stream_id: findStream.id,
                    stream_comment_id: findStreamComment.id,
                    stream_comment_like_id: commentLike.id,
                    user_id: commentLike.user_id,
                },
            });
            this.queueFcm.add('sendNotificationToTopic', {
                topic: findStreamComment.user_id.toString(),
                title: notification.title,
                body: notification.body,
                data: {
                    type: notification.type,
                    stream_id: findStream.id,
                    stream_comment_id: findStreamComment.id,
                    stream_comment_like_id: commentLike.id,
                    user_id: commentLike.user_id,
                },
            });
        }
        const streamFollower = await this.streamService.findAllStreamFollower(findStream.id);
        await Promise.all(streamFollower
            .filter((x) => x.user_id != user.id)
            .map(async (item) => {
            if (item.user.notification_settings.find((x) => x.type == 'NOTIF_STREAM_FOLLOWED_POST')?.is_enabled ??
                true) {
                const notification = await this.notificationService.create({
                    type: 'STREAM_COMMENT_LIKE',
                    sender_id: 0,
                    recipient_id: item.user_id,
                    title: 'Stream',
                    body: `${user.username} telah memberi "like" pada sebuah komentar di postingan yang Anda ikuti: "${findStreamComment.content}"`,
                    data: {
                        stream_id: findStream.id,
                        stream_comment_id: findStreamComment.id,
                        stream_comment_like_id: commentLike.id,
                        user_id: commentLike.user_id,
                    },
                });
                this.queueFcm.add('sendNotificationToTopic', {
                    topic: item.user_id.toString(),
                    title: notification.title,
                    body: notification.body,
                    data: {
                        type: notification.type,
                        stream_id: findStream.id,
                        stream_comment_id: findStreamComment.id,
                        stream_comment_like_id: commentLike.id,
                        user_id: commentLike.user_id,
                    },
                });
                return notification;
            }
            return null;
        }));
        return commentLike;
    }
    async unlikeComment(user, data, id, comment_id) {
        data.user_id = user.id;
        data.stream_comment_id = comment_id;
        const findStream = await this.streamService.find(id);
        if (!findStream)
            throw new common_1.BadRequestException('Stream not found');
        if (findStream.visibility == 'CIRCLE') {
            this.isInCircle(findStream.user_id, user.id);
        }
        const findStreamComment = await this.streamCommentService.find(comment_id);
        if (!findStreamComment)
            throw new common_1.BadRequestException('Stream comment not found');
        return await this.streamCommentService.unlikeComment(data);
    }
    async likeCommentReply(user, data, id, commentId, commentReplyId) {
        data.user_id = user.id;
        data.stream_comment_id = commentId;
        data.stream_comment_reply_id = commentReplyId;
        const findStream = await this.streamService.find(id);
        if (!findStream)
            throw new common_1.BadRequestException('Stream not found');
        if (findStream.visibility == 'CIRCLE') {
            this.isInCircle(findStream.user_id, user.id);
        }
        const findStreamComment = await this.streamCommentService.find(commentId);
        if (!findStreamComment)
            throw new common_1.BadRequestException('Stream comment not found');
        const findStreamCommentReply = await this.streamCommentService.findReply(commentReplyId);
        if (!findStreamCommentReply)
            throw new common_1.BadRequestException('Stream comment reply not found');
        const commentReplyLike = await this.streamCommentService.likeCommentReply(data);
        const notificationSetting = await this.notificationService.findAllNotificationSetting(findStreamCommentReply.user_id);
        if (user.id != findStreamCommentReply.user_id &&
            (notificationSetting.find((x) => x.type == 'NOTIF_STREAM_LIKE')
                ?.is_enabled ??
                true)) {
            const notification = await this.notificationService.create({
                type: 'STREAM_COMMENT_REPLY_LIKE',
                sender_id: 0,
                recipient_id: findStreamCommentReply.user_id,
                title: 'Stream',
                body: `${user.username} telah memberi "like" pada komentar Anda: "${findStreamCommentReply.content}"`,
                data: {
                    stream_id: findStream.id,
                    stream_comment_id: findStreamCommentReply.stream_comment_id,
                    stream_comment_reply_id: findStreamCommentReply.id,
                    stream_comment_like_id: commentReplyLike.id,
                    user_id: commentReplyLike.user_id,
                },
            });
            this.queueFcm.add('sendNotificationToTopic', {
                topic: findStreamCommentReply.user_id.toString(),
                title: notification.title,
                body: notification.body,
                data: {
                    type: notification.type,
                    stream_id: findStream.id,
                    stream_comment_id: findStreamCommentReply.stream_comment_id,
                    stream_comment_reply_id: findStreamCommentReply.id,
                    stream_comment_like_id: commentReplyLike.id,
                    user_id: commentReplyLike.user_id,
                },
            });
        }
        const streamFollower = await this.streamService.findAllStreamFollower(findStream.id);
        await Promise.all(streamFollower
            .filter((x) => x.user_id != user.id)
            .map(async (item) => {
            if (item.user.notification_settings.find((x) => x.type == 'NOTIF_STREAM_FOLLOWED_POST')?.is_enabled ??
                true) {
                const notification = await this.notificationService.create({
                    type: 'STREAM_COMMENT_REPLY_LIKE',
                    sender_id: 0,
                    recipient_id: item.user_id,
                    title: 'Stream',
                    body: `${user.username} telah memberi "like" pada komentar di postingan yang Anda ikuti: "${findStreamCommentReply.content}"`,
                    data: {
                        stream_id: findStream.id,
                        stream_comment_id: findStreamCommentReply.stream_comment_id,
                        stream_comment_reply_id: findStreamCommentReply.id,
                        stream_comment_like_id: commentReplyLike.id,
                        user_id: commentReplyLike.user_id,
                    },
                });
                this.queueFcm.add('sendNotificationToTopic', {
                    topic: item.user_id.toString(),
                    title: notification.title,
                    body: notification.body,
                    data: {
                        type: notification.type,
                        stream_id: findStream.id,
                        stream_comment_id: findStreamCommentReply.stream_comment_id,
                        stream_comment_reply_id: findStreamCommentReply.id,
                        stream_comment_like_id: commentReplyLike.id,
                        user_id: commentReplyLike.user_id,
                    },
                });
                return notification;
            }
            return null;
        }));
        return commentReplyLike;
    }
    async unlikeCommentReply(user, data, id, commentId, commentReplyId) {
        data.user_id = user.id;
        data.stream_comment_id = commentId;
        data.stream_comment_reply_id = commentReplyId;
        const findStream = await this.streamService.find(id);
        if (!findStream)
            throw new common_1.BadRequestException('Stream not found');
        if (findStream.visibility == 'CIRCLE') {
            this.isInCircle(findStream.user_id, user.id);
        }
        const findStreamComment = await this.streamCommentService.find(commentId);
        if (!findStreamComment)
            throw new common_1.BadRequestException('Stream comment not found');
        const findStreamCommentReply = await this.streamCommentService.findReply(commentReplyId);
        if (!findStreamCommentReply)
            throw new common_1.BadRequestException('Stream comment reply not found');
        return await this.streamCommentService.unlikeCommentReply(data);
    }
};
__decorate([
    (0, common_1.Get)(':id/comments'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, page_options_comment_dto_1.PageOptionsCommentDto]),
    __metadata("design:returntype", Promise)
], StreamCommentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id/comment/:commentId/replies'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('commentId')),
    __param(3, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, Number, page_options_comment_reply_dto_1.PageOptionsCommentReplyDto]),
    __metadata("design:returntype", Promise)
], StreamCommentController.prototype, "findAllReply", null);
__decorate([
    (0, common_1.Post)(':id/comment'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        create_stream_comment_dto_1.CreateStreamCommentDto, Number]),
    __metadata("design:returntype", Promise)
], StreamCommentController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/comment/:commentId/reply'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id')),
    __param(3, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        create_stream_comment_reply_dto_1.CreateStreamCommentReplyDto, Number, Number]),
    __metadata("design:returntype", Promise)
], StreamCommentController.prototype, "createReply", null);
__decorate([
    (0, common_1.Delete)(':id/comment/:commentId'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, Number]),
    __metadata("design:returntype", Promise)
], StreamCommentController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)(':id/comment/:commentId/reply/:commentReplyId'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('commentId')),
    __param(3, (0, common_1.Param)('commentReplyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], StreamCommentController.prototype, "deleteReply", null);
__decorate([
    (0, common_1.Post)(':id/comment/:commentId/like'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id')),
    __param(3, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        like_unlike_stream_comment_dto_1.LikeUnlikeStreamCommentDto, Number, Number]),
    __metadata("design:returntype", Promise)
], StreamCommentController.prototype, "likeComment", null);
__decorate([
    (0, common_1.Post)(':id/comment/:commentId/unlike'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id')),
    __param(3, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        like_unlike_stream_comment_dto_1.LikeUnlikeStreamCommentDto, Number, Number]),
    __metadata("design:returntype", Promise)
], StreamCommentController.prototype, "unlikeComment", null);
__decorate([
    (0, common_1.Post)(':id/comment/:commentId/reply/:commentReplyId/like'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id')),
    __param(3, (0, common_1.Param)('commentId')),
    __param(4, (0, common_1.Param)('commentReplyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        like_unlike_stream_comment_reply_dto_1.LikeUnlikeStreamCommentReplyDto, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], StreamCommentController.prototype, "likeCommentReply", null);
__decorate([
    (0, common_1.Post)(':id/comment/:commentId/reply/:commentReplyId/unlike'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id')),
    __param(3, (0, common_1.Param)('commentId')),
    __param(4, (0, common_1.Param)('commentReplyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        like_unlike_stream_comment_reply_dto_1.LikeUnlikeStreamCommentReplyDto, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], StreamCommentController.prototype, "unlikeCommentReply", null);
StreamCommentController = __decorate([
    (0, roles_decorator_1.Roles)(enum_1.Role.Customer),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('stream'),
    __param(4, (0, bull_1.InjectQueue)('queueFcm')),
    __metadata("design:paramtypes", [stream_comment_service_1.StreamCommentService,
        stream_service_1.StreamService,
        notification_service_1.NotificationService,
        user_service_1.UserService, Object])
], StreamCommentController);
exports.StreamCommentController = StreamCommentController;
//# sourceMappingURL=stream-comment.controller.js.map
//# debugId=d0ae3bc6-a530-556c-b39d-1335cccd6fd5
