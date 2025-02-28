import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../../components/FlexWrapper';

type WorkPropsType = {
    title: string;
    description: string;
    text: string;
    link: string;
    linkText: string;
    backgroundImage: string
}

export const Work = (props:  WorkPropsType) => {
    return (
        <StyledWorks backgroundImage={props.backgroundImage}>
            <FlexWrapper gap={'80px'}>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
                <div>
                    <p>{props.text}</p>
                    <a href={props.link}>{props.linkText}</a>
                </div>
            </FlexWrapper>
        </StyledWorks>
    );
};







const StyledWorks = styled.div<{ backgroundImage: string }>`
    background-image: url(${props => props.backgroundImage});
    padding: 90px 50px 100px 50px;
    background-size: cover; /* Масштабирует изображение, чтобы оно заполнило весь блок */
    background-position: center; /* Центрирует изображение */
    background-repeat: no-repeat; /* Отключает повторение */
    max-width: 1040px;
    max-height: 450px;
`

