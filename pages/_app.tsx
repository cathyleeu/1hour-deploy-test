import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';

import Layout from '@components/Layout';
import CssBaseline from '@mui/material/CssBaseline';

import ResponsiveProvider from '@components/Layout/ResponsiveContext';

export type NextPageWithLayout = NextPage & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const noLayout = Component.noLayout;

  return (
    <>
      <Head>
        <title>1Hour</title>
        <meta name="description" content="개발자를 위한 기술 면접 사이트" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <ResponsiveProvider>
        { noLayout 
          ? ( 
            <Component {...pageProps} />
          ) 
          : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )
        }
      </ResponsiveProvider>
    </>
  );
}

export default MyApp;
