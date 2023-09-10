import { ReactNode } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@swipe-app/shared-ui';
import { Button } from '@swipe-app/shared-ui';
import { cn } from '@swipe-app/shared-ui';

/* eslint-disable-next-line */
export interface NavigationMenuItemProps {
  triggerButton?: ReactNode;
  children?: ReactNode;
  className?: string;
  iconButton?: ReactNode;
}

export function NavigationMenuItem({
  children,
  triggerButton = '',
  iconButton,
  className,
}: NavigationMenuItemProps) {
  return (
    <Popover>
      <PopoverTrigger asChild className={cn('w-1/6', className)}>
        <Button size="default" variant="default" className="flex-col">
          {Boolean(iconButton) && iconButton}
          {Boolean(triggerButton) && triggerButton}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full" side={'top'}>
        {children}
      </PopoverContent>
    </Popover>
  );
}

export default NavigationMenuItem;
