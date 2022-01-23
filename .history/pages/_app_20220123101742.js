import { ChakraProvider } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if(document.readyState !== 'loading'){
      setLoaded(true)
    }
  },[])


return (
  <>
    
      <ChakraProvider>
      loaded &&
        <Component {...pageProps} />
      </ChakraProvider>
    

  </>
)
}

export default MyApp
