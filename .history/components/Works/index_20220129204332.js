import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { Flex, Box, Container, Text, Center } from '@chakra-ui/react';
import { Tag } from 'antd';
import { useInView } from 'react-intersection-observer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)


const About = () => {
    const [ref2, inView2] = useInView({ threshold: .5 })
    const t1 = useRef()
    const aboutRef = useRef(null)

    useLayoutEffect(() => {

        const stageItems = gsap.utils.toArray('#stageItems')
        gsap.set('#stage', {
            css: {
                perspective: 150,
                transformStyle: 'preserve-3d'
            }

        })
        stageItems.forEach((item, i) => {
            gsap.set(item, {
                css: {
                    rotationY: i * 360 / 8,
                    transformOrigin: "center center -420",
                    transformStyle: 'preserve3d'

                }
            });
            gsap.to(item, {
                css: {
                    z: .01,
                    rotationY: '+=359',
                    transformStyle: 'preserve3d'

                },
                duration: 40,
                repeat: -1,
                ease: 'Back.easeOut.config(4)'


            })
        })

    })

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
            <Flex alignItems={'center'} justifyContent={'center'} w='100%' id='page'>
                <Flex className='poiret' alignItems={'center'} justifyContent={'center'} top={['3rem', '8rem']} flexDir={'column'} position={'absolute'}>

                    <Text transition={'all .14s ease'} mb='.3rem' fontWeight={'bold'} color='teal' ref={aboutRef} id='aboutSection'>ABOUT</Text>
                    <Text fontWeight={'800'} fontSize={'2.3rem'} color='#ccc' id='aboutSection' >Personal Info</Text>
                    <Text fontWeight={'600'} mb='1rem' color='#ccc' id='aboutSection'>Get to know more about me</Text>
                </Flex>
                <Box>

                    
        </Container>
    )
};

export default About;
