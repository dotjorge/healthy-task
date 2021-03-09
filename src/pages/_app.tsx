import '../styles/styles.css'
import { DesafiosProvider } from '../contextos/DesafiosContexto';
import { ContadorProvider } from '../contextos/ContadorContexto';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  
  return (
          <>
            <Head>
              <meta name="viewport" content= "width=device-width, user-scalable=no"/>
            </Head>
            <Component {...pageProps} />
          </>
  )
}

export default MyApp
