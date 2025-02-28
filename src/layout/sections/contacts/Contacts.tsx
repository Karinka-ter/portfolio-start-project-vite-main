import React from 'react';
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu.tsx";
import {Logo} from "../../../components/logo/Logo.tsx";


export const Contacts = () => {
    return (
        <StyledContact>
            <div>
                <Logo/>
                <Menu/>
            </div>
            <form>
                <p>Get in touch</p>
                <input type="tel" placeholder={"Your phone number"}/>
                <button type={'submit'}>Send</button>
            </form>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    background-color: #b56a6a;
    display: flex;
    gap: 40px
`



