import Head from 'next/head'
import React from 'react'
import NavBar from '../Nav'





const Layout = ({ title = 'Hope Kumordzie', children }) => {
    useEffect(() => {
        gsap.from('#', {
            opacity: 0,
            ease: 'sine.in',
            duration: .8
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
