import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { Box, Stack, Text, Center, transition } from '@chakra-ui/react';
import gsap from 'gsap'



const SideMenu = ({ open }) => {
    const t1 = useRef()


    useLayoutEffect(() => {
        t1.current = gsap.timeline({paused: true})
            .to('#sideMenu', { left: '0', right: 0, opacity: '1', ease: 'power4.inOut', duration: .45 });
            .from('#links', {} )


        return t1.current.kill()

    },[])

    useEffect(() => {
        if (open) {
            t1.current.play()
        } 
        if(open === false) {
            t1.current.reverse(.66)
        }
    }, [open, t1])
    return (


        <>
            <Box id='sideMenu' display={['flex', 'none']} opacity={'1'} alignItems={'center'} justifyContent={'center'} d='flex' position='fixed' zIndex={'9'} top={0} bottom={0} right={'-15rem'}  height={'100vh'}  background={'rgba(36, 36, 36, .97)'}>
                <Box d='flex'>
                    <Stack color='#ccc' direction={'column'} fontFamily={'rale'} fontSize={'2.5rem'} letterSpacing={'4px'} >
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
