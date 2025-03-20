import React, {ElementRef, useRef} from 'react';
import styled, {css} from "styled-components";
import {Menu} from "../../../components/menu/Menu.tsx";
import {Logo} from "../../../components/logo/Logo.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Theme} from "../../../styles/Theme.tsx";
import Typewriter from "typewriter-effect";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Contacts = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs
            .sendForm('service_5hup0ev', 'template_7uh71wk', form.current, {
                publicKey: 'lF8PpurRsJgsgH_KX',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Your message has been received. We appreciate your trust and will respond soon!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Ошибка при отправке формы!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                },
            );
        e.target.reset();
    };
    return (
        <StyledContact id="contacts">
            <Container>
                <FlexWrapper justifyContent="space-between" wrap="wrap" alignItems="center">
                    <StyledLogoMenu>
                        <Logo/>
                        <Menu/>
                    </StyledLogoMenu>
                    <StyledForm ref={form} onSubmit={sendEmail}>
                        <StyledTitleForm>
                            <Typewriter
                                options={{
                                    strings: ["Get in touch", "Write to us", "Leave your contact details"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 70,
                                }}/>
                        </StyledTitleForm>
                        <StyledInputForm required text type="text" placeholder={"Your massage"} name={'message'}/>
                        <StyledFormContainer>
                            <StyledInputForm required type="tel" placeholder={"Your phone number"} name={'subject'}/>
                            <StyledButtonForm type={'submit'}>Send</StyledButtonForm>
                        </StyledFormContainer>
                    </StyledForm>
                </FlexWrapper>
            </Container>
            <ToastContainerStyled
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </StyledContact>
    );
};

const StyledContact = styled.section`
    padding: 30px 0;

`

const StyledFormContainer = styled.div`
    display: flex;
    gap: 10px; 
    width: 400px;
    
    @media ${Theme.media.mobile} {
        width: 320px;
    }
`

const StyledLogoMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
`


const StyledTitleForm = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: #000;
    padding-top: 25px ;
    
`



type StyledFormInputFormProps = {
    text?: boolean;

}

const StyledInputForm = styled.input<StyledFormInputFormProps>`
    border: 1px solid #000;
    padding: 12px;
    width: 70%;
    height: 48px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #505050;
    
    ${props => props.text && css`
        width: 100%;
    `}

`

const StyledButtonForm = styled.button`
    border: 1px solid #000;
    padding: 12px 24px;
    width: 30%;
    height: 48px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #000;
    transition: transform 0.5s ease, background-color 0.5s ease;


    &:hover {
        color: #fff;
        background-color: #000;
    }
`

const ToastContainerStyled = styled(ToastContainer)`
    position: fixed;
    z-index: 99999999999999999;
}
    @media (max-width: 480px) {
        .Toastify__toast {
            top: 10px;
            font-size: 12px; // Уменьшаем размер шрифта
            padding: 8px; // Уменьшаем отступы
            min-height: 40px; // Уменьшаем высоту
            width: 80%; // Уменьшаем ширину
            margin: 0 auto; // Центрируем уведомление
        }
`



