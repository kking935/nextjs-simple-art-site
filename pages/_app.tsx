import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import RouteLoader from '../components/RouteLoader'
import { ThemeWrapper } from '../context/theme'
import '../estilos/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeWrapper>
        <RouteLoader>
          <Component {...pageProps} />
        </RouteLoader>
      </ThemeWrapper>
    </>
  )
}
export default MyApp
