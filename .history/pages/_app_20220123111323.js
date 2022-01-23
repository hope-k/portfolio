import { ChakraProvider } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import emotionCache from '../lib/emotion-cache'
import { CacheProvider } from "@emotion/react";
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (document.readyState !== 'loading') {
      setLoaded(true)
    }
  }, [])


  return (
    <>
      <Head>

      
        {useEffecttypeof window === 'undefined' && (
          <style
            id="holderStyle"
            dangerouslySetInnerHTML={{
              __html: `
         *, *::before, *::after {
           transition: none!important;
         }
         `,
            }}
          />
        )}
      </Head>


      <CacheProvider value={emotionCache}>
        <ChakraProvider>
          {
            loaded &&
            <Component {...pageProps} />
          }
        </ChakraProvider>
      </CacheProvider>



    </>
  )
}

export default MyApp
