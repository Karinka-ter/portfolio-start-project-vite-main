import React from 'react';
import styled from "styled-components";


export const Logo = () => {
    return (
        <a href="">
            <StyledLogoImg src='/logo.svg' alt="logo"/>
        </a>
    );
};

const StyledLogoImg = styled.img`
    max-width: 35px;
    max-height: 35px;
`



