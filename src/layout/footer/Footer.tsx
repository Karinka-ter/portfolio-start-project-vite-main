import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {SocialList} from "../../components/socialList/SocialList.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justifyContent={'space-between'}>
                    <Copyright>2022 Relume. All right reserved.</Copyright>
                   <SocialList></SocialList>
                </FlexWrapper>

            </Container>
        </StyledFooter>
    );
};


const StyledFooter   = styled.footer`
    padding-top: 80px;
    padding-bottom: 30px;
    position: relative;

    &::before {
        content: ''; /* Обязательно для псевдоэлемента */
        position: absolute;
        top: 40px; /* Размещаем полоску вверху футера */
        left: 50%; /* Центрируем по горизонтали */
        transform: translateX(-50%); /* Точное центрирование */
        width: calc(100% - 40px); /* Ширина полоски с отступами */
        max-width: 1050px; /* Но не больше 1070px */
        height: 1px; /* Толщина полоски */
        background-color: gray; /* Цвет полоски */
    }
    
`


const Copyright = styled.small``
