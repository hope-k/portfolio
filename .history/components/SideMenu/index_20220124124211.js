import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { Box, Stack, Text, Center, transition } from '@chakra-ui/react';
import gsap from 'gsap'
import SplitType from 'split-type'



const SideMenu = ({ open }) => {
    const t1 = useRef();
    const linkRef1 = useRef()
    const linkRef2 = useRef()
    const linkRef3 = useRef()
    const linkRef4 = useRef()


    useLayoutEffect(() => {


        t1.current = gsap.timeline({ paused: true, defaults: { duration: .65 } })
            .to('#sideMenu', { left: '0', right: 0, opacity: '1', ease: 'power4.inOut' })

        return t1.current.kill()

    }, [])

    useEffect(() => {
        if (open) {
            t1.current.play()
        }
        if (open === false) {
            t1.current.reverse(.66)
        }
    }, [open, t1])

    useLayoutEffect(() => {
        const link1 = new SplitType(linkRef1.current)
        const link2 = new SplitType(linkRef2.current)
        const link3 = new SplitType(linkRef3.current)
        const link4 = new SplitType(linkRef4.current)
        const t2 = gsap.timeline();
        t2.from('#stack', { x: 20, opacity: 0, stagger: { each: 0.03 } })
            .from(link1.chars, { x: 20, opacity: 0, stagger: { each: 0.03 } })
            .from(link2.chars, { x: 20, opacity: 0, stagger: { each: 0.03 } })
            .from(link3.chars, { x: 20, opacity: 0, stagger: { each: 0.03 } })
            .from(link4.chars, { x: 20, opacity: 0, stagger: { each: 0.03 } })


    }, [])
    return (


        <>
            <Box id='sideMenu' display={['flex', 'none']} opacity={'1'} alignItems={'center'} justifyContent={'center'} d='flex' position='fixed' zIndex={'9'} top={0} bottom={0} right={'-15rem'} height={'100vh'} background={'rgba(36, 36, 36, .97)'}>
                <Box d='flex'>
                    <Stack id='stack' color='#ccc' direction={'column'} fontFamily={'rale'} fontSize={'2.5rem'} letterSpacing={'4px'} >
                        <Text ref={linkRef1} transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Home</Text>
                        <Text ref={linkRef2} transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Works</Text>
                        <Text ref={linkRef3} transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>About</Text>
                        <Text ref={linkRef4} transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Contact</Text>
                    </Stack>
                </Box>
            </Box>
        </>






    )
};

export default SideMenu;
