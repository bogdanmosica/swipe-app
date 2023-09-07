import { marketingConfig } from '../../config/marketing';
import { MainNav } from '../../components/main-nav';
import { SiteFooter } from '../../components/site-footer';
import { ModeToggle } from '../../components/mode-toggle';
import LoginAvatarBtn from '../../components/login-avatar-btn';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background sticky top-0">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex items-center">
            <ModeToggle />
            <LoginAvatarBtn />
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
