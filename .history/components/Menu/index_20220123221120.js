import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react'
const MenuItem = styled.div`
    width: ${({ open }) => open ? '14px' : '100%'};
    height: 2px;
    cursor: pointer;
    background: white;
    transition: all .45s ease;
    z-index: 1;
    display: block;
    margin-bottom: 4px;
    transition: all .5s cubic-bezier(.215, .61, .355, 1);
    &:nth-child(1){
        ${({ open }) => open && 'left: 0px'};

    }

    

     
    &:nth-child(2){
        width: 25px;
        position: absolute;
        right: 0;
        transition: all .5s cubic-bezier(.215, .61, .355, 1);
        ${({ open }) => open && 'right: .3rem'};
        cursor: pointer;

    }    
    &:nth-child(3){
        transition: all .5s cubic-bezier(.215, .61, .355, 1);
        cursor: pointer;
        width: ${({ open }) => open ? '100%' : '17px'};
        position: absolute;
        right: 0;
        bottom: 5px;
    }


`

const Menu = ({ open }) => {
    return (
        <>
            <Box position='relative' h='25px' w='30px'  cursor={'pointer'} transition={'transition: all .5s cubic-bezier(.215, .61, .355, 1)'}>
                <MenuItem i open={open}></MenuItem>
                <MenuItem open={open}></MenuItem>
                <MenuItem open={open}></MenuItem>
            </Box>
        </>
    );
};

export default Menu;
