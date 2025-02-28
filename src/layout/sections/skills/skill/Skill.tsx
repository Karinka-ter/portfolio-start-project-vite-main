import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

type SkillPropsType = {
    number: string;
    title: string;
    text: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillNumber>{props.number}</SkillNumber>
            <div>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>
            </div>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    width: 33%;

`
const SkillNumber = styled.div`

`
const SkillTitle = styled.h3`

`
const SkillText = styled.p`

`

