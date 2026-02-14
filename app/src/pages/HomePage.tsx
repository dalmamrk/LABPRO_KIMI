import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { Wheat } from 'lucide-react';

// Bread icon
import breadIcon from '@/assets/images/bread-icon.svg';

import { VideoHero } from '@/components/ui/VideoHero';

// Images for other sections
import paneHeroLoaf from '@/assets/images/pane-hero-loaf.webp';
import focacciaRomanaHero from '@/assets/images/focaccia-romana.webp';
import focacciaLigureHero from '@/assets/images/focaccia-ligure-hero.webp';

export function HomePage() {
  const { t, language } = useI18n();
  const getLink = (path: string) => `/${language}${path}`;


  const products = [
    {
      title: t.nav.bread,
      description: language === 'it'
        ? 'Il nostro pane naturale, frutto di scelte tecniche consapevoli'
        : 'Our natural bread, the result of conscious technical choices',
      link: '/pane-naturale',
      image: paneHeroLoaf,
    },
    {
      title: t.nav.focacciaRomana,
      description: language === 'it'
        ? 'Croccante sotto, alveolata dentro. La tradizione romana'
        : 'Crispy underneath, airy inside. The Roman tradition',
      link: '/focaccia-romana',
      image: focacciaRomanaHero,
    },
    {
      title: t.nav.focacciaLigure,
      description: language === 'it'
        ? 'Soffice, dorata, ricca d\'olio extravergine'
        : 'Soft, golden, rich in extra virgin olive oil',
      link: '/focaccia-ligure',
      image: focacciaLigureHero,
    },
  ];

  return (
    <>
      <SEO />

      {/* Video Hero Section */}
      <VideoHero />

      {/* Pillars Introduction Section - Desktop & Mobile */}
      <section id="pillars-intro" className="py-12 lg:py-16 bg-stone-50 border-b border-stone-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl font-bold text-gray-900">
              {t.home.pillarsBoldIntro}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="products-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2
              id="products-title"
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              {language === 'it' ? 'I Nostri Prodotti' : 'Our Products'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'it'
                ? 'Scopri la nostra gamma di prodotti da forno artigianali'
                : 'Discover our range of artisan bakery products'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                to={getLink(product.link)}
                className="group block bg-stone-50 rounded-xl overflow-hidden border border-stone-100 transition-all"
              >
                <div className="aspect-[4/3] bg-terracotta-100 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-terracotta-500 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-terracotta-500 text-white font-medium text-sm rounded-full group-hover:bg-terracotta-600 transition-all duration-200">
                    {language === 'it' ? 'Scopri di più' : 'Learn more'}
                    <img src={breadIcon} alt="" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* About Teaser Section */}
      <section className="py-16 lg:py-24 bg-terracotta-600 text-white" aria-labelledby="about-teaser-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="about-teaser-title"
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                {t.about.traditionTitle}
              </h2>
              <p className="text-lg text-terracotta-100 leading-relaxed mb-6">
                {t.about.traditionText1}
              </p>
              <p className="text-lg text-terracotta-100 leading-relaxed mb-8">
                {t.about.traditionText2}
              </p>
              <Link to={getLink('/chi-siamo')} className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-medium rounded-full border border-white/50 hover:bg-white/30 transition-all duration-200 group">
                {language === 'it' ? 'Scopri la nostra storia' : 'Discover our story'}
                <img src={breadIcon} alt="" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-terracotta-500 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Wheat className="h-32 w-32 text-terracotta-600" aria-hidden="true" />
                </div>
              </div>
              {/* Decorative elements */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-terracotta-600 rounded-lg -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -top-4 -left-4 w-16 h-16 bg-terracotta-500 rounded-lg -z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-stone-100" aria-labelledby="cta-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-title"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            {language === 'it' ? 'Lavora con Noi' : 'Work with Us'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {language === 'it'
              ? 'Siamo sempre alla ricerca di persone motivate che condividano i nostri valori'
              : 'We are always looking for motivated people who share our values'}
          </p>
          <Link to={getLink('/lavora-con-noi')} className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta-500 text-white font-medium rounded-full hover:bg-terracotta-600 transition-all duration-200 group">
            {language === 'it' ? 'Scopri le opportunità' : 'Discover opportunities'}
            <img src={breadIcon} alt="" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
