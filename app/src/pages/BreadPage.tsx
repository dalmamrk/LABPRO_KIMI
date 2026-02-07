import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Wheat, Droplets, Flame, Circle, Check, Clock, Utensils, Package } from 'lucide-react';

// Images
import paneHeroLoaf from '@/assets/images/pane-hero-loaf.webp';
import farina from '@/assets/images/farina.webp';
import introDough from '@/assets/images/home-intro-dough.webp';
import paneSlicing from '@/assets/images/pane-slicing-detail.webp';
import paneBasket from '@/assets/images/pane-basket.webp';

export function BreadPage() {
  const { t, language } = useI18n();

  const breadcrumbs = [
    { name: t.nav.home, url: `/${language}/` },
    { name: t.nav.bread, url: `/${language}/pane-naturale` },
  ];

  const pillars = [
    {
      number: '01',
      title: t.bread.pillar1Title,
      subtitle: t.bread.pillar1Subtitle,
      text: t.bread.pillar1Text,
      list: t.bread.pillar1List,
      conclusion: t.bread.pillar1Conclusion,
      icon: Wheat,
      image: farina,
    },
    {
      number: '02',
      title: t.bread.pillar2Title,
      subtitle: t.bread.pillar2Subtitle,
      text: t.bread.pillar2Text,
      list: t.bread.pillar2List,
      conclusion: t.bread.pillar2Conclusion,
      icon: Flame,
      image: introDough,
    },
    {
      number: '03',
      title: t.bread.pillar3Title,
      subtitle: t.bread.pillar3Subtitle,
      text: t.bread.pillar3Text,
      list: t.bread.pillar3List,
      conclusion: t.bread.pillar3Conclusion,
      icon: Droplets,
      image: paneSlicing,
    },
    {
      number: '04',
      title: t.bread.pillar4Title,
      subtitle: t.bread.pillar4Subtitle,
      text: t.bread.pillar4Text,
      list: [],
      conclusion: '',
      icon: Circle,
      image: paneBasket,
    },
  ];

  const faqs = [
    { q: t.bread.faq1Q, a: t.bread.faq1A },
    { q: t.bread.faq2Q, a: t.bread.faq2A },
    { q: t.bread.faq3Q, a: t.bread.faq3A },
    { q: t.bread.faq4Q, a: t.bread.faq4A },
  ];

  const tips = [
    { icon: Clock, text: t.bread.tip1 },
    { icon: Clock, text: t.bread.tip2 },
    { icon: Utensils, text: t.bread.tip3 },
    { icon: Utensils, text: t.bread.tip4 },
    { icon: Package, text: t.bread.tip5 },
  ];

  return (
    <>
      <SEO title={t.nav.bread} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={paneHeroLoaf}
            alt="Natural bread loaf"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-terracotta-600/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t.bread.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            {t.bread.pillarsIntro}
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-terracotta-200">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center">
                      <pillar.icon className="h-6 w-6 text-terracotta-500" aria-hidden="true" />
                    </div>
                  </div>
                  <h2 className="text-xl text-terracotta-500 font-semibold mb-2">
                    {pillar.title}
                  </h2>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {pillar.subtitle}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {pillar.text}
                  </p>
                  {pillar.list.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {pillar.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-terracotta-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {pillar.conclusion && (
                    <p className="text-gray-600 italic">{pillar.conclusion}</p>
                  )}
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3] flex items-center justify-center relative bg-stone-100">
                    <img
                      src={pillar.image}
                      alt={pillar.subtitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolves Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t.bread.evolvesTitle}
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-center">
            {t.bread.evolvesText}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t.bread.judgedTitle}
            </h2>
            <p className="text-gray-600">{t.bread.judgedIntro}</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-stone-100"
              >
                <h3 className="text-lg font-semibold text-terracotta-500 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 lg:py-24 bg-terracotta-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {t.bread.tipsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-terracotta-500/50 rounded-lg p-6 flex items-start gap-4"
              >
                <tip.icon className="h-5 w-5 text-terracotta-300 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-terracotta-100">{tip.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
