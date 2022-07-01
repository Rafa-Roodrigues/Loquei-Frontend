import styled, {} from 'styled-components';

export const CardHorizontalContainer = styled.article`
  width: 100%;
  min-width: 375px;
  height: 150px;
  min-height: 150px;
  padding: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.cardHorizontalBackground};

  display: grid;
  gap: 20px;
  grid-template-columns: 150px auto;

  .box_image {
    width: 100%;
    height: 100%;
    background-color: var(--main);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.cardHorizontalBackgroundSecondary};
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
      color: ${({ theme }) => theme.colors.textTitle};
      font-size: 0.95rem;
    }

    p {
      color: ${({ theme }) => theme.colors.textBody};
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

        color: ${({ theme }) => theme.colors.textBody};
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
      background-color: ${({ theme }) => theme.colors.buttonGreen};
      transition: filter .2s;
      
      color: var(--branco);
      font-size: 12px;
      text-transform: uppercase;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(0.8);
      }

      .icons {
        margin-left: 8px;
      }
    }

    button {
      width: fit-content;
      padding: 6px 8px;
      border-radius: 3px;
      background-color: ${({ theme }) => theme.colors.buttonRed};
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
`;