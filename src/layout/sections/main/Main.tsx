
import styled from "styled-components";
import textImg from '../../../assets/images/text.svg'
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";
import {Theme} from "../../../styles/Theme.tsx";


export const Main = () => {
    return (
        <StyledMain >
            <Container>
                <FlexWrapper alignItems={'center'} justifyContent={'center'} wrap={'wrap'}>
                    <TitleBox>
                        <SectionTitle titleMain>HELLO I'M KARINA</SectionTitle>
                        <TextImg src={textImg} alt="text"/>
                    </TitleBox>
                    <ImageWrapper>
                        <Photo src={photo} alt="photo"/>
                    </ImageWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    padding-top:clamp(70px, calc(70px + (100vw - 800px) * -1), 110px) ;
    padding-bottom: 70px;
    padding-left: 70px;
    padding-right: 70px;
    display: flex;
`



const Photo = styled.img`
    object-fit: cover;
    width: 550px;
    height: 550px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    transform: rotate(9deg);
    filter: opacity(88%);

    @media ${Theme.media.tablet} {
        width: 480px;
        height: 500px;
    }

    @media ${Theme.media.mobile} {
        width: 300px;
        height: 300px;
    }


`


const ImageWrapper = styled.div`
    position: relative;
    display: inline-block;

    
    &::before {
        content: '';
        position: absolute;
        transform: rotate(-8deg);
        width: 100%;
        height: 100%;
        background-color: #e7e7e7;
    }
    
   
`


const TitleBox = styled.div`
    position: relative;
    z-index: 5;
    max-width: 400px;
    @media ${Theme.media.mobile} {
        max-width: 300px
    }
    
`

const TextImg = styled.img`
transform: translateY(-40px);
    max-width: 470px;
    @media ${Theme.media.mobile} {
        width: 310px
    }
`





