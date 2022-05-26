import styled, {} from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 10px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.categoryContainer};

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: none;
  }

  ul {
    list-style: none;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: auto;

    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      display: none;
    }

    li {
      width: 120px;
      min-width: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      scroll-snap-align: start;

      &:last-child {
        margin-right: 0;
      }

      a {
        padding: 10px;
        border-radius: 50px;
        background-color: ${({ theme }) => theme.colors.categoryBoxIcon};
        transition: filter .2s;

        display: flex;
        align-items: center;
        justify-content: center;

        .icons {
          color: ${({ theme }) => theme.colors.categoryIcon};
          transition: color .2s;
        }

        &:hover, &:hover ~ span {
          filter: brightness(0.9);
        }
      }

      span {
        margin-top: 5px;
        color: var(--branco);
        font-weight: 500;
        font-size: 0.7rem;
        transition: filter .2s;
      }
    }
  }

  @media screen and (max-width: 630px) {
    padding: 10px 40px;

    button {
      background-color: rgba(0, 0, 0, 10%);
      border-radius: 50px;
      padding: 4px;
      position: absolute;
      left: 6px;

      display: flex;
      align-items: center;
      justify-content: center;
      
      &:nth-child(2) {
        left: initial;
        right: 6px;
      }
    }

    ul {
      align-items: center;
      justify-content: flex-start;
    }
  }
`;