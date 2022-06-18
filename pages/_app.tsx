import '../styles/reset.scss'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
