import styled, {} from "styled-components";

export const HeaderContainer = styled.header `
  width: 100%;
  height: 90px;
  padding: 0 50px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: space-between;

  .navigation {
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        margin-right: 25px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;

        &:last-child {
          margin-right: 0;
        }

        .link {
          color: ${({ theme }) => theme.colors.textBody};
          font-weight: 500;
          transition: filter .2s;

          &:hover, &:hover ~ .icons {
            filter: brightness(0.5);
          }
        }

        .icons {
          margin-right: 10px;
          color: ${({ theme }) => theme.colors.textBody};
          transition: color .2s ease-out;
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: filter .2s;

          &:hover {
            filter: brightness(0.8);
          }
        }

        .button_registrar {
          padding: 10px 20px;
          border-radius: 5px;
          background-color: ${({ theme }) => theme.colors.buttonsGreen};
          transition: filter .2s;

          color: var(--branco);
          font-size: 0.95rem;

          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }
  }

  .navigation_mobile {
    display: none;
  }

  @media screen and (max-width: 720px) {
    padding: 0 20px;

    .navigation {
      display: none;
    }

    .navigation_mobile {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .button_registrar {
        margin-right: 15px;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.buttonsGreen};
        transition: filter .2s;

        color: var(--branco);
        font-size: 0.95rem;

        &:hover {
          filter: brightness(0.9)
        }
      }
    }

    .box_menu {
      width: 100%;
      height: 100vh;
      background-color: rgba(0,0,0,50%);

      align-items: center;
      justify-content: flex-end;
      
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9999;

      .menu {
        width: 300px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.background};
        
        header {
          height: 90px;
          padding: 0 20px;
          background-color: var(--main);

          display: flex;
          align-items: center;
          justify-content: space-between;

          button {
            transition: filter .2s;

            &:hover {
              filter: brightness(0.8);
            }
          }
        }

        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
  
          li {
            width: 100%;
            padding: 15px;
            border-bottom: 1px solid #d9d9d9;

            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: flex-end;
  
            &:last-child {
              margin-bottom: 0;
            }
  
            a {
              color: ${({ theme }) => theme.colors.textBody};
              font-weight: 500;
              transition: color .2s;
  
              &:hover, &:hover ~ .icons {
                color: ${({ theme }) => theme.colors.textBody};
              }
            }

            .icons {
              margin-right: 10px;
              color: ${({ theme }) => theme.colors.textBody};
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 370px) {
    padding: 0 10px;

    .navigation_mobile {
      .button_registrar {
        margin-right: 5px;
      }
    }
  }
`;