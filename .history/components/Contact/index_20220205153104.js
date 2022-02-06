import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { Flex, Box, Container, Text, Center, Input } from '@chakra-ui/react';
import { Tag } from 'antd';
import { useInView } from 'react-intersection-observer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import WorkItem from '../WorkItem';







gsap.registerPlugin(ScrollTrigger);


const Contact = () => {
    const t1 = useRef(null);
    const contactRef = useRef(null);
    const [ref, inView] = useInView({ threshold: .050 });



    useLayoutEffect(() => {
        t1.current = gsap.timeline({
            defaults: {
                stagger: 0.1,
            }
        }).from('#contactSection', {
            y: 14,
            opacity: 0,
            duration: .8,
            ease: 'Power$.easeOut'
        }).to(contactRef.current, { textShadow: '0px 0px 15px #008080', repeat: -1, repeatDelay: 2 })


        return () => t1.current.kill()

    }, [])

    useLayoutEffect(() => {
        if (inView) {
            t1.current.play()
        }
        if (!inView) {
            t1.current.reverse()
        }
    }, [inView])

    return (
        <Container zIndex={'1'} id='contact' d='flex' maxW={['23rem', '30rem', '70rem']} w='100%' minH='100vh' justifyContent={'center'}>
            <Box alignItems={'center'} justifyContent={'center'} w='100%' d='flex'>
                <Flex className='poiret' alignItems={'center'} justifyContent={'center'} top={['3rem', '6.5rem']} flexDir={'column'} position={'absolute'}>
                    <Text letterSpacing={'2px'} transition={'all .14s ease'} mb='.3rem' fontWeight={'bold'} color='teal' id='contactSection' ref={contactRef}>Contact</Text>
                    <Text ref={ref} fontWeight={'800'} fontSize={'2.3rem'} color='#ccc' id='contactSection'> Say Hi </Text>
                    <Text fontWeight={'600'} mb='1rem' color='#ccc' id='contactSection'> Submit the form below and i&apos;ll get back to you as soon as posible </Text>
                </Flex>
                <Flex justifyContent={}>
                    <Flex bg='yellow'>
                        <Box>
                            <Text>FULL NAME</Text>
                            <Input focusBorderColor='teal' bg='blackAlpha.300'/>

                            <Text>EMAIL ADDRESS</Text>
                            <Input focusBorderColor='teal'/>                         
                            
                            <Text>I NEED HELP WITH...</Text>
                            <Input focusBorderColor='teal' p='4rem'/>
                        </Box>
                    </Flex>
                    <Flex h='100px' w='100px' bg='red'>

                    </Flex>

                </Flex>
            </Box>


        </Container>
    )
}

export default Contact;
