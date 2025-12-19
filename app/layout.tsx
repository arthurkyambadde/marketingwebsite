import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/structured-data";
import { SEO_DEFAULTS, SITE_CONFIG } from "@/data/constants";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SEO_DEFAULTS.defaultTitle,
    template: SEO_DEFAULTS.titleTemplate,
  },
  description: SEO_DEFAULTS.description,
  keywords: [
    "business software",
    "productivity",
    "automation",
    "SaaS",
    "enterprise",
  ],
  authors: [{ name: SITE_CONFIG.company.legalName }],
  creator: SITE_CONFIG.company.legalName,
  publisher: SITE_CONFIG.company.legalName,
  openGraph: SEO_DEFAULTS.openGraph,
  twitter: {
    card: "summary_large_image",
    title: SEO_DEFAULTS.defaultTitle,
    description: SEO_DEFAULTS.description,
    creator: SEO_DEFAULTS.twitter.handle,
    site: SEO_DEFAULTS.twitter.site,
    images: SEO_DEFAULTS.openGraph.images,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#3B82F6" />
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
      </head>
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
