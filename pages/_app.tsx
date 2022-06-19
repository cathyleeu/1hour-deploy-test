import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@components/Layout';
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>1Hour</title>
        <meta name="description" content="개발자를 위한 기술 면접 사이트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}


export default MyApp
