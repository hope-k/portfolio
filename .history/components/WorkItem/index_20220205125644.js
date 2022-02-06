import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Image from 'next/image'
import { Flex, Box, Container, Text, Center, Button } from '@chakra-ui/react';
import Link from 'next/link'
import gsap from 'gsap'


const WorkItem = ({ title, description, laptopMock, phoneMock, phoneImage, link }) => {

    return (
        <Container borderRadius={'.5rem'} background={'rgba(36, 36, 36, .35)'} zIndex={'1'} d='flex' m='1rem' h='95vh' position={'relative'} justifyContent={'center'}>
            <Box d='flex' width='10rem' position={'absolute'} top='0' h='.5rem' bg='teal.500' justifyContent={'space-around'} borderBottomRightRadius={'.5rem'} borderBottomLeftRadius={'.5rem'} alignItems={'center'}>
                <Box bg='gray.600' borderRadius={'50%'} w='4px' h='4px'>
                    
                </Box>                
                <Box bg='gray.600'  borderRadius={'50%'} w='4px' h='4px'>
                    
                </Box>


            </Box>
            <Box d='flex' flexDir={'column'} alignItems={'center'}>
                <Flex cursor='pointer' justifyContent={'center'} position='relative'>
                    <Image
                        src={laptopMock}
                        alt='laptop'
                        width={390}
                        height={280}
                    />
                    <Box position='absolute' right={['2rem', '6rem']} top={['5rem', '9rem']}>
                        <Box position={'relative'}>
                            <Box width={'55px'} height={'105px'} zIndex={'2'} position={'relative'}>
                                <Image
                                    src={phoneMock}
                                    layout='fill'
                                    alt='phone'
                                />
                            </Box>
                            <Box position={'absolute'} top='2.3px' right='2.5px' zIndex={'1'}>
                                <Image
                                    src={phoneImage}
                                    width={50}
                                    height={100}
                                    alt='phone-image'
                                />
                            </Box>
                        </Box>
                    </Box>
                </Flex>

                <Flex id='workTile' flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Text color='#ccc'  pb='1rem'  style={{ borderBottom: '2px solid teal', borderBottomWidth: '1px' }}>{title}</Text>
                    <Text mb={'2rem'} pt='1rem' className='outfit' color='#ccc' pb='2rem' maxW={'35ch'} lineHeight={'21px'}  textTransform={'capitalize'} al>{description}</Text>
                    <Box zIndex={'10'}  mb='1.7rem' position='absolute' bottom='0' d='flex' justifyContent={'center'}>
                        <Link href={link} passHref >
                            <Button p='1.5rem' w={['14.8rem','19.6rem']} colorScheme={'teal'} variant={'outline'}>View Project</Button>
                        </Link>
                    </Box>
                </Flex>


            </Box>
        </Container>
    )
}

export default WorkItem;
