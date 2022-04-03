import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalMetaTags } from '@components/atoms/GlobalMetaTags'
import { LaunchesProvider } from '@providers/LaunchesProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LaunchesProvider>
      <GlobalMetaTags />
      <Component {...pageProps} />
    </LaunchesProvider>
  )
}

export default MyApp
