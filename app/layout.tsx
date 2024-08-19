import type { Metadata } from 'next';

import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import { Analytics } from '@vercel/analytics/react';
import NextTopLoader from 'nextjs-toploader';

import Layouts from '@/common/components/layouts/index';
import { METADATA } from '@/common/constant/metadata';

import QueryProvider from '@/context/query';

import { soraSans } from '../common/styles/fonts';
import ThemeProviderContext from '../context/theme';
import './globals.css';

export const metadata: Metadata = {
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={soraSans.className}>
        <QueryProvider>
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          <ThemeProviderContext>
            <Layouts>{children}</Layouts>
          </ThemeProviderContext>
        </QueryProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}

        <GoogleAnalytics measurementId={process.env.GTM_ID || ''} />
      </body>
    </html>
  );
}
