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
    padding: 40px 0;
    border-top: 1px solid rgba(0, 0, 0, 10%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    p {
      opacity: 0.8;
      color: ${({  theme }) => theme.colors.colorTitulo};
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
      color: ${({  theme }) => theme.colors.colorTitulo};
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`