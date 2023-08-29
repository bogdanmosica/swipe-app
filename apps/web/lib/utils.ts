import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { env } from '../env.mjs';

export const SWIPE_API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://swipe-app-production.up.railway.app/api'
    : 'http://localhost:3000/api';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}
