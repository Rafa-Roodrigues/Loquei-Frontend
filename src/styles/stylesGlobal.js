import { createGlobalStyle } from 'styled-components';

export const color = {
    main: "#FF6B00",
    white: "#FFFFFF",
    whiteDark: "#F3F5FA",
    black: "#303030",
}

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    :root {
        --max-width: 1280px;

        --branco: ${color.white};
        --branco-escuro: ${color.whiteDark};
        --preto: ${color.black};

        --background: #FAFAFA;
        --cinza: #DFDFDF;
        --cinza-claro:#A0A0A0;
        --cinza-escuro:#616161;
        --laranja: #FF6B00;
        //--laranja-hover: #ED6300;
        --verde: #ADEA2C;
        //--verde-hover: #99D41C;
    }

    html {
        @media screen and (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media screen and (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        -webkit-font-smoothing: antialiased;
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