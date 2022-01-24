import React from 'react';
import styled from '@emotion/styled';

const MenuItem = styled.div`
    width: 10px;
    height: 3px;
    cursor: pointer;
    transition: all .45s ease;



`

const MenuItem = () => {
    return (
        <div>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
        </div>
    );
};

export default MenuItem;
