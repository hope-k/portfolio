import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { Flex, Box, Container, Text, Center } from '@chakra-ui/react';
import { Tag } from 'antd';
import { useInView } from 'react-intersection-observer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import WorkItem from '../WorkItem';
import { projects } from './projects'
gsap.registerPlugin(ScrollTrigger);







const Works = () => {
    const t1 = useRef(null)
    const worksRef = useRef(null)
    const [ref, inView] = useInView({ threshold: .050 })




    useLayoutEffect(() => {
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
        <Container id='works' d='flex' maxW={['23rem', '30rem', '70rem']} w='100%' justifyContent={'center'} py='2rem'>
            <Box alignItems={'center'} justifyContent={'center'} w='100%' d='flex'>
                <Flex className='poiret' alignItems={'center'} justifyContent={'center'} top={['3rem', '6.5rem']} flexDir={'column'} position={'absolute'}>
                    <Text letterSpacing={'2px'} transition={'all .14s ease'} mb='.3rem' fontWeight={'bold'} color='teal' id='worksSection' border='1px' padding='3px' borderRadius='10px' ref={worksRef}>PROJECTS</Text>
                    <Text  fontWeight={'800'} fontSize={'2.3rem'} color='#ccc' id='worksSection'> Latest Projects </Text>
                    <Text fontWeight={'600'} mb='1rem' color='#ccc' id='worksSection'> Here you can find recent projects </Text>
                </Flex>

                <Box id='worksSection' ref={ref} mt='20rem' d='flex' flex={'auto'} flexWrap={'wrap'} justifyContent={'center'}>
                    {
                        projects.map(project => (

                            <WorkItem
                                
                                key={project.key}
                                laptopMock={project.laptopMock}
                                phoneMock={project.phoneMock}
                                phoneImage={project.phoneImage}
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                laptopImage={project.laptopImage}

                            />
                        ))
                    }
                </Box>
            </Box>


        </Container>
    )
}

export default Works;
