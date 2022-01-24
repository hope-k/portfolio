import React, { useLayoutEffect, useState } from 'react';
import { Box, Stack, Text, Center, transition } from '@chakra-ui/react';
import gsap from 'gsap'



const SideMenu = ({ open }) => {
    

    useLayoutEffect(() => {
        const t1 = gsap.timeline({ defaults: { duration: 1 } })
        ti.from('')
    })
    return (


        <>
            <Box id='sideMenu' display={['flex', 'none']} alignItems={'center'} justifyContent={'center'} d='flex' position='fixed' zIndex={'9'} top={0} bottom={0} left={`${open ? 0 : '30rem'}`} right={0} height={'100vh'} width={'100%'} background={'rgba(36, 36, 36, 1)'}>
                <Box d='flex'>
                    <Stack color='#ccc' direction={'column'} fontFamily={'rale'} fontSize={'3rem'} >
                        <Text transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Home</Text>
                        <Text transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Works</Text>
                        <Text transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>About</Text>
                        <Text transition='all .25s ease' _hover={{ pl: '1rem', color: 'purple.400' }}>Contact</Text>
                    </Stack>
                </Box>
            </Box>
        </>






    )
};

export default SideMenu;
