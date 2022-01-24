import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const SvgBg = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  filter: brightness(20%);
  overflow: hidden;
  background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, .1), rgba(117, 19, 93, .6)),
    url('https://res.cloudinary.com/hopekumordzie/image/upload/v1642989342/abstract-background-with-a-modern-tech-low-poly-design-free-vector_vitgkf.jpg');


`



const Background = () => {

  return (
    <>
      <SvgBg />
    </>
  )
};

export default Background;
