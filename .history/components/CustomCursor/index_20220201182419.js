import React, { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap'


const CustomCursor = () => {

    const customCursor = React.useRef(null)
    useEffect(() => {
        if (typeof window === 'undefined') { return }
        
        document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
            const mouseX = clientX - customCursor.current.clientWidth / 2
            const mouseY = clientY - customCursor.current.clientHeight / 2
            customCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        } )
    },[])
    useLayoutEffect(() => {
        const t1 = gsap.timeline()
        gsap.from(customCursor.current, {
            yoyo: true,
            scale: .7

        })
    },[])
    return (
        <div className='app-cursor' ref={customCursor}>

        </div>
    )
};

export default CustomCursor;