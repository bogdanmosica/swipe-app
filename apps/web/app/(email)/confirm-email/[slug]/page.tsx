'use client';
import Link from 'next/link';

import { SWIPE_API_URL, cn } from '../../../../lib/utils';
import { buttonVariants } from '@swipe-app/shared-ui';
import { Icons } from '../../../../components/icons';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'Confirm email',
};

export default function ConfirmEmailPage({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const { slug } = params;

  useEffect(() => {
    axios
      .post(`${SWIPE_API_URL}/auth/email/confirm`, {
        hash: slug,
      })
      .then((response) => {
        router.push('/');
      })
      .catch((respose) => {
        console.error(respose);
        router.push('/dashboard');
      });
  }, [slug, router]);

  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Confirm email
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Unlock features.
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Users
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Custom domain
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Dashboard Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Access to Discord
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Premium Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">$19</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Billed Monthly
            </p>
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: 'lg' }))}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          Swipe is a demo app.{' '}
          <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p>
      </div>
    </section>
  );
}
