import styled, {css} from "styled-components";

type PhotoPropsType = {
    width?: string;
    height?: string;
    mainPhoto: boolean;
}

export const Photo = styled.img<PhotoPropsType>`
    object-fit: cover;
    width: ${props=> props.width  };
    height: ${props=> props.height };
    ${props => props.mainPhoto && css<PhotoPropsType>`
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        transform: rotate(9deg);
        filter: opacity(88%);
    `}
    
`