import { Request } from 'express';
import { UserEntity } from 'src/users/entities/user.entity';
interface AppRequest extends Request {
    user: UserEntity;
}
export default AppRequest;
