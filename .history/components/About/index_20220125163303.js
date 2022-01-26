import React from 'react';
import { Flex, Box, Container, Text } from '@chakra-ui/react';

const About = () => {
    return (
        <Container  d='flex' maxW={['21rem', '30rem', '70rem']}>
                <Box>
                    <Text>ABOUT</Text>
                    <Text>Personal Info</Text>
                    <Text>Get to know more about me</Text>
                </Box>
            <Flex flexWrap='nowrap' alignItems={'center'} h='100%' background='red' m='auto'>
                <Box m='2rem' justifySelf={'flex-start'}>
                    <Text>Hi There!</Text>
                    <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam iusto amet perspiciatis sunt animi similique dolor necessitatibus. Maxime veritatis commodi rerum magni ipsa iste perferendis illo dolore itaque ipsum!</Text>

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
