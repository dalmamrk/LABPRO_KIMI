import { useState } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Mail, MapPin, Phone, Clock, FileText, Briefcase, ChevronDown } from 'lucide-react';

// Logo
import labProLogo from '@/assets/images/Logo_labpro.webp';



export function ContactPage() {
  const { t, language } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbs = [
    { name: t.nav.home, url: `/${language}/` },
    { name: t.nav.contact, url: `/${language}/contatti` },
  ];

  const contactInfo = [

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

            {/* Logo Centered */}
            <div className="flex justify-center mb-10 border-b border-stone-200 pb-8">
              <img src={labProLogo} alt="LAB PRO" className="h-24 w-auto object-contain" />
            </div>

            {/* Company Name */}
            <div className="mb-6 text-left">
              <h3 className="text-2xl font-extrabold text-gray-900">
                {t.contact.companyName}
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-terracotta-100 flex items-center justify-center flex-shrink-0">
                    {item.icon && <item.icon className="h-6 w-6 text-terracotta-500" aria-hidden="true" />}
                  </div>

                  <div>
                    <span className="block text-sm text-gray-500">
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
            {t.contact.ctaTitle}
          </h2>
          <p className="text-lg text-terracotta-100 mb-8 max-w-2xl mx-auto">
            {t.contact.ctaText}
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

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t.contact.faqTitle}
            </h2>
          </div>

          <div className="space-y-2">
            {t.contact.faqItems.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-md border border-stone-200 transition-all duration-200 hover:shadow-lg hover:border-terracotta-200 ${openFaq === index ? 'ring-1 ring-terracotta-300' : ''
                  }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-medium text-gray-800 text-sm pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-terracotta-500 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                      }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-stone-100">
                    <div className="pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
