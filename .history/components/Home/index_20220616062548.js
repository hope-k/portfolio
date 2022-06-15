import React, { useLayoutEffect, useState, useRef, useEffect } from 'react';
import { SimpleGrid, Container, Box, Flex, Center, Text, Button, background } from '@chakra-ui/react';
import SplitType from 'split-type';
import { SlowMo } from "gsap/dist/EasePack";
import Background from '../Background';
import About from '../About'
import gsap from "gsap";
import NavBar from '../Nav';
import { Element, animateScroll as scroll, } from 'react-scroll'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Link from 'next/link'
import Works from '../Works'
import Contact from '../Contact';




gsap.registerPlugin(ScrollTrigger);



const Home = () => {
  const introRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const bgTrigger = useRef(null);
  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    gsap.registerPlugin(SlowMo);
    const text1 = new SplitType(introRef.current);
    const text2 = new SplitType(nameRef.current);
    const text3 = new SplitType(titleRef.current);

    const t1 = gsap.timeline({ defaults: { duration: 1 } });
    t1.from('#line1', { width: 0, ease: 'sine.in', duration: .8 })
      .from(text1.chars, { duration: 8, x: -15, opacity: 0, ease: 'Power0.ease', stagger: { each: 0.3, from: 'start' } })
      .from(text2.chars, { color: 'teal', y: 10, opacity: 0, scale: 1.6, ease: "sine.out", stagger: { each: 0.09, from: 'start' }, duration: .8 }, '-=11')
      .from(text3.chars, { y: -60, color: 'red', opacity: 0, ease: 'Bounce.easeOut', stagger: { each: 0.1, from: 'random' } }, '-=8')
      .to(text3.chars, { color: 'white', textShadow: '0px 0px 15px #fff', ease: 'rough({strength: 5})', stagger: { each: 0.2, from: 'random' }, repeat: -1, repeatDelay: 3 }, '-=8')
      .from('#buttonOne', { y: -7, opacity: 0, }, '-=2')
      .from('#buttonTwo', { y: 7, opacity: 0, }, '-=2')
      .from('#line2', { width: 0, borderTop: '0px solid teal', ease: 'sine.in', duration: .8, borderTopColor: 'teal' }, '-=3')


    return () => t1.kill();
  }, [])












  return (

    <>
      <NavBar />
      <Box position={'relative'} ref={bgTrigger} id='home' h='100%' w>
        <Background trigger={bgTrigger} />
        <Container d='flex' justifyContent='center' alignItems={'center'} maxW={['21rem', '30rem', '70rem']} minH='100vh'>
          <Flex mt={['6rem', '0']} alignItems={['flex-start', 'flex-start', 'center']} w='100%' flexDir={['column', 'column', 'row']}>
            <Box mb={['3rem', '4rem', '0']} color='white' d='flex' flexDir={'column'} justifyContent={'center'} width={'100%'} position={'relative'}>
              <hr id='line1' style={{ display: 'inline-block', width: '2rem', position: 'relative', left: '3rem' }} />
              <Text className='poiret' maxW={'100%'} color='teal' fontSize='1.4rem' ml='2rem' ref={introRef}>HELLO THERE,</Text>
              <Text color='#ccc' className='righteous' letterSpacing={'-2.2px'} fontWeight={['600', '700']} fontSize={['2.3rem', '4.5rem']} mt={['1rem', '2rem', '0rem']} ref={nameRef}>I&apos;m Hope Kumordzie.</Text>
              <Text color='rgba(192,192,192,.3)' className='poiret' fontWeight={['500', '800']} fontSize={'2.5rem'} ref={titleRef}> A FullStack Web Developer &lt;/&gt; </Text>
              <Box display={['none', 'inline-block']}>
                <hr id='line2' style={{ display: 'inline-block', width: '20rem', position: 'absolute', bottom: '-1rem', left: '5rem', borderTop: '.5px solid yellow' }} />
              </Box>
            </Box>
            <Box d='inline-block' className='poiret'>
              <Link href='/#about' passHref scroll={false}>
                <Button id='buttonOne' transition={'all .25s ease'} mb='1rem' _hover={{ bg: 'purple.100', pl: '2rem', color: 'black' }} color='white' variant={'outline'} borderColor={'purple.100'}>MORE ABOUT ME</Button>
              </Link>
              <Link href='/#works' passHref scroll={false}>
                <Button id='buttonTwo' transition={'all .25s ease'} mb='1rem' ml={['0', '2rem', '0', '0']} _hover={{ bg: 'teal', pl: '2rem' }} borderColor={'teal'} color='white' variant={'outline'}>LATEST PROJECTS</Button>
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>
        <Box d='flex' position={'relative'} w='100%' minH={'100%'} py='5rem'>
          <div className='aboutbg'></div>
          <About />
        </Box>

        <Box d='flex' position={'relative'} w='100%'>
          <div className='workbg' ></div>
          <Center className='poiret' justifyContent={'center'} alignItems={'center'} m='auto' position={'absolute'} width={'100%'} h='7vh' top={'0'} bg='rgba(0, 0, 0, .2)' >
            <Text fontSize={['1.3rem', '3rem']} letterSpacing={['1rem', '2rem']} fontWeight={'900'} color='rgba(192,192,192,.07)' >
              H.K
            </Text>
          </Center>
          <Works />
        </Box>
      


      <Box position={'relative'} minH={['60rem', '45rem']}>
          <div className='contactbg' ></div>
          <Contact/>
        </Box>



    </>

  );
};

export default Home;
