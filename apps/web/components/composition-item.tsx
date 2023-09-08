import Link from 'next/link';

import { cn, formatDate } from '../lib/utils';
import { Skeleton } from '@swipe-app/shared-ui';
import { CompositionOperations } from './composition-operations';
import { CompositionType } from '../types';

interface CompositionItemProps {
  composition: CompositionType;
  className?: string;
}

export function CompositionItem({
  composition,
  className,
}: CompositionItemProps) {
  return (
    <div className={cn(className, 'flex items-center justify-between p-4')}>
      <div className="grid gap-1">
        <Link
          href={`/editor/${composition.id}`}
          className="font-semibold hover:underline"
        >
          {composition.title || 'Untitled'}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(new Date(composition.createdAt).toDateString())}
          </p>
        </div>
      </div>
      <CompositionOperations
        composition={{ id: composition.id, title: composition.title }}
      />
    </div>
  );
}

CompositionItem.Skeleton = function CompositionItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};
