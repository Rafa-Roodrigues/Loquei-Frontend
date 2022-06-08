import styled, {} from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: var(--main);

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 810px) {
    display: block;
  }
`;

export const BoxContent = styled.div `
  width: fit-content;
  margin: auto auto;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 20%);
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: grid;
    gap: 15px;
    grid-template-areas: 'nome nome cpf'
                         'email senha confirme'
                         'login login login'
                         'button button button';

    .box_inputs {
      input {
        width: 100%;
        padding: 18px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.background};

        color: var(--cinza-claro);
        font-size: 1rem;
        transition: color .3s;

        &::placeholder {
          color: ${({ theme }) => theme.colors.textBody};
        }

        &:valid {
          color: ${({ theme }) => theme.colors.textBody};
        }

        &:focus {
          color: ${({ theme }) => theme.colors.textBody};
          outline: 2px solid var(--cinza-claro);
        }

        &[disabled] {
          cursor: default;
        }
      }

      &:nth-child(1) {
        grid-area: nome;
      }
      &:nth-child(2) {
        grid-area: cpf;
      }
      &:nth-child(3) {
        grid-area: email;
      }
      &:nth-child(4) {
        grid-area: senha;
      }
      &:nth-child(5) {
        grid-area: confirme;
      }
    }

    .box_login {
      span {
        font-weight: 700;
        font-size: 0.85rem;
        color: ${({ theme }) => theme.colors.textBody};

        a {
          color: var(--main);
          transition: filter .2s;
          
          &:hover {
              filter: brightness(0.8);
          }
        }
      }
    }

    button {
      grid-area: button;
      width: fit-content;
      padding: 10px 20px;
      border-radius: 0 5px 5px 0;
      background-color: var(--verde);

      color: var(--branco);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.5px;

      transition: filter .2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  @media screen and (max-width: 820px) {
    max-width: 500px;
    width: 100%;
    height: 100vh;
    padding: 0px 20px;

    form {
      width: 100%;
      gap: 8px;
      grid-template-areas: 'nome'
                           'cpf'
                           'email'
                           'senha'
                           'confirme'
                           'login'
                           'button';
      
      .box_inputs {
        input {
          font-size: 0.85rem;
        }
      }
    }
  }
`