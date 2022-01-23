import { ChakraProvider } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    
  })


return (
  <>
    {
      loaded &&
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    }

  </>
)
}

export default MyApp
