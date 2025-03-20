import React from 'react';
import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme.tsx";


export const GlobalStyled = createGlobalStyle`
    *,*:before,*:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    
    body {
        margin: 0;
        font-family: Epilogue, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    a{
        text-decoration: none;
        color: currentColor;
        cursor: pointer;
    }
    
    ul{
        list-style: none;
    }
    
    button{
        background-color: unset;
        border: none; 
        cursor: pointer;
    }
    
    section:nth-of-type(odd){
        background-color: ${Theme.colors.primaryBg};
        color: ${Theme.colors.secondaryBg};
    }
    section:nth-of-type(even){
        background-color: ${Theme.colors.secondaryBg};
        color: ${Theme.colors.fontLight};
    }
    
    
`
