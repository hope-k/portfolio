import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Box, Stack, Text, Center, transition } from '@chakra-ui/react';
import gsap from 'gsap'



const SideMenu = ({ open }) => {
    const t1 = useRef()
    
    
    useLayoutEffect(() => {
        t1.current = gsap.timeline();
            .from('#sideMenu', { left: '30rem', ease: 'power3.inOut', duration: 1.25});

    })

    useEffect(() => {
        if(open){

        }
    })
    return (


        <>
            <Box id='sideMenu' visibility={`${open ? 'visible' : 'hidden'}`} alignItems={'center'} justifyContent={'center'} d='flex' position='fixed' zIndex={'9'} top={0} bottom={0} left={0} right={0} height={'100vh'} width={'100%'} background={'rgba(36, 36, 36, 1)'}>
                <Box d='flex'>
                    <Stack color='#ccc' direction={'column'} fontFamily={'rale'} fontSize={'3rem'} >
                        <Text transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Home</Text>
                        <Text transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Works</Text>
                        <Text transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>About</Text>
                        <Text transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Contact</Text>
                    </Stack>
                </Box>
            </Box>
        </>






    )
};

export default SideMenu;
