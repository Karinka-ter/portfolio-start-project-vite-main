
import styled, {css} from "styled-components";
import photo from "../../../assets/images/photo.webp";
import {Container} from "../../../components/Container.tsx";
import {Theme} from "../../../styles/Theme.tsx";
import { useInView } from 'react-intersection-observer';


export const AboutMe = () => {
    const { ref, inView } = useInView({
        // Анимация сработает только один раз
        threshold: 0.2, // Срабатывает, когда 10% элемента видно
    });
    return (
        <StyledMe id="aboutMe" ref={ref}>
            <Container>
                <AboutWrap inView={inView}>
                    <BoxTitleAboutMe>
                        <StyledAboutSpan>About Me</StyledAboutSpan>
                        <StyledTitleAboutMe>Passionate about Growth and Innovation</StyledTitleAboutMe>
                        <StyledPhoto big src={photo} alt="photo"/>
                    </BoxTitleAboutMe>
                    <BoxAboutMe>
                        <StyledTextAboutMe>I'm frontend developer with experience in creating SPA using React, Redux,
                            redux-Toolkit, Axios, React-Router-Dom, TypeScript, JavaScript, SCSS, HTML. I am
                            enthusiastic team player focused on personal growth. Now I am improving my skills in this
                            direction and expanding them with new technologies.

                            <p>Taking part in the whole software life cycle and permanent desire to learn something new
                                made me realize that the role of the front-end developer would help me fulfill my
                                potential, develop my capabilities and enjoy the job I am doing every day.</p>

                            <p>My drive for continuous improvement and ability to adapt to new technologies make me a
                                valuable specialist in frontend development. I work confidently in a team, find
                                effective solutions, and am always ready to contribute to the success of a project. My
                                passion for creating high-quality and user-friendly interfaces, along with my
                                willingness to learn and grow professionally, opens up vast opportunities for me in the
                                IT industry.</p></StyledTextAboutMe>

                        <StyledPhoto medium src={photo} alt="photo"/>
                    </BoxAboutMe>
                </AboutWrap>
            </Container>

        </StyledMe>
    );
};

const StyledMe = styled.section`
    color: ${Theme.colors.fontAboutMe};
    
`
const BoxAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const BoxTitleAboutMe = styled.div`
    max-width: 530px;
    display: flex;
    flex-direction: column;
`


const StyledAboutSpan = styled.span`
    font-weight: 900;
    font-size: 16px;
    line-height: 1.5;
    
`


const StyledTitleAboutMe = styled.h3`
    font-weight: 254;
    font-size: 48px;
    line-height: 1.2;
    font-variant: all-small-caps;
    margin-bottom: 240px;

    @media (max-width: 1090px) {
        margin-bottom: 20px;
    }
`

const StyledTextAboutMe = styled.p`
    display: flex;
   flex-direction: column;
    gap: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 200px;

    @media (max-width: 1090px) {
        margin-bottom: 40px;
    }
`

const AboutWrap = styled.div<{inView: boolean}>`
    padding: 110px 0;
    display: flex;
    gap: 60px;
    
    

    ${BoxTitleAboutMe} {
        transform: translateX(-50px); // Начальное положение: слева за пределами экрана
        opacity: 0;
        transition: transform 1s ease, opacity 0.8s ease;
    }

    ${BoxAboutMe} {
        transform: translateX(50px);// Начальное положение: справа за пределами экрана
        opacity: 0;
        transition: transform 1s ease, opacity 0.8s ease;
    }

    ${({ inView }) =>
            inView &&
            css`
            ${BoxTitleAboutMe} {
                transform: translateX(0); // Возвращаем на место
                opacity: 1;
            }

            ${BoxAboutMe} {
                transform: translateX(0); // Возвращаем на место
                opacity: 1;
            }
        `};
    
    @media (max-width: 1155px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
        padding: 50px 0;


        ${BoxAboutMe} {
            transform: translateX(-100%);
            opacity: 0;
            transition: transform 0.8s ease, opacity 0.8s ease;
        }

        ${({ inView }) =>
                inView &&
                css`

            ${BoxAboutMe} {
                transform: translateY(0); // Возвращаем на место
                opacity: 1;
            }
        `};
        
    };
    
`



type photoProps = {
   big?: boolean;
   medium?: boolean;
}




const StyledPhoto = styled.img<photoProps>`
    object-fit: cover;

    ${props => props.big && css`
        width: 530px;
        height: 530px;

        @media ${Theme.media.mobile} {
            width: 300px;
            height: 300px;
            
        }
    `}

    ${props => props.medium && css`
        width: 440px;
        height: 440px;

        @media ${Theme.media.mobile} {
            width: 300px;
            height: 300px;
           
        }
        
    `} 
    `



