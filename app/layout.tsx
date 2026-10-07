import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SITE } from './lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

// Concept deployments (e.g. *.vercel.app) stay out of search results.
// Set NEXT_PUBLIC_ALLOW_INDEXING=true only when this page ships on gaiadynamics.ai.
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';

// Absolute URLs (e.g. the social preview image) must resolve on the domain actually serving
// the page. On Vercel, VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL are set automatically.
const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const siteUrl = allowIndexing
  ? 'https://www.gaiadynamics.ai'
  : deploymentHost
    ? `https://${deploymentHost}`
    : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: SITE.canonical },
  robots: allowIndexing
    ? { index: true, follow: true, 'max-image-preview': 'large' }
    : { index: false, follow: false },
  openGraph: {
    type: 'website',
    url: SITE.canonical,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4F46E5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
