import styled, {} from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 20px 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.categoryContainer};

  display: flex;
  align-items: center;
  justify-content: center;

  .button_localizar {
    position: relative;

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
      height: 55px;
      padding: 0 12px;
      margin-left: 8px;
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

    button {
      height: 55px;
      padding: 0 15px;
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

  @media screen and (max-width: 500px) {
    form {
      .search {
        width: calc(100% - 40px);
        margin: 0 20px;
      }
    }
  }
`;