import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { I18nProvider } from '@/i18n/I18nContext';
import { Layout } from '@/components/layout/Layout';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import {
  HomePage,
  AboutPage,
  BreadPage,
  FocacciaRomanaPage,
  FocacciaLigurePage,
  OtherProductsPage,
  SourdoughPage,
  WorkWithUsPage,
  ContactPage,
  PrivacyPage,
  TermsPage,
  NotFoundPage,
} from '@/pages';
import type { Language } from '@/i18n/translations';

// Route configuration for both languages
const routeConfig = [
  { path: '/', element: HomePage },
  { path: '/chi-siamo', element: AboutPage },
  { path: '/pane-naturale', element: BreadPage },
  { path: '/focaccia-romana', element: FocacciaRomanaPage },
  { path: '/focaccia-ligure', element: FocacciaLigurePage },
  { path: '/altri-prodotti', element: OtherProductsPage },
  { path: '/lievito-madre', element: SourdoughPage },
  { path: '/lavora-con-noi', element: WorkWithUsPage },
  { path: '/contatti', element: ContactPage },
  { path: '/privacy', element: PrivacyPage },
  { path: '/termini', element: TermsPage },
];

interface LanguageRoutesProps {
  lang: Language;
}

function LanguageRoutes({ lang }: LanguageRoutesProps) {
  return (
    <I18nProvider initialLang={lang}>
      <ScrollToTop />
      <Layout>
        <Routes>
          {routeConfig.map((route) => (
            <Route
              key={`${lang}-${route.path}`}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </I18nProvider>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Redirect root to Italian version */}
        <Route path="/" element={<Navigate to="/it" replace />} />

        {/* Italian routes */}
        <Route path="/it/*" element={<LanguageRoutes lang="it" />} />

        {/* English routes */}
        <Route path="/en/*" element={<LanguageRoutes lang="en" />} />

        {/* Catch all - redirect to Italian 404 */}
        <Route path="*" element={<Navigate to="/it" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
