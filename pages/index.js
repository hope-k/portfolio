import React from 'react'
import Background from '../components/Background'
import Layout from '../components/Layout'
import Home from '../components/Home'

export default function Index() {

  return (
    <>
    
      <Background />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
