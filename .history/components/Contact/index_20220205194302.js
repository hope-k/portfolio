import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { Flex, Box, Container, Text, Center, Input, Textarea, Button } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



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
        <Container zIndex={'1'} id='contact' d='flex' maxW={['23rem', '30rem', '70rem']} w='100%' minH='100vh' justifyContent={'center'} alignItems={'center'}>
            <Box alignItems={'center'} justifyContent={'center'} w='100%' d='flex'>
                <Flex className='poiret' alignItems={'center'} justifyContent={'center'} top={['3rem', '6.5rem']} flexDir={'column'} position={'absolute'}>
                    <Text letterSpacing={'2px'} transition={'all .14s ease'} mb='.3rem' fontWeight={'bold'} color='teal' id='contactSection' ref={contactRef}>Contact</Text>
                    <Text ref={ref} fontWeight={'800'} fontSize={'2.3rem'} color='#ccc' id='contactSection'> Say Hi </Text>
                    <Text fontWeight={'600'} mb='1rem' color='#ccc' id='contactSection'> Submit the form below and i&apos;ll get back to you as soon as posible </Text>
                </Flex>
                <Flex justifyContent={'space-around'} w='100%' pt={'15rem'}>
                    <Flex className='poiret' letterSpacing={'2px'} fontWeight={'900'}>
                        <Box color={'#ccc'}>
                            <Text my='1rem'>FULL NAME</Text>
                            <Input border='none' focusBorderColor='teal.400' bg='black'/>

                            <Text my='1rem'>EMAIL ADDRESS</Text>
                            <Input border='none' focusBorderColor='teal.400' bg='black'/>                         
                            
                            <Text my='1rem'>I NEED HELP WITH...</Text>
                            <Textarea border='none' focusBorderColor='teal.400' resize={'vertical'} bg='black'/>

                            <Button _hover={{color: 'black'}} my='2rem' variant={'outline'} colorScheme={'teal'}>Submit</Button>
                        </Box>
                    </Flex>
                    <Flex flexDir='column'>
                    <Box>
                        
                    </Box>
                        <Text color='#ccc'>PHONE</Text>
                        <Text color='gray'>Mobile +233546075591</Text>

                        <Text>EMAIL</Text>
                        <Text>officialhopek42@gmail.com</Text>

                        <Text>ADDRESS</Text>
                        <Text>Madina</Text>
                    </Flex>

                </Flex>
            </Box>


        </Container>
    )
}

export default Contact;