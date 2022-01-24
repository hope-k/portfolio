import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react'
const MenuItem = styled.div`
    width: 25px;
    ${({ open }) => open && 'width: 14px'};
    height: 2px;
    cursor: pointer;
    background: white;
    transition: all .45s ease;
    z-index: 1;
    display: block;
    margin-bottom: 4px;
    transition: all .5s cubic-bezier(.215, .61, .355, 1);

    

     
    &:nth-child(2){
        width: 19px;
        position: absolute;
        right: 0;
        ${({ open }) => open && 'left: 0'};

    }    
    &:nth-child(3){
        width: ${({ open }) =>  open ? '25px' : '14px' };
        position: absolute;
        right: 0;
        bottom: 5px;
        ${({ open }) => open && 'left: 0'};
    }


`
transition: all .5s cubic - bezier(.215, .61, .355, 1);

const Menu = ({open}) => {
    return (
        <>
        <Box trans>
            <MenuItem open={open}></MenuItem>
            <MenuItem open={open}></MenuItem>
            <MenuItem open={open}></MenuItem>

        </Box>
        </>
    );
};

export default Menu;
