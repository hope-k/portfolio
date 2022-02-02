import React, { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap'


const CustomCursor = () => {

    const customCursor = React.useRef(null)
    useEffect(() => {
        if (typeof window === 'undefined') { return }
        
        document.addEventListener('mousemove', (event) => {
            const {pageX, pageY} = event;
            const mouseX = pageX - customCursor.current.clientWidth() / 2
            const mouseY = pageY - customCursor.current.clientHeight() / 2
            customCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        } )
    },[])

    return (
        <div id='cursor' className='app-cursor' ref={customCursor}>

        </div>
    )
};

export default CustomCursor;