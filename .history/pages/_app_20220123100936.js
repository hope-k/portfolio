import { ChakraProvider } from '@chakra-ui/react'
import React, { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
