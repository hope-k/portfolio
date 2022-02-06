import Head from 'next/head'
import React from 'react'
import NavBar from '../Nav'
import { useState, useLayoutEffect, useRef, useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CustomCursor from '../CustomCursor'
import { Box } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

gsap.registerPlugin(ScrollTrigger);





const Layout = ({ title = 'Hope Kumordzie', children }) => {
    const scrollContainerRef = useRef(null)
    useLayoutEffect(() => {
        if (typeof window === 'undefined') {
            return
        }

        gsap.to('#progress', {
            ease: 'none',
            value: 100,
            scrollTrigger: {
                scrub: 0.57,
            }

        })

    }, [])

    useLayoutEffect(() => {
        if (typeof window === 'undefined') {
            return
        }
        const t1 = gsap.timeline()
        t1.from('#layout', {
            opacity: 0,
            duration: 1.8,
            ease: 'Power4.easeInOut'
        })

        return () => t1.kill()
    }, [])


    const [isMobile, setMobile] = useState(window.innerWidth < 580);
    const updateMedia = () => {
        setDesktop(window.innerWidth <  1450);
    };
<
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


    return (
        <>
            <CustomCursor />


            <ToastContainer />

            <progress id='progress' max='100' value='0'></progress>
            <div id='layout'>

                <Head>
                    <title>{title}</title>
                </Head>

                {children}


            </div>

        </>







    )
}

export default Layout
