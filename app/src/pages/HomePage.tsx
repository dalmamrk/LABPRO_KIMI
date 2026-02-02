import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wheat, Flame, Droplets, Circle } from 'lucide-react';

// Images
import homeHeroBaker from '@/assets/images/home-hero-baker.webp';
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

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white overflow-hidden"
        aria-labelledby="hero-title"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={homeHeroBaker}
            alt="Baker working"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-amber-900/60 mix-blend-multiply" />
        </div>

        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              {t.home.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl text-amber-100 mb-8 leading-relaxed">
              {t.home.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-amber-900 hover:bg-amber-50 font-semibold"
              >
                <Link to={getLink('/pane-naturale')}>
                  {t.home.ctaPrimary}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to={getLink('/contatti')}>
                  {t.home.ctaSecondary}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#fafaf9"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-stone-50" aria-labelledby="features-title">
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
                className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-amber-800" aria-hidden="true" />
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
                className="group block bg-stone-50 rounded-xl overflow-hidden border border-stone-100 hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] bg-amber-100 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-800 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center text-amber-800 font-medium text-sm group-hover:underline">
                    {language === 'it' ? 'Scopri di più' : 'Learn more'}
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-16 lg:py-24 bg-amber-900 text-white" aria-labelledby="about-teaser-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="about-teaser-title"
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                {t.about.traditionTitle}
              </h2>
              <p className="text-lg text-amber-100 leading-relaxed mb-6">
                {t.about.traditionText1}
              </p>
              <p className="text-lg text-amber-100 leading-relaxed mb-8">
                {t.about.traditionText2}
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to={getLink('/chi-siamo')}>
                  {language === 'it' ? 'Scopri la nostra storia' : 'Discover our story'}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-amber-800 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Wheat className="h-32 w-32 text-amber-700" aria-hidden="true" />
                </div>
              </div>
              {/* Decorative elements */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-700 rounded-lg -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -top-4 -left-4 w-16 h-16 bg-amber-600 rounded-lg -z-10"
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
          <Button
            asChild
            size="lg"
            className="bg-amber-800 text-white hover:bg-amber-700"
          >
            <Link to={getLink('/lavora-con-noi')}>
              {language === 'it' ? 'Scopri le opportunità' : 'Discover opportunities'}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
