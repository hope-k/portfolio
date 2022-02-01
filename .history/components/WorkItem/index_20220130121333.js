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
                            src='/devices/macbook.png'
                            layout='fill'
                            alt='laptop'
                        />
                        <Box>
                            <Image 
                                src='/devices/iphone.png'
                                layout='fill'
                                alt='phone'
                            />
                            <Box>
                                <Image>

                            </Box>
                        </Box>

                    </Box>

                </Box>
            </Flex>
        </>
    )
}

export default WorkItem;
