import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background--1: #f0f2f5;
        --background--2: #1c1c1c;
        --background--3: #c1c1c1;

        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --green: #33cc95;

        --text-title: #000;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #fff;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background--1);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
        border: none;
    }
    [disabled]{
        opacity: .6;
        cursor: not-allowed;
    }

`;