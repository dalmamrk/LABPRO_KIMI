import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nContext';
import { Mail, MapPin, Clock, Instagram } from 'lucide-react';

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
  ];

  return (
    <footer className="bg-gray-800 text-gray-100">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">LAB PRO</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t.seo.siteDescription}
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2 text-sm justify-center md:justify-start">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <span className="text-gray-300">{t.contact.addressValue}</span>
              </div>
              <div className="flex items-center gap-2 text-sm justify-center md:justify-start">
                <Mail className="h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <a
                  href="mailto:info@lab-pro.it"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@lab-pro.it
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm justify-center md:justify-start">
                <Clock className="h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <span className="text-gray-300">{t.contact.hoursValue}</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Hidden on Mobile */}
          <div className="space-y-4 hidden md:block">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              {language === 'it' ? 'Link Rapidi' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={getLink(link.path)}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products - Hidden on Mobile */}
          <div className="space-y-4 hidden md:block">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              {language === 'it' ? 'Prodotti' : 'Products'}
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={getLink(link.path)}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              {t.nav.contact}
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-400 block">{t.contact.vatLabel}</span>
                <span className="text-gray-300">{t.contact.vatNumber}</span>
              </div>
              <div>
                <span className="text-gray-400 block">{t.contact.reaLabel}</span>
                <span className="text-gray-300">{t.contact.reaValue}</span>
              </div>
              <div>
                <span className="text-gray-400 block">{t.contact.pecLabel}</span>
                <a
                  href={`mailto:${t.contact.pecValue}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.contact.pecValue}
                </a>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link
                  to={getLink('/contatti')}
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-md transition-colors"
                >
                  {language === 'it' ? 'Scrivici' : 'Write to us'}
                </Link>
              </div>
              <div className="pt-2">
                <span className="text-gray-400 block mb-2">{language === 'it' ? 'Seguici' : 'Follow Us'}</span>
                <div className="flex justify-center md:justify-start">
                  <a
                    href="https://www.instagram.com/lab_pro_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-500 hover:via-pink-400 hover:to-orange-300 text-white rounded-full transition-all hover:scale-110"
                    aria-label="Instagram LAB PRO"
                  >
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              {t.footer.rights}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                to={getLink('/privacy')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t.footer.privacy}
              </Link>
              <span className="text-gray-600" aria-hidden="true">|</span>
              <Link
                to={getLink('/termini')}
                className="text-gray-400 hover:text-white transition-colors"
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
