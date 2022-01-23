import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const SvgBg = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  background-size: cover;
  background-position: left;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, .1), rgba(117, 19, 93, .5)),
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
