'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@swipe-app/shared-ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@swipe-app/shared-ui';

import { Icons } from '../components/icons';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-fit">
        <div className="grid gap-4">
          <Button
            variant="ghost"
            className="h-8 w-full flex items-center justify-start"
            onClick={() => setTheme('light')}
          >
            <Icons.sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </Button>
          <Button
            variant="ghost"
            className="h-8 w-full flex items-center justify-start"
            onClick={() => setTheme('dark')}
          >
            <Icons.moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </Button>
          <Button
            variant="ghost"
            className="h-8 w-full flex items-center justify-start"
            onClick={() => setTheme('system')}
          >
            <Icons.laptop className="mr-2 h-4 w-4" />
            <span>System</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
