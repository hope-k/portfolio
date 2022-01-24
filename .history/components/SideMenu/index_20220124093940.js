import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';

const SideMenu = () => {
    return (
        <Box position={'absolute'} zIndex={'10'} top>
            <Box>
                <Stack direction={'column'}>
                    <Text>Home</Text>
                    <Text>Works</Text>
                    <Text>Contact</Text>
                    <Text>About</Text>
                </Stack>
            </Box>
        </Box>
    )
};

export default SideMenu;
