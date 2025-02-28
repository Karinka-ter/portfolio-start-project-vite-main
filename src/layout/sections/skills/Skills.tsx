import React from 'react';
import styled from "styled-components";
import {Skill} from './skill/Skill.tsx';
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper wrap="wrap" justifyContent="space-between">
                <Skill number={'01.'}
                       title={'React'}
                       text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}>
                </Skill>
                <Skill number={'02.'}
                       title={'Styled Component'}
                       text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}>
                </Skill>
                <Skill number={'03.'}
                       title={'Figma'}
                       text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}>
                </Skill>
                <Skill number={'04.'}
                       title={'HTML'}
                       text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}>
                </Skill>
                <Skill number={'05.'}
                       title={'CSS'}
                       text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}>
                </Skill>
                <Skill number={'06.'}
                       title={'Design'}
                       text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}>
                </Skill>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #dab8be;
    min-height: 100vh;
`

