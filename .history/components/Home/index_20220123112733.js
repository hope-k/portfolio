/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { SimpleGrid, Container, Box, Flex, Center, Text } from '@chakra-ui/react';

const Home = () => {
  return (

    <Container d='flex' jus maxW={['21rem', '41rem', '75rem']} h='100vh' background='red'>
      <Flex maxW={'100vw'}>
        <Box color='white' d='flex' flexDir={'column'} justifyContent={'center'} width={'100%'}>
          <Text fontSize='1.4rem' ml='2rem'><hr style={{ display: 'inline-block', width: '2rem', position: 'absolute' }} />HELLO THERE,</Text>
          <Text fontSize={'4rem'}> I am <b>Hope Kumordzie.</b> </Text>
          <Text fontSize={'2.5rem'}> A FullStack Web Developer </Text>
        </Box>

      </Flex>
    </Container>

  );
};

export default Home;
