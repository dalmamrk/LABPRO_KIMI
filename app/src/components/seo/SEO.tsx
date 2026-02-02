import { useEffect } from 'react';
import { useI18n } from '@/i18n/I18nContext';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  image = '/images/og-image.jpg',
  url,
  type = 'website',
  noindex = false,
}: SEOProps) {
  const { t, language } = useI18n();
  
  const siteTitle = title ? `${title} | ${t.seo.siteTitle}` : t.seo.siteTitle;
  const siteDescription = description || t.seo.siteDescription;
  const canonicalUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const ogImage = image.startsWith('http') ? image : `${typeof window !== 'undefined' ? window.location.origin : ''}${image}`;

  useEffect(() => {
    // Update document title
    document.title = siteTitle;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMetaTag('description', siteDescription);
    updateMetaTag('og:title', siteTitle, true);
    updateMetaTag('og:description', siteDescription, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:locale', language === 'it' ? 'it_IT' : 'en_US', true);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', siteTitle);
    updateMetaTag('twitter:description', siteDescription);
    updateMetaTag('twitter:image', ogImage);

    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Cleanup function
    return () => {
      // Meta tags are kept as they should persist
    };
  }, [siteTitle, siteDescription, canonicalUrl, ogImage, type, language, noindex]);

  return null;
}
