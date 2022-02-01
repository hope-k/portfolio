import React from 'react';
import Image from 'next/image'
import { Flex, Box, Container, Text, Center, Button } from '@chakra-ui/react';
import Link from 'next/link'



const WorkItem = ({ title, description, laptopMock, phoneMock, phoneImage, link }) => {
    return (
        <Container bg='#ccc' d='flex'>
            <Box>
                <Box position='relative' bg='red'>
                    <Image
                        src={laptopMock}
                        alt='laptop'
                        width={390}
                        height={280}
                    />
                    <Box position='absolute' right='6rem' top='9rem'>
                        <Box position={'relative'}>
                            <Box zIndex={'2'} position={'relative'}>
                                <Image
                                    src={phoneMock}
                                    width={'55px'}
                                    height={106}
                                    alt='phone'
                                />
                            </Box>
                            <Box position={'absolute'} top='2.9px' right='2.5px' zIndex={'1'}>
                                <Image
                                    src={phoneImage}
                                    width={50}
                                    height={100}
                                    alt='phone-image'
                                />

                            </Box>

                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Text>{title}</Text>
                    <Text>{description}</Text>
                    <Link href={link} passHref>
                        <Button colorScheme={'teal'} variant={'outline'}>View Project</Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}

export default WorkItem;
