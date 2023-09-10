import Link from 'next/link';
import { MainNav } from '../../../components/main-nav';
import { UserAccountNav } from '../../../components/user-account-nav';
import { dashboardConfig } from '../../../config/dashboard';
import { cn } from '../../../lib/utils';
import { buttonVariants } from '@swipe-app/shared-ui';
import { Icons } from '../../../components/icons';
import { DashboardNav } from '../../../components/nav';

interface EditorProps {
  children?: React.ReactNode;
}

export default function EditorLayout({ children }: EditorProps) {
  return (
    <div className="flex h-screen flex-col md:space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav
            backBtn={
              <Link
                href="/dashboard"
                className={cn(buttonVariants({ variant: 'ghost' }), '')}
              >
                <>
                  <Icons.chevronLeft className="mr-2 h-4 w-4" />
                  Back
                </>
              </Link>
            }
            items={dashboardConfig.mainNav}
          />
          <UserAccountNav />
        </div>
      </header>
      <div className="md:container grid flex-1 gap-12 md:grid-cols-[1fr]">
        {/* <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside> */}
        <main className="flex w-full h-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
