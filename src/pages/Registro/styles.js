import styled, {} from "styled-components";

export const RegistroContainer = styled.div `
  width: 100%;
  height: 100vh;
  position: relative;

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
  background-color: ${({ theme }) => theme.colors.backgroundSecundario};
  box-shadow: 0 0 10px rgba(0, 0, 0, 10%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: grid;
    gap: 15px;
    grid-template-areas: 'nome sobrenome cpf'
                         'cep endereco endereco'
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
          color: ${({ theme }) => theme.colors.colorText};
        }

        &:valid {
          color: ${({ theme }) => theme.colors.colorText};
        }

        &:focus {
          color: ${({ theme }) => theme.colors.colorText};
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
        grid-area: sobrenome;
      }
      &:nth-child(3) {
        grid-area: cpf;
      }
      &:nth-child(4) {
        grid-area: cep;

        input {
          &:first-child {
            width: calc(70% - 15px);
            margin-right: 15px;
          }
          &:last-child {
            width: 30%;
          }
        }
      }
      &:nth-child(5) {
        grid-area: endereco;
      }
      &:nth-child(6) {
        grid-area: email;
      }
      &:nth-child(7) {
        grid-area: senha;
      }
      &:nth-child(8) {
        grid-area: confirme;
      }
    }

    .box_login {
      span {
        font-weight: 700;
        font-size: 0.85rem;
        color: ${({ theme }) => theme.colors.colorTitulo};

        a {
          color: var(--laranja);
          transition: color .2s;
          
          &:hover {
              color: var(--laranja-hover);
          }
        }
      }
    }

    button {
      grid-area: button;
      width: fit-content;
      padding: 10px 20px;
      border-radius: 0 5px 5px 0;
      background-color: var(--laranja);

      color: var(--branco);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.5px;

      transition: background .2s;

      &:hover {
        background-color: var(--laranja-hover);
      }
    }
  }

  @media screen and (max-width: 910px) {
    height: 100vh;
    padding: 0px 20px;

    .box_title {
      margin-bottom: 20px;

      img {
        width: 40px;
        height: 40px;
      }

      h2 {
        font-size: 38px;
      }
    }

    form {
      gap: 8px;
      grid-template-areas: 'nome'
                           'sobrenome'
                           'cpf'
                           'cep'
                           'endereco'
                           'email'
                           'senha'
                           'confirme'
                           'login'
                           'button';
      
      .box_inputs {
        input {
          font-size: 0.85rem;
        }

        &:nth-child(4) {
          input {
            &:first-child {
              width: calc(60% - 8px);
              margin-right: 8px;
            }

            &:last-child {
              width: 40%;
            }
          }
        }
      }
    }
  }
`