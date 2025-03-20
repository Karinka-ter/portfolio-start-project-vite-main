import React from 'react';
import styled from "styled-components";
import {Skill} from './skill/Skill.tsx';
import {Theme} from "../../../styles/Theme.tsx";


export const Skills = () => {
    return (
        <StyledSkills id='skills'>
            <StyledGrid>
                <Skill
                    delay={0.1}
                    id={"react"}
                    title={'React'}
                    text={'I use React to build modern web applications. I develop reusable components, manage state with Hooks and Redux, and set up routing with React Router. I optimize performance, test code, and integrate APIs. I also work with TypeScript and Next.js for SSR.'}>
                </Skill>
                <Skill
                    delay={0.2}
                    id={"style"}
                    title={'Styled Component'}
                    text={'I use Styled Components for CSS-in-JS styling in React applications. It allows me to create scoped, dynamic styles and easily manage themes. I also leverage its features like props-based styling and global styles for consistent and maintainable designs.'}>
                </Skill>
                <Skill
                    delay={0.3}
                    id={"typeScript"}
                       title={'TypeScript'}
                       text={"I use TypeScript to build robust and maintainable React applications. It helps me catch errors early, improve code readability, and enhance developer productivity through static typing, interfaces, and advanced type-checking features."}>
                </Skill>
                <Skill
                    delay={0.4}
                    id={"html"}
                    title={'HTML'}
                    text={'I use HTML to structure and organize content for web applications. I create semantic, accessible, and SEO-friendly markup, ensuring compatibility across browsers and devices while integrating seamlessly with CSS and JavaScript.'}>
                </Skill>
                <Skill
                    delay={0.5}
                    id={'css'}
                       title={'CSS'}
                       text={'I use CSS to style and design responsive, visually appealing web applications. I leverage modern techniques like Flexbox, Grid, and animations, while ensuring cross-browser compatibility and maintaining clean, modular code with methodologies like BEM.'}>
                </Skill>
                <Skill
                    delay={0.6}
                    id={'desing'}
                       title={'Design'}
                       text={'I focus on creating user-centered designs that are both visually appealing and functional. I use tools like Figma or Adobe XD to prototype and iterate on designs, ensuring they align with brand identity and provide an intuitive user experience.'}>
                </Skill>
            </StyledGrid>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
   
`
const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    max-width: 1400px;
    margin: 0 auto;
    padding: 100px 50px;
    gap: 10px;

    @media ${Theme.media.mobile} {
        padding: 40px 30px;
        grid-template-columns: 1fr;
    }
`
