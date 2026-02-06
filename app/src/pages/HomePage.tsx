import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { ArrowRight, Wheat, Flame, Droplets, Circle } from 'lucide-react';

import { VideoHero } from '@/components/ui/VideoHero';

// Images for other sections
import paneHeroLoaf from '@/assets/images/pane-hero-loaf.webp';
import focacciaRomanaHero from '@/assets/images/focaccia-romana-dough.webp';
import focacciaLigureHero from '@/assets/images/focaccia-ligure-hero.webp';

export function HomePage() {
  const { t, language } = useI18n();
  const getLink = (path: string) => `/${language}${path}`;

  const features = [
    {
      icon: Wheat,
      title: language === 'it' ? 'Farina Tipo 2' : 'Type 2 Flour',
      description: language === 'it'
        ? 'Macinata a pietra per preservare tutti i nutrienti'
        : 'Stone-ground to preserve all nutrients',
    },
    {
      icon: Flame,
      title: language === 'it' ? 'Lievito Madre' : 'Sourdough Starter',
      description: language === 'it'
        ? '30% di lievito madre vivo per una fermentazione naturale'
        : '30% live sourdough starter for natural fermentation',
    },
    {
      icon: Droplets,
      title: language === 'it' ? 'Alta Idratazione' : 'High Hydration',
      description: language === 'it'
        ? '75% idratazione per una mollica cremosa'
        : '75% hydration for a creamy crumb',
    },
    {
      icon: Circle,
      title: language === 'it' ? 'Sale Integrale' : 'Whole Salt',
      description: language === 'it'
        ? 'Ricco di oligoelementi naturali'
        : 'Rich in natural trace elements',
    },
  ];

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

      {/* Features Section */}
      <section id="features-section" className="py-16 lg:py-24 bg-stone-50" aria-labelledby="features-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2
              id="features-title"
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              {language === 'it' ? 'I Nostri Pilastri' : 'Our Pillars'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'it'
                ? 'Quattro elementi fondamentali che rendono i nostri prodotti unici'
                : 'Four fundamental elements that make our products unique'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow text-center sm:text-left"
              >
                <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <feature.icon className="h-6 w-6 text-terracotta-500" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
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
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-terracotta-500 text-white font-medium text-sm rounded-full hover:bg-terracotta-600 transition-colors">
                    {language === 'it' ? 'Scopri di più' : 'Learn more'}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
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
              <Link to={getLink('/chi-siamo')} className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-medium rounded-full border border-white/50 hover:bg-white/30 transition-colors group/btn">
                {language === 'it' ? 'Scopri la nostra storia' : 'Discover our story'}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
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
          <Link to={getLink('/lavora-con-noi')} className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta-500 text-white font-medium rounded-full hover:bg-terracotta-600 transition-colors group/btn">
            {language === 'it' ? 'Scopri le opportunità' : 'Discover opportunities'}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
