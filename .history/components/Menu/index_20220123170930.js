import React from 'react';
import styled from '@emotion/styled';

const MenuItem = styled.div`
    width: 25px;
    height: 2px;
    cursor: pointer;
    background: white;
    transition: all .45s ease;
    z-index: 1;
    display: block;
    margin-bottom: 4px;
    
    
    

    &:nth-child(2){
        width: 19px;
        position: absolute;
        right: 0;
    }    
    &:nth-child(3){
        width: 14px;
        position: absolute;
        bottom: 0;
        right: 0;
    }


`

const Menu= () => {
    return (
        <div style={{position: 'relative'}}>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
        </div>
    );
};

export default Menu;
