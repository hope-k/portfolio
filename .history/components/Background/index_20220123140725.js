import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const SvgBg = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  object-fit: cover;
  background-size: cover;
  background-position: left;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  filter: brightness(70%);
  background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, .1), rgba(117, 19, 93, .4)),
    url('/Hexagon.jpeg');


`



const Background = () => {

  return (
    <>
      <SvgBg />
    </>
  )
};

export default Background;
