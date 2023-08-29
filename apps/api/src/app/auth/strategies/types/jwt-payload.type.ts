import { Session } from '../../../session/entities/session.entity';
import { User } from '../../../users/entities/user.entity';

export type JwtPayloadType = Pick<User, 'id' | 'role'> & {
  sessionId: Session['id'];
  iat: number;
  exp: number;
};
