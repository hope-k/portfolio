import React, { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap'
import CSSRulePlugin from 'gsap/dist/CSSRulePlugin'
gsap.registerPlugin(CSSRulePlugin);


const CustomCursor = () => {

    const customCursor = React.useRef(null)
    
    
    
    useLayoutEffect(() => {
        if (typeof window === 'undefined') { return }
        const t2 = gsap.timeline({paused: true, defaults: {duration: .25, ease: 'none'}})
        const t1 = gsap.timeline({ defaults: { repeat: -1, yoyo: true } })
        const rule = CSSRulePlugin.getRule('.app-cursor::after')
        function mouseEvent(){
            
        }
        document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
            const mouseX = clientX - customCursor.current.clientWidth / 2
            const mouseY = clientY - customCursor.current.clientHeight / 2
            gsap.set(customCursor.current, {
                translateX: `${mouseX}px`,
                translateY: `${mouseY}px`
            })
        

        },[])

        document.addEventListener('click', () => {
            t2.play(0);
        })

        t2.to('#cursor', { scale: .5, border: '1px solid red'})
          .to('#cursor',{ scale: 1.2})
          .to('#cursor', { border: '1px solid white', scale: 1 })


        t1.to(rule, { duration: .600, cssRule: {
            scale: .2,
            

        }}).to(rule, {
            cssRule: {
                opacity: 0,
            },
           


        }, '+=.5')

        function clearEvents(){
            document.removeEventListener('click');
            document.removeEventListener('mousemove');
            t2.kill()
            t1.kill()

        }

        return () => clearEvents()
           
        

    })
    useLayoutEffect(() => {
        const t2 = gsap.timeline()
        t2.to('#cursor', {
            scale: .7,
            repeat: -1,
            yoyo: true,
            duration: .600,
            transform: 'translate(0, 0,0)'
        })
    },[])

    return (
        <div id='cursor' className='app-cursor' ref={customCursor}>

        </div>
    )
};

export default CustomCursor;
