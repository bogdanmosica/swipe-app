import { AvatarProps } from '@radix-ui/react-avatar';

import { Avatar, AvatarFallback, AvatarImage } from '@swipe-app/shared-ui';
import { Icons } from '../components/icons';
import { UserState } from '../contexts/main-store';

interface UserAvatarProps extends AvatarProps {
  user: Pick<UserState, 'photo' | 'name'>;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.photo ? (
        <AvatarImage alt="Picture" src={user.photo} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <Icons.user className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
