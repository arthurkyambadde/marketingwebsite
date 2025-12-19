export const SITE_CONFIG = {
  name: 'Nexus',
  title: 'Nexus - Premium Solutions for Modern Businesses',
  description: 'Transform your business with our cutting-edge solutions. Trusted by thousands of companies worldwide for innovation, reliability, and results.',
  url: 'https://yourbrand.com',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/nexushq',
    linkedin: 'https://linkedin.com/company/nexushq',
    facebook: 'https://facebook.com/nexushq',
  },
  contact: {
    email: 'hello@nexushq.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Street, Suite 100, San Francisco, CA 94105',
  },
  company: {
    legalName: 'Nexus Inc.',
    foundedYear: 2020,
    employees: '50-100',
  },
} as const;

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Nexus',
  defaultTitle: 'Nexus - Premium Solutions for Modern Businesses',
  description: 'Transform your business with our cutting-edge solutions. Trusted by thousands of companies worldwide for innovation, reliability, and results.',
  openGraph: {
    type: 'website' as const,
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    handle: '@nexushq',
    site: '@nexushq',
    cardType: 'summary_large_image',
  },
};

export const ROUTES = {
  home: '/',
  features: '/features',
  pricing: '/pricing',
  about: '/about',
  contact: '/contact',
  blog: '/blog',
} as const;
