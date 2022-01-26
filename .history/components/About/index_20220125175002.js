import React from 'react';
import { Flex, Box, Container, Text, Center } from '@chakra-ui/react';

const About = () => {
    return (
        <Box d='flex' bg='yellow' w='70%'>
            <Flex alignItems={'center'} justifyContent={'center'} w='100%'>
                <Flex alignItems={'center'} justifyContent={'center'} top='8rem' flexDir={'column'} position={'absolute'}>
                    <Text>ABOUT</Text>
                    <Text>Personal Info</Text>
                    <Text>Get to know more about me</Text>
                </Flex>
                <Flex justifyContent={'center'} w='100%' flexWrap='nowrap' alignItems={'center'} h='100%'>
                    <Box m='2rem' justifySelf={'flex-start'}>
                        <Text>Hi There!</Text>
                        <Text maxW={'50ch'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam iusto amet perspiciatis sunt animi similique dolor necessitatibus. Maxime veritatis commodi rerum magni ipsa iste perferendis illo dolore itaque ipsum!</Text>

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

            </Flex>
        </Box>
    )
};

export default About;
