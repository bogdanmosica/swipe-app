'use client';
import Link from 'next/link';

import { cn } from '../../../lib/utils';
import { buttonVariants } from '@swipe-app/shared-ui';
import useMainStoreContext from '../../../hooks/use-main-store-context';

export default function AlmostTherePage() {
  const { user } = useMainStoreContext();
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4">
        <h2 className="max-w-[85%] m-auto font-heading text-center text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          🎉Almost there!
        </h2>
      </div>
      <div className="flex-col justify-center items-center w-full gap-10 rounded-lg border p-10 text-center">
        <p className="max-w-[85%] m-auto mb-5 leading-normal sm:text-lg sm:leading-7">
          {`We've sent you an email at `}
          <strong>{user.email}</strong>
        </p>
        <p className="max-w-[85%] m-auto mb-5 leading-normal sm:text-lg sm:leading-7">
          Please follow the instructions in the email.
        </p>
        <Link
          href="/register"
          className={cn(buttonVariants({ size: 'lg' }), 'lg:w-1/3')}
        >
          Resend verification email
        </Link>
      </div>
    </section>
  );
}
