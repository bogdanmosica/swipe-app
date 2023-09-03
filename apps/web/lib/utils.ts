import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const SWIPE_API_URL =
  process.env.NODE_ENV === 'production' && process.env.BACKEND_URL
    ? process.env.BACKEND_URL
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
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
