import React from 'react';
import { Flex, Box, Container, Text } from '@chakra-ui/react';

const About = () => {
    return (
        <Container d='flex' maxW={['21rem', '30rem', '70rem']}>
            <Flex>
                <Box>
                    <Text>ABOUT</Text>
                    <Text>Personal Info</Text>
                    <Text>Get to know more about me</Text>
                </Box>
                <Box>
                    <Text>Hi There!</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit optio possimus corporis deleniti, expedita distinctio facilis laborum eligendi soluta repellat commodi! Exercitationem perferendis repellendus quasi, dolores fugit itaque amet!</Text>
                </Box>
            </Flex>
        </Container>
    )
};

export default About;
