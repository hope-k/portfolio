import Head from 'next/head'
import React from 'react'
import NavBar from '../Nav'





const Layout = ({ title = 'Hope Kumordzie', children }) => {
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
