import React, { useEffect } from 'react';

const CustomCursor = () => {
    const customCursor = React.useRef(null)
    useEffect(() => {
        if (typeof window === 'undefined') { return }

        document.addEventListener('mousemove', (event) => {
            const {clientX} = event
        } )
    })
    return (
        <div>

        </div>
    )
};

export default CustomCursor;
