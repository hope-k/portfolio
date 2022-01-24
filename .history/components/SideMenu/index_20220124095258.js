import React from 'react';
import { Box, Stack, Text, Center } from '@chakra-ui/react';

const SideMenu = () => {
    return (
        <Box alignItems={'center'}  justifyContent={'center'} d='flex' position={'absolute'} zIndex={'9'} top={0} bottom={0} left={0} right={0} height={'100vh'} width={'100%'} background={'#ccc'}>
            <Box d='flex' >
                <Stack direction={'column'} fontFamily={'rale'} fontSize={'3rem'}>
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
//rgba(36, 36, 36. .7)