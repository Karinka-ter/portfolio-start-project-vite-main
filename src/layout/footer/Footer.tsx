import React from 'react';
import styled from "styled-components";
import Icon from "../../components/icon/Icon.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Copyright>2022 Relume. All right reserved.</Copyright>
            <SocialList>
                <SocialItem>
                    <SocialIconLink>
                        <Icon iconId="vk" />
                    </SocialIconLink>
                </SocialItem>
                <SocialItem>
                    <SocialIconLink>
                        <Icon iconId="telegram" />
                    </SocialIconLink>
                </SocialItem>
                <SocialItem>
                    <SocialIconLink>
                        <Icon iconId="instagram" />
                    </SocialIconLink>
                </SocialItem>
                <SocialItem>
                    <SocialIconLink>
                        <Icon iconId="linkedin" />
                    </SocialIconLink>
                </SocialItem>
            </SocialList>
        </StyledFooter>
    );
};


const StyledFooter   = styled.footer`
    background-color: #e6d053;
    display: flex;
`

 const SocialList = styled.ul`
     display: flex;
     gap: 30px;
 `

const SocialItem = styled.li``


const SocialIconLink = styled.a``

const Copyright = styled.small``
