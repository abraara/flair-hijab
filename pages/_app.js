import MainLayout from '../src/components/layout/MainLayout'
import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Flair Hijab</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="../path/to/flowbite/dist/flowbite.js"></Script>

      </Head>
    <MainLayout>
    <Component {...pageProps} />
    </MainLayout>
    </>
    
  )

}