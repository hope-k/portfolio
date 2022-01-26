import React from 'react';
import { Flex, Box, Container, Text, Center } from '@chakra-ui/react';

const About = () => {
    return (
        <Container d='flex' maxW={['21rem', '30rem', '70rem']}>
            <Flex alignItems={'center'} justifyContent={'center'} w='100%'>
                <Flex alignItems={'center'} justifyContent={'center'} top={['6rem','8rem']} flexDir={'column'} position={'absolute'}>
                    <Text mb='1rem' fontWeight={'bold'} color='teal'>ABOUT</Text>
                    <Text fontWeight={'800'} fontSize={'2.3rem'} color='#ccc'>Personal Info</Text>
                    <Text fontWeight={'600'} mb='1rem' color='#ccc'>Get to know more about me</Text>
                </Flex>
                <Flex flexDir={['column', 'row']} mt='7rem' justifyContent={'center'} w='100%' flexWrap='nowrap' alignItems={'center'} h='100%'>
                    <Box maxW={'60ch'} color='#ccc'>
                        <Text fontWeight={'700'} fontSize={'1.2rem'} mb='1rem' mt='3rem'>Hi There!</Text>
                        <Text >
                            I’m Hope Kumordzie and i am passionate Fullstack Web Developer using web technologies to build amazing modern web applications and focusing on solving problems for different niches.  I have  also provide my services to college students by getting their projects ready as a freelancer
                        </Text>
                        <br/>
                        <Text>I would love to hear from you. Whether its a project, job or opportunity at something great. Feel free to contact me</Text> 
                    </Box>
                    <Box ml={['0','10rem']} mt={['2rem', '-7.5rem']} >
                        <Text fontWeight={'700'} fontSize={'1.2rem'} mb='.5rem' color='#ccc'>Skills</Text>
                        <Box d='flex' color='#ccc'>
                            <Box m='.5' p={1} fontSize={13} bg='gray'>REACT</Box>
                            <Box m='.5'>NEXT JS</Box>
                            <Box m='.5'>NODE/EXPRESS JS</Box>
                            <Box m='.5'>MONGO DB</Box>
                            <Box m='.5'>HTML</Box>
                            <Box m='.5'>CSS/SCSS</Box>
                        </Box>

                    </Box>
                </Flex>

            </Flex>
        </Container>
    )
};

export default About;
