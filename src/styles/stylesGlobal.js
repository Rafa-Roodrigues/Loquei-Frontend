import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    :root {
        --max-width: 1280px;

        --branco: #ffffff;
        --branco-escuro: #F5F5F5;
        --background: #FAFAFA;
        --cinza: #DFDFDF;
        --cinza-claro:#A0A0A0;
        --cinza-escuro:#616161;
        --laranja: #FF6B00;
        --laranja-hover: #ED6300;
        --preto: #303030;
        --verde: #ADEA2C;
        --verde-hover: #99D41C;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
    }

    body, input, textarea, button {
        font-family: 'Manrope', sans-serif;
        font-weight: 600;
        color: var(--black);
    }

    button {
        outline: none;
        background-color: transparent;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.background};
    }
    ::-webkit-scrollbar {
        width: 7px;
        background-color: ${({ theme }) => theme.colors.background};
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: linear-gradient(to bottom, var(--cinza-claro), var(--cinza-escuro), var(--cinza-claro));
    }

`;