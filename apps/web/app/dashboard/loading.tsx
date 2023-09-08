import { Skeleton } from '@swipe-app/shared-ui';
import { DashboardHeader } from '../../components/header';
import { DashboardShell } from '../../components/shell';

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Compositions"
        text="Create and manage compositions."
      />
      <div className="divide-border-200 divide-y rounded-md border">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </DashboardShell>
  );
}
