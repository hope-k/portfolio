import Head from 'next/head'
import React from 'react'
import NavBar from '../Nav'
import { useState, useEffect } from 'react'
import { gsap } from "gsap/dist/gsap";





const Layout = ({ title = 'Hope Kumordzie', children }) => {
    useEffect(() => {
        gsap.from('#layout', {
            opacity: 0,
            ease: 'circ.in',
            duration: .8,



        })
    }, [])
    return (
        <div id='layout'>

            <Head>
                <title>{title}</title>
            </Head>
            <NavBar />

            {children}


        </div>







    )
};

export default Layout;
