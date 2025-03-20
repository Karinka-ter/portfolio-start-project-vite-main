import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./Work.tsx";
import sea from '../../../assets/images/project-1.webp'
import show from '../../../assets/images/procjet-2.webp'
import food from '../../../assets/images/project-3.webp'
import {Container} from "../../../components/Container.tsx";
import Typewriter from "typewriter-effect";


export const Works = () => {
    return (
        <StyledWorks id="works">
            <Container>
                <SectionTitle titleWork>
                    <Typewriter
                        options={{
                            strings: ["MY PROJECT"],
                            autoStart: true,
                            loop: true,
                            delay: 150,
                        }}/>
                </SectionTitle>
                <FlexWrapper direction="column" gap={'75px'} alignItems={'center'}>
                    <Work
                        title="Mental Health"
                        descriptionBold="Find peace in Yoga"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "
                        link="путь ссылки"
                        backgroundImage={sea}
                    />
                    <Work
                        title="Fashion Show"
                        descriptionBold="Enjoy Fashion Shows From Home"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "
                        link="путь ссылки"
                        backgroundImage={show}
                    />
                    <Work
                        title="Barbeque"
                        descriptionBold="Chicken Barbeque Never Goes Wrong"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                        link="путь ссылки"
                        backgroundImage={food}
                    />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    padding: 130px 0;

`

