import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';

import Layout from '@components/Layout';
import CssBaseline from '@mui/material/CssBaseline';

import ResponsiveProvider from '@components/Layout/ResponsiveContext';
import AuthProvider from '@components/auth/AuthProvide';

export type NextPageWithLayout = NextPage & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const noLayout = Component.noLayout;

  return (
    <>
      <Head>
        <title>1Hour</title>
        <meta name="description" content="개발자를 위한 기술 면접 사이트" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <link rel="icon" href="/assets/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-icon.png" />
        <link rel="manifest" href="/assets/favicon/manifest.json" />

        <meta name="og:title" content="1Hour" />
        <meta name="og:description" content="개발자를 위한 기술 면접 사이트" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://1hour.vercel.app" />
        <meta name="og:image" content="/assets/images/og-image.png" />
      </Head>
      <CssBaseline />
      <ResponsiveProvider>
        <AuthProvider>
          {noLayout ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </AuthProvider>
      </ResponsiveProvider>
    </>
  );
}

export default MyApp;
