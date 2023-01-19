import MainLayout from '../src/components/layout/MainLayout'
import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import CartProvider from '@/src/components/CartContext'
import { useEffect } from 'react'


export default function App({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return (
    <>
      <Head>
        <title>Flair Hijab</title>
        <meta name="description" content="Flair Hijab provides Clothing, Hijabs and Jewelry, located in Edmonton, AB/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0" nonce="Dh6kS2Mj"></Script>
        <Script async defer src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></Script>
      </Head>
    <CartProvider>
      <MainLayout>
      <Component {...pageProps} />
      </MainLayout>
    </CartProvider>
    </>
    
  )

}
