'use client';
import Link from 'next/link';
import useMainStoreContext from '../hooks/use-main-store-context';
import { cn } from '../lib/utils';
import { buttonVariants } from '@swipe-app/shared-ui';
import { UserAccountNav } from './user-account-nav';

/* eslint-disable-next-line */
export interface LoginAvatarBtnProps {
  children?: React.ReactNode;
}

export function LoginAvatarBtn({ children }: LoginAvatarBtnProps) {
  const { isUserAuthenticated } = useMainStoreContext();
  //console.log(isUserAuthenticated);
  return (
    <>
      {!isUserAuthenticated ? (
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: 'secondary', size: 'sm' }),
            'px-4 ml-4'
          )}
        >
          Login
        </Link>
      ) : (
        <UserAccountNav />
      )}
    </>
  );
}

export default LoginAvatarBtn;
