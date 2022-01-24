import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { Box, Stack, Text, Center, transition } from '@chakra-ui/react';
import gsap from 'gsap'



const SideMenu = ({ open }) => {
    const t1 = useRef()


    useLayoutEffect(() => {
        t1.current = gsap.timeline({paused: true})
            .to('#sideMenu', { left: '0', opacity: '1', ease: 'power3.inOut', duration: 1 });


        return t1.current.kill()

    },[])

    useEffect(() => {
        if (open) {
            t1.current.play()
        } 
        if(open === false) {
            t1.current.reverse()
        }
    }, [open, t1])
    return (


        <>
            <Box id='sideMenu' opacity={'0'} alignItems={'center'} justifyContent={'center'} d='flex' position='fixed' zIndex={'9'} top={0} bottom={0} left={'30rem'} right={0} height={'100vh'} width={'100%'} background={'rgba(36, 36, 36, 1)'}>
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
