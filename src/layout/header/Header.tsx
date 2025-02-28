import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {TalkButton} from "../../components/talkButton/TalkButton.tsx";

export const Header = () => {
    return (
            <StyledHeader>
               <Logo/>
               <Menu/>
               <TalkButton/>
            </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #6fd56f;
`

