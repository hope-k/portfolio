import React, { useEffect } from 'react';

const CustomCursor = () => {
    const customCursor = React.useRef(null)
    useEffect(() => {
        if (typeof window === 'undefined') { return }

        document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
            const mouseX = clientX - customCursor.current.clientWidth / 2
            const mouseY = clientY - customCursor.current.clientHeight / 2
            customCursor.current.style.transform = `translate3d(${mouseX}px, ${})`
        } )
    })
    return (
        <div className='app-cursor'>

        </div>
    )
};

export default CustomCursor;
