import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image'
import { Flex, Box, Container, Text, Center, Button } from '@chakra-ui/react';
import Link from 'next/link'
import { gsap } from "gsap";


const WorkItem = ({ title, description, laptopMock, phoneMock, phoneImage, link }) => {
    const workTileRef = useRef(null)
    useLayoutEffect(() => {
        const t1 = gsap.timeline({ defaults: { delay: 2 } })
        /*t1.from(workTileRef.current, {
            duration: 1,
            scaleY: 0,
            ease: 'Expo.easeIn',
            opacity: 0
        })*/
    })
    return (
        <>
            <Flex flexDir={'column'} position={'relative'}>
                <Container background={'rgba(36, 36, 36, .35)'} zIndex={'1'} d='flex' m='2rem'>
                    <Box>
                        <Flex justifyContent={'center'} position='relative'>
                            <Image
                                src={laptopMock}
                                alt='laptop'
                                width={390}
                                height={280}
                            />
                            <Box position='absolute' right={['2rem', '6rem']} top={['5rem', '9rem']}>
                                <Box position={'relative'}>
                                    <Box width={'55px'} height={'105px'} zIndex={'2'} position={'relative'}>
                                        <Image
                                            src={phoneMock}
                                            layout='fill'
                                            alt='phone'
                                        />
                                    </Box>
                                    <Box position={'absolute'} top='2.3px' right='2.5px' zIndex={'1'}>
                                        <Image
                                            src={phoneImage}
                                            width={50}
                                            height={100}
                                            alt='phone-image'
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>

                        <Flex alignItems={'center'} justifyContent={'center'}>
                            <Text color='#ccc' pb='1rem' mb='1rem' style={{ borderBottom: '2px solid teal', borderBottomWidth: '1px' }}>{title}</Text>
                        </Flex>

                    </Box>
                </Container>
                <Container bg='red' m='2rem'>
                    <Flex ref={workTileRef} flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                        <Text color='#ccc' pb='2rem' maxW={'40ch'} textTransform={'capitalize'}>{description}</Text>
                        <Box pb='1rem'>
                            <Link href={link} passHref>
                                <Button w='18rem' colorScheme={'teal'} variant={'outline'}>View Project</Button>
                            </Link>
                        </Box>
                    </Flex>
                </Container>

            </Flex>
        </>

    )
}

export default WorkItem;
