import styled, {} from 'styled-components';

export const Container = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: 40px;
  position: relative;
  
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.backgroundSecundario};

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
          color: ${({ theme }) => theme.colors.colorTextHover};
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