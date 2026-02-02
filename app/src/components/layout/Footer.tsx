import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nContext';
import { Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const { t, language } = useI18n();
  
  const getLink = (path: string) => `/${language}${path}`;

  const quickLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/chi-siamo' },
    { label: t.nav.bread, path: '/pane-naturale' },
    { label: t.nav.contact, path: '/contatti' },
  ];

  const productLinks = [
    { label: t.nav.bread, path: '/pane-naturale' },
    { label: t.nav.focacciaRomana, path: '/focaccia-romana' },
    { label: t.nav.focacciaLigure, path: '/focaccia-ligure' },
    { label: t.nav.sourdough, path: '/lievito-madre' },
  ];

  return (
    <footer className="bg-amber-900 text-amber-50">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">LAB PRO</h3>
            <p className="text-sm text-amber-200 leading-relaxed">
              {t.seo.siteDescription}
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-400" aria-hidden="true" />
                <span>{t.contact.addressValue}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0 text-amber-400" aria-hidden="true" />
                <a 
                  href="mailto:info@lab-pro.it" 
                  className="hover:text-white transition-colors"
                >
                  info@lab-pro.it
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 flex-shrink-0 text-amber-400" aria-hidden="true" />
                <span>{t.contact.hoursValue}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-300">
              {language === 'it' ? 'Link Rapidi' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={getLink(link.path)}
                    className="text-sm text-amber-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-300">
              {language === 'it' ? 'Prodotti' : 'Products'}
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={getLink(link.path)}
                    className="text-sm text-amber-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-300">
              {t.nav.contact}
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-amber-400 block">{t.contact.vatLabel}</span>
                <span>{t.contact.vatNumber}</span>
              </div>
              <div>
                <span className="text-amber-400 block">{t.contact.pecLabel}</span>
                <a 
                  href={`mailto:${t.contact.pecValue}`}
                  className="hover:text-white transition-colors"
                >
                  {t.contact.pecValue}
                </a>
              </div>
              <div>
                <Link
                  to={getLink('/contatti')}
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-amber-800 hover:bg-amber-700 text-white text-sm font-medium rounded-md transition-colors"
                >
                  {language === 'it' ? 'Scrivici' : 'Write to us'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-amber-400">
              {t.footer.rights}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                to={getLink('/privacy')}
                className="text-amber-400 hover:text-white transition-colors"
              >
                {t.footer.privacy}
              </Link>
              <span className="text-amber-700" aria-hidden="true">|</span>
              <Link
                to={getLink('/termini')}
                className="text-amber-400 hover:text-white transition-colors"
              >
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
