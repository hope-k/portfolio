import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const SvgBg = styled.div`
  height: 100vh;
  width: 100 %;
  position: absolute;
  left: 0;
  background: black
  right: 0;
  bottom: 0;
  overflow - y: hidden;
  z-index: -2;
  filter: brightness(50%);

`



const Background = () => {

  return (
    <>
      <SvgBg/>
    </>
  )
};

export default Background;
