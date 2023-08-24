import * as React from 'react';
import Link from 'next/link';

import { MainFeaturesItem } from '../../types';
import { siteConfig } from '../../config/site';
import { cn } from '../../lib/utils';
import { useLockBody } from '../../hooks/use-lock-body';
import { Icons } from '../icons';
import { HomeFeatureItem } from './home-feature-item';

type HomeFeaturesListProps = {
  items: MainFeaturesItem[];
  children?: React.ReactNode;
};

export function HomeFeaturesList({ items, children }: HomeFeaturesListProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
      {items.map((item) => (
        <HomeFeatureItem key={crypto.randomUUID()} {...item} />
      ))}
    </div>
  );
}
