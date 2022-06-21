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

    display: flex;

    #box_info {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;

      > li {
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
          background-color: ${({ theme }) => theme.colors.buttonGreen};
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
        background-color: ${({ theme }) => theme.colors.buttonGreen};
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

          color: #ffffff;
          font-size: 15px;

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
  
            a, button {
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

export const Perfil = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  margin-left: 10px;

  position: relative;
  cursor: pointer;

  &:hover {
    #box_info_login {
      display: flex;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  #box_image {
    background-color: #7A46DB;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;

    color: #ffffff;
  }

  #box_name {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textTitle};
  }

  #box_info_login {
    display: none;
    flex-direction: column;

    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    z-index: 999999;
    
    padding-top: 60px;

    ul {      
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.textTitle};
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

      border-radius: 5px;

      li {
        border-bottom: 1px solid #d9d9d9;

        &:last-child {
          border-bottom: 0px solid #d9d9d9;
        }

        button:last-child {
            border-radius: 0px 0px 5px 5px;
        }

        a:last-child {
            border-radius: 5px 5px 0px 0px;
        }

        a, button {
          width: 100%;
          
          padding: 13px;

          transition: color .2s;

          color: ${({ theme }) => theme.colors.textBody};
          font-weight: 500;

          display: flex;
          align-items: center;

          svg {
            margin-right: 10px;
            color: ${({ theme }) => theme.colors.textBody};
          }

          &:hover{
            background-color: ${({ theme }) => theme.colors.backgroundSecondary};

            svg {
              color: ${({ theme }) => theme.colors.textBody};
            }
          }
        }      
      }
    }
  }
  
`;

export const BoxContent = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-right: 15px;
  }

  svg {
    color: ${({ theme }) => theme.colors.textTitle};
  }
`;  