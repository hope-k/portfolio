import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const SvgBg = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  filter: brightness(50%);
  background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.5)),
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