/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { SimpleGrid, Container, Box, Flex, Center, Text, Button } from '@chakra-ui/react';

const Home = () => {
  return (

    <Container d='flex' justifyContent='center' alignItems={'center'} maxW={['21rem', '41rem', '70rem']} h='100vh'>
      <Flex mt={['6rem', '0']} alignItems={'center'} w='100%' flexDir={['column', 'row']} fontFamily={'rale'}>
        <Box mb={['3rem', '0']} color='white' d='flex' flexDir={'column'} justifyContent={'center'} width={'100%'} position={'relative'}>
          <Text maxW={'100%'} color='teal' fontSize='1.4rem' ml='2rem'><hr style={{ display: 'inline-block', width: '2rem', position: 'absolute' }} />HELLO THERE,</Text>
          <Text fontSize={'4rem'}> I am <b>Hope Kumordzie.</b> </Text>
          <Text fontWeight={'600'} fontSize={'2.5rem'}> A FullStack Web Developer </Text>
          <Box display={['none', 'inline-block']}>
            <hr style={{ display: 'inline-block', width: '20rem', position: 'absolute', bottom: '-1rem', left: '5rem', borderTop: '1px solid yellow' }} />
          </Box>
        </Box>
        <Box transition={'all 1s ease-in'}>
          <Button transition={'all .45s ease'} mb='1rem' _hover={{ bg: 'teal', pl: '2rem' }} borderColor={'teal'} color='white' variant={'outline'}>LATEST PROJECTS</Button>
          <Button transition={'all .45s ease'} mb='1rem' _hover={{ bg: 'purple.100', pl: '2rem', color: 'black' }} color='white' variant={'outline'} borderColor={'purple.100'}>MORE ABOUT ME</Button>
        </Box>
      </Flex>
    </Container>

  );
};

export default Home;
