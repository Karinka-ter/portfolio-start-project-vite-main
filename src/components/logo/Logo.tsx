import l from '../../assets/images/logo1.svg'
import styled from "styled-components";
import {animateScroll as scroll} from 'react-scroll'


export const Logo = () => {
    return (
        <a onClick={() => {scroll.scrollToTop()}}>
            <StyledLogoImg src={l} alt="logo"/>
        </a>
    );
};

const StyledLogoImg = styled.img`
    max-width: 35px;
    max-height: 35px;
`



