import { FAQS, GAIA, SITE } from '../lib/site';

export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE.canonical}#webpage`,
        url: SITE.canonical,
        name: SITE.title,
        description: SITE.description,
        inLanguage: 'en-US',
        isPartOf: { '@type': 'WebSite', url: GAIA, name: SITE.name },
        breadcrumb: { '@id': `${SITE.canonical}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE.canonical}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${GAIA}/` },
          { '@type': 'ListItem', position: 2, name: 'Product', item: `${GAIA}/product/tariffs` },
          { '@type': 'ListItem', position: 3, name: 'Catalog tariff scan', item: SITE.canonical },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Gaia Dynamics Catalog Tariff Scan',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: SITE.canonical,
        publisher: { '@type': 'Organization', name: SITE.name, url: GAIA },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Free plan and 14-day free trial available',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE.canonical}#faq`,
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
