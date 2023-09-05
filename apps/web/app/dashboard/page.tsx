import { Metadata } from 'next';
import ProtectedRoute from '../../components/protected-route';
import { DashboardShell } from '../../components/shell';
import { DashboardHeader } from '../../components/header';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Edit compositions',
};

export default function DashboardPage() {
  return (
    <ProtectedRoute redirectPath="dashboard">
      <DashboardShell>
        <DashboardHeader heading="Posts" text="Create and manage posts.">
          some button
        </DashboardHeader>
        <div></div>
      </DashboardShell>
    </ProtectedRoute>
  );
}
