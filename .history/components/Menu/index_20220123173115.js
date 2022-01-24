import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react'
const MenuItem = styled.div`
    width: ${({ open }) => { open ? 14 : '1rem' }};
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
        right: ${({open}) => {open ? 0 : '1rem'}};

    }    
    &:nth-child(3){
        width: ${({ open }) => { open ? '25px' : '14px' }};
        position: absolute;
        bottom: 5px;
        right: ${({ open }) => { open ? 0 : '1rem' }};
    }


`

const Menu = ({open}) => {
    return (
        <>
            <MenuItem open={open}></MenuItem>
            <MenuItem open={open}></MenuItem>
            <MenuItem open={open}></MenuItem>
        </>
    );
};

export default Menu;