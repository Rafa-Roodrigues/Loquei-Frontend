import styled, {} from "styled-components";

export const LogoContainer = styled.header `
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    h2 {
      margin-left: 10px;
  
      color: ${({ theme}) => theme.colors.colorTitulo};
      font-family: 'Oswald', sans-serif;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
`;