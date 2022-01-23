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
  overflow-y: hidden;
  z-index: -2;
  filter: brightness(50%);
  background-image:
    linear-gradient(to left, rgba(00, 246, 252, 0.1), rgba(117, 19, 93, 0.1)),
    url('/Hexagon.jpeg');
  background-image:  linear-gradient(red, yellow);


`



const Background = () => {

  return (
    <>
      <SvgBg />
    </>
  )
};

export default Background;
