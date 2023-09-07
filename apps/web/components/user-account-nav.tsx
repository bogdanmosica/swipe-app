'use client';

import Link from 'next/link';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
  buttonVariants,
} from '@swipe-app/shared-ui';
import { UserAvatar } from '../components/user-avatar';
import { signOut } from '../lib/session';
import useMainStoreContext from '../hooks/use-main-store-context';
import { cn } from '../lib/utils';

export function UserAccountNav() {
  const { setIsUserAuthenticated, user } = useMainStoreContext();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            buttonVariants({ variant: 'secondary', size: 'sm' }),
            'px-2 ml-4 rounded-full'
          )}
        >
          <UserAvatar
            user={{
              name: `${user.firstName} ${user.lastName}`,
              photo: user.photo,
            }}
            className="h-8 w-8"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-fit">
        <div className="min-w-36 w-auto grid gap-4">
          {((user.firstName && user.lastName) || user.email) && (
            <>
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  {user.firstName && user.lastName && (
                    <p className="font-medium mb-1">{`${user.firstName} ${user.lastName}`}</p>
                  )}
                  {user.email && (
                    <p
                      className="truncate text-sm text-muted-foreground"
                      title={user.email}
                    >
                      {user.email}
                    </p>
                  )}
                </div>
              </div>
              <Separator />
            </>
          )}
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/billing">Billing</Link>
          <Link href="/dashboard/settings">Settings</Link>
          <Separator />
          <Button
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'px-4 ml-4 w-full m-auto'
            )}
            onClick={(event) => {
              event.preventDefault();
              setIsUserAuthenticated(false);
              signOut();
            }}
          >
            Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
