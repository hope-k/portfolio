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
                            <Box>
                                <Image
                                    src={phoneMock}
                                    width={52}
                                    height={100}
                                    alt='phone'
                                />
                            </Box>
                            <Box position={'absolute'} top={0} zIndex={'1'}>
                                <Image
                                    src={phoneImage}
                                    width={52}
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
