import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { Flex, Box, Container, Text, FormLabel, FormControl, Center, Input, Textarea, Button } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import axios from 'axios'
import { toast } from 'react-toastify'
import Link from 'next/link'
gsap.registerPlugin(ScrollTrigger);


const Contact = () => {
    const t1 = useRef(null);
    const contactRef = useRef(null);
    const [ref, inView] = useInView({ threshold: .050 });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);




    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { name, email, message }
        const res = await axios.post('/api/contact', formData, {
            'Content-Type': 'application/json'
        })
        setName('')
        setEmail('')
        setMessage('')
        if (res.data.success) {
            setSuccess(true)
        }

    }

    useEffect(() => {
        if (success) {
            toast.success('You will hear from me as soon as possible')
            setSuccess(false)
        }
    }, [success])




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

    useEffect(() => {
        if (inView) {
            t1.current.play()
        }
        if (!inView) {
            t1.current.reverse()
        }
    }, [inView])

    return (
        <Container ref={ref} zIndex={'1'} id='contact' d='flex' maxW={['20rem', '30rem', '70rem']} w='100%' justifyContent={'center'} alignItems={'center'} h='100%'>
            <Box alignItems={'center'} justifyContent={'center'} w='100%' d='flex'>
                <Flex className='poiret' alignItems={'center'} justifyContent={'center'} top={['2rem', '3.5rem']} flexDir={'column'} position={'absolute'}>
                    <Text letterSpacing={'2px'} transition={'all .14s ease'} mb='.3rem' fontWeight={'bold'} color='teal' id='contactSection' border='1px' padding='3px' borderRadius='10px' ref={contactRef}>CONTACT</Text>
                    <Text fontWeight={'800'} fontSize={'2.3rem'} color='#ccc' id='contactSection'> Say Hi </Text>
                    <Text fontWeight={'600'} mb='1rem' color='#ccc' id='contactSection' maxW={['25ch', '100%']}> Submit the form below and i&apos;ll get back to you as soon as posible </Text>
                </Flex>
                <Flex flexDir={['column', 'row']} justifyContent={'space-around'} w='100%' pt={'15rem'}>
                    <Flex letterSpacing={'2px'} fontWeight={'900'}>
                        <form onSubmit={handleSubmit}>
                            <FormControl color={'#ccc'}>
                                <FormLabel className='poiret' id='contactSection' htmlFor='name' my='1rem'>FULL NAME</FormLabel>
                                <Input
                                    id='contactSection'
                                    type={'text'}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    border='none' focusBorderColor='teal.400' bg='black' />

                                <FormLabel className='poiret' id='contactSection' htmlFor='email' my='1rem'>EMAIL ADDRESS</FormLabel>
                                <Input
                                    id='contactSection'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type={'email'}
                                    border='none'
                                    focusBorderColor='teal.400'
                                    bg='black'
                                />

                                <FormLabel className='poiret' id='contactSection' htmlFor='message' my='1rem'>I NEED HELP WITH...</FormLabel>
                                <Textarea
                                    id='contactSection'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    border='none' focusBorderColor='teal.400' resize={'vertical'} bg='black' />

                                <Button disabled={(!name || !email || !message) ? true : false} type='submit' _hover={{ color: 'white', bg: 'teal', border: 'teal' }} my='2rem' variant={'outline'} colorScheme={'teal'}>Submit</Button>
                            </FormControl>
                        </form>

                    </Flex>
                    <Flex flexDir='column' justifyContent={'space-between'} h={['20vh', '30vh']} mb={['5rem', '0rem']}>
                        <Box id='contactSection' borderBottom='1px solid teal' borderBottomWidth={'.3rem'} pb='5px'>
                            <Text color='#ccc' fontWeight={'700'} id='contactSection'>PHONE</Text>
                            <Text mt={'.4rem'} color='gray' id='contactSection'>Mobile +233546075591</Text>
                        </Box>
                        <Box id='contactSection' borderBottom='1px solid teal' borderBottomWidth={'.3rem'} pb='5px' >
                            <Text id='contactSection' color='#ccc' fontWeight={'700'}> EMAIL </Text>
                            <Text id='contactSection' mt={'.4rem'} color='gray'>hopekumordzie@gmail.com</Text>
                        </Box>

                        <Box id='contactSection' borderBottom='1px solid teal' borderBottomWidth={'.3rem'} pb='5px' >
                            <Text id='contactSection' color='#ccc' fontWeight={'700'}> ADDRESS </Text>
                            <Text id='contactSection' mt={'.4rem'} color='gray'>Madina, Accra</Text>
                        </Box>
                        <Link href={'https://github.com/hope-k?tab=repositories'} passHref>
                            <Flex alignItems='center' id='contactSection' mt='1rem' border='1px' borderColor='white' borderRadius='4rem' padding={'.3rem'}>
                                <Box fill={'white'} h='24px' w='24px' mr='8px'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </Box>
                                <Text color='white'>GITHUB</Text>
                            </Flex>
                        </Link>


                    </Flex>

                </Flex>
            </Box>


        </Container>
    )
}

export default Contact;
