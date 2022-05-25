import styled, {} from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 40px 10px 0px 10px;
  background-color: ${({ theme }) => theme.colors.categoryContainer};

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    margin-bottom: 5px;
    padding-bottom: 40px;
    
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
      background: rgba(255, 255, 255, 0.5);
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
        background-color: ${({ theme }) => theme.colors.categoryBoxIcon};
        transition: filter .2s;

        display: flex;
        align-items: center;
        justify-content: center;

        .icons {
          color: ${({ theme }) => theme.colors.categoryIcon};
          transition: color .2s;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }

      span {
        margin-top: 10px;
        color: var(--branco);
        font-weight: 500;
        font-size: 0.8rem;
        transition: color .2s;
      }
    }
  }

  @media screen and (max-width: 990px) {
    ul {
      align-items: center;
      justify-content: flex-start;
    }
  }
`;