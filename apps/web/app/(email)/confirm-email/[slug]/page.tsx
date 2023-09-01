'use client';
import Link from 'next/link';

import { SWIPE_API_URL, cn } from '../../../../lib/utils';
import { buttonVariants } from '@swipe-app/shared-ui';
import { Icons } from '../../../../components/icons';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const metadata = {
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
        router.push('/login');
      })
      .catch((respose) => {
        console.error(respose);
        router.push('/');
      });
  }, [slug, router]);

  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="grid w-full items-start gap-10 rounded-lg border p-10">
        <div className="grid gap-6">
          <h3 className="text-xl text-center m-auto font-bold sm:text-2xl before:animate-emoji-change">
            🔥BOOM! Account activated.
          </h3>
          <h3 className="text-xl text-center m-auto font-bold sm:text-2xl before:animate-emoji-change">
            {"Let's"} make video magic together. 🚀
          </h3>
          <p className="max-w-[85%] text-center flex items-center m-auto leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            Going to login page...
          </p>
        </div>
      </div>
    </section>
  );
}
