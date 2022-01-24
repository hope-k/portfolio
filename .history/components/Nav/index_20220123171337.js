import React from 'react';
import NextLink from 'next/link'
import { Box, Text, Container, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import Menu from '../Menu/index'


const NavBar = () => {
    const router = useRouter()

    return (
        <Box position='fixed' d='flex' top={0} background={'rgba(51, 54, 52, .6)'} w={'100%'}>
            <Container maxW='90rem' p={'3'}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Text fontSize={30} color='#ccc' fontWeight='bold'>HK</Text>
                    </Box>
                    <Flex color='white'>
                        <NextLink href='/' passHref>
                            <Text mr={'6'} letterSpacing={'1.7px'} cursor={'pointer'} color={router.pathname === '/' ? 'teal' : 'white'}>Home</Text>
                        </NextLink>
                        <NextLink href='/go'>
                            <Text mr={'6'} letterSpacing={'1.7px'} cursor={'pointer'} color={router.pathname === '/works' ? 'teal' : 'white'}>Works</Text>
                        </NextLink>
                        <NextLink href='/'>
                            <Text mr={'6'} letterSpacing={'1.7px'} cursor={'pointer'} color={router.pathname === '/contact' ? 'teal' : 'white'}>Contact</Text>
                        </NextLink>
                        <NextLink href='/'>
                            <Text mr={'6'} letterSpacing={'1.7px'} cursor={'pointer'} color={router.pathname === '/about' ? 'teal' : 'white'}>About</Text>
                        </NextLink>
                        <Box position={'relative'} ce>
                            <Menu />
                        </Box>
                    </Flex>

                </Flex>
            </Container>
        </Box>
    );
};

export default NavBar;
