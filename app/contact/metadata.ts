import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata(
  'Contact Us',
  'Get in touch with our team. We\'re here to help and answer any questions you might have.',
  '/contact'
);
