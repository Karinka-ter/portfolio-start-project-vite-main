import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./Work.tsx";
import sea from '../../../assets/images/project-1.webp'
import show from '../../../assets/images/procjet-2.webp'
import food from '../../../assets/images/project-3.webp'

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>MY PROJECTS</SectionTitle>
            <FlexWrapper direction="column" gap={'75px'} alignItems={'center'} >
                <Work
                    title="Mental Health"
                    description="A Case Study_ Find Peace in Meditation"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                    link="путь ссылки"
                    linkText="View More"
                    backgroundImage={sea}
                />
                <Work
                    title="Fashion Show"
                    description="A Case Study_Enjoy Fashion Shows From Home"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                    link="путь ссылки"
                    linkText="View More"
                    backgroundImage={show}
                />
                <Work
                    title="Barbeque"
                    description="Branding_ Chicken Barbeque Never Goes Wrong"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                    link="путь ссылки"
                    linkText="View More"
                    backgroundImage={food}
                />
            </FlexWrapper>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: #7979dd;

`

