import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nContext';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

export function Header() {
  const { t, language, setLanguage } = useI18n();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();

  // Get current path without language prefix
  const currentPath = location.pathname.replace(/^\/(it|en)/, '') || '/';

  // Generate link with language prefix
  const getLink = (path: string) => `/${language}${path}`;

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/chi-siamo' },
    { label: t.nav.bread, path: '/pane-naturale' },
    { label: t.nav.focacciaRomana, path: '/focaccia-romana' },
    { label: t.nav.focacciaLigure, path: '/focaccia-ligure' },
    { label: t.nav.sourdough, path: '/lievito-madre' },
    { label: t.nav.workWithUs, path: '/lavora-con-noi' },
    { label: t.nav.contact, path: '/contatti' },
  ];

  const toggleLanguage = () => {
    const newLang = language === 'it' ? 'en' : 'it';
    setLanguage(newLang);
    // Navigate to same page in new language
    const newPath = `/${newLang}${currentPath}`;
    navigate(newPath);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm'
        : 'bg-white'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to={getLink('/')}
            className="flex items-center gap-2 text-xl font-bold text-amber-800 hover:text-amber-700 transition-colors"
            aria-label="LAB PRO Home"
          >
            <span className="text-2xl">LAB PRO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={getLink(item.path)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${currentPath === item.path
                  ? 'text-amber-800 bg-amber-50'
                  : 'text-gray-700 hover:text-amber-800 hover:bg-amber-50'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Language switch + Mobile menu */}
          <div className="flex items-center gap-2">
            {/* Language Switch - Desktop */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-amber-800 hover:bg-amber-50"
              aria-label={`Switch to ${language === 'it' ? 'English' : 'Italian'}`}
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span className="uppercase font-medium">{language}</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                  className="text-gray-700 hover:text-amber-800 hover:bg-amber-50"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-white">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation menu for LAB PRO website
                </SheetDescription>
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between py-4 border-b">
                    <span className="text-xl font-bold text-amber-800">LAB PRO</span>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" aria-label="Close menu">
                        <X className="h-5 w-5" aria-hidden="true" />
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile Language Switch */}
                  <div className="py-4 border-b">
                    <Button
                      variant="outline"
                      onClick={() => {
                        toggleLanguage();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 border-amber-200 text-amber-800 hover:bg-amber-50"
                    >
                      <Globe className="h-4 w-4" aria-hidden="true" />
                      <span>{language === 'it' ? 'Switch to English' : 'Passa all\'Italiano'}</span>
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 py-4 overflow-auto">
                    <ul className="space-y-1">
                      {navItems.map((item) => (
                        <li key={item.path}>
                          <SheetClose asChild>
                            <Link
                              to={getLink(item.path)}
                              className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${currentPath === item.path
                                ? 'text-amber-800 bg-amber-50'
                                : 'text-gray-700 hover:text-amber-800 hover:bg-amber-50'
                                }`}
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Mobile Footer */}
                  <div className="py-4 border-t text-center text-sm text-gray-500">
                    © 2025 LAB PRO S.r.l.
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
