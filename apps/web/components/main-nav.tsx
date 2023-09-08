'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { MainNavItem } from '../types';
import { siteConfig } from '../config/site';
import { cn } from '../lib/utils';
import { Icons } from '../components/icons';
import { MobileNav } from '../components/mobile-nav';
import useMainStoreContext from '../hooks/use-main-store-context';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  backBtn?: React.ReactNode;
  className?: string;
}

export function MainNav({ className, items, children, backBtn }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const { isUserAuthenticated } = useMainStoreContext();

  return (
    <div className={cn('flex gap-6 md:gap-10', className)}>
      {backBtn ? backBtn : null}
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.circleChevronRight />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                item.href.startsWith(`/${segment}`)
                  ? 'text-foreground'
                  : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80',
                item.needAuth && !isUserAuthenticated && 'hidden'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.circleChevronRight />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
