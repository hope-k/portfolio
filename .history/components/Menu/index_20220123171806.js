import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react'
const MenuItem = styled.div`
    width: 25px;
    height: 2px;
    cursor: pointer;
    background: white;
    transition: all .45s ease;
    z-index: 1;
    display: block;
    margin-bottom: 4px;
    &:nth-child(1){
        width: 250px;
        left: 0;
    }
    
    
    

    &:nth-child(2){
        width: 190px;
        position: absolute;
        right: 0;
    }    
    &:nth-child(3){
        width: 14px;
        position: absolute;
        bottom: 5px;
        right: 0;
    }


`

const Menu = () => {
    return (
        <Box>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
        </Box>
    );
};

export default Menu;
