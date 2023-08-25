'use client';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

import './global.css';
import { siteConfig } from '../config/site';
import { cn, Toaster } from '@swipe-app/shared-ui';
import { Analytics } from '../components/analytics';
import { TailwindIndicator } from '../components/tailwind-indicator';
import { ThemeProvider } from '../components/theme-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
