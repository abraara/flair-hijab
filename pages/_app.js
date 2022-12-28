import MainLayout from '../src/components/layout/MainLayout'
import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Flair Hijab</title>
        <meta name="description" content="Flair Hijab provides Clothing, Hijabs and Jewelry, located in Edmonton, AB/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <MainLayout>
    <Component {...pageProps} />
    </MainLayout>
    </>
    
  )

}
