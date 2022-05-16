import styled, {} from 'styled-components';

export const CardVerticalContainer = styled.article `
  width: 250px;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 8px rgba(0, 0, 0, 10%);

  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
  }

  .box_info {
    padding: 0 8px;

    h2 {
      color: ${({ theme }) => theme.colors.colorTitulo};
      font-size: 0.95rem;
    }

    p {
      margin: 3px 0 5px 0;

      color: ${({ theme }) => theme.colors.colorText};
      font-size: 0.75rem;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    ul {
      margin-bottom: 12px;
      list-style: none;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      overflow-x: auto;

      &::-webkit-scrollbar-track {
        display: none;
      }
      
      &::-webkit-scrollbar {
        display: none;
      }

      li {
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        color: ${({ theme }) => theme.colors.colorText};
        font-size: 12px;

        &:last-child {
          margin-right: 0;
        }

        .icons {
          margin-right: 3px;
        }
      }
    }

    .information {
      color: var(--laranja);
      font-size: 14px;
      transition: color .2s;

      &:hover {
        color: var(--laranja-hover);
      }
    }

    button {
      background-color: transparent;
      color: #ff5658;
      font-weight: 700;
      font-size: 14px;
      transition: color .2s;

      &:hover {
        color: red;
      }
    }
  }

  .pop_confirmation {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 85%);

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    .pop {
      width: 380px;
      height: 200px;
      border: 2px solid var(--preto);
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.background};

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2 {
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.colorTitulo};
      }

      p {
        margin-bottom: 20px;
        color: ${({ theme }) => theme.colors.colorText};
      }

      .box_buttons {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          padding: 8px;
          border-radius: 5px;
        }

        .delete {
          margin-right: 10px;
          border: 2px solid red;
          background-color: transparent;
          transition: background .2s;
          
          color: red;
          transition: color .2s;

          &:hover {
            background-color: red;
            color: var(--branco);
          }
        }

        .cancel {
          border: 2px solid dodgerblue;
          transition: border .2s;
          background-color: dodgerblue;
          transition: background .2s;

          color: var(--branco);

          &:hover {
            border: 2px solid #42b0f5;
            background-color: #42b0f5;
          }
        }
      }
    }
  }
`;

export const CardHorizontalContainer = styled.article `
  width: 100%;
  min-width: 375px;
  height: 150px;
  padding: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  /* background-color: red; */

  display: grid;
  gap: 20px;
  grid-template-columns: 150px auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.backgroundCardSecundario};
  }

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }

  .box_info {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      color: ${({ theme }) => theme.colors.colorTitulo};
      font-size: 0.95rem;
    }

    p {
      color: ${({ theme }) => theme.colors.colorText};
      font-size: 0.75rem;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    ul {
      margin-bottom: 8px;
      list-style: none;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      overflow-x: auto;

      &::-webkit-scrollbar-track {
        display: none;
      }
      
      &::-webkit-scrollbar {
        display: none;
      }

      li {
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        color: ${({ theme }) => theme.colors.colorText};
        font-size: 12px;

        &:last-child {
          margin-right: 0;
        }

        .icons {
          margin-right: 3px;
        }
      }
    }

    a {
      width: fit-content;
      padding: 6px 8px;
      border-radius: 5px;
      background-color: var(--laranja);
      transition: background .2s;
      
      color: var(--branco);
      font-size: 12px;
      text-transform: uppercase;
      transition: color .2s;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: var(--laranja-hover);
        color: var(--branco-escuro);
      }

      .icons {
        margin-left: 8px;
      }
    }

    button {
      width: fit-content;
      padding: 6px 8px;
      border-radius: 5px;
      background-color: red;
      transition: filter .2s;

      color: var(--branco);
      font-weight: 800;
      font-size: 12px;
      text-transform: uppercase;
      transition: color .2s;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  .pop_confirmation {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 85%);

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    .pop {
      width: 380px;
      height: 200px;
      border: 2px solid var(--preto);
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.background};

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2 {
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.colorTitulo};
      }

      p {
        margin-bottom: 20px;
        color: ${({ theme }) => theme.colors.colorText};
      }

      .box_buttons {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          padding: 8px;
          border-radius: 5px;
        }

        .delete {
          margin-right: 10px;
          border: 2px solid red;
          background-color: transparent;
          transition: background .2s;
          
          color: red;
          transition: color .2s;

          &:hover {
            background-color: red;
            color: var(--branco);
          }
        }

        .cancel {
          border: 2px solid dodgerblue;
          transition: border .2s;
          background-color: dodgerblue;
          transition: background .2s;

          color: var(--branco);

          &:hover {
            border: 2px solid #42b0f5;
            background-color: #42b0f5;
          }
        }
      }
    }
  }
`;