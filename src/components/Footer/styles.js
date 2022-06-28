import styled, {} from 'styled-components';

export const Container = styled.div `
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`

export const Content = styled.div `
  width: 100%;
  padding: 20px;

  > div {
    margin-bottom: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      margin-bottom: 10px;
      color: var(--cinza-escuro);
      transition: color .2s;

      &:hover {
        color: var(--main);
      }
    }

    img {
      width: 60px;
      height: 60px;
      margin-bottom: 5px;
      padding-bottom: 5px;
    }
  }

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      margin-right: 20px;

      img {
        filter: grayscale(100%);
        transition: filter .2s;
        opacity: 0.5;
        transition: opacity .2s;

        &:hover {
          filter: grayscale(0);
          opacity: 1;
        }
      }

      img#techmark {
        height: 28px;
      }

      img#weame {
        height: 28px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const PolicyAndTerms = styled.div`
  width: 100%;
  padding: 40px 0;
  border-top: 1px solid rgba(0, 0, 0, 10%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  p {
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.textTitle};
    font-weight: 500;
    font-size: 0.75rem;
    letter-spacing: 1px;

    a {
      text-decoration: underline;
    }
  }

  span {
    margin-top: 8px;
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.textTitle};
    font-size: 0.8rem;
    font-weight: 500;
  }
`;