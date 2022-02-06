import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { Flex, Box, Container, Text, Center } from '@chakra-ui/react';
import { Tag } from 'antd';
import { useInView } from 'react-intersection-observer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import WorkItem from '../WorkItem';

gsap.registerPlugin(ScrollTrigger);


const Works = () => {
    const t1 = useRef(null)
    const worksRef = useRef(null)
    const [ref, inView] = useInView({ threshold: .050 })
    const projects = [
        {
            laptopMock: 'https://res.cloudinary.com/hopekumordzie/image/upload/v1643665507/macbook_ko0xxi.png',
            phoneMock: 'https://res.cloudinary.com/hopekumordzie/image/upload/v1643665500/iphone_yogl7i.png',
            phoneImage: 'https://res.cloudinary.com/hopekumordzie/image/upload/v1643665481/luxuryspotphone_vr0jkl.png',
            title: 'LUXURY SPOT',
            description: `
                        Luxury Spot is an apartment booking web application I created where users can view apartments available for booking and pay for a room using a credit card, bank account or mobile money.
                        As an admin, you can create new rooms, view all the rooms, update a room, delete a room, view all bookings, delete a booking, view all users registered to the site, delete a user, changed user roles from 'user' to 'admin etc.
                        Web technologies used in this project - REACT JS, REDUX TOOLKIT, FRAMER MOTION, NEXT JS, BOOTSTRAP, CSS MODULES, NODE JS, MONGO DB AND PAYSTACK FOR PROCESSING PAYMENT
                        `,
            link: 'https://luxuryspot.vercel.app/',
            key: 1
        },      
        {
            laptopMock: 'https://res.cloudinary.com/hopekumordzie/image/upload/v1643731436/bombmac_sqdn3x.png',
            phoneMock: 'https://res.cloudinary.com/hopekumordzie/image/upload/v1643665500/iphone_yogl7i.png',
            phoneImage: 'https://res.cloudinary.com/hopekumordzie/image/upload/v1643731436/bathbombphone_c5dzb6.png',
            title: 'BATH BOMB',
            description: `
                Bath bomb is a simple custom shopify storefront I created using the shopify api. Users can view a list of showcased bath bombs items, You can add an item to the cart, remove of an item from the cart,
                and checkout. It is integrated with paystack so users can also pay using mobile money or credit cards.
                Web technologies used in this project - REACT JS, CHAKRA UI, FRAMER MOTION 
            `,
            link: 'https://bath-bomb.vercel.app/',
            key: 2
        }
    ]



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
        <Container id='works' d='flex' maxW={['23rem', '30rem', '70rem']} w='100%' minH='100%' justifyContent={'center'}>
            <Box alignItems={'center'} justifyContent={'center'} w='100%' d='flex'>
                <Flex className='poiret' alignItems={'center'} justifyContent={'center'} top={['3rem', '6.5rem']} flexDir={'column'} position={'absolute'}>
                    <Text letterSpacing={'2px'} transition={'all .14s ease'} mb='.3rem' fontWeight={'bold'} color='teal' id='worksSection' ref={worksRef}>WORKS</Text>
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

                            />
                        ))
                    }
                </Box>
            </Box>


        </Container>
    )
}

export default Works;
