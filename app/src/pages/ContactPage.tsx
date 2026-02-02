import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Mail, MapPin, Phone, Clock, Building, FileText, Briefcase } from 'lucide-react';

export function ContactPage() {
  const { t, language } = useI18n();

  const breadcrumbs = [
    { name: t.nav.home, url: `/${language}/` },
    { name: t.nav.contact, url: `/${language}/contatti` },
  ];

  const contactInfo = [
    {
      icon: Building,
      label: t.contact.companyName,
      value: '',
      isHeader: true,
    },
    {
      icon: FileText,
      label: t.contact.vatLabel,
      value: t.contact.vatNumber,
    },
    {
      icon: Mail,
      label: t.contact.pecLabel,
      value: t.contact.pecValue,
      isEmail: true,
    },
    {
      icon: MapPin,
      label: t.contact.addressLabel,
      value: t.contact.addressValue,
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: t.contact.phoneValue,
    },
    {
      icon: Clock,
      label: t.contact.hoursLabel,
      value: t.contact.hoursValue,
    },
    {
      icon: Briefcase,
      label: t.contact.commercialLabel,
      value: t.contact.commercialValue,
      isEmail: true,
    },
  ];

  return (
    <>
      <SEO title={t.nav.contact} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-800 to-amber-900 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-amber-200">
              {language === 'it' 
                ? 'Siamo qui per rispondere alle tue domande' 
                : 'We are here to answer your questions'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-xl p-8 lg:p-12">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 ${
                    item.isHeader ? 'pb-4 border-b border-stone-200' : ''
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    item.isHeader ? 'bg-amber-800' : 'bg-amber-100'
                  }`}>
                    <item.icon className={`h-5 w-5 ${
                      item.isHeader ? 'text-white' : 'text-amber-800'
                    }`} aria-hidden="true" />
                  </div>
                  <div>
                    <span className={`block text-sm ${
                      item.isHeader ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {item.label}
                    </span>
                    {item.value && (
                      item.isEmail ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-gray-900 font-medium hover:text-amber-800 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-900 font-medium">{item.value}</span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {language === 'it' ? 'Dove siamo' : 'Where we are'}
            </h2>
            <p className="text-gray-600">
              {t.contact.addressValue}
            </p>
          </div>
          <div className="bg-stone-200 rounded-xl aspect-video flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-stone-400 mx-auto mb-4" aria-hidden="true" />
              <p className="text-stone-500">
                {language === 'it' ? 'Mappa in arrivo' : 'Map coming soon'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-amber-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {language === 'it' ? 'Hai domande?' : 'Have questions?'}
          </h2>
          <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
            {language === 'it'
              ? 'Per informazioni commerciali e collaborazioni, scrivici a'
              : 'For commercial information and collaborations, write to'}
          </p>
          <a
            href={`mailto:${t.contact.commercialValue}`}
            className="inline-flex items-center px-6 py-3 bg-white text-amber-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
          >
            <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
            {t.contact.commercialValue}
          </a>
        </div>
      </section>
    </>
  );
}
