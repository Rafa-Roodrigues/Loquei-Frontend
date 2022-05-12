import styled, {} from 'styled-components';

export const HomeContainer = styled.div `
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.background};

  .box_categorias {
    width: 100%;
    padding: 20px 10px 0 10px;
    background-color: ${({ theme }) => theme.colors.backgroundCategoria};

    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      margin-bottom: 5px;
      padding-bottom: 20px;
      
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow-x: auto;

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
      &::-webkit-scrollbar {
        width: 6px;
        height: 4px;
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: var(--branco-escuro);
      }

      li {
        width: 140px;
        min-width: 140px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &:last-child {
          margin-right: 0;
        }

        a {
          width: 60px;
          height: 60px;
          border-radius: 50px;
          background-color: ${({ theme }) => theme.colors.backgroundCaixaIconeCategoria};
          /* background-color: red; */
          transition: background .2s;

          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            background-color: ${({ theme }) => theme.colors.laranjaHover};
          }

          &:hover ~ span {
            color: var(--branco-escuro);
          }

          .icons {
            color: ${({ theme }) => theme.colors.colorIconeCategoria};
          }
        }

        span {
          margin-top: 10px;
          color: ${({ theme }) => theme.colors.colorTextoCategoria};
          font-weight: 500;
          font-size: 0.8rem;
          transition: color .2s;
        }
      }
    }
  }

  .content {
    width: 100%;
    height: 100%;
    padding: 50px;
    position: relative;

    .title_box {
      color: ${({ theme }) => theme.colors.colorText};
      font-size: .9rem;

      position: absolute;
      top: -22px;
      left: 0;
    }

    .box_estados {
      max-width: var(--max-width);
      margin: 0 auto;
      margin-bottom: 40px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.backgroundSecundario};
      position: relative;
      
      ul {
        padding: 30px 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;

        li {
          margin-right: 20px;
          
          &:last-child {
            margin-right: 0;
          }

          a {
            color: ${({ theme }) => theme.colors.colorText};
            font-size: .85rem;
            transition: color .2s;

            &:hover {
              color: var(--cinza-escuro);
            }
          }
        }
      }
    }

    .box_cards_destaque {
      max-width: var(--max-width);
      margin: 0 auto;
      margin-bottom: 50px;
      padding: 30px 50px 15px 50px;
      border-radius: 5px;
      background-color: transparent;
      /* background-color: ${({ theme }) => theme.colors.backgroundSecundario}; */
      position: relative;

      .title {
        display: none;
        color: var(--cinza-claro);
        font-weight: 800;
        font-size: 28px;
        text-align: center;

      }

      .button_arrow {
        width: 30px;
        height: 30px;
        border-radius: 50px;
        background-color: var(--laranja);
        transition: background .2s;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        &:nth-child(2) {
          left: 0;
        }

        &:nth-child(3) {
          right: 0;
        }

        &:hover {
          background-color: var(--laranja-hover);
        }
      }

      .box_carousel {
        padding-bottom: 15px;
        overflow-x: auto;

        display: flex;
        align-items: center;
        justify-content: start;

        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;

        &::-webkit-scrollbar-track {
          background-color: transparent;
        }
        &::-webkit-scrollbar {
          height: 3px;
          background: transparent;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 50px;
          background: transparent;
        }

        .card {
          width: fit-content;
          margin-right: 20px;
          scroll-snap-align: start;
        }
      }
    }

    .box_cards_vertical {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 30px 30px 15px 30px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.backgroundSecundario};
      position: relative;

      .box_margin {
        padding-bottom: 15px;

        display: grid;
        align-self: center;
        justify-items: center;
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .box_cards_horizontal {
      display: none;
    }
  }

  @media screen and (max-width: 1200px) {
    .content {
      .box_cards_vertical {
        .box_margin {
          grid-template-columns: repeat(3, 1fr);

          .cards:nth-child(4) {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1090px) {
    .content {
      .box_estados {
        ul {
          padding: 30px 30px;

          li {
            margin-right: auto;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 920px) {
    .box_categorias {
      ul {
        align-items: center;
        justify-content: flex-start;
      }
    }

    .content {
      .box_cards_vertical {
        display: none;
      }
  
      .box_cards_horizontal {
        display: flex;
        flex-direction: column;
      }
    }
  }

  @media screen and (max-width: 870px) {
    .content {
      .box_estados {
        display: none;
      }
    }
  }

  @media screen and (max-width: 740px) {
    .content {
      padding: 50px 20px;
    }
  }

  @media screen and (max-width: 500px) {
    .content {
      padding: 50px 0;
    }
  }
`;