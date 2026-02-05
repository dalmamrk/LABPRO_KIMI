import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Sparkles, Heart, Activity, Zap, Leaf, ChefHat, History } from 'lucide-react';

// Images
import sourdoughStarter from '@/assets/images/sourdough-starter.webp';

export function SourdoughPage() {
  const { t, language } = useI18n();

  const breadcrumbs = [
    { name: t.nav.home, url: `/${language}/` },
    { name: t.nav.sourdough, url: `/${language}/lievito-madre` },
  ];

  const benefitIcons = [
    Sparkles,
    Heart,
    Activity,
    Zap,
    Leaf,
    ChefHat,
    History,
  ];

  return (
    <>
      <SEO title={t.nav.sourdough} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-800 to-amber-900 text-white py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={sourdoughStarter}
            alt="Sourdough Starter"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-amber-900/60 mix-blend-multiply" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t.sourdough.title}
            </h1>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                {t.sourdough.whatIsTitle}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.sourdough.whatIsText}
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
              <img
                src={sourdoughStarter}
                alt="Active Sourdough Starter"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {language === 'it' ? 'I Benefici del Lievito Madre' : 'Benefits of Sourdough Starter'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.sourdough.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow text-center md:text-left"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <Icon className="h-6 w-6 text-amber-800" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-amber-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {language === 'it' ? 'Scopri i nostri prodotti' : 'Discover our products'}
          </h2>
          <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
            {language === 'it'
              ? 'Tutti i nostri prodotti sono realizzati con lievito madre per garantire qualità e autenticità'
              : 'All our products are made with sourdough starter to ensure quality and authenticity'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${language}/pane-naturale`}
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300"
            >
              {t.nav.bread}
            </a>
            <a
              href={`/${language}/focaccia-romana`}
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300"
            >
              {t.nav.focacciaRomana}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
