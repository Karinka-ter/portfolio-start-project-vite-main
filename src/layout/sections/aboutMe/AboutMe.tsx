import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo.webp";
import {Photo} from "../../../components/Photo.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";



export const AboutMe = () => {
    return (
        <StyledMe>
            <FlexWrapper gap={'65px'}>
                <div>
                    <span>About Me</span>
                    <h3>I look at usual things with my unsual eyes.</h3>
                    <Photo width={'530px'} height={'500px'} src={photo} alt="photo"/>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet
                        augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
                        adipiscing velit non nulla in amet pellentesque.

                        Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet
                        pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse
                        vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet
                        fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta.

                        Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend
                        dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu,
                        tincidunt ultrices pellentesque.</p>

                    <Photo width={'440px'} height={'410px'} src={photo} alt="photo"/>
                </div>
            </FlexWrapper>
        </StyledMe>
    );
};

const StyledMe = styled.section`
    background-color: #2020bd;
`

