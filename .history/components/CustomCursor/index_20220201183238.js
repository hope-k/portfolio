import React, { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap'


const CustomCursor = () => {

    const customCursor = React.useRef(null)
    useEffect(() => {
        if (typeof window === 'undefined') { return }
        
        document.addEventListener('mousemove', (event) => {
            const {pageX, pageY} = event;
            const mouseX = pageX - customCursor.current.offsetWidth / 2
            const mouseY = pageY - customCursor.current.offsetHeight / 2
            customCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        } )
    },[])

    useLayoutEffect(() => {
        const t1 = gsap.timeline({defaults: {repeat: -1}})
        t1.from('#cursor', {
            scale: .7,
            yoyo: true,
            transform: 'translate'
        })
    },[])   

    return (
        <div id='cursor' className='app-cursor' ref={customCursor}>

        </div>
    )
};

export default CustomCursor;
