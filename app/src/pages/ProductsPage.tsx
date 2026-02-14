import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

// Images
import paneHeroLoaf from '@/assets/images/pane-hero-loaf.webp';
import focacciaRomanaDough from '@/assets/images/focaccia-romana.webp';
import focacciaLigureHero from '@/assets/images/focaccia-ligure-hero.webp';
import viennoiserieCroissants from '@/assets/images/viennoiserie-croissants.webp';
import sourdoughStarter from '@/assets/images/sourdough-starter.webp';
import breadIcon from '@/assets/images/bread-icon.svg';

export function ProductsPage() {
    const { t, language } = useI18n();

    const breadcrumbs = [
        { name: t.nav.home, url: `/${language}/` },
        { name: t.nav.products, url: `/${language}/prodotti` },
    ];

    const products = [
        {
            title: t.nav.bread,
            description: language === 'it'
                ? 'Pane artigianale con lievito madre, alta idratazione e lunga lievitazione per una digeribilità superiore.'
                : 'Artisan bread with sourdough, high hydration and long fermentation for superior digestibility.',
            image: paneHeroLoaf,
            link: `/${language}/pane-naturale`,
        },
        {
            title: t.nav.focacciaRomana,
            description: language === 'it'
                ? 'Base croccante e mollica alveolata, cotta su pietra per una leggerezza unica.'
                : 'Crispy base and airy crumb, baked on stone for unique lightness.',
            image: focacciaRomanaDough,
            link: `/${language}/focaccia-romana`,
        },
        {
            title: t.nav.focacciaLigure,
            description: language === 'it'
                ? 'Soffice e dorata, ricca di olio extravergine d\'oliva nella più pura tradizione ligure.'
                : 'Soft and golden, rich in extra virgin olive oil in the purest Ligurian tradition.',
            image: focacciaLigureHero,
            link: `/${language}/focaccia-ligure`,
        },
        {
            title: t.nav.otherProducts,
            description: language === 'it'
                ? 'Viennoiserie, biscotti e pasticceria secca realizzati con la stessa cura artigianale.'
                : 'Viennoiserie, biscuits and dry pastries made with the same artisan care.',
            image: viennoiserieCroissants,
            link: `/${language}/altri-prodotti`,
        },
    ];

    return (
        <>
            <SEO
                title={t.nav.products}
                description={language === 'it'
                    ? 'Scopri tutti i prodotti Lab Pro: pane naturale con lievito madre, focaccia romana, focaccia ligure, viennoiserie e pasticceria secca.'
                    : 'Discover all Lab Pro products: natural bread with sourdough, Roman focaccia, Ligurian focaccia, viennoiserie and dry pastries.'
                }
            />
            <BreadcrumbJsonLd items={breadcrumbs} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white py-16 lg:py-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={sourdoughStarter}
                        alt="Sourdough"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-terracotta-600/20" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            {language === 'it' ? 'I Nostri Prodotti' : 'Our Products'}
                        </h1>
                        <p className="text-xl text-terracotta-100">
                            {language === 'it'
                                ? 'Artigianalità, ingredienti selezionati e lievito madre in ogni nostra creazione.'
                                : 'Craftsmanship, selected ingredients and sourdough in every creation.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 lg:py-24 bg-stone-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {products.map((product, index) => (
                            <Link
                                key={index}
                                to={product.link}
                                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100"
                            >
                                <div className="aspect-[16/9] w-full overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-terracotta-500 transition-colors">
                                        {product.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {product.description}
                                    </p>
                                    <span className="inline-flex items-center text-terracotta-500 font-medium text-sm">
                                        {language === 'it' ? 'Scopri di più' : 'Learn more'}
                                        <img src={breadIcon} alt="" className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
