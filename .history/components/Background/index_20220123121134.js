import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'

const svgbg = styled.div``

.background {
  height: 100vh;
  width: 100 %;
  position: absolute;
  background: url('/bg.svg');
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow - y: hidden;
  z - index: -2;
  filter: brightness(50 %);

}

const Background = () => {
 
    return (
        <>
            <div></div>
        </>
    )
};

export default Background;
