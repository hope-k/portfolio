import { ChakraProvider } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import emotionCache from '../lib/emotion-cache'
import { CacheProvider } from "@emotion/react";
import { extendTheme } from '@chakra-ui/react'
import '../styles/globals.scss'
import 'antd/dist/antd.css';


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
