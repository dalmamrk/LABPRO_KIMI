import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nContext';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Logo
import labProLogo from '@/assets/images/Logo_labpro.webp';
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
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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

  // Product submenu items
  const productItems = [
    { label: t.nav.bread, path: '/pane-naturale' },
    { label: t.nav.focacciaRomana, path: '/focaccia-romana' },
    { label: t.nav.focacciaLigure, path: '/focaccia-ligure' },
    { label: t.nav.sourdough, path: '/lievito-madre' },
  ];

  // Check if current path is a product page
  const isProductPage = productItems.some(item => currentPath === item.path);

  // Main nav items (without products submenu items)
  const mainNavItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/chi-siamo' },
  ];

  const secondaryNavItems = [
    { label: t.nav.workWithUs, path: '/lavora-con-noi' },
    { label: t.nav.contact, path: '/contatti' },
  ];

  // All nav items for mobile
  const allNavItems = [
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
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="LAB PRO Home"
          >
            <img
              src={labProLogo}
              alt="LAB PRO"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Main nav items before Products */}
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={getLink(item.path)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${currentPath === item.path
                  ? 'text-terracotta-500 bg-terracotta-50'
                  : 'text-gray-700 hover:text-terracotta-500 hover:bg-terracotta-50'
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${isProductPage
                  ? 'text-terracotta-500 bg-terracotta-50'
                  : 'text-gray-700 hover:text-terracotta-500 hover:bg-terracotta-50'
                  }`}
                aria-expanded={isProductsOpen}
                aria-haspopup="true"
              >
                {t.nav.products}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-full pt-1 transition-all duration-200 ${isProductsOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
                  }`}
              >
                <div className="bg-white rounded-lg shadow-lg ring-1 ring-black/5 overflow-hidden min-w-[220px]">
                  <div className="py-2">
                    {productItems.map((item) => (
                      <Link
                        key={item.path}
                        to={getLink(item.path)}
                        className={`block px-4 py-2.5 text-sm transition-colors ${currentPath === item.path
                          ? 'text-terracotta-500 bg-terracotta-50 font-medium'
                          : 'text-gray-700 hover:text-terracotta-500 hover:bg-terracotta-50'
                          }`}
                        onClick={() => setIsProductsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary nav items after Products */}
            {secondaryNavItems.map((item) => (
              <Link
                key={item.path}
                to={getLink(item.path)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${currentPath === item.path
                  ? 'text-terracotta-500 bg-terracotta-50'
                  : 'text-gray-700 hover:text-terracotta-500 hover:bg-terracotta-50'
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
              className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-terracotta-500 hover:bg-terracotta-50"
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
                  className="text-gray-700 hover:text-terracotta-500 hover:bg-terracotta-50"
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
                    <div className="flex items-center">
                      <img
                        src={labProLogo}
                        alt="LAB PRO"
                        className="h-10 w-auto"
                      />
                    </div>
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
                      className="w-full flex items-center justify-center gap-2 border-terracotta-200 text-terracotta-500 hover:bg-terracotta-50"
                    >
                      <Globe className="h-4 w-4" aria-hidden="true" />
                      <span>{language === 'it' ? 'Switch to English' : 'Passa all\'Italiano'}</span>
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 py-4 overflow-auto">
                    <ul className="space-y-1">
                      {allNavItems.map((item) => (
                        <li key={item.path}>
                          <SheetClose asChild>
                            <Link
                              to={getLink(item.path)}
                              className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${currentPath === item.path
                                ? 'text-terracotta-500 bg-terracotta-50'
                                : 'text-gray-700 hover:text-terracotta-500 hover:bg-terracotta-50'
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
