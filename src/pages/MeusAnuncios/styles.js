import styled, {} from 'styled-components';

export const MeusAnunciosContainer = styled.div `
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.background};

  .box_grid {
    width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;

    aside {
      height: calc(100vh - 90px);
      background-color: ${({ theme }) => theme.colors.background};
      position: relative;

      form {
        width: 100%;
        padding: 20px;
        border-bottom: 1px solid var(--cinza);

        span {
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
        }
      }

      a {
        width: 240px;
        height: 240px;
        border-radius: 50px;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='50' ry='50' stroke='%23D4D4D4FF' stroke-width='4' stroke-dasharray='21' stroke-dashoffset='42' stroke-linecap='square'/%3e%3c/svg%3e");
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span {
          width: 40px;
          height: 40px;
          margin-bottom: 15px;
          position: relative;

          &::before {
            content: '';
            width: 100%;
            height: 0.5px;
            background-color: var(--cinza);

            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }

          &::after {
            content: '';
            width: 0.5px;
            height: 100%;
            background-color: var(--cinza);

            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        p {
          color: var(--cinza);
        }

      }
    }
  
    .box_content {
      width: 100%;
      height: calc(100vh - 90px);
      padding: 20px 50px;
      overflow-y: auto;
      background-color: ${({ theme }) => theme.colors.backgroundSecundario};
      
      .card_vertical {
        width: 100%;
        height: fit-content;
        column-gap: 20px;
        row-gap: 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
      }

      .card_horizontal {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1180px) {
    .box_grid {
      .box_content {
        padding: 20px;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .box_grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      aside {
        width: 100%;
        height: 120px;
        padding: 25px 20px 0 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        form {
          width: calc(100%);
          padding: 20px 0;
          border: none;
          position: relative;

          span {
            margin-bottom: 8px;
            display: block;
            color: var(--cinza-escuro);
            font-size: 0.8rem;

            position: absolute;
            top: -5px;
          }
        }

        a {
          display: none;
        }
      }

      .box_content {
        height: 100%;

        .card_vertical {
          display: none;
        }

        .card_horizontal {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  @media screen and (max-width: 414px) {
    .box_grid {
      .box_content {
        padding: 10px 0;
      }
    }
  }
`;