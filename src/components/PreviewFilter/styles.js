import styled, {} from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 25px 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.categoryContainer};

  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    height: 60px;
    padding: 0 15px;
    margin-right: 10px;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    color: var(--main);
    transition: filter .2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }
  }


  form {
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;

    input, select {
      width: 100%;
      max-width: 500px; 
      height: 60px; 
      padding: 0 20px;
      margin-right: 10px;
      
      outline: none;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.backgroundSecondary};

      font-size: 1rem;
      color: ${({ theme }) => theme.colors.textTitle};

      &::placeholder {
        color: ${({ theme }) => theme.colors.textBody}
      }
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;

      option {
        color: ${({ theme }) => theme.colors.textTitle};
      }
    }

    button {
      height: 60px;
      padding: 0 15px;
      border-radius: 5px;

      background-color: ${({ theme }) => theme.colors.backgroundSecondary};
      color: var(--cinza-escuro);
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