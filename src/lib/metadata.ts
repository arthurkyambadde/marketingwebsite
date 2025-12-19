import { Metadata } from 'next';
import { SITE_CONFIG, SEO_DEFAULTS } from '@/data/constants';

interface GenerateMetadataParams {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

export function generateMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  tags,
}: GenerateMetadataParams): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const ogImage = image || SEO_DEFAULTS.openGraph.images[0].url;

  return {
    title,
    description,
    keywords: tags,
    authors: authors?.map(name => ({ name })),
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: SEO_DEFAULTS.twitter.handle,
      site: SEO_DEFAULTS.twitter.site,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return generateMetadata({
    title,
    description,
    path,
    type: 'website',
  });
}

export function generateArticleMetadata(
  title: string,
  description: string,
  path: string,
  publishedTime: string,
  modifiedTime?: string,
  authors?: string[],
  tags?: string[],
  image?: string
): Metadata {
  return generateMetadata({
    title,
    description,
    path,
    image,
    type: 'article',
    publishedTime,
    modifiedTime,
    authors,
    tags,
  });
}
