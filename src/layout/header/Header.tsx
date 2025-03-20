import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {Theme} from "../../styles/Theme.tsx";
import {Link} from "react-scroll";


export const Header = () => {
    return (
        <StyledHeader>
            <StyleTitleSeo>Опытный фронтенд-разработчик React – разработка интерфейсов</StyleTitleSeo>
            <Container>
                <FlexWrapper justifyContent="space-between" alignItems={'center'}>
                    <Logo/>
                    <BoxLinks>
                        <Menu head></Menu>
                        <MobileMenu/>
                        <Link to='contacts' smooth={true}>
                            <TalkButton>Let’s Talk</TalkButton>
                        </Link>
                    </BoxLinks>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 20px 0;

    @media ${Theme.media.tablet} {
        padding: 10px 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99999999;
    }
`

const BoxLinks = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    
    @media ${Theme.media.tablet} {
        flex-direction: row-reverse;
        gap: 20px
    }
`

const StyleTitleSeo = styled.h1`
    display: none;
`
const TalkButton = styled.button`
    border: 1px solid #2d2c2c;
    width: 110px;
    height: 40px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #ffffff;
    background-color: #2d2c2c;
    transition: transform 0.2s ease;


    &:hover {
        transform: scale(1.2);

    }
`
