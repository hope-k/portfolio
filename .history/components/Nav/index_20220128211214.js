import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import NextLink from 'next/link'
import { Box, Text, Container, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import Menu from '../Menu/index'
import gsap from 'gsap'
import SplitType from 'split-type';
import SideMenu from '../SideMenu';
import { Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const NavBar = ({ aboutVisible }) => {

    const logoRef = useRef();
    const [open, setIsOpen] = useState(false)
    const router = useRouter();
    const toggleOpen = () => setIsOpen(!open)
    useLayoutEffect(() => {
        if (typeof window === 'undefined') {
            return
        }
        const logoSplit = new SplitType(logoRef.current)

        const t1 = gsap.timeline({ defaults: { duration: .5, delay: 1 } });
        t1.from('#nav', { top: '-65px', opacity: 0, ease: 'Power4.ease' })
            .from('#links', { opacity: 0, duration: 1.2, scale: .8, ease: 'Power4.easeInOut', stagger: { each: 0.24 } })
            .from(logoSplit.chars, { opacity: 0, scale: 2.5, ease: 'bounce.out', stagger: { each: 0.6 } }, '-=.4')


    }, [])
    useLayoutEffect(() => {
        const navAnimation = gsap.from('#nav', {
            yPercent: -100,
            paused: true,
            duration: .85,
            ease: 'Expo.easeInOut',


        }).progress(1)

        ScrollTrigger.create({
            start: 'top top',
            end: 99999,
            onUpdate: (self) => {
                self.direction === -1 ? navAnimation.play() : navAnimation.reverse()
            }
        })
    }, [])




    return (
        <>
            <Box className='poiret' id='nav' position='fixed' d='flex' left='0' top={0} background={['rgba(0, 0, 0, .95)', 'rgba(0, 0, 0, .8)']} w={'100%'} zIndex={10}>
                <Container maxW={['21rem', '40rem', '90rem']} p={'3'} zIndex={10}>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <NextLink>
                            <Box cursor={'pointer'}>
                                <Text id='logo' ref={logoRef} fontSize={[25, 30]} color='#ccc' fontWeight='bold'>HK</Text>
                            </Box>

                        </NextLink>
                        <Flex color='white'>
                            <Flex display={['none', 'inline-flex']}>
                                <NextLink href='/#home' passHref>
                                    <Text id='links' _hover={{ color: 'purple.300' }} transition={'all .4s ease'} mr={'6'} letterSpacing={'1.7px'} cursor={'pointer'} color={router.pathname === '/#' ? 'teal' : 'white'}>Home</Text>
                                </NextLink>
                                <NextLink href='/#works'>
                                    <Text id='links' _hover={{ color: 'purple.300' }} transition={'all .4s ease'} mr={'6'} letterSpacing={'1.7px'} cursor={'pointer'} color={router.pathname === '/#works' ? 'teal' : 'white'}>Works</Text>
                                </NextLink>
                                <NextLink href='/#contact'>
                                    <Text id='links' _hover={{ color: 'purple.300' }} transition={'all .4s ease'} mr={'6'} letterSpacing={'1.7px'} cursor={'pointer'} color={router.pathname === '/#contact' ? 'teal' : 'white'}>Contact</Text>
                                </NextLink>
                                <NextLink href='/#about' scroll={true}>
                                    <Text id='links' _hover={{ color: 'purple.300' }} transition={'all .4s ease'} mr={'6'} letterSpacing={'1.7px'} cursor={'pointer'} color={aboutVisible ? 'teal' : 'white'}>About</Text>
                                </NextLink>
                            </Flex>

                            <Box display={['inline-flex', 'none']} onClick={() => toggleOpen()} position={'relative'} top={'5px'} cursor={'pointer'} transition={'transition: all .5s cubic-bezier(.215, .61, .355, 1)'}>
                                <Menu style={{ cursor: 'pointer' }} open={open} />
                            </Box>
                        </Flex>

                    </Flex>
                </Container>
            </Box>
            <SideMenu open={open} toggleOpen={toggleOpen} />
        </>
    );
};

export default NavBar;
