import styled, {} from 'styled-components';

export const Container = styled.div `
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`

export const Content = styled.div `
  width: 100%;
  padding: 20px;

  h2 {
    margin-bottom: 28px;

    color: ${({ theme }) => theme.colors.textBody};
    font-weight: 800;
    font-size: 1.2rem;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 2px ${({ theme }) => theme.colors.textBody};
    letter-spacing: 1px;
  }

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
      margin-right: 38px;

      img {
        filter: grayscale(100%);
        transition: filter .2s;
        opacity: 0.5;
        transition: opacity .2s;

        cursor: pointer;

        &:hover {
          filter: grayscale(0);
          opacity: 1;
        }
      }

      img#techmark {
        height: 23px;
      }

      img#weame {
        height: 28px;
      }

      img#braillincode {
        height: 28px;
      }

      img#jm {
        width: 80px;
      }

      img#imoveis {
        height: 40px;
      }

      img#eventos {
        width: 70px;
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