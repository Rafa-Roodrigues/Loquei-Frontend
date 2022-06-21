import styled, {} from 'styled-components';

export const ContainerBuscar = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const BoxGrid = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;

  column-gap: 5px;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;

  @media screen and (max-width: 1025px) {
    grid-template-columns: 0.6fr 1.4fr;
  }

  @media screen and (max-width: 855px) {
    display: flex;
    flex-direction: column;
  }
`;