import { Skeleton } from '@swipe-app/shared-ui';

export default function DashboardCompositionListLoadingFallback() {
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Skeleton className="divide-y divide-border rounded-md border p-8" />
      <Skeleton className="divide-y divide-border rounded-md border p-8" />
      <Skeleton className="divide-y divide-border rounded-md border p-8" />
      <Skeleton className="divide-y divide-border rounded-md border p-8" />
      <Skeleton className="divide-y divide-border rounded-md border p-8" />
    </div>
  );
}
