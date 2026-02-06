import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/button';
import { Users, Wrench, Globe, Mail, Check, ArrowRight } from 'lucide-react';

export function WorkWithUsPage() {
  const { t, language } = useI18n();

  const breadcrumbs = [
    { name: t.nav.home, url: `/${language}/` },
    { name: t.nav.workWithUs, url: `/${language}/lavora-con-noi` },
  ];

  return (
    <>
      <SEO title={t.nav.workWithUs} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t.workWithUs.title}
            </h1>
            <p className="text-xl text-terracotta-200">
              {t.workWithUs.introTitle}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {t.workWithUs.introText}
          </p>
        </div>
      </section>

      {/* Who We Seek Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t.workWithUs.whoWeSeekTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.workWithUs.whoWeSeekText}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Artisan Area */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-terracotta-500" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {t.workWithUs.artisanArea}
                </h3>
              </div>
              <ul className="space-y-3">
                {t.workWithUs.artisanList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-terracotta-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial Area */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-terracotta-500" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {t.workWithUs.commercialArea}
                </h3>
              </div>
              <ul className="space-y-3">
                {t.workWithUs.commercialList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-terracotta-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t.workWithUs.offerTitle}
            </h2>
          </div>
          <div className="bg-terracotta-50 rounded-xl p-8">
            <ul className="space-y-4">
              {t.workWithUs.offerList.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-terracotta-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-terracotta-500" aria-hidden="true" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-16 lg:py-24 bg-terracotta-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t.workWithUs.applyTitle}
          </h2>
          <p className="text-lg text-terracotta-100 mb-8">
            {t.workWithUs.applyText}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white/20 text-white hover:bg-white/30 font-medium rounded-full border border-white/50 shadow-none transition-colors"
          >
            <a href={`mailto:${t.workWithUs.applyEmail}`}>
              <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
              {t.workWithUs.applyEmail}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
