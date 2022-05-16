import styled, {} from 'styled-components';

export const ContainerBuscar = styled.div `
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.background};

  .box_grid {
    width: 100%;
    height: calc(100vh - 90px);
    position: relative;

    display: grid;
    grid-template-columns: 0.7fr 1.6fr 0.7fr;

    .box_filtro {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      background-color: ${({ theme }) => theme.colors.background};

      form {
        width: 100%;
        height: fit-content;
        background-color: transparent;

        .box_input {
          padding: 20px 15px;
          border-bottom: 1px solid var(--cinza);
          position: relative;

          span {
            margin-bottom: 6px;
            display: block;
            color: var(--cinza-escuro);
            font-size: 0.8rem;
          }

          input {
            width: 100%;
            padding: 12px 10px;
            outline: none;
            border: 2px solid var(--cinza);
            border-radius: 5px;
            background: transparent;

            color: var(--cinza-escuro);

            &::placeholder {
              color: var(--cinza);
            }

            &.input_busca {
              padding: 12px 40px 12px 10px;
            }
          }

          .icon {
            color: var(--cinza);
            position: absolute;
            top: calc(50% + 12px);
            right: 25px;
            transform: translateY(-50%);
          }
        }
      }
    }

    .box_content {
      width: 100%;
      height: 100%;
      padding: 20px;
      overflow-y: auto;
      background-color: ${({ theme }) => theme.colors.backgroundSecundario};

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
      &::-webkit-scrollbar {
          width: 3px;
          background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
          border-radius: 50px;
          background: var(--cinza);
      }
    }
  }
`;