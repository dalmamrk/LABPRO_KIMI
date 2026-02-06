import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Clock, Croissant, Cookie, Cake } from 'lucide-react';

// Images
import viennoiserieCroissants from '@/assets/images/viennoiserie-croissants.webp';

export function OtherProductsPage() {
  const { t, language } = useI18n();

  const breadcrumbs = [
    { name: t.nav.home, url: `/${language}/` },
    { name: t.nav.otherProducts, url: `/${language}/altri-prodotti` },
  ];

  const comingSoonProducts = [
    {
      icon: Croissant,
      title: language === 'it' ? 'Viennoiserie' : 'Viennoiserie',
      description: language === 'it'
        ? 'Croissant, pain au chocolat e altre specialità francesi'
        : 'Croissants, pain au chocolat and other French specialties',
      image: viennoiserieCroissants,
    },
    {
      icon: Cookie,
      title: language === 'it' ? 'Biscotti' : 'Biscuits',
      description: language === 'it'
        ? 'Biscotti artigianali di tradizione italiana'
        : 'Traditional Italian artisan biscuits',
    },
    {
      icon: Cake,
      title: language === 'it' ? 'Pasticceria Secca' : 'Dry Pastries',
      description: language === 'it'
        ? 'Specialità di pasticceria secca e dolci da forno'
        : 'Dry pastry specialties and baked sweets',
    },
  ];

  return (
    <>
      <SEO title={t.nav.otherProducts} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t.otherProducts.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Clock className="h-10 w-10 text-terracotta-500" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {language === 'it' ? 'Prossimamente' : 'Coming Soon'}
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            {t.otherProducts.comingSoon}
          </p>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {language === 'it' ? 'Cosa stiamo preparando' : 'What we are preparing'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'it'
                ? 'Stiamo lavorando per ampliare la nostra offerta con nuove specialità'
                : 'We are working to expand our offer with new specialties'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comingSoonProducts.map((product, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-xl border border-stone-100 overflow-hidden"
              >
                {product.image ? (
                  <div className="aspect-[4/3] w-full relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="pt-8">
                    <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto">
                      <product.icon className="h-8 w-8 text-terracotta-500" aria-hidden="true" />
                    </div>
                  </div>
                )}

                <div className="p-8 text-center">
                  {!product.image && <div className="mt-[-1rem] mb-6" />}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/Contact CTA */}
      <section className="py-16 lg:py-24 bg-terracotta-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {language === 'it' ? 'Resta aggiornato' : 'Stay updated'}
          </h2>
          <p className="text-lg text-terracotta-100 mb-8 max-w-2xl mx-auto">
            {language === 'it'
              ? 'Vuoi essere il primo a sapere quando i nostri nuovi prodotti saranno disponibili? Contattaci!'
              : 'Want to be the first to know when our new products are available? Contact us!'}
          </p>
          <a
            href={`/${language}/contatti`}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-terracotta-600 hover:to-terracotta-500 transition-all duration-300"
          >
            {language === 'it' ? 'Contattaci' : 'Contact us'}
          </a>
        </div>
      </section>
    </>
  );
}
