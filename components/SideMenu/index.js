import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { Box, Stack, Text, Center, Flex } from '@chakra-ui/react';
import gsap from 'gsap'
import SplitType from 'split-type'
import Link from 'next/link'


const SideMenu = ({ open, toggleOpen }) => {
    const t1 = useRef()

    useLayoutEffect(() => {


        t1.current = gsap.timeline({ paused: true, defaults: { duration: .65 } })
            .to('#sideMenu', { right: '0', opacity: 1, ease: 'Expo.easeInOut' })
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

            <Box w='85vw' className='side-menu' right={'-15rem'} display={['flex', 'none']} id='sideMenu' opacity={0} alignItems={'center'} justifyContent={'center'} d='flex' position='fixed' zIndex={'9'} top={0} bottom={0} height={'100vh'} background={'rgba(36, 36, 36, .85)'}>
                <Box d='flex'>
                    <Stack color='#ccc' direction={'column'} className='poiret' fontSize={'2.5rem'} letterSpacing={'4px'} >
                        <Link href='/#home' passHref scroll={false}>
                            <Text letterSpacing={'-1px'} onClick={() => toggleOpen()} id='menuLink' transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Home</Text>
                        </Link>
                        <Link href='/#about' passHref scroll={false}>
                            <Text letterSpacing={'-1px'} onClick={() => toggleOpen()} id='menuLink' transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>About</Text>
                        </Link>
                        <Link href='/#works' passHref scroll={false}>
                            <Text letterSpacing={'-1px'} onClick={() => toggleOpen()} id='menuLink' transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Projects</Text>
                        </Link>
                        <Link href={'/#contact'} passHref scroll={false}>
                            <Text letterSpacing={'-1px'} onClick={() => toggleOpen()} id='menuLink' transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Contact</Text>
                        </Link>
                        <Link href='https://github.com/hope-k?tab=repositories' passHref>
                            <Flex fontSize={'.8rem'} alignItems='center' id='menuLink' position={'relative'} top='3rem' border='1px' borderColor='white' borderRadius='4rem' padding={'.3rem'}>
                                <Box fill={'white'} h='24px' w='24px' mr='8px'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </Box>
                                <Text color='white'>GITHUB</Text>
                            </Flex>
                        </Link>
                    </Stack>
                    <Box fontWeight={400} bg='blackAlpha.300' position={'absolute'} bottom='0' h='4vh' w='100vw' left='0'>
                        <Center h='100%' d='flex' justifyContent={'center'} alignItems={'center'}>
                            <Text color='whiteAlpha.400'>Hope Kumordzie &copy;</Text>
                        </Center>
                    </Box>
                </Box>
            </Box>
            <Box display={['flex', 'none']} className='side-menu' background={'rgba(36, 36, 36, .90)'} opacity={'0'} zIndex={'9'} id='sideMenuCurtain' left='0' top='0' bottom='0' width='15vw' height='100vh' position={'fixed'}>
            </Box>
        </>






    )
};

export default SideMenu;


