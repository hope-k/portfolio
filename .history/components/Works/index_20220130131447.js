import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { Flex, Box, Container, Text, Center } from '@chakra-ui/react';
import { Tag } from 'antd';
import { useInView } from 'react-intersection-observer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import WorkItem from '../WorkItem'

gsap.registerPlugin(ScrollTrigger)


const Works = () => {
    const [ref, inView] = useInView({ threshold: .5 })
    const t1 = useRef()
    const worksRef = useRef(null)



    /*useLayoutEffect(() => {
        t1.current = gsap.timeline({
            defaults: {
                stagger: 0.1,
            }
        }).from('#worksSection', {
            y: 14,
            opacity: 0,
            duration: .8,
            ease: 'Power$.easeOut'
        }).to(worksRef.current, { textShadow: '0px 0px 15px #008080', repeat: -1, repeatDelay: 2 })

    }, [])

    /useEffect(() => {
        if (inView) {
            t1.current.play()
        }
        if (!inView) {
            t1.current.reverse()
        }
    }, [inView])*/

    return (
        <Container id='works' d='flex' maxW={['21rem', '30rem', '70rem']}>
            <Box alignItems={'center'} justifyContent={'center'} w='100%' h='100%' d='flex'>
                <Flex className='poiret' alignItems={'center'} justifyContent={'center'} top={['3rem', '8rem']} flexDir={'column'} position={'absolute'}>
                    <Text letterSpacing={'2px'} transition={'all .14s ease'} mb='.3rem' fontWeight={'bold'} color='teal' ref={worksRef} id='worksSection'>WORKS</Text>
                    <Text fontWeight={'800'} fontSize={'2.3rem'} color='#ccc' id='worksSection'>Latest Projects</Text>
                    <Text fontWeight={'600'} mb='1rem' color='#ccc' id='worksSection' >Here you can find recent projects </Text>
                </Flex>
            </Box>
            <WorkItem 
                laptopMock={'/devices/mackbook'}
                phoneMock={'/devices/iphone'}
                phoneImage={'device/luxuryspotphone'}
                title={'Luxury Spot'}
                description={'
                    Lux
                '}


                


            />
        </Container>
    )
}

export default Works;
