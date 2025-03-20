import {Theme} from "../styles/Theme.tsx";
import styled from "styled-components";

type PhotoPropsType = {
    width?: string;
    height?: string;
}

export const Photo = styled.img<PhotoPropsType>`
    object-fit: cover;
    width: ${props => props.width};
    height: ${props => props.height};
   

    @media ${Theme.media.tablet} {


}

`