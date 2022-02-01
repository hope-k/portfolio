import React from 'react';
import Image from 'next/image'
import { Flex, Box, Container, Text, Center } from '@chakra-ui/react';




const WorkItem = ({ title, description, laptopMock, phoneMock, phoneImage }) => {
    return (
        <>
            <Flex bg='black'>
                <Box>
                    <Box>
                        <Image
                            src={laptopMock}
                            layout='fill'
                            alt='laptop'
                        />
                        <Box>
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
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default WorkItem;
