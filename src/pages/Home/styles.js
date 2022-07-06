import styled, {} from 'styled-components';

export const Container = styled.div `
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.background};

  .content {
    width: 100%;
    height: 100%;
    padding: 50px;
    position: relative;

    #not_found {
      text-align: center;
      color: ${({ theme }) => theme.colors.textBody};
    }

    .title_box {
      color: ${({ theme }) => theme.colors.textBody};
      font-size: .9rem;

      position: absolute;
      top: -26px;
      left: 0;
    }

    .box_cards_vertical {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 30px 30px 15px 30px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.backgroundSecondary};
      position: relative;

      .box_margin {
        padding-bottom: 15px;

        display: grid;
        align-self: center;
        justify-items: center;
        grid-template-columns: repeat(4, 1fr);
        row-gap: 40px;
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

  @media screen and (max-width: 920px) {
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

  @media screen and (max-width: 740px) {
    .content {
      padding: 50px 20px;
    }
  }

  @media screen and (max-width: 500px) {
    .content {
      padding: 50px 0;
      
      .search {
        width: calc(100% - 40px);
        margin: 0 20px;
      }
    }
  }
`;