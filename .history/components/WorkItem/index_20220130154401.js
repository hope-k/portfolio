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
                    <Box position='absolute' right='6rem' top='8rem' >
                        <Box position={'relative'}>
                            <Image
                                src={phoneMock}
                                width={50}  
                                height={100}                         
                                alt='phone'
                            />
                            <Box position={ 'absolute'}>
                                <Image
                                    src={phoneImage}
                                    layout='fill'
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
