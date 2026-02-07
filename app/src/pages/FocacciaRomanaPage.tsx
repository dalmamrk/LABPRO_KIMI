import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Check, Circle } from 'lucide-react';

// Images
import focacciaRomanaDough from '@/assets/images/focaccia-romana-dough.webp';
import focacciaRomanaProcess from '@/assets/images/focaccia-romana-process.webp';

export function FocacciaRomanaPage() {
  const { t, language } = useI18n();

  const breadcrumbs = [
    { name: t.nav.home, url: `/${language}/` },
    { name: t.nav.focacciaRomana, url: `/${language}/focaccia-romana` },
  ];

  const processSteps = [
    { title: language === 'it' ? 'Impasto' : 'Dough', desc: t.focacciaRomana.processDough },
    { title: language === 'it' ? 'Lievitazione' : 'Leavening', desc: t.focacciaRomana.processLeavening },
    { title: language === 'it' ? 'Stesura' : 'Stretching', desc: t.focacciaRomana.processStretching },
    { title: language === 'it' ? 'Cottura' : 'Baking', desc: t.focacciaRomana.processBaking },
  ];

  return (
    <>
      <SEO title={t.nav.focacciaRomana} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={focacciaRomanaDough}
            alt="Focaccia Romana Dough"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-terracotta-600/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t.focacciaRomana.title}
            </h1>
            <p className="text-xl text-terracotta-200 mb-6">
              {t.focacciaRomana.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.focacciaRomana.description}
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src={focacciaRomanaProcess}
                alt="Focaccia Romana Process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t.focacciaRomana.whatIsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.focacciaRomana.whatIsList.map((item, index) => (
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
              {t.focacciaRomana.processTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-stone-50 rounded-xl p-6 text-center sm:text-left"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-terracotta-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
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
              {t.focacciaRomana.characteristicsTitle}
            </h2>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100">
            <ul className="space-y-4">
              {t.focacciaRomana.characteristicsList.map((item, index) => (
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
              {t.focacciaRomana.targetTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.focacciaRomana.targetList.map((item, index) => (
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
