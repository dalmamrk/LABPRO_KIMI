import { useI18n } from '@/i18n/I18nContext';

interface LocalBusinessJsonLdProps {
  url?: string;
}

export function LocalBusinessJsonLd({ url }: LocalBusinessJsonLdProps) {
  const { language, t } = useI18n();
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'LAB PRO S.r.l.',
    description: t.seo.siteDescription,
    url: url || 'https://lab-pro.it',
    telephone: '+39-XXX-XXXXXXX',
    email: 'info@lab-pro.it',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Jonio 5',
      addressLocality: 'Torino',
      postalCode: '10138',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '45.0703',
      longitude: '7.6869',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '€€',
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'EUR',
    inLanguage: language,
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface OrganizationJsonLdProps {
  url?: string;
}

export function OrganizationJsonLd({ url }: OrganizationJsonLdProps) {
  const { t } = useI18n();
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LAB PRO S.r.l.',
    description: t.seo.siteDescription,
    url: url || 'https://lab-pro.it',
    logo: 'https://lab-pro.it/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+39-XXX-XXXXXXX',
      contactType: 'customer service',
      email: 'info@lab-pro.it',
      availableLanguage: ['Italian', 'English'],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
