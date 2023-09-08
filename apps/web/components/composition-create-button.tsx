'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { SWIPE_BACKEND_URL, cn } from '../lib/utils';
import { ButtonProps, buttonVariants } from '@swipe-app/shared-ui';
import { toast } from '@swipe-app/shared-ui';
import { Icons } from './icons';
import axios from 'axios';
import useMainStoreContext from '../hooks/use-main-store-context';

type CompositionCreateButtonProps = ButtonProps;

export function CompositionCreateButton({
  className,
  variant,
  ...props
}: CompositionCreateButtonProps) {
  const router = useRouter();
  const { user } = useMainStoreContext();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onClick() {
    setIsLoading(true);

    const response = await axios.post(
      `${SWIPE_BACKEND_URL}/abstract-compositions`,
      { title: '', description: '', user: user.id },
      { withCredentials: true }
    );

    setIsLoading(false);

    if (!response) {
      if (response) {
        return toast({
          title: 'Limit of 3 posts reached.',
          description: 'Please upgrade to the PRO plan.',
          variant: 'destructive',
        });
      }

      return toast({
        title: 'Something went wrong.',
        description: 'Your post was not created. Please try again.',
        variant: 'destructive',
      });
    }

    const composition = await response.data;

    // This forces a cache invalidation.
    router.refresh();

    router.push(`/editor/${composition.id}`);
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant }),
        {
          'cursor-not-allowed opacity-60': isLoading,
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      New composition
    </button>
  );
}
