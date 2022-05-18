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

    column-gap: 5px;
    display: grid;
    grid-template-columns: 0.7fr 1.6fr 0.7fr;

    .box_filtro {
      width: 100%;
      height: 100%;
      margin-right: 5px;
      padding-right: 5px;
      overflow-y: auto;
      background-color: ${({ theme }) => theme.colors.background};

      &::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.background};
      }
      &::-webkit-scrollbar {
        width: 5px;
        background-color: ${({ theme }) => theme.colors.background};
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: var(--cinza);
      }

      form {
        width: 100%;
        height: fit-content;
        background-color: transparent;

        .box_input {
          padding: 20px 15px;
          border-bottom: 1px solid var(--cinza);
          position: relative;

          h3 {
            margin-bottom: 8px;
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

          .grid_checkbox {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, auto);

            .checkbox {
              width: fit-content;
              margin-top: 10px;
              padding-left: 20px;
              position: relative;

              display: flex;
              align-items: center;
              justify-content: flex-start;

              color: ${({ theme }) => theme.colors.colorText};
              font-weight: 500;
              font-size: 0.75rem;

              input[type="checkbox"] {
                opacity: 0;
                position: absolute;
                top: 50%;
                left: -20px;
                transform: translateY(-50%);

                &:checked ~ span {
                  background-color: var(--laranja);
                  border: 2px solid var(--laranja);

                  .icons {
                    display: inline-block;
                  }
                }
              }

              span {
                width: 15px;
                height: 15px;
                border: 2px solid var(--cinza);
                border-radius: 4px;
                background-color: transparent;

                display: flex;
                align-items: center;
                justify-content: center;

                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);

                .icons {
                  display: none;
                  color: var(--branco);
                }
              }
            }
          }

          .grid_input {
            width: fit-content;
            margin-top: 5px;
            margin-right: 20px;
            display: inline-block;

            input {
              width: 80px;
              padding: 8px 10px;
            }
            
            span {
              display: block;

              color: var(--cinza);
              font-weight: 500;
              font-size: 0.7rem;
            }
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
        background-color: ${({ theme }) => theme.colors.background};
      }
      &::-webkit-scrollbar {
          width: 5px;
          background-color: ${({ theme }) => theme.colors.background};
      }
      &::-webkit-scrollbar-thumb {
          border-radius: 50px;
          background: var(--cinza);
      }
    }
  }
`;