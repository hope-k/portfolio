import React, { useState } from 'react';
import NextLink from 'next/link'
import { Box, Text, Container, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import Menu from '../Menu/index'




const NavBar = () => {
    const [open , setIsOpen] = useState(true)
    const router = useRouter();
    const toggleOpen = () => setIsOpen(!open)

    return (
        <Box position='fixed' d='flex' top={0} background={'rgba(0, 14, 12, .6)'} w={'100%'}>
            <Container maxW={['21rem','40rem', '90rem']} p={'3'}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Text fontSize={30} color='#ccc' fontWeight='bold'>HK</Text>
                    </Box>
                    <Flex color='white'>
                        <Flex display={['none', 'inline-flex']}>
                            <NextLink href='/' passHref>
                                <Text _hover={{color: 'purple.300'}} mr={'6'} letterSpacing={'1.7px'} cursor={'pointer'} color={router.pathname === '/' ? 'teal' : 'white'}>Home</Text>
                            </NextLink>
                            <NextLink href='/go'>
                                <Text _hover={{color: 'purple.300'}}  mr={'6'} letterSpacing={'1.7px'} cursor={'pointer'} color={router.pathname === '/works' ? 'teal' : 'white'}>Works</Text>
                            </NextLink>
                            <NextLink href='/'>
                                <Text _hover={{color: 'purple.300'}}  mr={'6'} letterSpacing={'1.7px'} cursor={'pointer'} color={router.pathname === '/contact' ? 'teal' : 'white'}>Contact</Text>
                            </NextLink>
                            <NextLink href='/'>
                                <Text _hover={{color: 'purple.300'}}  mr={'6'} letterSpacing={'1.7px'} cursor={'pointer'} color={router.pathname === '/about' ? 'teal' : 'white'}>About</Text>
                            </NextLink>
                        </Flex>

                        <Box display={['inline-flex', 'none']} onClick={() => toggleOpen()} position={'relative'} top={'5px'} cursor={'pointer'} transition={'transition: all .5s cubic-bezier(.215, .61, .355, 1)'}>
                            <Menu style={{cursor: 'pointer'}} open={open}/>
                        </Box>
                    </Flex>

                </Flex>
            </Container>
        </Box>
    );
};

export default NavBar;
