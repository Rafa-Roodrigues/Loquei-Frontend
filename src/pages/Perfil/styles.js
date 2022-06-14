import styled, {} from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.main`
  width: 100%;
  height: calc(100vh - 90px);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ConfigurationPanel = styled.div`
  width: 100%;
  max-width: 720px;
  height: 100%;
  padding: 70px 50px;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const BoxInputs = styled.label`
  width: 100%;
  margin-bottom: 24px;
  position: relative;

  display: flex;
  flex-direction: column-reverse;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textBody};
    font-size: 0.75rem;

    margin-bottom: 6px;
  }

  input {
    padding: 0.65rem;
    border-radius: 5px;
    border: 2px solid var(--cinza);
    background-color: transparent;

    color: ${({  theme }) => theme.colors.textBody};

    &:focus {
      color: ${({  theme }) => theme.colors.textTitle};
    }

    &.dark_input {
      border: 2px solid ${darken(0.5, '#FFF')};
      background-color: ${({  theme }) => theme.colors.background};
      color: ${({  theme }) => theme.colors.cinza};
      transition: color .2s;

      &::placeholder {
        color: ${({  theme }) => theme.colors.cinza};
      }

      &:focus {
        color: ${({  theme }) => theme.colors.textBody};
      }
    }
  }
`;

export const InformationsProfile = styled.div`
  background-color: var(--main);
  width: 100%;
  max-width: 720px;
  height: 100%;
  padding: 70px 50px;
`;

export const PreviewProfile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;