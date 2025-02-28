import React from 'react';
import styled from "styled-components";
import textImg from '../../../assets/images/Text.svg'
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Photo} from "../../../components/Photo.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper alignItems={'center'} justifyContent={'space-around'}>
                <div>
                    <SectionTitle>HELLO <div>I’M KARINA</div></SectionTitle>
                    <TextImg src={textImg} alt="text"/>
                </div>
                <ImageWrapper>
                    <Photo width={'570px'} height={'570px'} mainPhoto src={photo} alt="photo"/>
                </ImageWrapper>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    
`
const ImageWrapper = styled.div`
    position: relative; /* Делаем контейнер относительным для позиционирования псевдоэлемента */
    display: inline-block; /* Чтобы контейнер занимал только место изображения */

    &::before {
        content: ''; /* Обязательное свойство для псевдоэлемента */
        position: absolute; /* Абсолютное позиционирование относительно контейнера */
        transform: rotate(-8deg);
        width: 100%; /* Ширина квадрата равна ширине изображения */
        height: 100%; /* Высота квадрата равна высоте изображения */
        background-color: #e7e7e7; /* Серый цвет фона */
        z-index: -1; /* Отправляем квадрат позади изображения */
    }
`

const TextImg = styled.img`

`




