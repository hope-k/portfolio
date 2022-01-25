import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Home from '../components/Home'
import { gsap } from "gsap/dist/gsap";

export default function Index() {
  useEffect(() => {
    gsap.from('#', {
      opacity: 0,
      ease: 'sine.in',
      duration: .8
    })
  },[])


  return (
    <>

      <Layout>
        <div id='home'>
          <Home />
        </div>
      </Layout>
    </>
  );
}
