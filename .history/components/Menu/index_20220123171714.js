import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react'
const MenuItem = styled.div`
    height: 2px;
    cursor: pointer;
    background: white;
    transition: all .45s ease;
    z-index: 1;
    display: block;
    margin-bottom: 4px;
    &:
    
    
    

    &:nth-child(2){
        width: 19px;
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
