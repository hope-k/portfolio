import Head from 'next/head'
import React from 'react'
import NavBar from '../Nav'
import { useState, useEffect } from 'react'
import { gsap } from "gsap/dist/gsap";





const Layout = ({ title = 'Hope Kumordzie', children }) => {
    useEffect(() => {
        gsap.from('#layout', {
            opacity: 0,
            ease: 'power4.in',
            duration: 2.3,



        })
    }, [])
    return (
        <div id='layout'>
        <progress max='100'></progress>
        

            <Head>
                <title>{title}</title>
            </Head>
            <NavBar />

            {children}


        </div>







    )
};

export default Layout;
