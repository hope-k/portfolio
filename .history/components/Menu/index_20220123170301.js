import React from 'react';
import styled from '@emotion/styled';

const MenuItem = styled.div`
    width: 20px;
    height: 5px;
    cursor: pointer;
    background: white;
    transition: all .45s ease;
    z-index: 4;
    display: block;
    

    &:nth-child(2){
        width: 10px;
    }    
    &:nth-child(3){
        width: 2px;
    }


`

const Menu= () => {
    return (
        <div>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
        </div>
    );
};

export default MenuItem;
