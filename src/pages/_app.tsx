import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyles } from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Template</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Next.js template with typescript, jest, styled-components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
