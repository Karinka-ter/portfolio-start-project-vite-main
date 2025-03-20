import  {useEffect, useState} from 'react';
import styled from "styled-components";
import Icon from "../icon/Icon.tsx";
import {animateScroll as scroll} from 'react-scroll'


export const GoTopBtn = () => {
    const [showBtn, setshowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={'gotop'} height={'60'} width={'60'} viewBox={'0 0 65 65'}/>
                </StyledGoTopBtn>
            )}

        </>

    );
};

const StyledGoTopBtn = styled.button`
    width: 65px;
    height: 65px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`

