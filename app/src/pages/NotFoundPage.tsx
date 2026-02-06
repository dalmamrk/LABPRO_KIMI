import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nContext';
import { SEO } from '@/components/seo/SEO';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

export function NotFoundPage() {
  const { language } = useI18n();

  return (
    <>
      <SEO 
        title={language === 'it' ? 'Pagina non trovata' : 'Page not found'} 
        noindex 
      />
      
      <section className="min-h-[60vh] flex items-center justify-center py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Search className="h-12 w-12 text-terracotta-500" aria-hidden="true" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            404
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {language === 'it' ? 'Pagina non trovata' : 'Page not found'}
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            {language === 'it'
              ? 'La pagina che stai cercando non esiste o è stata spostata.'
              : 'The page you are looking for does not exist or has been moved.'}
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-terracotta-500 text-white hover:bg-terracotta-600"
          >
            <Link to={`/${language}/`}>
              <Home className="mr-2 h-5 w-5" aria-hidden="true" />
              {language === 'it' ? 'Torna alla Home' : 'Back to Home'}
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
