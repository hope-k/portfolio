import React from 'react';
import Image from 'next/image'
import { Flex, Box, Container, Text, Center } from '@chakra-ui/react';




const WorkItem = ({ title, description, image }) => {
    return (
        <>
            <Flex bg='black'>
            <Box>
                <Box>
                    <Image>

                </Box>

            </Box>
            </Flex>
        </>
    )
}

export default WorkItem;
