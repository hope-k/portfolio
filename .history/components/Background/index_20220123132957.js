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
  background-image: linear-gradient(from bottom, rgba(142, 20, 109, 1) 100%,  rgba(62, 51, 177, 1);,url('/images/background.jpg');

`



const Background = () => {

  return (
    <>
      <SvgBg />
    </>
  )
};

export default Background;
