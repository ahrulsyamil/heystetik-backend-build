import { Prisma } from '@prisma/client';
import { PageDto } from 'src/decorators/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStreamCommentReplyDto } from './dto/create-stream-comment-reply.dto';
import { CreateStreamCommentDto } from './dto/create-stream-comment.dto';
import { LikeUnlikeStreamCommentReplyDto } from './dto/like-unlike-stream-comment-reply.dto';
import { LikeUnlikeStreamCommentDto } from './dto/like-unlike-stream-comment.dto';
import { PageOptionsCommentReplyDto } from './dto/page-options-comment-reply.dto';
import { PageOptionsCommentDto } from './dto/page-options-comment.dto';
export declare class StreamCommentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllByStream(stream_id: number, pageOptionsDto: PageOptionsCommentDto): Promise<PageDto<import(".prisma/client").stream_comment & {
        stream_comment_mentions: import(".prisma/client").stream_comment_mention[];
        user: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        _count: {
            stream_comment_likes: number;
            stream_comment_replies: number;
        };
    }>>;
    findAllByStreamComment(stream_id: number, stream_comment_id: number, pageOptionsDto: PageOptionsCommentReplyDto): Promise<PageDto<import(".prisma/client").stream_comment_reply & {
        stream_comment_reply_mentions: import(".prisma/client").stream_comment_reply_mention[];
        user: import(".prisma/client").users & {
            media_user_profile_picture: import(".prisma/client").media_user_profile_picture & {
                media: import(".prisma/client").media;
            };
        };
        _count: {
            stream_comment_reply_likes: number;
        };
    }>>;
    create(data: CreateStreamCommentDto): Promise<import(".prisma/client").stream_comment>;
    createReply(data: CreateStreamCommentReplyDto): Promise<import(".prisma/client").stream_comment_reply>;
    find(id: number): Promise<import(".prisma/client").stream_comment>;
    findBy(where: Prisma.stream_commentWhereInput): Promise<import(".prisma/client").stream_comment>;
    findLikeBy(where: Prisma.stream_comment_likeWhereInput): Promise<import(".prisma/client").stream_comment_like>;
    findReply(id: number): Promise<import(".prisma/client").stream_comment_reply>;
    findReplyBy(where: Prisma.stream_comment_replyWhereInput): Promise<import(".prisma/client").stream_comment_reply>;
    findReplyLikeBy(where: Prisma.stream_comment_reply_likeWhereInput): Promise<import(".prisma/client").stream_comment_reply_like>;
    deleteComment(id: number): Promise<import(".prisma/client").stream_comment>;
    deleteReplyComment(id: number): Promise<import(".prisma/client").stream_comment_reply>;
    likeComment(data: LikeUnlikeStreamCommentDto): Promise<import(".prisma/client").stream_comment_like>;
    unlikeComment(data: LikeUnlikeStreamCommentDto): Promise<import(".prisma/client").stream_comment_like>;
    likeCommentReply(data: LikeUnlikeStreamCommentReplyDto): Promise<import(".prisma/client").stream_comment_reply_like>;
    unlikeCommentReply(data: LikeUnlikeStreamCommentReplyDto): Promise<import(".prisma/client").stream_comment_reply_like>;
}
