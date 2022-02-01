import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { Flex, Box, Container, Text, Center } from '@chakra-ui/react';
import { Tag } from 'antd';
import { useInView } from 'react-intersection-observer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)


const Works = () => {
    const [ref2, inView2] = useInView({ threshold: .5 })
    const t1 = useRef()
    const aboutRef = useRef(null)

   

    useLayoutEffect(() => {
        t1.current = gsap.timeline({
            defaults: {
                stagger: 0.1,
            }
        }).from('#aboutSection', {
            y: 14,
            opacity: 0,
            duration: .8,
            ease: 'Power$.easeOut'
        }).to(aboutRef.current, { textShadow: '0px 0px 15px #008080', repeat: -1, repeatDelay: 2 })

    }, [])

    useEffect(() => {
        if (inView2) {
            t1.current.play()
        }
        if (!inView2) {
            t1.current.reverse()
        }
    }, [inView2])

    return (


        <Container id='about' d='flex' maxW={['21rem', '30rem', '70rem']}>
                <Flex className='poiret' alignItems={'center'} justifyContent={'center'} top={['3rem', '8rem']} flexDir={'column'} position={'absolute'}>

                    <Text transition={'all .14s ease'} mb='.3rem' fontWeight={'bold'} color='teal' ref={aboutRef} id='aboutSection'>Works</Text>
                    <Text fontWeight={'800'} fontSize={'2.3rem'} color='#ccc' id='aboutSection' >Personal Info</Text>
                    <Text fontWeight={'600'} mb='1rem' color='#ccc' id='aboutSection'>Get to know more about me</Text>
                </Flex>
                

                    
        </Container>
    )
};

export default Works;
