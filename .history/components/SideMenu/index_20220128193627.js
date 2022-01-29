import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { Box, Stack, Text, Center, transition } from '@chakra-ui/react';
import gsap from 'gsap'
import SplitType from 'split-type'
import Link from 'next/link'


const SideMenu = ({ open }) => {
    const t1 = useRef()

    useLayoutEffect(() => {


        t1.current = gsap.timeline({ paused: true, defaults: { duration: .65 } })
            .to('#sideMenu', { left: 0, right: 0, opacity: 1, ease: 'power4.inOut' })
            .from('#menuLink', { duration: .68, opacity: 0, y: 11, ease: 'circ.out', stagger: { each: 0.15 } }, '-=.64')


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

            <Box display={['flex', 'none']} id='sideMenu' opacity={0} alignItems={'center'} justifyContent={'center'} d='flex' position='fixed' zIndex={'9'} top={0} bottom={0} right={'-15rem'} height={'100vh'} background={'rgba(36, 36, 36, .97)'}>
                <Box d='flex'>
                    <Stack color='#ccc' direction={'column'} fontFamily={'rale'} fontSize={'2.5rem'} letterSpacing={'4px'} >
                        <Link href='/#home' passHref>
                            <Text on id='menuLink' transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Home</Text>
                        </Link>
                        <Link href='/#works' passHref>
                            <Text id='menuLink' transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Works</Text>

                        </Link>
                        <Link href='/#about' passHref>
                            <Text id='menuLink' transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>About</Text>

                        </Link>
                        <Link href={'/#contact'} passHref>
                            <Text id='menuLink' transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Contact</Text>
                        </Link>
                    </Stack>
                </Box>
            </Box>
        </>






    )
};

export default SideMenu;