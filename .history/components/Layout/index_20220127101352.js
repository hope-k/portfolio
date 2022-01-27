import Head from 'next/head'
import React from 'react'
import NavBar from '../Nav'
import { useState, useLayoutEffect } from 'react'
import { gsap } from "gsap/dist/gsap";





const Layout = ({ title = 'Hope Kumordzie', children }) => {
    useLayoutEffect(() => {
        if(typeof window === 'undefined'){
            
        }

        const progressAnimation = gsap.from('progress', {
            opacity: 0,
            ease: 'none',
            duration: 2.3,
            scrollTrigger: { scrub: 0.3 }

        })
        progressAnimation.play()

    })
    return (
        <div id='layout'>
            <progress max='100' value='0'></progress>


            <Head>
                <title>{title}</title>
            </Head>
            <NavBar />

            {children}


        </div>







    )
};

export default Layout;
