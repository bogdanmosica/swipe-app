//'use server';
import { Metadata } from 'next';

import ProtectedRoute from '../../components/protected-route';
import { DashboardShell } from '../../components/shell';
import { DashboardHeader } from '../../components/header';
import { DashboardCompositionList } from '../../components/dashboard-composition-list';
import { Suspense } from 'react';
import DashboardCompositionListLoadingFallback from '../../components/fallbacks/dashboard-fallback';

const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Edit compositions',
};

export default async function DashboardPage() {
  return (
    <ProtectedRoute redirectPath="dashboard">
      <DashboardShell>
        <DashboardHeader
          heading="Compositions"
          text="Create and manage compositions."
        />
        <Suspense fallback={<DashboardCompositionListLoadingFallback />}>
          <DashboardCompositionList />
        </Suspense>
      </DashboardShell>
    </ProtectedRoute>
  );
}
