import Head from 'next/head'
import React from 'react'
import NavBar from '../Nav'
import { useState, useLayoutEffect, useRef, useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CustomCursor from '../CustomCursor'

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
        gsap.from('#layout', {
            opacity: 0,
            duration: 1.8,
            ease: 'Power4.easeInOut'
        })

        
    }, [])


    return (
        <>
            <CustomCursor/>
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
