"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f45f8fb5-355c-5076-8913-14fc07d592c3")}catch(e){}}();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const page_meta_dto_1 = require("../decorators/page-meta.dto");
const page_dto_1 = require("../decorators/page.dto");
const prisma_service_1 = require("../prisma/prisma.service");
let StreamService = class StreamService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllHomeOld(pageOptionsDto) {
        const where = {
            visibility: 'PUBLIC',
            user: {
                user_blocks: {
                    none: {
                        blocked_user_id: pageOptionsDto.user_id,
                    },
                },
            },
        };
        if (pageOptionsDto.search) {
            where.OR = [
                {
                    content: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    stream_hastags: {
                        some: {
                            hashtag: {
                                tag: {
                                    contains: pageOptionsDto.search,
                                    mode: 'insensitive',
                                },
                            },
                        },
                    },
                },
            ];
        }
        const data = await this.prisma.stream.findMany({
            where: {
                ...where,
            },
            include: {
                stream_hastags: {
                    include: {
                        hashtag: true,
                    },
                },
                stream_mentions: true,
                stream_poll: {
                    include: {
                        stream_poll_options: true,
                        stream_pollings: true,
                    },
                },
                media_streams: {
                    include: {
                        media: true,
                    },
                },
                user: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        stream_saves: true,
                        stream_comments: true,
                        stream_likes: true,
                        stream_comment_replies: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            take: pageOptionsDto.take,
            skip: pageOptionsDto.skip,
        });
        const countAll = await this.prisma.stream.count({
            where: {
                ...where,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllHome(pageOptionsDto) {
        let whereQuery = 'AND s.deleted_at IS NULL';
        if (pageOptionsDto.search) {
            whereQuery = `${whereQuery} AND ((LOWER(s.content) LIKE LOWER('%${pageOptionsDto.search}%')) OR (
        SELECT COUNT(*) FROM stream_hashtag sh
        INNER JOIN hashtag_stream hs ON hs.id = sh.hashtag_id
        WHERE LOWER(hs.tag) LIKE LOWER('%${pageOptionsDto.search}%')
      ) > 0)`;
        }
        const query = `
      SELECT
        s.*
      FROM
        stream s
      WHERE 
        (
          SELECT 
            COUNT(*)
          FROM 
            user_block
          WHERE
           (
              user_id = s.user_id
              AND blocked_user_id = ${pageOptionsDto.user_id} 
           )
           OR
           (
             user_id = ${pageOptionsDto.user_id}
             AND blocked_user_id = s.user_id
           )
        ) = 0
        AND 
        (
          (
            CASE
              WHEN visibility = 'CIRCLE'
                THEN
                  (
                    SELECT 
                      COUNT(*)
                    FROM 
                      user_follower
                    WHERE 
                      user_id = s.user_id
                      AND follower_id = ${pageOptionsDto.user_id}
                  ) > 0
              WHEN visibility = 'MENTION'
                THEN
                  (
                    SELECT 
                      COUNT(*) 
                    FROM 
                      stream_mention
                    WHERE 
                      stream_id = s.id 
                      AND username = '${pageOptionsDto.username}'
                  ) > 0
              WHEN visibility = 'PRIVATE'
                THEN 
                  s.user_id = ${pageOptionsDto.user_id}
              ELSE TRUE
            END
          ) OR s.user_id = ${pageOptionsDto.user_id}
        )
      ${whereQuery}
      ORDER BY s.id ${pageOptionsDto.order}
    `;
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          ${query}
          LIMIT ${pageOptionsDto.take}
          OFFSET ${pageOptionsDto.skip}
        `));
        });
        const countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT COUNT(*) FROM (
            ${query}
          ) COUNT
        `));
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll[0].count,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllTrending(pageOptionsDto) {
        let whereQuery = 'AND s.deleted_at IS NULL';
        if (pageOptionsDto.search) {
            whereQuery = `${whereQuery} AND ((LOWER(s.content) LIKE LOWER('%${pageOptionsDto.search}%')) OR (
        SELECT COUNT(*) FROM stream_hashtag sh
        INNER JOIN hashtag_stream hs ON hs.id = sh.hashtag_id
        WHERE LOWER(hs.tag) LIKE LOWER('%${pageOptionsDto.search}%')
      ) > 0)`;
        }
        const query = `
      SELECT
        s.*
      FROM
        stream s
      LEFT JOIN (
        SELECT stream_id, COUNT(*) AS likes_count
        FROM stream_like
        WHERE created_at >= NOW() - INTERVAL '1 days'
        GROUP BY stream_id
      ) l ON s.id = l.stream_id
      LEFT JOIN (
        SELECT stream_id, COUNT(*) AS comments_count
        FROM stream_comment
        WHERE created_at >= NOW() - INTERVAL '1 days'
        GROUP BY stream_id
      ) c ON s.id = c.stream_id
      LEFT JOIN (
        SELECT c.stream_id, COUNT(*) AS comment_replies_count
        FROM stream_comment c
        JOIN stream_comment_reply r ON c.id = r.stream_comment_id
        WHERE r.created_at >= NOW() - INTERVAL '1 days'
        GROUP BY c.stream_id
      ) r ON s.id = r.stream_id
      LEFT JOIN (
        SELECT stream_id, COUNT(*) AS saves_count
        FROM stream_save
        WHERE created_at >= NOW() - INTERVAL '1 days'
        GROUP BY stream_id
      ) sa ON s.id = sa.stream_id
      WHERE s.visibility = 'PUBLIC'
      AND (
        SELECT 
          COUNT(*)
        FROM 
          user_block
        WHERE
          (
            user_id = s.user_id
            AND blocked_user_id = ${pageOptionsDto.user_id} 
          )
          OR
          (
            user_id = ${pageOptionsDto.user_id}
            AND blocked_user_id = s.user_id
          )
      ) = 0
      ${whereQuery}
      ORDER BY
        (l.likes_count + c.comments_count + r.comment_replies_count + sa.saves_count) DESC
    `;
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          ${query}
          LIMIT ${pageOptionsDto.take}
          OFFSET ${pageOptionsDto.skip}
        `));
        });
        const countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT COUNT(*) FROM (
            ${query}
          ) COUNT
        `));
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll[0].count,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllFollowedOld(pageOptionsDto) {
        const where = {
            user_id: {
                not: pageOptionsDto.user_id,
            },
            user: {
                user_follower: {
                    some: {
                        follower_id: pageOptionsDto.user_id,
                    },
                },
                user_blocks: {
                    none: {
                        blocked_user_id: pageOptionsDto.user_id,
                    },
                },
            },
        };
        if (pageOptionsDto.search) {
            where.OR = [
                {
                    content: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    stream_hastags: {
                        some: {
                            hashtag: {
                                tag: {
                                    contains: pageOptionsDto.search,
                                    mode: 'insensitive',
                                },
                            },
                        },
                    },
                },
            ];
        }
        const data = await this.prisma.stream.findMany({
            where,
            include: {
                stream_hastags: {
                    include: {
                        hashtag: true,
                    },
                },
                stream_mentions: true,
                stream_poll: {
                    include: {
                        stream_poll_options: true,
                        stream_pollings: true,
                    },
                },
                media_streams: {
                    include: {
                        media: true,
                    },
                },
                user: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        stream_saves: true,
                        stream_comments: true,
                        stream_likes: true,
                        stream_comment_replies: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            take: pageOptionsDto.take,
            skip: pageOptionsDto.skip,
        });
        const countAll = await this.prisma.stream.count({
            where: {
                ...where,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllFollowed(pageOptionsDto) {
        let whereQuery = `AND s.deleted_at IS NULL AND s.user_id <> ${pageOptionsDto.user_id}`;
        if (pageOptionsDto.search) {
            whereQuery = `${whereQuery} AND ((LOWER(s.content) LIKE LOWER('%${pageOptionsDto.search}%')) OR (
        SELECT COUNT(*) FROM stream_hashtag sh
        INNER JOIN hashtag_stream hs ON hs.id = sh.hashtag_id
        WHERE LOWER(hs.tag) LIKE LOWER('%${pageOptionsDto.search}%')
      ) > 0)`;
        }
        const query = `
      SELECT
        s.*
      FROM
        stream s
      WHERE 
        (
          SELECT 
            COUNT(*)
          FROM 
            user_block
          WHERE
           (
              user_id = s.user_id
              AND blocked_user_id = ${pageOptionsDto.user_id} 
           )
           OR
           (
             user_id = ${pageOptionsDto.user_id}
             AND blocked_user_id = s.user_id
           )
        ) = 0
        AND (
          SELECT 
            COUNT(*)
          FROM 
            user_follower
          WHERE 
            user_id = s.user_id
            AND follower_id = ${pageOptionsDto.user_id}
        ) > 0
        AND 
        (
          (
            CASE
              WHEN visibility = 'CIRCLE'
                THEN
                  TRUE
              WHEN visibility = 'MENTION'
                THEN
                  (
                    SELECT 
                      COUNT(*) 
                    FROM 
                      stream_mention
                    WHERE 
                      stream_id = s.id 
                      AND username = '${pageOptionsDto.username}'
                  ) > 0
              WHEN visibility = 'PRIVATE'
                THEN 
                  s.user_id = ${pageOptionsDto.user_id}
              ELSE TRUE
            END
          ) OR s.user_id = ${pageOptionsDto.user_id}
        )
      ${whereQuery}
      ORDER BY s.id ${pageOptionsDto.order}
    `;
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          ${query}
          LIMIT ${pageOptionsDto.take}
          OFFSET ${pageOptionsDto.skip}
        `));
        });
        const countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT COUNT(*) FROM (
            ${query}
          ) COUNT
        `));
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll[0].count,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllInterest(pageOptionsDto) {
        const where = {
            visibility: 'PUBLIC',
            user_id: {
                not: pageOptionsDto.user_id,
            },
            user: {
                user_blocks: {
                    none: {
                        blocked_user_id: pageOptionsDto.user_id,
                    },
                },
            },
            OR: [
                {
                    stream_hastags: {
                        some: {
                            hashtag: {
                                tag: {
                                    in: [
                                        ...pageOptionsDto.interest_face_corrective_skin_goals,
                                        ...pageOptionsDto.interest_body_corrective_skin_goals,
                                        ...pageOptionsDto.interest_augmentation_skin_goals,
                                        ...pageOptionsDto.interest_sexually_and_skin_diseases_skin_goals,
                                    ],
                                    mode: 'insensitive',
                                },
                            },
                        },
                    },
                },
                {
                    OR: [
                        ...pageOptionsDto.interest_face_corrective_skin_goals,
                        ...pageOptionsDto.interest_body_corrective_skin_goals,
                        ...pageOptionsDto.interest_augmentation_skin_goals,
                        ...pageOptionsDto.interest_sexually_and_skin_diseases_skin_goals,
                    ].map((interest) => ({
                        content: {
                            contains: interest,
                            mode: 'insensitive',
                        },
                    })),
                },
            ],
        };
        if (pageOptionsDto.search) {
            where.OR = [
                {
                    content: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    stream_hastags: {
                        some: {
                            hashtag: {
                                tag: {
                                    contains: pageOptionsDto.search,
                                    mode: 'insensitive',
                                },
                            },
                        },
                    },
                },
            ];
        }
        const data = await this.prisma.stream.findMany({
            where: {
                ...where,
            },
            include: {
                stream_hastags: {
                    include: {
                        hashtag: true,
                    },
                },
                stream_mentions: true,
                stream_poll: {
                    include: {
                        stream_poll_options: true,
                        stream_pollings: true,
                    },
                },
                media_streams: {
                    include: {
                        media: true,
                    },
                },
                user: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        stream_saves: true,
                        stream_comments: true,
                        stream_likes: true,
                        stream_comment_replies: true,
                    },
                },
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            take: pageOptionsDto.take,
            skip: pageOptionsDto.skip,
        });
        const countAll = await this.prisma.stream.count({
            where: {
                ...where,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async create(data, media) {
        const stream = await this.prisma.stream.create({
            data: {
                user_id: data.user_id,
                content: data.content,
                visibility: data.visibility,
                media_streams: {
                    create: media,
                },
                stream_mentions: {
                    create: data.mentions,
                },
            },
        });
        if (data.hashtags && data.hashtags.length > 0) {
            for (const tag of data.hashtags) {
                const hashtag = await this.prisma.hashtag_stream.findUnique({
                    where: {
                        tag,
                    },
                });
                if (hashtag) {
                    await this.prisma.stream_hashtag.create({
                        data: {
                            stream_id: stream.id,
                            hashtag_id: hashtag.id,
                        },
                    });
                }
                else {
                    const newHashtag = await this.prisma.hashtag_stream.create({
                        data: {
                            tag,
                        },
                    });
                    await this.prisma.stream_hashtag.create({
                        data: {
                            stream_id: stream.id,
                            hashtag_id: newHashtag.id,
                        },
                    });
                }
            }
        }
        return stream;
    }
    async find(stream_id) {
        return await this.prisma.stream.findUnique({
            where: {
                id: stream_id,
            },
            include: {
                stream_hastags: {
                    include: {
                        hashtag: true,
                    },
                },
                stream_mentions: true,
                stream_poll: {
                    include: {
                        stream_poll_options: true,
                        stream_pollings: true,
                    },
                },
                media_streams: {
                    include: {
                        media: true,
                    },
                },
                user: {
                    include: {
                        media_user_profile_picture: {
                            include: {
                                media: true,
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        stream_saves: true,
                        stream_comments: true,
                        stream_likes: true,
                        stream_comment_replies: true,
                    },
                },
            },
        });
    }
    async findBy(where) {
        return this.prisma.stream.findFirst({
            where,
        });
    }
    async createStreamPoll(stream_id, data) {
        return await this.prisma.stream_poll.create({
            data: {
                stream_id,
                end_time: new Date(data.end_time),
                stream_poll_options: {
                    create: data.options.map((option) => {
                        return {
                            option,
                        };
                    }),
                },
            },
        });
    }
    async streamPolling(data) {
        return await this.prisma.stream_polling.upsert({
            where: {
                stream_poll_id_stream_poll_option_id_user_id: {
                    stream_poll_id: data.stream_poll_id,
                    stream_poll_option_id: data.stream_poll_option_id,
                    user_id: data.user_id,
                },
            },
            create: {
                user_id: data.user_id,
                stream_poll_id: data.stream_poll_id,
                stream_poll_option_id: data.stream_poll_option_id,
            },
            update: {
                stream_poll_id: data.stream_poll_id,
                stream_poll_option_id: data.stream_poll_option_id,
            },
        });
    }
    async findStreamPoll(id) {
        return await this.prisma.stream_poll.findUnique({
            where: {
                id,
            },
        });
    }
    async findStreamPollBy(where) {
        return await this.prisma.stream_poll.findFirst({
            where,
        });
    }
    async findUserInCircle(streamer_id, user_id) {
        return await this.prisma.user_follower.findMany({
            where: {
                OR: [
                    {
                        AND: [
                            {
                                user_id: streamer_id,
                            },
                            {
                                follower_id: user_id,
                            },
                        ],
                    },
                    {
                        AND: [
                            {
                                user_id,
                            },
                            {
                                follower_id: streamer_id,
                            },
                        ],
                    },
                ],
            },
        });
    }
    async deletePolling(data) {
        return await this.prisma.stream_polling.delete({
            where: {
                stream_poll_id_stream_poll_option_id_user_id: {
                    stream_poll_id: data.stream_poll_id,
                    stream_poll_option_id: data.stream_poll_option_id,
                    user_id: data.user_id,
                },
            },
        });
    }
    async findStreamPollingBy(where) {
        return await this.prisma.stream_polling.findFirst({
            where,
        });
    }
    async findStreamPolling(data) {
        return await this.prisma.stream_polling.findUnique({
            where: {
                stream_poll_id_stream_poll_option_id_user_id: {
                    stream_poll_id: data.stream_poll_id,
                    stream_poll_option_id: data.stream_poll_option_id,
                    user_id: data.user_id,
                },
            },
        });
    }
    async findAllMention(pageOptionsDto) {
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT
            U.id,
            U.fullname, 
            U.username,
            (SELECT COUNT(*) FROM user_follower WHERE user_id = U.id) AS total_follower,
            (CASE WHEN (SELECT COUNT(*) FROM user_follower WHERE user_id = U.id AND follower_id = ${pageOptionsDto.user_id}) = 0 THEN 0 ELSE 1 END) AS is_following,
            (CASE WHEN (SELECT COUNT(*) FROM user_follower WHERE user_id = ${pageOptionsDto.user_id} AND follower_id = U.id) = 0 THEN 0 ELSE 1 END) AS is_follower
          FROM users U
          WHERE
            "roleId" = 3
            AND id <> ${pageOptionsDto.user_id}
            AND is_active = true
            AND finish_register = true
            AND (SELECT id FROM user_block WHERE user_id = U.id AND blocked_user_id = ${pageOptionsDto.user_id}) IS NULL
            AND (fullname LIKE '%${pageOptionsDto.search}%' OR username LIKE '%${pageOptionsDto.search}%')
          LIMIT ${pageOptionsDto.take}
          OFFSET ${pageOptionsDto.skip}
        `));
        });
        const countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT
            COUNT(*)
          FROM users U
          WHERE
            "roleId" = 3
            AND id <> ${pageOptionsDto.user_id}
            AND is_active = true
            AND finish_register = true
            AND (SELECT id FROM user_block WHERE user_id = U.id AND blocked_user_id = ${pageOptionsDto.user_id}) IS NULL
            AND (fullname LIKE '%${pageOptionsDto.search}%' OR username LIKE '%${pageOptionsDto.search}%')
        `));
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll[0].count,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async delete(id) {
        return await this.prisma.stream.delete({
            where: {
                id,
            },
        });
    }
    async findAllRecentFile(pageOptionsDto) {
        const where = {
            stream: {
                user_id: pageOptionsDto.user_id,
                deleted_at: null,
            },
            deleted_at: null,
        };
        const data = await this.prisma.media_stream.findMany({
            where,
            include: {
                media: true,
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            take: pageOptionsDto.take,
            skip: pageOptionsDto.skip,
        });
        const countAll = await this.prisma.media_stream.count({
            where,
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllSuggestionHashtag(pageOptionsDto) {
        let whereQuery = ``;
        if (pageOptionsDto.search)
            whereQuery = `WHERE LOWER(hs.tag) LIKE LOWER('%${pageOptionsDto.search}%')`;
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT
            hs.tag,
            COUNT(hs.tag)
          FROM
            stream_hashtag sh 
          INNER JOIN
            hashtag_stream hs on hs.id = sh.hashtag_id
          ${whereQuery}
          GROUP BY
            hs.tag
          LIMIT ${pageOptionsDto.take}
          OFFSET ${pageOptionsDto.skip}
        `));
        });
        const countAll = (await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT
            COUNT(*)
          FROM
            stream_hashtag sh 
          INNER JOIN
            hashtag_stream hs on hs.id = sh.hashtag_id
          ${whereQuery}
          GROUP BY
            hs.tag
        `));
        }));
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll.length > 0 ? countAll[0].count : 0,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllStreamHashtagByTag(hashtag, pageOptionsDto) {
        const query = `
      SELECT
        s.*
      FROM
        stream s
      WHERE 
        (
          SELECT 
            COUNT(*)
          FROM 
            user_block
          WHERE
           user_id = s.user_id
           AND blocked_user_id = ${pageOptionsDto.user_id} 
        ) = 0
        AND 
        (
          (
            CASE
              WHEN visibility = 'CIRCLE'
                THEN
                  (
                    SELECT 
                      COUNT(*)
                    FROM 
                      user_follower
                    WHERE 
                      user_id = s.user_id
                      AND follower_id = ${pageOptionsDto.user_id}
                  ) > 0
              WHEN visibility = 'MENTION'
                THEN
                  (
                    SELECT 
                      COUNT(*) 
                    FROM 
                      stream_mention
                    WHERE 
                      stream_id = s.id 
                      AND username = '${pageOptionsDto.username}'
                  ) > 0
              WHEN visibility = 'PRIVATE'
                THEN 
                  s.user_id = ${pageOptionsDto.user_id}
              ELSE TRUE
            END
          ) OR s.user_id = ${pageOptionsDto.user_id}
        )
      AND (
        SELECT  
          COUNT(*)  
        FROM 
          stream_hashtag sh
        INNER JOIN
          hashtag_stream hs
        ON hs.id = sh.hashtag_id
        WHERE
          sh.stream_id = s.id
          AND hs.tag = '${hashtag}'
      ) > 0
      AND s.deleted_at IS NULL
      ORDER BY s.id ${pageOptionsDto.order}
    `;
        const data = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          ${query}
          LIMIT ${pageOptionsDto.take}
          OFFSET ${pageOptionsDto.skip}
        `));
        });
        const countAll = await this.prisma.$transaction(async (transaction) => {
            return await transaction.$queryRaw(client_1.Prisma.raw(`
          SELECT COUNT(*) FROM (
            ${query}
          ) COUNT
        `));
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll[0].count,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async findAllReportStream(pageOptionsDto) {
        const where = {
            parent_id: null,
            deleted_at: null,
        };
        if (pageOptionsDto.parent_id) {
            where.parent_id = pageOptionsDto.parent_id;
        }
        if (pageOptionsDto.search) {
            where.OR = [
                {
                    name: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
                {
                    description: {
                        contains: pageOptionsDto.search,
                        mode: 'insensitive',
                    },
                },
            ];
        }
        const data = await this.prisma.report_reason.findMany({
            include: {
                parent: true,
                sub_reports: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                    },
                },
                _count: {
                    select: {
                        sub_reports: true,
                    },
                },
            },
            where: {
                ...where,
            },
            orderBy: {
                id: pageOptionsDto.order,
            },
            take: pageOptionsDto.take,
            skip: pageOptionsDto.skip,
        });
        const countAll = await this.prisma.report_reason.count({
            where: {
                ...where,
                deleted_at: null,
            },
        });
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({
            itemCount: countAll,
            pageOptionsDto,
        });
        return new page_dto_1.PageDto(data, pageMetaDto);
    }
    async createReportStream(data) {
        return this.prisma.stream_report.create({
            data,
        });
    }
    async createStreamFollower(data) {
        return this.prisma.stream_follower.upsert({
            where: {
                stream_id_user_id: data,
            },
            update: data,
            create: data,
        });
    }
    async findAllStreamFollower(stream_id) {
        return this.prisma.stream_follower.findMany({
            include: {
                user: {
                    include: {
                        notification_settings: true,
                    },
                },
            },
            where: {
                stream_id,
            },
        });
    }
    async findStreamFollower(id) {
        return this.prisma.stream_follower.findUnique({
            include: {
                stream: true,
                user: true,
            },
            where: {
                id,
            },
        });
    }
    async findStreamFollowerBy(where) {
        return this.prisma.stream_follower.findFirst({
            where,
        });
    }
    async deleteStreamFollower(id) {
        return this.prisma.stream_follower.delete({
            where: {
                id,
            },
        });
    }
};
StreamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StreamService);
exports.StreamService = StreamService;
//# sourceMappingURL=stream.service.js.map
//# debugId=f45f8fb5-355c-5076-8913-14fc07d592c3
