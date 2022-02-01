import React from 'react';
import Image from 'next/image'
import { Flex, Box, Container, Text, Center, Button } from '@chakra-ui/react';
import Link from 'next/link'



const WorkItem = ({ title, description, laptopMock, phoneMock, phoneImage, link }) => {
    return (
        <Container background={'rgba(36, 36, 36, .85)'} d='flex' m='1rem'>
            <Box>
                <Flex justifyContent={'center'} position='relative'>
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

                <Flex flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Text color='#ccc' pb='1rem'>{title}</Text>
                    <Text color='#ccc' pb='2rem' maxW={'40ch'}>{description}</Text>
                    <Box w='80%' pb='1rem' >
                        <Link href={link} passHref>
                            <Button  colorScheme={'teal'} variant={'outline'}>View Project</Button>
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Container>
    )
}

export default WorkItem;
