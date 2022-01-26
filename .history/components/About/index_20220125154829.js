import React from 'react';
import { Flex, Box, Container, Text } from '@chakra-ui/react';

const About = () => {
    return (
        <Container  d='flex' maxW={['21rem', '30rem', '70rem']} background={'blue'}>
            <Flex alignSelf={'flex-start'}>
                <Text>ABOUT</Text>
                <Text>Personal Info</Text>
                <Text>Get to know more about me</Text>
            </Flex>
            <Flex w='100%' h='100%' background='red' justifyContent='center' alignItems={'center'}>
                <Box>
                    <Text>Hi There!</Text>
                    <Text maxW={'50ch'}>Lie rgerbwbttrb rtbrtbrtbrtb rtbtrbrtb trb  strntrhr rthrthbero facilis, sit culpa aliquid ullam repellat asperiores dolorum nobis voluptatem dolor sed! Ad veritatis aperiam consequuntur explicabo et. Illum, harum?</Text>
                </Box>
                <Box>
                    <Text>Skills</Text>
                    <Box d='flex'>
                        <Text>MY SKILLS</Text>
                        <Text>MY SKILLS</Text>
                        <Text>MY SKILLS</Text>
                        <Text>MY SKILLS</Text>
                    </Box>

                </Box>
            </Flex>
        </Container>
    )
};

export default About;