
import styled from "styled-components";
import Icon from "../icon/Icon.tsx";



export const SocialList = () => {
    return (
        <StyledSocialList>
            <li>
                <SocialLink href="https://vk.com/tervartanyan" target="_blank" rel="noopener noreferrer">
                    <Icon width="26px" height="26px" viewBox="0 0 24 24" iconId="vk" />
                </SocialLink>
            </li>
            <li>
                <SocialLink href="https://web.telegram.org/#@KarinkaTer" target="_blank" rel="noopener noreferrer">
                    <Icon width="26px" height="26px" viewBox="0 0 24 24" iconId="telegram" />
                </SocialLink>
            </li>
            <li>
                <SocialLink href="/" target="_blank" rel="noopener noreferrer">
                    <Icon width="24px" height="24px" viewBox="-3 -3 22 22" iconId="instagram" />
                </SocialLink>
            </li>
            <li>
                <SocialLink href="/" target="_blank" rel="noopener noreferrer">
                    <Icon width="26px" height="26px" viewBox="0 0 24 24" iconId="linkedin" />
                </SocialLink>
            </li>
        </StyledSocialList>
    );
};

const StyledSocialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
    
`;

const SocialLink = styled.a`
    display: inline-block; /* Добавляем это свойство */
    transition: transform 0.3s ease; /* Добавляем плавный переход */

    &:hover {
        transform: translateY(-4px);
    }
`