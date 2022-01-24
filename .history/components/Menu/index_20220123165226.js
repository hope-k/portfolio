import React from 'react';
import styled from '@emotion/styled';

const MenuItem = styled.div`
    width: 10px;
    height: 3px;
    cursor: pointer;
    


`

const Menu = () => {
    return (
        <div>
            <Menu></Menu>
            <Menu></Menu>
            <Menu></Menu>
        </div>
    );
};

export default Menu;
