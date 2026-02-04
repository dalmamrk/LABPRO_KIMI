import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { FileText, Scale, AlertCircle, Mail } from 'lucide-react';

export function TermsPage() {
    const { t, language } = useI18n();

    const lastUpdated = language === 'it' ? 'Ultimo aggiornamento: 5 febbraio 2026' : 'Last updated: February 5, 2026';

    return (
        <>
            <SEO title={t.footer.terms} />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-amber-800 to-amber-900 text-white py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                            <FileText className="h-8 w-8 text-amber-800" aria-hidden="true" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            {t.footer.terms}
                        </h1>
                        <p className="text-lg text-amber-100">
                            {lastUpdated}
                        </p>
                    </div>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        {/* Introduction */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Introduzione' : 'Introduction'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'it'
                                    ? 'I presenti Termini e Condizioni regolano l\'accesso e l\'utilizzo del sito web di LAB PRO S.r.l. (di seguito "il Sito"). Accedendo o utilizzando il Sito, l\'utente accetta integralmente questi Termini e Condizioni. Se non si accettano questi termini, si prega di non utilizzare il Sito.'
                                    : 'These Terms and Conditions govern access to and use of the LAB PRO S.r.l. website (hereinafter "the Site"). By accessing or using the Site, the user fully accepts these Terms and Conditions. If you do not accept these terms, please do not use the Site.'}
                            </p>
                        </div>

                        {/* Company Information */}
                        <div className="mb-12">
                            <div className="flex items-start gap-3 mb-4">
                                <Scale className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {language === 'it' ? 'Informazioni sulla Società' : 'Company Information'}
                                </h2>
                            </div>
                            <div className="bg-stone-50 rounded-lg p-6">
                                <p className="font-semibold text-gray-900 mb-2">LAB PRO S.r.l.</p>
                                <p className="text-gray-700">
                                    {language === 'it' ? 'Sede Operativa:' : 'Operational Headquarters:'} Via Jonio 5, 10138 – Torino
                                </p>
                                <p className="text-gray-700">
                                    {language === 'it' ? 'Partita IVA:' : 'VAT Number:'} 13007570016
                                </p>
                                <p className="text-gray-700">
                                    Email: <a href="mailto:info@lab-pro.it" className="text-amber-700 hover:text-amber-800">info@lab-pro.it</a>
                                </p>
                                <p className="text-gray-700">
                                    PEC: <a href="mailto:labpro@pec.it" className="text-amber-700 hover:text-amber-800">labpro@pec.it</a>
                                </p>
                            </div>
                        </div>

                        {/* Use of the Site */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Utilizzo del Sito' : 'Use of the Site'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {language === 'it'
                                    ? 'Il Sito è fornito a scopo informativo riguardo ai prodotti e servizi offerti da LAB PRO. L\'utente si impegna a utilizzare il Sito in conformità con le leggi vigenti e questi Termini e Condizioni.'
                                    : 'The Site is provided for informational purposes regarding the products and services offered by LAB PRO. The user agrees to use the Site in accordance with applicable laws and these Terms and Conditions.'}
                            </p>
                            <p className="text-gray-700 leading-relaxed font-semibold mb-2">
                                {language === 'it' ? 'È vietato:' : 'It is prohibited to:'}
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-600 mt-1">•</span>
                                    <span className="text-gray-700">
                                        {language === 'it'
                                            ? 'Utilizzare il Sito per scopi illegali o non autorizzati'
                                            : 'Use the Site for illegal or unauthorized purposes'}
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-600 mt-1">•</span>
                                    <span className="text-gray-700">
                                        {language === 'it'
                                            ? 'Tentare di accedere a aree riservate o non autorizzate del Sito'
                                            : 'Attempt to access restricted or unauthorized areas of the Site'}
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-600 mt-1">•</span>
                                    <span className="text-gray-700">
                                        {language === 'it'
                                            ? 'Interferire con il corretto funzionamento del Sito'
                                            : 'Interfere with the proper functioning of the Site'}
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-600 mt-1">•</span>
                                    <span className="text-gray-700">
                                        {language === 'it'
                                            ? 'Raccogliere o archiviare dati personali di altri utenti'
                                            : 'Collect or store personal data of other users'}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Intellectual Property */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Proprietà Intellettuale' : 'Intellectual Property'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {language === 'it'
                                    ? 'Tutti i contenuti presenti sul Sito, inclusi testi, immagini, loghi, grafica, video e software, sono di proprietà di LAB PRO o dei rispettivi proprietari e sono protetti dalle leggi italiane ed internazionali sul diritto d\'autore e sulla proprietà intellettuale.'
                                    : 'All content on the Site, including texts, images, logos, graphics, videos and software, is the property of LAB PRO or the respective owners and is protected by Italian and international copyright and intellectual property laws.'}
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'it'
                                    ? 'È vietata qualsiasi riproduzione, distribuzione, modifica o utilizzo non autorizzato dei contenuti del Sito senza il previo consenso scritto di LAB PRO.'
                                    : 'Any unauthorized reproduction, distribution, modification or use of the Site content is prohibited without prior written consent from LAB PRO.'}
                            </p>
                        </div>

                        {/* Product Information */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Informazioni sui Prodotti' : 'Product Information'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'it'
                                    ? 'Le informazioni sui prodotti presenti sul Sito sono fornite a scopo puramente informativo. LAB PRO si riserva il diritto di modificare le caratteristiche dei prodotti senza preavviso. Le immagini dei prodotti possono differire leggermente dal prodotto reale. Per informazioni dettagliate e aggiornate, si prega di contattarci direttamente.'
                                    : 'Product information on the Site is provided for informational purposes only. LAB PRO reserves the right to modify product characteristics without notice. Product images may differ slightly from the actual product. For detailed and updated information, please contact us directly.'}
                            </p>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="mb-12">
                            <div className="flex items-start gap-3 mb-4">
                                <AlertCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {language === 'it' ? 'Limitazione di Responsabilità' : 'Limitation of Liability'}
                                </h2>
                            </div>
                            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    {language === 'it'
                                        ? 'LAB PRO si impegna a mantenere il Sito aggiornato e funzionante, tuttavia non garantisce che il Sito sia sempre disponibile, privo di errori o virus.'
                                        : 'LAB PRO is committed to keeping the Site updated and functional, however it does not guarantee that the Site will always be available, error-free or virus-free.'}
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    {language === 'it'
                                        ? 'LAB PRO non sarà responsabile per eventuali danni diretti, indiretti, incidentali o consequenziali derivanti dall\'utilizzo o dall\'impossibilità di utilizzare il Sito, salvo quanto previsto dalla legge applicabile.'
                                        : 'LAB PRO will not be liable for any direct, indirect, incidental or consequential damages arising from the use or inability to use the Site, except as provided by applicable law.'}
                                </p>
                            </div>
                        </div>

                        {/* External Links */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Link Esterni' : 'External Links'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'it'
                                    ? 'Il Sito può contenere link a siti web di terze parti. LAB PRO non è responsabile del contenuto, delle politiche sulla privacy o delle pratiche di tali siti esterni. L\'inclusione di link non implica approvazione o raccomandazione da parte di LAB PRO.'
                                    : 'The Site may contain links to third-party websites. LAB PRO is not responsible for the content, privacy policies or practices of such external sites. The inclusion of links does not imply endorsement or recommendation by LAB PRO.'}
                            </p>
                        </div>

                        {/* Privacy */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Privacy' : 'Privacy'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'it' ? (
                                    <>
                                        Il trattamento dei dati personali è disciplinato dalla nostra{' '}
                                        <a href={`#/${language}/privacy`} className="text-amber-700 hover:text-amber-800 font-medium underline">
                                            Privacy Policy
                                        </a>
                                        , che costituisce parte integrante dei presenti Termini e Condizioni.
                                    </>
                                ) : (
                                    <>
                                        The processing of personal data is governed by our{' '}
                                        <a href={`#/${language}/privacy`} className="text-amber-700 hover:text-amber-800 font-medium underline">
                                            Privacy Policy
                                        </a>
                                        , which forms an integral part of these Terms and Conditions.
                                    </>
                                )}
                            </p>
                        </div>

                        {/* Applicable Law */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Legge Applicabile e Foro Competente' : 'Applicable Law and Jurisdiction'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'it'
                                    ? 'I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia relativa all\'interpretazione o all\'esecuzione dei presenti Termini e Condizioni, sarà competente in via esclusiva il Foro di Torino.'
                                    : 'These Terms and Conditions are governed by Italian law. For any dispute relating to the interpretation or execution of these Terms and Conditions, the Court of Turin shall have exclusive jurisdiction.'}
                            </p>
                        </div>

                        {/* Changes to Terms */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Modifiche ai Termini e Condizioni' : 'Changes to Terms and Conditions'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'it'
                                    ? 'LAB PRO si riserva il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con l\'indicazione della data di ultimo aggiornamento. L\'utilizzo continuato del Sito dopo la pubblicazione delle modifiche costituisce accettazione dei nuovi termini.'
                                    : 'LAB PRO reserves the right to modify these Terms and Conditions at any time. Changes will be published on this page with the date of last update indicated. Continued use of the Site after publication of changes constitutes acceptance of the new terms.'}
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="mb-12">
                            <div className="flex items-start gap-3 mb-4">
                                <Mail className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {language === 'it' ? 'Contatti' : 'Contact'}
                                </h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {language === 'it'
                                    ? 'Per qualsiasi domanda o chiarimento riguardo ai presenti Termini e Condizioni, è possibile contattarci:'
                                    : 'For any questions or clarifications regarding these Terms and Conditions, you can contact us:'}
                            </p>
                            <div className="bg-amber-50 rounded-lg p-6">
                                <p className="text-gray-700">
                                    Email: <a href="mailto:info@lab-pro.it" className="text-amber-700 hover:text-amber-800 font-medium">info@lab-pro.it</a>
                                </p>
                                <p className="text-gray-700">
                                    PEC: <a href="mailto:labpro@pec.it" className="text-amber-700 hover:text-amber-800 font-medium">labpro@pec.it</a>
                                </p>
                                <p className="text-gray-700 mt-2">
                                    {language === 'it' ? 'Indirizzo:' : 'Address:'} Via Jonio 5, 10138 – Torino
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
