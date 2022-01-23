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
  background-image: linear-gradient(from bottom, rgba(245, 246, 252, 0.52) 0%, rgba(117, 19, 93, 0.73) 100%),url('images/background.jpg');

`



const Background = () => {

  return (
    <>
      <SvgBg />
    </>
  )
};

export default Background;
