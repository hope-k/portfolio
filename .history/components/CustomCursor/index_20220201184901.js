import React, { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap'
import CSS from 'gsap'
gsap.registerPlugin(CSSRulePlugin);


const CustomCursor = () => {

    const customCursor = React.useRef(null)
    
    
    
    useLayoutEffect(() => {
        if (typeof window === 'undefined') { return }
        
        document.addEventListener('mousemove', (event) => {
            const {pageX, pageY} = event;
            const mouseX = pageX - customCursor.current.offsetWidth / 2
            const mouseY = pageY - customCursor.current.offsetHeight / 2
            gsap.set(customCursor.current, {
                translateX: `${mouseX}px`,
                translateY: `${mouseY}px`
            })

        } )
        const t1 = gsap.timeline({ defaults: { repeat: -1 } })
        t1.to('#cursor', {
            scale: .7,
            yoyo: true,
            transform: 'translate(0, 0,0)'
        })
    },[])

    return (
        <div id='cursor' className='app-cursor' ref={customCursor}>

        </div>
    )
};

export default CustomCursor;
