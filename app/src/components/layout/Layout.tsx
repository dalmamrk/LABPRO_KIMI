import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from '@/components/ui/CookieBanner';
import { LocalBusinessJsonLd, OrganizationJsonLd } from '@/components/seo/JsonLd';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* JSON-LD Structured Data */}
      <LocalBusinessJsonLd />
      <OrganizationJsonLd />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1" id="main-content">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
}
