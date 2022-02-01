import React from 'react';
import Image from 'next/image'
import { Flex, Box, Container, Text, Center, Button } from '@chakra-ui/react';
import Link from 'next/link'



const WorkItem = ({ title, description, laptopMock, phoneMock, phoneImage, link}) => {
    return (
                <Box bg='#ccc' position='relative'>
                    <Box w='300px' h='400px'>
                        <Image
                            src={laptopMock}
                            layout='fill'
                            alt='laptop'
                        />
                        <Box w='400px' h='200px'>
                            <Image
                                src={phoneMock}
                                layout='fill'
                                alt='phone'
                            />
                            <Box>
                                <Image
                                    src={phoneImage}
                                    layout='fill'
                                    alt='phone-image'
                                />

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
    )
}

export default WorkItem;
