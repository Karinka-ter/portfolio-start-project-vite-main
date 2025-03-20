
import styled from "styled-components";

import {Theme} from "../../../styles/Theme.tsx";


type WorkPropsType = {
    title: string;
    text: string;
    link: string;
    backgroundImage: string;
    descriptionBold: string;
}


export const Work = (props: WorkPropsType) => {

    return (
        <StyledWork
            backgroundImage={props.backgroundImage}
        >
            <TitleWork>{props.title}</TitleWork>
            <FlexWork>
                <DescriptionWorkBold>{props.descriptionBold}</DescriptionWorkBold>
                <div>
                    <TextWork>{props.text}</TextWork>
                    <WorkLink href={props.link}>
                        View more
                    </WorkLink>
                </div>
            </FlexWork>
        </StyledWork>
    );
};

const TitleWork = styled.h3`
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    padding-bottom: 16px;
`

const DescriptionWorkBold = styled.p`
    font-weight: 800;
    font-size: 45px;
    line-height: 1.2;

    @media ${Theme.media.tablet} {
        font-size: 42px;

    }
`

const TextWork = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 1.5;
    padding-bottom: 40px;
`


const WorkLink = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    transition: font-size 0.8s ease;
`

const FlexWork = styled.div`
    display: flex;
    gap: 80px;

    @media ${Theme.media.tablet} {
        gap: 40px; // Уменьшаем отступы для планшетов
    }

    @media ${Theme.media.mobile} {
        flex-direction: column;
        gap: 20px; // Уменьшаем отступы для мобильных устройств
    }
`;


const StyledWork = styled.div<{ backgroundImage: string }>`
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: overlay;
    background-image: url(${props => props.backgroundImage});
    padding: 120px 50px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 450px;
    color: ${Theme.colors.fontLight};
    transition: transform 0.8s ease;


    &:hover ${WorkLink} {
        font-size: 20px;
        text-shadow:0 0 10px rgba(255, 255, 255, 0.5);
    }


    @media ${Theme.media.mobile} {
        padding: 60px 20px; // Уменьшаем отступы для мобильных устройств
        min-height: 300px; // Уменьшаем высоту для мобильных устройств
    }
`;