import React from 'react';
import { Box, Stack, Text, Center, transition } from '@chakra-ui/react';

const SideMenu = () => {
    return (
        <Box display={['flex', 'none']} alignItems={'center'} justifyContent={'center'} d='flex' position={'absolute'} zIndex={'9'} top={0} bottom={0} left={0} right={0} height={'100vh'} width={'100%'} background={'rgba(36, 36, 36, 1)'}>
            <Box d='flex' >
                <Stack color='#ccc'  direction={'column'} fontFamily={'rale'} fontSize={'3rem'} >
                    <Text transition='all .25s ease'  _hover={{pl:'1rem'}}>Home</Text>
                    <Text transition='all .25s ease' _hover={{pl:'1rem'}}>Works</Text>
                    <Text transition='all .25s ease' _hover={{pl: '1rem'}}>About</Text>
                    <Text transition='all .25s ease' _hover={{pl:'1rem'}}>Contact</Text>
                </Stack>
            </Box>
        </Box>
    )
};

export default SideMenu;
