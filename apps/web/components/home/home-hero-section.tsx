import { buttonVariants } from '@swipe-app/shared-ui';
import Link from 'next/link';
import { siteConfig } from '../../config/site';
import { cn } from '../../lib/utils';

import './home-hero-section.css';

export function HomeHeroSection() {
  return (
    <section className="space-y-6 pb-8 pt-9 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link
          href={siteConfig.links.twitter}
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          target="_blank"
        >
          Follow along on Twitter
        </Link>
        <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl">
          Revolutionize video creation with Swipe
          <div className="important_word text-[#c10528] mb-5 font-bold" />
        </h1>
        <div className="space-x-4 mt-4 w-full">
          <Link
            href="/login"
            className={cn('w-2/6', buttonVariants({ variant: 'default' }))}
          >
            Get Started
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
