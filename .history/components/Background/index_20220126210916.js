import React, { useState, useLayoutEffect } from 'react'
import styled from '@emotion/styled'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; gsap.registerPlugin(ScrollTrigger);


const SvgBg = styled.div`
  position: absolute;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100vw;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -2;
  filter: brightness(15%);
  background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, .1), rgba(117, 19, 93, .6)),
    url('https://res.cloudinary.com/hopekumordzie/image/upload/v1642989342/abstract-background-with-a-modern-tech-low-poly-design-free-vector_vitgkf.jpg');


`



const Background = ({trigger}) => {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    gsap.to('#bg', {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: $,
        scrub: 1
      }
    })


  }, [])

  return (
    <>
      <SvgBg id='bg'/>
    </>
  )
};

export default Background;
