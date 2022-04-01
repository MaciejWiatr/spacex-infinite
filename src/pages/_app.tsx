import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalMetaTags } from '../components/atoms/meta/GlobalMetaTags'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalMetaTags />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
