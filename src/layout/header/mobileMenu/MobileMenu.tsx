import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme.tsx";
import {SocialList} from "../../../components/socialList/SocialList.tsx";
import {Link} from "react-scroll";


export const MobileMenu = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setmenuIsOpen(!menuIsOpen)
    }
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen} onClick={() => {
                setmenuIsOpen(false)
            }}>
                    <StyledUl>
                        <StyledList>
                            <Link to='skills' smooth={true}
                                  onClick={() => {
                                      setmenuIsOpen(false)
                                  }}
                            >Skills</Link>
                        </StyledList>
                        <StyledList>
                            <Link to='works' smooth={true}
                                  onClick={() => {
                                      setmenuIsOpen(false)
                                  }}
                            >Projects</Link>
                        </StyledList>
                        <StyledList>
                            <Link to='aboutMe' smooth={true}
                                  onClick={() => {
                                      setmenuIsOpen(false)
                                  }}
                            >About </Link>
                        </StyledList>
                    </StyledUl>
                    <SocialList/>
            </MobileMenuPopup>

        </StyledMobileMenu>
    )
        ;
};


const StyledMobileMenu = styled.nav`
    display: none;

    @media ${Theme.media.tablet} {
        display: block;
    }
`


const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgba(129, 129, 136, 0.97);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    transform: translateY(-100%);
    transition: transform 0.8s ease-in-out;


    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);
    `}

`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: relative;
    z-index: 999999;
    bottom: 3px;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: #2d2c2c;
       

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
            height: 0;
        `}
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: #2d2c2c;
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
                height: 2px;
                background-color: black;
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: #2d2c2c;
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                height: 2px;
                background-color: black;
            `}
        }
    }

`

const StyledUl = styled.ul`
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 400;
    font-size: 30px;
    line-height: 24px;
`

const StyledList = styled.li`
    border-bottom: 1px solid black;;
`

