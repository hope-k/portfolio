import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';

const SideMenu = () => {
    return (
        <Box position={'absolute'} zIndex={'10'} top={0} bottom={0} left={0} right={0} height={'100vh'} width={'100%'} >
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
