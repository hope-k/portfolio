import React, {useLayoutEffect} from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react'
import gsap from 'gsap'




const MenuItem = styled.div`
    width: ${({ open }) => open ? '14px' : '100%'};
    height: 2px;
    cursor: pointer;
    background: white;
    transition: all .45s ease;
    z-index: 1;
    display: block;
    margin-bottom: 4px;
    transition: all .85s cubic-bezier(.215, .61, .355, 1);
    &:nth-of-type(1){
        ${({ open }) => open && 'left: 0px'};

    }

    

     
    &:nth-of-type(2){
        width: 25px;
        position: absolute;
        right: 0;
        transition: all .5s cubic-bezier(.215, .61, .355, 1);
        ${({ open }) => open && 'right: .3rem'};
        cursor: pointer;

    }    
    &:nth-of-type(3){
        transition: all .5s cubic-bezier(.215, .61, .355, 1);
        cursor: pointer;
        width: ${({ open }) => open ? '100%' : '17px'};
        position: absolute;
        right: 0;
        bottom: 5px;
    }


`

const Menu = ({ open }) => {
    useLayoutEffect(() => {
        if (typeof window === 'undefined') {
            return
        }
        const t1 = gsap.timeline({ defaults: { duration: 1.8, delay: 1.7 } });
        t1.from('#menu', { x: -15, opacity: 0, ease: 'Power0.ease', stagger: { each: 0.17, from: 'end' } })
    },[])
    return (
        <>
            <Box  position='relative' h='25px' w='30px'  cursor={'pointer'} transition={'transition: all .5s cubic-bezier(.215, .61, .355, 1)'}>
                <MenuItem id='menu' open={open}></MenuItem>
                <MenuItem id='menu' open={open}></MenuItem>
                <MenuItem id='menu' open={open}></MenuItem>
            </Box>
        </>
    );
};

export default Menu;
