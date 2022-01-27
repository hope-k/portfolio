import Head from 'next/head'
import React from 'react'
import NavBar from '../Nav'
import { useState, useLayoutEffect } from 'react'
import gsap  from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; 
gsap.registerPlugin(ScrollTrigger);





const Layout = ({ title = 'Hope Kumordzie', children }) => {
    useLayoutEffect(() => {
        if (typeof window === 'undefined') {
            return
        }

        gsap.to('#progress', {
            ease: 'none',
            value: 100,
            scrollTrigger: {
                scrub: 0.5,
                


            }

        })

    },[])
    return (
        <>
            <progress id='progress' max='100' value='0'></progress>
            <div id='layout'>

                <Head>
                    <title>{title}</title>
                </Head>
                <NavBar />

                {children}


            </div>

        </>







    )
};

export default Layout;
