import Link from 'next/link';

import { marketingConfig } from '../../config/marketing';
import { cn } from '../../lib/utils';
import { buttonVariants } from '@swipe-app/shared-ui';
import { MainNav } from '../../components/main-nav';
import { SiteFooter } from '../../components/site-footer';
import { ModeToggle } from '../../components/mode-toggle';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background fixed left-1/2 translate-x-[-50%]">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex items-center">
            <ModeToggle />
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'px-4 ml-4'
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
