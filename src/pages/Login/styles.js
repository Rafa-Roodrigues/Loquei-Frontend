import styled, { } from 'styled-components';

export const Content = styled.div`
    width: 100%;
    max-width: var(--max-width);
    min-height: 100vh;

    margin: 0 auto;

    display: flex;

`;

export const ContentLeft = styled.div`
    width: 50%;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    color: ${({ theme }) => theme.colors.textTitle};

    div {
        max-width: 610px;
        h1 {
            font-size: 3.5rem;
            span {
                color: var(--laranja);
            }
        }

        p {
            font-size: 1.5rem;
            margin: 10px 0;
            font-weight: 600;
        }

        span {
            font-weight: 600;

            a {
                color: var(--laranja);
                transition: color .2s;
                
                &:hover {
                    color: var(--laranja-hover);
                }
            }
        }
    }

    .button_back_to_home {
        width: 42px;
        height: 42px;
        border-radius: 50px;
        background: var(--laranja);
        transition: background .2s;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 80px;

        &:hover {
            background-color: var(--laranja-hover);
        }
    }  

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const ContentRight = styled.div`
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    padding: 0 15px;

    .box_register {
        display: none;
    }

    form {
        max-width: 480px;
        width: 100%;

        padding: 90px 30px;
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        /* box-shadow: 0px 0px 6px #cccccc; */
        border-radius: 5px;

        button {
            display: flex;
            align-items: center;

            color: #ffffff;
            font-weight: 700;
            font-size: 0.95rem;
            letter-spacing: 0.5px;

            background-color: var(--laranja);
            border-radius: 0 5px 5px 0;
            transition: background 0.2s;

            padding: 10px 20px;
            margin-top: 20px;

            svg {
                margin-left: 10px;
            }

            &:hover {
               background-color: var(--laranja-hover);
            }
        }

        div {
            width: 100%;
            display: flex;
        }

        .box_input {
            margin-bottom: 20px;
            position: relative;

            input {
                width: 100%;
                padding: 18px 18px 18px 45px;
                border-radius: 5px;
                background-color: ${({ theme }) => theme.colors.background};

                color: ${({ theme }) => theme.colors.textBody};
                font-size: 16px;
                transition: color .3s;


                &::placeholder {
                    color: ${({ theme }) => theme.colors.textBody};
                }

                &:valid, &:valid ~ .icons {
                    color: ${({ theme }) => theme.colors.textBody};
                }

                &:focus {
                    color: ${({ theme }) => theme.colors.textBody};
                    outline: 2px solid var(--cinza-claro);
                }
            }

            .icons {
                color: ${({ theme }) => theme.colors.textBody};

                position: absolute;
                top: 50%;
                left: 14px;
                transform: translateY(-50%);
            }
        }

        span {
            color: ${({ theme }) => theme.colors.textBody};
            font-size: 14px;
            font-weight: 700;
            display: block;
        }
    }

    @media screen and (max-width: 900px) {
        width: 100%;

        flex-direction: column;
        justify-content: flex-start;

        padding: 0px 0px;

        form {
            max-width: 100%;
            height: 100%;

            border-radius: 0px;

            padding: 0px 15px;

            display: flex;
            flex-direction: column;
            justify-content: center;

            button {
                max-width: fit-content;
                border-radius: 0 5px 5px 0;
            }
        }

        .box_register {
            height: 110px;

            display: flex;
            justify-content: center;
            align-items: center;

            span {
                color: var(--preto);
                font-size: 14px;
                font-weight: 700;
                
                display: block;
                a {
                    color: var(--laranja);
                }
            }
        }
    }
`;