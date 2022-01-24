import React from 'react';
import styled from '@emotion/styled';

const MenuIItem = styled.div`
    width: 10px;
    height: 3px;
    cursor: pointer;
    transition: all .45s ease;


`

const MenuI = () => {
    return (
        <div>
            <MenuI></MenuI>
            <MenuI></MenuI>
            <MenuI></MenuI>
        </div>
    );
};

export default MenuI;
