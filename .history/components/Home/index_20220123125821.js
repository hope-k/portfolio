/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { SimpleGrid, Container, Box, Flex, Center, Text, Button } from '@chakra-ui/react';

const Home = () => {
  return (

    <Container d='flex' justifyContent='center' maxW={['21rem', '41rem', '70rem']} h='100vh'>
      <Flex  alignItems={'center'} w='100%'>
        <Box color='white' d='flex' flexDir={'column'} justifyContent={'center'} width={'100%'}>
          <Text fontSize='1.4rem' ml='2rem'><hr style={{ display: 'inline-block', width: '2rem', position: 'absolute' }} />HELLO THERE,</Text>
          <Text fontSize={'4rem'}> I am <b>Hope Kumordzie.</b> </Text>
          <Text fontSize={'2.5rem'}> A FullStack Web Developer </Text>
        </Box>
        <Box transition={'all .3s ease-in'}>
            <Button mb='1rem' _hover={{bg:'teal', px: '2rem'}} borderColor={'teal'} color='white' variant={'outline'}>LATEST PROJECTS</Button>
          <Button transition={'padding .3s ease-in'} color='white' variant={'outline'} borderColor={'purple.100'}>MORE ABOUT ME</Button>
        </Box>

      </Flex>
    </Container>

  );
};

export default Home;
