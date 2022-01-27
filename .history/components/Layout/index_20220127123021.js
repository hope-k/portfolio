import Head from 'next/head'
import React from 'react'
import NavBar from '../Nav'
import { useState, useLayoutEffect } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);





const Layout = ({ title = 'Hope Kumordzie', children }) => {
    useLayoutEffect(() => {
        if (typeof window === 'undefined') {
            return
        }
        const progressAnimation = gsap.fromTo('#progress',
            {
                ease: 'none',
                value: 0,

            },
            {
                ease: 'none',
                value: 100
            }
        )



        ScrollTrigger.create({
            scrub: 0.3,
            start: 'top top',
            end: 99999,
            onUpdate: (self) => {
                self.direction === -1 ? progressAnimation.play() : navAnimation.reverse()
            }

        })



    })
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
