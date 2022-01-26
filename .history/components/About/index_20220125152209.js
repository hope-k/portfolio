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
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, accusamus similique maiores nemo non error illo necessitatibus possimus placeat soluta fuga qui ut doloribus voluptate in cumque? Natus, atque libero?</Text>
                </Box>
            </Flex>
        </Container>
    )
};

export default About;
