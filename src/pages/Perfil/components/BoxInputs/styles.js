import styled from "styled-components";

import { darken } from 'polished';

export const Container = styled.label`
  width: 100%;
  margin-bottom: 24px;
  position: relative;

  display: flex;
  flex-direction: column-reverse;

  &:last-child {
    margin-bottom: 0;
  }

  span {
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
      border: 2px solid ${darken(0.75, '#FFF')};
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