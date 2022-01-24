import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react'
const MenuItem = styled.div`
    width: ${({ open }) => open ? '14px' : '25px'};
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
        transition: all .5s cubic-bezier(.215, .61, .355, 1);
        ${({ open }) => open && 'left: rem'};

    }    
    &:nth-child(3){
        transition: all .5s cubic-bezier(.215, .61, .355, 1);

        width: ${({ open }) =>  open ? '25px' : '14px' };
        position: absolute;
        right: 0;
        bottom: 5px;
    }


`

const Menu = ({open}) => {
    return (
        <>
            <Box transition={'transition: all .5s cubic-bezier(.215, .61, .355, 1)'}>
            <MenuItem open={open}></MenuItem>
            <MenuItem open={open}></MenuItem>
            <MenuItem open={open}></MenuItem>

        </Box>
        </>
    );
};

export default Menu;
