import styled, {} from 'styled-components';

export const ContainerAnunciar = styled.div `
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

    .box_mobile {
      display: none;
    }

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
        width: 4px;
        background-color: ${({ theme }) => theme.colors.background};
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: rgba(0, 0, 0, 3%);
      }

      form {
        width: 100%;
        height: fit-content;
        background-color: transparent;

        .box_input {
          padding: 15px;
          border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundSecundario};
          position: relative;

          h3 {
            margin-bottom: 5px;
            display: block;
            color: ${({ theme }) => theme.colors.colorText};
            font-size: 0.8rem;
          }

          input {
            width: 100%;
            padding: 12px 10px;
            outline: none;
            border: 2px solid var(--cinza);
            border-radius: 5px;
            background-color: transparent;

            color: var(--cinza-escuro);

            &::placeholder {
              color: var(--cinza);
            }

            &.dark_input {
              border: none;
              background-color: ${({  theme }) => theme.colors.backgroundSecundario};
              color: ${({  theme }) => theme.colors.cinza};
              transition: color .2s;

              &::placeholder {
                color: ${({  theme }) => theme.colors.cinza};
              }

              &:focus {
                color: ${({  theme }) => theme.colors.colorText};
              }
            }
          }

          span {
            display: block;

            color: ${({ theme }) => theme.colors.cinza};;
            font-weight: 500;
            font-size: 0.7rem;
          }

          .icon {
            color: ${({ theme }) => theme.colors.cinza};
            position: absolute;
            top: calc(50% + 12px);
            right: 25px;
            transform: translateY(-50%);
          }

          .grid_checkbox {
            display: grid;
            grid-template-columns: 0.8fr 1.2fr;
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

                &.dark_checkbox {
                  background-color: ${({ theme }) => theme.colors.backgroundSecundario};
                  border: 2px solid ${({ theme }) => theme.colors.backgroundSecundario};
                }

                .icons {
                  display: none;
                  color: var(--branco);
                }
              }
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
      justify-content: space-between;

      .box_preview_image {
        width: 100%;
        height: 80px;
        background-color: transparent;

        display: flex;
        align-items: center;
        justify-content: center;

        .preview_container {
          width: 80px;
          height: 80px;
          margin-right: 20px;
          border-radius: 5px;
          background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23A0A0A0FF' stroke-width='4' stroke-dasharray='7%2c 12' stroke-dashoffset='24' stroke-linecap='square'/%3e%3c/svg%3e");

          &:last-child {
            margin-right: 0;
          }
        }
      }

      .box_card {
        min-height: 295px;

        .alternative {
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;

          .icons {
            color: ${({ theme }) => theme.colors.colorText}
          }

          label {
            width: 58px;
            height: 22px;
            margin: 0 5px;
            border-radius: 50px;
            background: var(--laranja);
            position: relative;

            input {
              display: none;

              &:checked ~ span {
                left: 37px;
              }
            }

            span {
              width: 18px;
              height: 18px;
              border-radius: 50px;
              background-color: var(--branco);
              transition: left .2s;

              position: absolute;
              top: 50%;
              left: 3px;
              transform: translateY(-50%);
            }
          }
        }

        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .upload {
            cursor: pointer;
            position: absolute;
            top: 30%;
            z-index: 1;
            transform: translateY(-50%);

            &.horizontal {
              top: 50%;
              left: 66px;
            }

            input {
              display: none;
            }
          }
        }
      }

      .button_publicar {
        padding: 10px 30px;
        border-radius: 5px;
        background-color: var(--verde);
        transition: background .2s;

        color: var(--branco);
        font-size: 1rem;
        letter-spacing: 5%;

        &:hover {
          background-color: var(--verde-hover);
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .box_grid {
      grid-template-columns: 0.7fr 1.3fr;
      .box_anuncios {
        display: none;
      }
    } 
  }

  @media screen and (max-width: 840px) {
    .box_grid {
      .box_content {
        .box_preview_image {
          height: 60px;
          .preview_container {
            width: 60px;
            height: 60px;
            margin-right: 10px;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    } 
  }

  @media screen and (max-width: 720px) {
    .box_grid {
      overflow-y: hidden;
      display: flex;
      flex-direction: column;

      .box_content {
        padding-bottom: 100px;
      }

      .box_mobile {
        width: 100%;
        padding: 15px 0;
        border-radius: 50px 50px 0 0;
        background-color: var(--laranja);
        position: absolute;
        bottom: 0;
        transition: bottom .4s;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        color: var(--branco);
        font-weight: 500;
        font-size: 1rem;
        letter-spacing: 5%;

        div {
          width: 50px;
          height: 5px;
          margin-bottom: 10px;
          border-radius: 70px;
          background-color: rgba(255, 255, 255, 30%);
        }
      }

      .box_filtro {
        padding-bottom: 50px;
        position: absolute;
        z-index: 9;
        bottom: 0px;
        transform: translateY(100%);
        transition: bottom .4s;

        form {
          .box_input {
            .grid_checkbox {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        }
      }
    }
  }
`;