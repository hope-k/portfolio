import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { Box, Stack, Text, Center, Flex } from '@chakra-ui/react';
import gsap from 'gsap'
import SplitType from 'split-type'
import Link from 'next/link'


const SideMenu = ({ open, toggleOpen }) => {
    const t1 = useRef()

    useLayoutEffect(() => {

 
        t1.current = gsap.timeline({ paused: true, defaults: { duration: .65 } })
            .to('#sideMenu', {  right: 0, opacity: 1, ease: 'Expo.easeInOut' })
            .from('#sideMenuCurtain', { xPercent: -100 }, '-=.58')
            .to('#sideMenuCurtain', { opacity: 1 }, '-=.58')
            .from('#menuLink', { duration: .75, opacity: 0, y: 9, ease: 'Expo.easeOut', stagger: { each: 0.17 } }, '-=.64')


        return t1.current.kill()

    }, [])

    useEffect(() => {
        if (open) {
            t1.current.play()
        }
        if (!open) {
            t1.current.reverse(.45)
        }
    }, [open, t1])


    return (


        <>

            <Box w='85%' className='side-menu' display={['flex', 'none']} id='sideMenu' opacity={0} alignItems={'center'} justifyContent={'center'} d='flex' position='fixed' zIndex={'9'} top={0} bottom={0} right={'0'} height={'100vh'} background={'rgba(36, 36, 36, .85)'}>
                <Box d='flex'>
                    <Stack color='#ccc' direction={'column'} className='poiret' fontSize={'2.5rem'} letterSpacing={'4px'} >
                        <Link href='/#home' passHref scroll={false}>
                            <Text letterSpacing={'-1px'} onClick={() => toggleOpen()} id='menuLink' transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Home</Text>
                        </Link>
                        <Link href='/#works' passHref scroll={false}>
                            <Text letterSpacing={'-1px'} onClick={() => toggleOpen()} id='menuLink' transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Works</Text>
                        </Link>
                        <Link href='/#about' passHref scroll={false}>
                            <Text letterSpacing={'-1px'} onClick={() => toggleOpen()} id='menuLink' transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>About</Text>
                        </Link>
                        <Link href={'/#contact'} passHref scroll={false}>
                            <Text letterSpacing={'-1px'} onClick={() => toggleOpen()} id='menuLink' transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Contact</Text>
                        </Link>
                    </Stack>
                    <Box fontWeight={400} bg='blackAlpha.300' position={'absolute'} bottom='0' h='5vh' w='100vw' left='0'>
                        <Center h='100%' d='flex' justifyContent={'center'} alignItems={'center'}>
                            <Text color='whiteAlpha.400'>Hope Kumordzie &copy;</Text>
                        </Center>
                    </Box>
                </Box>
            </Box>
            <Box className='side-menu' background={'rgba(36, 36, 36, .65)'} opacity={'0'} zIndex={'9'} id='sideMenuCurtain' left='0' top='0' bottom='0' width='15%' position={'absolute'}>
            </Box>
        </>






    )
};

export default SideMenu;
