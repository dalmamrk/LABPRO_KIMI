import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Check, Circle } from 'lucide-react';

// Images
import focacciaLigureHero from '@/assets/images/focaccia-ligure-hero.webp';
import focacciaLigureDetail from '@/assets/images/focaccia-ligure-detail.webp';

export function FocacciaLigurePage() {
  const { t, language } = useI18n();

  const breadcrumbs = [
    { name: t.nav.home, url: `/${language}/` },
    { name: t.nav.focacciaLigure, url: `/${language}/focaccia-ligure` },
  ];

  const processSteps = [
    { title: language === 'it' ? 'Impasto' : 'Dough', desc: t.focacciaLigure.processDough },
    { title: language === 'it' ? 'Lievitazione' : 'Leavening', desc: t.focacciaLigure.processLeavening },
    { title: language === 'it' ? 'Stesura' : 'Stretching', desc: t.focacciaLigure.processStretching },
    { title: language === 'it' ? 'Salamoia' : 'Brine', desc: t.focacciaLigure.processBrine },
    { title: language === 'it' ? 'Cottura' : 'Baking', desc: t.focacciaLigure.processBaking },
  ];

  return (
    <>
      <SEO title={t.nav.focacciaLigure} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={focacciaLigureHero}
            alt="Focaccia Ligure"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-terracotta-600/60 mix-blend-multiply" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t.focacciaLigure.title}
            </h1>
            <p className="text-xl text-terracotta-200 mb-6">
              {t.focacciaLigure.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src={focacciaLigureDetail}
                alt="Focaccia Ligure Detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.focacciaLigure.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t.focacciaLigure.whatIsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.focacciaLigure.whatIsList.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-stone-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
              >
                <div className="w-8 h-8 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-terracotta-500" aria-hidden="true" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t.focacciaLigure.processTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-xl p-5 text-center sm:text-left"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 mb-3">
                  <span className="w-7 h-7 bg-terracotta-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-gray-900 text-sm">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Characteristics Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t.focacciaLigure.characteristicsTitle}
            </h2>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100">
            <ul className="space-y-4">
              {t.focacciaLigure.characteristicsList.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Circle className="h-2 w-2 text-terracotta-500 fill-terracotta-500" aria-hidden="true" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section className="py-16 lg:py-24 bg-terracotta-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">
              {t.focacciaLigure.targetTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.focacciaLigure.targetList.map((item, index) => (
              <div
                key={index}
                className="bg-terracotta-500/50 rounded-lg p-4 flex items-center gap-3"
              >
                <Check className="h-5 w-5 text-terracotta-300 flex-shrink-0" aria-hidden="true" />
                <span className="text-terracotta-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
