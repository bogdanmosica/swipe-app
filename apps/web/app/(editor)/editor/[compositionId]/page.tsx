import { DashboardNav } from '../../../../components/nav';
import { dashboardConfig } from '../../../../config/dashboard';
import PlayerNavContainer from '../../../../components/player-nav-container';
import { NavigationMenu } from '../../../../components/navigation-menu';

interface EditorPageProps {
  params: { compositionId: string };
}

export default async function EditorPage({ params }: EditorPageProps) {
  return (
    <div className="w-full grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
      <aside className="hidden w-[200px] flex-col md:flex">
        <DashboardNav items={dashboardConfig.sidebarNav} />
      </aside>
      <PlayerNavContainer />
      <NavigationMenu
        className="md:hidden sticky bottom-0"
        //items={dashboardConfig.sidebarNav}
      />
    </div>
  );
}
