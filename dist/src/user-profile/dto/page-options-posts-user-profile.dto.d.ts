import { PageOptionsDto } from 'src/decorators/page-options.dto';
import { PostTypeUserProfile } from 'src/globals/constant/enum';
export declare class PageOptionsLPostsUserProfileDto extends PageOptionsDto {
    user_id: number;
    post_type: PostTypeUserProfile;
}
