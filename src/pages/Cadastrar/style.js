import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const ContentLeft = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.categoryContainer};

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: left;
    color: #ffffff;

    div {
        padding: 0 60px;

        h1 {
            color: var(--branco);
            font-size: 2.5rem;
            margin-bottom: 28px;
        }

        p {
            color: var(--brando-escuro);
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const ContentRight = styled.div`
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
            margin-top: 10px;
            font-size: 13px;
            color: ${({ theme }) => theme.colors.textBody};

            a {
                color: ${({ theme }) => theme.colors.textTitle};
                text-decoration: underline;
            }
        }

        h2 {
            color: #7A46DB;
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 1rem;

            display: none;
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

            h2 {
                display: block;
            }
        }

    }
`;

 export const BoxInputs = styled.div`
    max-width: inherit;
    width: 100%;
    margin-bottom: 1rem;


    display: grid;
    gap: 18px 10px;
    grid-template-areas:'nome sobrenome'
                        'cpf whats'
                        'email email'
                        'senha senha'
                        'confirmar confirmar'
                        'botao botao';

    > p {
        font-size: 13px;
    }

    #box_nome {
        grid-area: nome;
    }

    #box_sobrenome {
        grid-area: sobrenome;
    }

    #box_cpf {
        grid-area: cpf;
    }

    #box_whatsapp {
        grid-area: whats;
    }

    #box_email {
        grid-area: email;
    }

    #box_senha {
        grid-area: senha;
    }

    #box_confirmar {
        grid-area: confirmar;
    }

    /* @media screen and (max-width: 450px) {
        grid-template-areas:'nome nome'
                            'sobrenome sobrenome'
                            'cpf cpf'
                            'whats whats'
                            'email email'
                            'senha senha'
                            'confirmar confirmar'
                            'botao botao';
    } */
 `;

 export const Footer = styled.footer`
    width: 100%;
    height: 70px;
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
    color: ${({ theme }) => theme.colors.red};
    margin-left: 3px;
    font-size: 13px;
 `;

 export const Input = styled.label`
    display: block;
    font-size: 13px;

    span {
        color: ${({ theme }) => theme.colors.textBody};
    }

    input {
        width: 100%;
        height: 40px;

        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        color: ${({ theme }) => theme.colors.inputsText};

        padding-left: 10px;
        border-radius: 5px;

        border: 2px solid ${({error}) => error ? ({ theme }) => theme.colors.red : 'transparent'};

        &::placeholder {
            color: ${({ theme }) => theme.colors.inputsPlaceholder};
        }
    }
 `;

 export const BoxError = styled.div`
    width: 100%;
    background-color: #FFE1E1;
    padding: 10px 0;

    margin-bottom: 1rem;

    font-size: 13px;

    color: ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    text-align: center;
 `;