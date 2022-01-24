import React, { useEffect } from 'react';
import { SimpleGrid, Container, Box, Flex, Center, Text, Button } from '@chakra-ui/react';
import gsap from 'gsap';
import SplitType from 'split-type';



const Home = () => {


  return (

    <Container d='flex' justifyContent='center' alignItems={'center'} maxW={['21rem', '30rem', '70rem']} h='100vh'>
      <Flex mt={['6rem', '0']} alignItems={['flex-start', 'flex-start', 'center']} w='100%' flexDir={['column', 'column', 'row']} fontFamily={'rale'}>
        <Box mb={['3rem', '4rem', '0']} color='white' d='flex' flexDir={'column'} justifyContent={'center'} width={'100%'} position={'relative'}>
          <Text maxW={'100%'} color='teal' fontSize='1.4rem' ml='2rem'><hr style={{ display: 'inline-block', width: '2rem', position: 'absolute' }} />HELLO THERE,</Text>
          <Text fontSize={['2.3rem', '4rem']} mt={['1rem', '2rem', '0rem']}> I am <b>Hope Kumordzie.</b> </Text>
          <Text fontWeight={['500', '600']} fontSize={'2.5rem'}> A FullStack Web Developer </Text>
          <Box display={['none', 'inline-block']}>
            <hr style={{ display: 'inline-block', width: '20rem', position: 'absolute', bottom: '-1rem', left: '5rem', borderTop: '2px solid yellow' }} />
          </Box>
        </Box>
        <Box transition={'all 1s ease-in'} d='inline-block'>
          <Button transition={'all .45s ease'} mb='1rem' _hover={{ bg: 'teal', pl: '2rem' }} borderColor={'teal'} color='white' variant={'outline'}>LATEST PROJECTS</Button>
          <Button transition={'all .45s ease'} mb='1rem' ml={['0', '2rem', '0', '0']} _hover={{ bg: 'purple.100', pl: '2rem', color: 'black' }} color='white' variant={'outline'} borderColor={'purple.100'}>MORE ABOUT ME</Button>
        </Box>
      </Flex>
    </Container>

  );
};

export default Home;
