import React from 'react';
import { Flex, Box, Container, Text, Center } from '@chakra-ui/react';

const About = () => {
    return (
        <Container d='flex' maxW={['21rem', '30rem', '70rem']}>
            <Flex alignItems={'center'} justifyContent={'center'} w='100%'>
                <Flex alignItems={'center'} justifyContent={'center'} top='8rem' flexDir={'column'} position={'absolute'}>
                    <Text mb='1rem' fontWeight={'bold'} color='teal'>ABOUT</Text>
                    <Text fontWeight={'800'} fontSize={'2.3rem'}>Personal Info</Text>
                    <Text fontWeight={'600'}>Get to know more about me</Text>
                </Flex>
                <Flex mt='7rem' justifyContent={'center'} w='100%' flexWrap='nowrap' alignItems={'center'} h='100%'>
                    <Box  justifySelf={'flex-start'}>
                        <Text>Hi There!</Text>
                        <Text maxW={'50ch'}>I’m Hope Kumordzie and i am passionate Fullstack Web Developer using web technologies to build amazing products and focusing on solving pro   nd i am very pass, I’m working as web developer.i have developed many website and also provided my services to college students by getting their projects ready ASAP as a freelancer I have been part of some very good web design projects.</Text>
                    </Box>
                    <Box ml='10rem'>
                        <Text>Skills</Text>
                        <Box d='flex'>
                            <Text>MY SKILLS</Text>
                            <Text>MY SKILLS</Text>
                            <Text>MY SKILLS</Text>
                            <Text>MY SKILLS</Text>
                        </Box>

                    </Box>
                </Flex>

            </Flex>
        </Container>
    )
};

export default About;
