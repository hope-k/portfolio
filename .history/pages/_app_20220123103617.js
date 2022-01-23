import { ChakraProvider } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import emotionCache from '../lib/emotion-cache'
import { CacheProvider } from "@emotion/react";

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (document.readyState !== 'loading') {
      setLoaded(true)
    }
  }, [])


  return (
    <>
      
       
          <CacheProvider value={emotionCache}>
            <ChakraProvider>
              <Component {...pageProps} />
            </ChakraProvider>
          </CacheProvider>)
      }


    </>
  )
}

export default MyApp
