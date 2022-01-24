import React from 'react';
import styled from '@emotion/styled';

const MenuItem = styled.div`
    width: 10px;
    height: 3px;
    cursor: pointer;
    transition: all .45s ease;
    &:nth-child(2){
        width: 6px;
    }    
    &:nth-child(3){
        width: 2px;
    }


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
