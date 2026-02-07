import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Check, Users, Lightbulb, Target } from 'lucide-react';

// Images
import aboutLabRacks from '@/assets/images/about-lab-racks.webp';
import aboutProcessHands from '@/assets/images/about-process-hands.webp';

export function AboutPage() {
  const { t, language } = useI18n();

  const breadcrumbs = [
    { name: t.nav.home, url: `/${language}/` },
    { name: t.nav.about, url: `/${language}/chi-siamo` },
  ];

  return (
    <>
      <SEO title={t.nav.about} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={aboutProcessHands}
            alt="Artisan process"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-terracotta-600/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-terracotta-100 leading-relaxed">
              {t.about.traditionTitle}
            </p>
          </div>
        </div>
      </section>

      {/* Tradition Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                {t.about.traditionTitle}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t.about.traditionText1}</p>
                <p>{t.about.traditionText2}</p>
              </div>
            </div>
            <div className="bg-terracotta-50 rounded-xl p-8 text-center lg:text-left">
              <div className="w-16 h-16 bg-terracotta-100 rounded-lg flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <Target className="h-8 w-8 text-terracotta-500" aria-hidden="true" />
              </div>
              <blockquote className="text-lg text-gray-800 italic">
                "{language === 'it'
                  ? 'Tradizione che guarda al futuro'
                  : 'Tradition looking to the future'}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Roots Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              {t.about.rootsTitle}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed text-center">
            <p>{t.about.rootsText1}</p>
            <p>{t.about.rootsText2}</p>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 bg-terracotta-50 rounded-xl p-8 text-center lg:text-left">
              <div className="w-16 h-16 bg-terracotta-100 rounded-lg flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <Lightbulb className="h-8 w-8 text-terracotta-500" aria-hidden="true" />
              </div>
              <ul className="space-y-4">
                {t.about.innovationList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 justify-center lg:justify-start">
                    <Check className="h-5 w-5 text-terracotta-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700 text-left">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                {t.about.innovationTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t.about.innovationText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Culture Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              {t.about.businessTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              {t.about.businessText}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {t.about.businessList.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-stone-100 flex flex-col sm:flex-row items-center sm:items-center gap-4 text-center sm:text-left"
              >
                <div className="w-10 h-10 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-terracotta-500" aria-hidden="true" />
                </div>
                <span className="font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                {t.about.productsTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.about.productsText}
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={aboutLabRacks}
                alt="Laboratory racks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-16 lg:py-24 bg-terracotta-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {t.about.futureTitle}
          </h2>
          <p className="text-lg text-terracotta-100 leading-relaxed max-w-3xl mx-auto">
            {t.about.futureText}
          </p>
        </div>
      </section>
    </>
  );
}
