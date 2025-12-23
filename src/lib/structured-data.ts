import { SITE_CONFIG } from '@/data/constants';

interface Organization {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  foundingDate: string;
  contactPoint: {
    '@type': string;
    email: string;
    telephone: string;
    contactType: string;
  };
  sameAs: string[];
}

interface WebSite {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  potentialAction: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}

interface BreadcrumbList {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }>;
}

interface Article {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': string;
    name: string;
  };
  publisher: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
}

export function generateOrganizationSchema(): Organization {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.company.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.description,
    foundingDate: SITE_CONFIG.company.foundedYear.toString(),
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.contact.email,
      telephone: SITE_CONFIG.contact.phone,
      contactType: 'Customer Service',
    },
    sameAs: [
      SITE_CONFIG.links.twitter,
      SITE_CONFIG.links.linkedin,
      SITE_CONFIG.links.facebook,
    ],
  };
}

export function generateWebSiteSchema(): WebSite {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
): BreadcrumbList {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: `${SITE_CONFIG.url}${item.url}` }),
    })),
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  image: string,
  publishedDate: string,
  modifiedDate: string | undefined,
  authorName: string
): Article {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: `${SITE_CONFIG.url}${image}`,
    datePublished: publishedDate,
    ...(modifiedDate && { dateModified: modifiedDate }),
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.company.legalName,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/logo.png`,
      },
    },
  };
}

export function generateFAQSchema(
  faqs: ReadonlyArray<{ readonly question: string; readonly answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
