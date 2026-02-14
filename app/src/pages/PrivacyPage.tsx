import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { Shield, Lock, Eye, Mail } from 'lucide-react';

export function PrivacyPage() {
    const { t, language } = useI18n();

    const lastUpdated = language === 'it' ? 'Ultimo aggiornamento: 5 febbraio 2026' : 'Last updated: February 5, 2026';

    return (
        <>
            <SEO title={t.footer.privacy} />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-terracotta-500 to-terracotta-600 text-white py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="w-16 h-16 bg-terracotta-100 rounded-lg flex items-center justify-center mb-6">
                            <Shield className="h-8 w-8 text-terracotta-500" aria-hidden="true" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            {t.footer.privacy}
                        </h1>
                        <p className="text-lg text-terracotta-100">
                            {lastUpdated}
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy Policy Content */}
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
                                    ? 'LAB PRO S.r.l. (di seguito "LAB PRO", "noi" o "nostro") rispetta la privacy degli utenti del proprio sito web e si impegna a proteggere i dati personali in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR - Regolamento UE 2016/679) e la normativa italiana in materia di protezione dei dati personali.'
                                    : 'LAB PRO S.r.l. (hereinafter "LAB PRO", "we" or "our") respects the privacy of users of its website and is committed to protecting personal data in accordance with the General Data Protection Regulation (GDPR - EU Regulation 2016/679) and Italian legislation on the protection of personal data.'}
                            </p>
                        </div>

                        {/* Data Controller */}
                        <div className="mb-12">
                            <div className="flex items-start gap-3 mb-4">
                                <Lock className="h-6 w-6 text-terracotta-500 mt-1 flex-shrink-0" aria-hidden="true" />
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {language === 'it' ? 'Titolare del Trattamento' : 'Data Controller'}
                                </h2>
                            </div>
                            <div className="bg-stone-50 rounded-lg p-6">
                                <p className="font-semibold text-gray-900 mb-2">LAB PRO S.r.l.</p>
                                <p className="text-gray-700">Via Jonio 5, 10138 – Torino</p>
                                <p className="text-gray-700">P.IVA: 13007570016</p>
                                <p className="text-gray-700">
                                    Email: <a href="mailto:andrea@lab-pro.it" className="text-terracotta-600 hover:text-terracotta-500">andrea@lab-pro.it</a>
                                </p>
                                <p className="text-gray-700">
                                    PEC: <a href="mailto:labpro@pec.it" className="text-terracotta-600 hover:text-terracotta-500">labpro@pec.it</a>
                                </p>
                            </div>
                        </div>

                        {/* Data We Collect */}
                        <div className="mb-12">
                            <div className="flex items-start gap-3 mb-4">
                                <Eye className="h-6 w-6 text-terracotta-500 mt-1 flex-shrink-0" aria-hidden="true" />
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {language === 'it' ? 'Dati Raccolti' : 'Data We Collect'}
                                </h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {language === 'it'
                                    ? 'Il nostro sito web raccoglie esclusivamente dati di navigazione tecnici tramite cookie e log del server (es. indirizzo IP, tipo di browser, pagine visitate). Non raccogliamo dati personali identificativi a meno che non vengano forniti volontariamente dall\'utente (ad esempio tramite il modulo di contatto o richiesta di informazioni).'
                                    : 'Our website exclusively collects technical navigation data through cookies and server logs (e.g. IP address, browser type, pages visited). We do not collect personally identifiable data unless voluntarily provided by the user (for example through the contact form or information request).'}
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-terracotta-500 mt-1">•</span>
                                    <span className="text-gray-700">
                                        {language === 'it'
                                            ? 'Dati di navigazione (indirizzo IP, browser, sistema operativo)'
                                            : 'Navigation data (IP address, browser, operating system)'}
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-terracotta-500 mt-1">•</span>
                                    <span className="text-gray-700">
                                        {language === 'it'
                                            ? 'Dati forniti volontariamente (nome, email, messaggio in caso di contatto)'
                                            : 'Voluntarily provided data (name, email, message when contacting us)'}
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-terracotta-500 mt-1">•</span>
                                    <span className="text-gray-700">
                                        {language === 'it'
                                            ? 'Cookie tecnici necessari al funzionamento del sito'
                                            : 'Technical cookies necessary for site operation'}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Purpose of Processing */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Finalità del Trattamento' : 'Purpose of Processing'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {language === 'it'
                                    ? 'I dati personali raccolti vengono trattati per le seguenti finalità:'
                                    : 'Personal data collected is processed for the following purposes:'}
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-terracotta-500 mt-1 font-bold">1.</span>
                                    <span className="text-gray-700">
                                        {language === 'it'
                                            ? 'Garantire il corretto funzionamento del sito web'
                                            : 'Ensure proper website operation'}
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-terracotta-500 mt-1 font-bold">2.</span>
                                    <span className="text-gray-700">
                                        {language === 'it'
                                            ? 'Rispondere a richieste di informazioni o contatti'
                                            : 'Respond to information requests or contacts'}
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-terracotta-500 mt-1 font-bold">3.</span>
                                    <span className="text-gray-700">
                                        {language === 'it'
                                            ? 'Migliorare l\'esperienza di navigazione'
                                            : 'Improve browsing experience'}
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-terracotta-500 mt-1 font-bold">4.</span>
                                    <span className="text-gray-700">
                                        {language === 'it'
                                            ? 'Adempiere a obblighi di legge'
                                            : 'Fulfill legal obligations'}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Legal Basis */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Base Giuridica' : 'Legal Basis'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'it'
                                    ? 'Il trattamento dei dati personali si basa su: (a) consenso dell\'interessato per finalità specifiche; (b) esecuzione di misure precontrattuali o contrattuali; (c) legittimo interesse del titolare; (d) adempimento di obblighi di legge.'
                                    : 'The processing of personal data is based on: (a) consent of the data subject for specific purposes; (b) performance of pre-contractual or contractual measures; (c) legitimate interest of the controller; (d) compliance with legal obligations.'}
                            </p>
                        </div>

                        {/* Data Retention */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Conservazione dei Dati' : 'Data Retention'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'it'
                                    ? 'I dati personali sono conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti. I dati di navigazione sono conservati per un massimo di 12 mesi. I dati forniti volontariamente sono conservati fino al completamento della richiesta o fino alla revoca del consenso.'
                                    : 'Personal data is kept for the time strictly necessary to achieve the purposes for which it was collected. Navigation data is kept for a maximum of 12 months. Voluntarily provided data is kept until the request is completed or until consent is revoked.'}
                            </p>
                        </div>

                        {/* User Rights */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Diritti dell\'Interessato' : 'Data Subject Rights'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'it'
                                    ? 'Gli utenti possono esercitare i diritti previsti dagli artt. 15-22 del GDPR, tra cui il diritto di accesso, rettifica, cancellazione, limitazione del trattamento e opposizione.'
                                    : 'Users can exercise the rights provided by Articles 15-22 of the GDPR, including the right to access, rectification, deletion, restriction of processing and objection.'}
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                {language === 'it'
                                    ? (
                                        <>
                                            Le richieste possono essere inviate all'indirizzo email:{' '}
                                            <a href="mailto:andrea@lab-pro.it" className="text-terracotta-600 hover:text-terracotta-500 font-medium">
                                                andrea@lab-pro.it
                                            </a>
                                        </>
                                    )
                                    : (
                                        <>
                                            Requests can be sent to the email address:{' '}
                                            <a href="mailto:andrea@lab-pro.it" className="text-terracotta-600 hover:text-terracotta-500 font-medium">
                                                andrea@lab-pro.it
                                            </a>
                                        </>
                                    )}
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                {language === 'it'
                                    ? 'È inoltre possibile proporre reclamo al Garante per la Protezione dei Dati Personali.'
                                    : 'It is also possible to lodge a complaint with the Italian Data Protection Authority (Garante per la Protezione dei Dati Personali).'}
                            </p>
                        </div>

                        {/* Cookies */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Cookie' : 'Cookies'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {language === 'it'
                                    ? 'Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento del sito (es. preferenza lingua). Non utilizziamo cookie di profilazione o tracciamento.'
                                    : 'Our site uses only technical cookies necessary for site operation (e.g. language preference). We do not use profiling or tracking cookies.'}
                            </p>
                        </div>

                        {/* Security */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Sicurezza' : 'Security'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'it'
                                    ? 'LAB PRO adotta misure di sicurezza tecniche e organizzative appropriate per proteggere i dati personali da accesso non autorizzato, distruzione, perdita, alterazione o divulgazione.'
                                    : 'LAB PRO adopts appropriate technical and organizational security measures to protect personal data from unauthorized access, destruction, loss, alteration or disclosure.'}
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="mb-12">
                            <div className="flex items-start gap-3 mb-4">
                                <Mail className="h-6 w-6 text-terracotta-500 mt-1 flex-shrink-0" aria-hidden="true" />
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {language === 'it' ? 'Contatti' : 'Contact'}
                                </h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {language === 'it'
                                    ? 'Per esercitare i propri diritti o per qualsiasi richiesta relativa al trattamento dei dati personali, è possibile contattare LAB PRO ai seguenti recapiti:'
                                    : 'To exercise your rights or for any request related to the processing of personal data, you can contact LAB PRO at the following addresses:'}
                            </p>
                            <div className="bg-terracotta-50 rounded-lg p-6">
                                <p className="text-gray-700">
                                    Email: <a href="mailto:andrea@lab-pro.it" className="text-terracotta-600 hover:text-terracotta-500 font-medium">andrea@lab-pro.it</a>
                                </p>
                                <p className="text-gray-700">
                                    PEC: <a href="mailto:labpro@pec.it" className="text-terracotta-600 hover:text-terracotta-500 font-medium">labpro@pec.it</a>
                                </p>
                            </div>
                        </div>

                        {/* Updates */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'it' ? 'Modifiche alla Privacy Policy' : 'Changes to Privacy Policy'}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'it'
                                    ? 'LAB PRO si riserva il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Eventuali modifiche saranno pubblicate su questa pagina con l\'indicazione della data di ultimo aggiornamento.'
                                    : 'LAB PRO reserves the right to modify or update this Privacy Policy at any time. Any changes will be published on this page with the date of last update indicated.'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
