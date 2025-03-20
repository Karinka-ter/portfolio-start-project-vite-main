import React from 'react';
import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme.tsx";
import {Link} from "react-scroll";

type MenuItemProps = {
    head?:boolean
}

export const Menu = (props: MenuItemProps) => {
    return (
        <StyledMenu head={props.head}>
            <ul>
                <StyledLi>
                    <Link to='skills' smooth={true}>Skills</Link>
                </StyledLi>
                <StyledLi>
                    <Link to='works' smooth={true}>Projects</Link>
                </StyledLi>
                <StyledLi>
                    <Link to='aboutMe' smooth={true}>About</Link>
                </StyledLi>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav<MenuItemProps>`
 ul{
     display: flex;
     gap: 30px
     

 }
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    ${props => props.head && css<MenuItemProps>`
       @media ${Theme.media.tablet} {
           display: none;
       }
    `}
`

const StyledLi = styled.li`
    a {
        transition: transform 0.2s ease;
        display: inline-block; /* Чтобы transform работал корректно */
    }

    a:hover {
        transform: scale(1.09); /* Увеличиваем ссылку на 5% */
    }
`

