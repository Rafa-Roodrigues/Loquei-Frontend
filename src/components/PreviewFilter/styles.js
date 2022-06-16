import styled, {} from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 20px 0;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.categoryContainer};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    opacity: 0.05;
    position: absolute;
    left: 0;
    top: 20%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .button_localizar {
    position: relative;
    margin-left: 8px;

    span {
      padding: 5px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 80%);
      position: absolute;
      left: calc(50% + 5px);
      bottom: -3px;
      transform: translate(-50%, 100%);

      color: var(--branco);
      font-size: 0.7rem;
      text-align: center;

      opacity: 0.95;

      display: none;
    }

    button {
      width: 50px;
      height: 55px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.inputsBackground};
      color: var(--main);
      transition: filter .2s;
  
      display: flex;
      align-items: center;
      justify-content: center;
  
      &:hover {
        filter: brightness(0.9);
      }

      &:hover ~ span {
        display: block;
      }
    }
  }

  h2 {
    margin-bottom: 24px;
    color: var(--branco-escuro);
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 1px;
  }

  form {
    width: 100%;
    max-width: 720px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    input, select {
      width: 100%;
      max-width: 500px; 
      height: 55px; 
      padding: 0 20px;
      margin-right: 8px;
      
      outline: none;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.inputsBackground};

      font-size: 1rem;
      color: ${({ theme }) => theme.colors.inputsText};

      &::placeholder {
        color: ${({ theme }) => theme.colors.inputsPlaceholder}
      }
    }
    
    select {
      max-width: 260px;
      color: ${({ theme }) => theme.colors.inputsPlaceholder};

      -webkit-appearance: none;
      -moz-appearance: none;

      option {
        color: ${({ theme }) => theme.colors.textTitle};
      }
    }

    button[type="submit"] {
      padding: 12px;
      height: 55px;
      border-radius: 5px;

      background-color: ${({ theme }) => theme.colors.inputsBackground};
      color: ${({ theme }) => theme.colors.inputsPlaceholder};
      transition: filter .2s;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(0.9);
      }
    }

  }

  @media screen and (max-width: 560px) {
    padding: 20px;

    h2 {
      font-size: 1rem;
    }

    form {
      display: grid;
      gap: 10px;
      grid-template-columns: 1.8fr 0.2fr;
      grid-template-areas: 'select localization'
                           'text search';

      select {
        grid-area: select;
        margin: 0;
        max-width: 100%;
      }

      input {
        grid-area: text;
        margin: 0;
        max-width: 100%;
      }

      .button_localizar {
        grid-area: localization;
        margin: 0;
      }

      > button {
        grid-area: search;
      }
    }
  }
`;