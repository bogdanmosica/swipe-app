import * as React from 'react';
import Link from 'next/link';

import { MainTestimonialsItem } from '../../types';
import { HomeTestimonialsItem } from './home-testimonials-item';

type HomeFeaturesListProps = {
  items: MainTestimonialsItem[];
  children?: React.ReactNode;
};

export function HomeTestimonialsList({
  items,
  children,
}: HomeFeaturesListProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
      {items.map((item) => (
        <HomeTestimonialsItem key={crypto.randomUUID()} {...item} />
      ))}
    </div>
  );
}
