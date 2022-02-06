import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { Flex, Box, Container, Text, FormLabel, FormControl, Center, Input, Textarea, Button } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import axios from 'axios'
import { toast } from 'react-toastify'
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

    useLayoutEffect(() => {
        if (inView) {
            t1.current.play()
        }
        if (!inView) {
            t1.current.reverse()
        }
    }, [inView])

    return (
        <Container zIndex={'1'} id='contact' d='flex' maxW={['20rem', '30rem', '70rem']} w='100%' minH='115vh' justifyContent={'center'} alignItems={'center'}>
            <Box alignItems={'center'} justifyContent={'center'} w='100%' d='flex'>
                <Flex className='poiret' alignItems={'center'} justifyContent={'center'} top={['3rem', '6.5rem']} flexDir={'column'} position={'absolute'}>
                    <Text letterSpacing={'2px'} transition={'all .14s ease'} mb='.3rem' fontWeight={'bold'} color='teal' id='contactSection' ref={contactRef}>Contact</Text>
                    <Text  fontWeight={'800'} fontSize={'2.3rem'} color='#ccc' id='contactSection'> Say Hi </Text>
                    <Text fontWeight={'600'} mb='1rem' color='#ccc' id='contactSection' maxW={['25ch','100%']}> Submit the form below and i&apos;ll get back to you as soon as posible </Text>
                </Flex>
                <Flex flexDir={['column','row']} justifyContent={'space-around'} w='100%' pt={'15rem'}>
                    <Flex className='poiret' letterSpacing={'2px'} fontWeight={'900'}>
                        <form onSubmit={handleSubmit}>
                            <FormControl color={'#ccc'}>
                                <FormLabel id='contactSection' htmlFor='name' my='1rem'>FULL NAME</FormLabel>
                                <Input
                                    id='contactSection'
                                    type={'text'}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    border='none' focusBorderColor='teal.400' bg='black' />

                                <FormLabel id='contactSection' htmlFor='email' my='1rem'>EMAIL ADDRESS</FormLabel>
                                <Input
                                    id='contactSection'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type={'email'}
                                    border='none'
                                    focusBorderColor='teal.400'
                                    bg='black'
                                />

                                <FormLabel id='contactSection' htmlFor='message' my='1rem'>I NEED HELP WITH...</FormLabel>
                                <Textarea
                                    id='contactSection'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    border='none' focusBorderColor='teal.400' resize={'vertical'} bg='black' />

                                <Button id='contactSection' disabled={!name || !email || !message ? true : false} type='submit' _hover={{ color: 'white', bg: 'teal', border: 'teal' }} my='2rem' variant={'outline'} colorScheme={'teal'}>Submit</Button>
                            </FormControl>
                        </form>

                    </Flex>
                    <Flex flexDir='column' justifyContent={'space-between'} h={['20vh', '30vh']}>
                        <Box id='contactSection' borderBottom='1px solid teal' borderBottomWidth={'.3rem'} pb='5px'>
                            <Text color='#ccc' fontWeight={'700'} id='contactSection'>PHONE</Text>
                            <Text mt={'.4rem'} color='gray' id='contactSection'>Mobile +233546075591</Text>
                        </Box>
                        <Box id='contactSection' borderBottom='1px solid teal' borderBottomWidth={'.3rem'} pb='5px' >
                            <Text id='contactSection' color='#ccc' fontWeight={'700'}> EMAIL </Text>
                            <Text id='contactSection' mt={'.4rem'} color='gray'>officialhopek42@gmail.com</Text>
                        </Box>

                        <Box id='contactSection' borderBottom='1px solid teal' borderBottomWidth={'.3rem'} pb='5px' >
                            <Text id='contactSection' color='#ccc' fontWeight={'700'}> ADDRESS </Text>
                            <Text id='contactSection' mt={'.4rem'} color='gray'>Madina, Accra</Text>
                        </Box>


                    </Flex>

                </Flex>
            </Box>


        </Container>
    )
}

export default Contact;
