import styled, {} from 'styled-components';

export const Container = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: 40px;
  position: relative;
  
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

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
        color: ${({ theme }) => theme.colors.textBody};
        font-size: .85rem;
        transition: filter .2s;

        &:hover {
          filter: brightness(0.5);
        }
      }
    }
  }

  @media screen and (max-width: 1090px) {
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

  @media screen and (max-width: 870px) {
    display: none;
  }
`;