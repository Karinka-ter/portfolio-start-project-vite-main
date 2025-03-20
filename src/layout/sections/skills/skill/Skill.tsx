
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FlexWrapper } from '../../../../components/FlexWrapper'; // Укажите правильный путь
import { Icon } from '../../../../components/icon/Icon.tsx'; // Укажите правильный путь

type SkillPropsType = {
    id: string;
    title: string;
    text: string;
};

export const Skill = (props: SkillPropsType & { delay?: number }) => {
    const { ref, inView } = useInView({
        threshold: 0.15, // Срабатывает, когда 10% элемента видно
    });

    return (
        <StyledSkill ref={ref} inView={inView} delay={props.delay || 0}>
            <FlexWrapper gap={'10px'}>
                <Icon iconId={props.id} height={'50'} width={'100'} viewBox={'0 0 50 50'} />
                <div>
                    <SkillTitle>{props.title}</SkillTitle>
                    <SkillText>{props.text}</SkillText>
                </div>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div<{ inView: boolean; delay: number }>`
    padding: 16px 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
    transition-delay: ${({ delay }) => delay}s;

    ${({ inView }) =>
    inView &&
    `
        opacity: 1;
        transform: translateY(0);
    `}
`;

const SkillTitle = styled.h3`
    font-weight: 300;
    font-size: 30px;
    margin-bottom: 10px;
`;

const SkillText = styled.p`
    font-weight: 200;
    font-size: 18px;
    line-height: 1.23;
`;
