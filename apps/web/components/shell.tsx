import * as React from 'react';

import { cn } from '../lib/utils';

type DashboardShellProps = React.HTMLAttributes<HTMLDivElement>;

export function DashboardShell({
  children,
  className,
  ...props
}: DashboardShellProps) {
  return (
    <div
      className={cn('flex flex-col flex-wrap items-start gap-8', className)}
      {...props}
    >
      {children}
    </div>
  );
}
