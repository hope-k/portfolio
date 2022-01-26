import React from 'react';
import { Flex, Box, Container, Text } from '@chakra-ui/react';

const About = () => {
    return (
        <Container justifyContent='center' alignItems={'center'} d='flex' maxW={['21rem', '30rem', '70rem']}>
            <Flex background='red' m='auto'>
            <Box alignSelf={'flex-start'}>
                <Text>ABOUT</Text>
                <Text>Personal Info</Text>
                <Text>Get to know more about me</Text>
            </Box>
                <Box m='2rem'>
                    <Text>Hi There!</Text>
                    <

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
