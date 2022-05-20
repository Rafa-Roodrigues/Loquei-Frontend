import styled, {} from 'styled-components';

export const FooterContainer = styled.div `
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundSecundario};

  .box_content {
    width: 100%;
    padding: 20px 100px;
    position: relative;
  }

  .box_politica {
    width: 100%;
    padding: 50px 100px;
    border-top: 1px solid var(--cinza);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    p {
      opacity: 0.8;
      color: ${({  theme }) => theme.colors.colorTitulo};
      font-weight: 300;
      font-size: 0.8rem;

      a {
        text-decoration: underline;
      }
    }

    span {
      margin-top: 8px;
      opacity: 0.8;
      color: ${({  theme }) => theme.colors.colorTitulo};
      font-weight: 400;
      font-size: 0.8rem;
    }
  }
`