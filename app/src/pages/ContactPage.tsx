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
      <section className="bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-terracotta-200">
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
                  className={`flex items-start gap-4 ${item.isHeader ? 'pb-4 border-b border-stone-200' : ''
                    }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.isHeader ? 'bg-terracotta-500' : 'bg-terracotta-100'
                    }`}>
                    <item.icon className={`h-5 w-5 ${item.isHeader ? 'text-white' : 'text-terracotta-500'
                      }`} aria-hidden="true" />
                  </div>
                  <div>
                    <span className={`block text-sm ${item.isHeader ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                      {item.label}
                    </span>
                    {item.value && (
                      item.isEmail ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-gray-900 font-medium hover:text-terracotta-500 transition-colors"
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

      {/* Map Section */}
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
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.6892158849855!2d7.730861476586914!3d45.10236487107201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d8f5e5e5e5f%3A0x5e5e5e5e5e5e5e5e!2sVia%20Jonio%2C%205%2C%2010138%20Torino%20TO!5e0!3m2!1sit!2sit!4v1644000000000!5m2!1sit!2sit"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={language === 'it' ? 'Mappa LAB PRO' : 'LAB PRO Map'}
              className="w-full"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/dir//Via+Jonio,+5,+10138+Torino+TO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-lg transition-colors"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              {language === 'it' ? 'Ottieni indicazioni' : 'Get directions'}
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-terracotta-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {language === 'it' ? 'Hai domande?' : 'Have questions?'}
          </h2>
          <p className="text-lg text-terracotta-100 mb-8 max-w-2xl mx-auto">
            {language === 'it'
              ? 'Per informazioni commerciali e collaborazioni, scrivici a'
              : 'For commercial information and collaborations, write to'}
          </p>
          <a
            href={`mailto:${t.contact.commercialValue}`}
            className="inline-flex items-center px-6 py-3 bg-white text-terracotta-600 font-semibold rounded-lg hover:bg-terracotta-50 transition-colors"
          >
            <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
            {t.contact.commercialValue}
          </a>
        </div>
      </section>
    </>
  );
}
