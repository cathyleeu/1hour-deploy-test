import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { MainBanner } from '@components/Banner'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>1Hour</title>
        <meta name="description" content="개발자를 위한 기술 면접 사이트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        메인페이지
        <MainBanner />
        </div>
    </div>
  )
}

export default Home
