import React from 'react';
import { Box, Stack, Text, Center, transition } from '@chakra-ui/react';

const SideMenu = () => {
    return (
        <Box alignItems={'center'}  justifyContent={'center'} d='flex' position={'absolute'} zIndex={'9'} top={0} bottom={0} left={0} right={0} height={'100vh'} width={'100%'} background={'#ccc'}>
            <Box d='flex' >
                <Stack transition='padding .45s ease-in' direction={'column'} fontFamily={'rale'} fontSize={'3rem'} >
                    <Text _hover={{pl:'.5rem'}}>Home</Text>
                    <Text _hover={{pl:'.5rem'}}>Works</Text>
                    <Text _hover={{pl:'.5rem'}}>Contact</Text>
                    <Text _hover={{pl:'.5rem'}}>About</Text>
                </Stack>
            </Box>
        </Box>
    )
};

export default SideMenu;
//rgba(36, 36, 36. .7)