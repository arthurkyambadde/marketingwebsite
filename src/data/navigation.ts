import { ROUTES } from './constants';

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Features', href: ROUTES.features },
  { label: 'Pricing', href: ROUTES.pricing },
  { label: 'About', href: ROUTES.about },
  { label: 'Blog', href: ROUTES.blog },
  { label: 'Contact', href: ROUTES.contact },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: ROUTES.features },
      { label: 'Pricing', href: ROUTES.pricing },
      { label: 'FAQ', href: '/faq' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: ROUTES.about },
      { label: 'Blog', href: ROUTES.blog },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Help Center', href: '/help' },
      { label: 'Community', href: '/community' },
      { label: 'Contact', href: ROUTES.contact },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Licenses', href: '/licenses' },
    ],
  },
];

export const CTA_BUTTON = {
  label: 'Get Started',
  href: '/contact',
};
