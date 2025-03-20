import styled, {css} from "styled-components";
import {Theme} from "../styles/Theme.tsx";


type SectionTitleProps = {
    titleMain?: boolean;
    titleWork?: boolean;
}

export const SectionTitle = styled.h2<SectionTitleProps>`
    font-weight: 800;
    font-size: 110px;
    color: #2d2c2c;
    
   ${props => props.titleMain && css`
       letter-spacing: 10px;
       @media ${Theme.media.mobile} {
           font-size: 65px
       }
   `}
   
   ${props => props.titleWork && css`
       padding-bottom: 70px;
       font-size: calc((100vw - 360px) / (1440 - 360) * (110 - 60) + 60px);
   `}
    
    
`