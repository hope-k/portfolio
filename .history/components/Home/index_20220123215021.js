import React, { useLayoutEffect, useRef } from 'react';
import { SimpleGrid, Container, Box, Flex, Center, Text, Button } from '@chakra-ui/react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { SlowMo } from "gsap/dist/EasePack";



const Home = () => {
  const introRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  useLayoutEffect(() => {
    if (typeof window === 'undefined'){
      return
    }
    gsap.registerPlugin(SlowMo);
    const text1 = new SplitType(introRef.current);
    const text2 = new SplitType(nameRef.current);
    const text3 = new SplitType(titleRef.current);
    
    const t1 = gsap.timeline({ duration: 1 });
    t1.from(text1.chars, { x: -5, opacity: 0, ease: 'Power0.ease', stagger: { each: 0.1, from: 'start' } })
      .from(text2.chars, {y: 10, opacity: 0, scale: 1.6, ease: "sine.out", stagger: {each: 0.09, from: 'start'}, duration: .8 }, '-=.8')
      .from(text3.chars, { y: -60, opacity: 0, ease: 'bounce.out', stagger: {each: 0.1, from: 'random'}  })
      .from('#buttonOne', {y: -6, opacity: 0, ease: 'Power4.inOut'}, '-=.5')
      .from('#buttonTwo', {y: 6, opacity: 0, ease: 'bounce.in'}, '-=.5')
  })


  return (

    <Container d='flex' justifyContent='center' alignItems={'center'} maxW={['21rem', '30rem', '70rem']} h='100vh'>
      <Flex mt={['6rem', '0']} alignItems={['flex-start', 'flex-start', 'center']} w='100%' flexDir={['column', 'column', 'row']} fontFamily={'rale'}>
        <Box mb={['3rem', '4rem', '0']} color='white' d='flex' flexDir={'column'} justifyContent={'center'} width={'100%'} position={'relative'}>
          <hr style={{ display: 'inline-block', width: '2rem', position: 'relative', left: '3rem' }} />
          <Text maxW={'100%'} color='teal' fontSize='1.4rem' ml='2rem' ref={introRef}>HELLO THERE,</Text>
          <Text fontSize={['2.3rem', '4rem']} mt={['1rem', '2rem', '0rem']} ref={nameRef}> I am <b>Hope Kumordzie.</b> </Text>
          <Text fontWeight={['500', '600']} fontSize={'2.5rem'} ref={titleRef}> A FullStack Web Developer </Text>
          <Box display={['none', 'inline-block']}>
            <hr style={{ display: 'inline-block', width: '20rem', position: 'absolute', bottom: '-1rem', left: '5rem', borderTop: '2px solid yellow' }} />
          </Box>
        </Box>
        <Box transition={'all 1s ease-in'} d='inline-block'>
          <Button id='buttonOne' transition={'all .45s ease'} mb='1rem' _hover={{ bg: 'teal', pl: '2rem' }} borderColor={'teal'} color='white' variant={'outline'}>LATEST PROJECTS</Button>
          <Button id='buttonTwo' transition={'all .45s ease'} mb='1rem' ml={['0', '2rem', '0', '0']} _hover={{ bg: 'purple.100', pl: '2rem', color: 'black' }} color='white' variant={'outline'} borderColor={'purple.100'}>MORE ABOUT ME</Button>
        </Box>
      </Flex>
    </Container>

  );
};

export default Home;
