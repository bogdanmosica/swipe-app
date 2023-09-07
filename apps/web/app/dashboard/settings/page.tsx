import ProtectedRoute from '../../../components/protected-route';
import { DashboardHeader } from '../../../components/header';
import { DashboardShell } from '../../../components/shell';
import { UserNameForm } from '../../../components/forms/user-name-form';

export const metadata = {
  title: 'Settings',
  description: 'Manage account and website settings.',
};

export default async function SettingsPage() {
  // const user = await getCurrentUser();

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || '/login');
  // }

  return (
    <ProtectedRoute redirectPath="dashboard/billing">
      <DashboardShell>
        <DashboardHeader
          heading="Settings"
          text="Manage account and website settings."
        />
        <div className="flex gap-10 w-full">
          <UserNameForm className="w-full" />
        </div>
      </DashboardShell>
    </ProtectedRoute>
  );
}
