import React, { useEffect } from 'react';

const CustomCursor = () => {
    const customCursor = React.useRef(null)
    useEffect(() => {
        if (typeof window === 'undefined') { return }
    })
    return (
        <div>

        </div>
    )
};

export default CustomCursor;
