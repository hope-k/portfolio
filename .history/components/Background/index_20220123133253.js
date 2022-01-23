import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const SvgBg = styled.div`
  height: 100vh;
  width: 100 %;
  position: absolute;
  object-fit: cover;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: hidden;
  z-index: -2;
  filter: brightness(50%);
      background-image: url("http://www.skrenta.com/images/stackoverflow.jpg"), linear-gradient(red, yellow);


`



const Background = () => {

  return (
    <>
      <SvgBg />
    </>
  )
};

export default Background;
