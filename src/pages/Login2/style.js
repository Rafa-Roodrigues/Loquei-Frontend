import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const ContentRight = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.categoryContainer};

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    color: #ffffff;

    div {
        margin: 20px;

        h1 {
            font-size: 2.5rem;
        }
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const ContentLeft = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};


    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        flex: 1;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 0 15px;

        max-width: 550px;
        width: 100%;

        > p {
            margin-top: 5px;
            font-size: 13px;
            color: #222222;

            a {
                text-decoration: underline;
            }
        }

        h2 {
            color: #7A46DB;
            text-align: center;
            font-size: 2.5rem;
        }

    }

    button {
        height: 40px;
        grid-area: botao;
        background-color: #A6E327;
        display: block;
        border-radius: 5px;
        font-weight: 700;
        color: #FFFFFF;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        position: relative;

        form {
            max-width: 100%;

            > p {
                display: none;
            }

        }

    }
`;

 export const BoxInputs = styled.div`
    margin-top: 2rem;
    max-width: inherit;
    width: 100%;

    > p {
        font-size: 13px;
    }
 `;

 export const Footer = styled.footer`
    width: 100%;
    height: 100px;
    background-color: #7A46DB;

    display: none;
    justify-content: center;
    align-items: center;

    color: #FFFFFF;  

    > p a {
        text-decoration: underline;
    }

    @media screen and (max-width: 800px) {
        display: flex;
    }
 `;

 export const Error = styled.p`
    color: #e84118;
    margin-left: 3px;
    font-size: 13px;
 `;

 export const Input = styled.label`
    display: block;
    font-size: 13px;

    margin-bottom: 10px;



    input {
        width: 100%;
        height: 40px;

        background-color: ${({ theme }) => theme.colors.inputsBackground};
        color: ${({ theme }) => theme.colors.inputsText};

        padding-left: 10px;
        border-radius: 5px;

        border: 2px solid ${({error}) => error ? '#e84118': 'transparent'};

        &::placeholder {
            color: ${({ theme }) => theme.colors.inputsPlaceholder};
        }
    }
 `;