import { createGlobalStyle } from 'styled-components';

export const color = {
  main: "#7A46DB",
  green: "#A6E327",
  white: "#FFFFFF",
  whiteDark: "#F3F5FA",
  black: "#303030",
  gray: "#A0A0A0",
  grayLight: "#DFDFDF",
  grayDark: "#616161",
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

    --main: ${color.main};
    --branco: ${color.white};
    --branco-escuro: ${color.whiteDark};
    --preto: ${color.black};
    --verde: ${color.green};

    --background: #FAFAFA;
    --cinza: #DFDFDF;
    --cinza-claro:#A0A0A0;
    --cinza-escuro:#616161;
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
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 7px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: var(--main);
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 85%);
    width: 100%;
    height: 100vh;
    
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 380px;
    height: 200px;
    border: 2px solid var(--preto);
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.textTitle};
    }

    p {
      margin-bottom: 20px;
      color: ${({ theme }) => theme.colors.textBody};
    }

    .box_buttons {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        padding: 8px 16px;
        border-radius: 5px;
      }

      .delete {
        margin-right: 15px;
        border: 2px solid ${({ theme }) => theme.colors.buttonRed};
        background-color: transparent;
        transition: background .2s;
        
        color: ${({ theme }) => theme.colors.buttonRed};
        transition: color .2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.buttonRed};
          color: var(--branco);
        }
      }

      .cancel {
        border: 2px solid var(--main);
        background-color: var(--main);
        transition: filter .2s;

        color: var(--branco);

        &:hover {
          filter: brightness(0.8);;
        }
      }
    }
  }
`;