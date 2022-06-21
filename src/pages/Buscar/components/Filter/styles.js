import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: 100%;
  margin-right: 5px;
  padding-right: 5px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.background};

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background};
  }
  &::-webkit-scrollbar {
    width: 4px;
    background-color: ${({ theme }) => theme.colors.background};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: rgba(0, 0, 0, 3%);
  }

  @media screen and (max-width: 800px) {
    display: none;
    position: absolute;
    top: -1px;
  }
`;

export const BoxInputs = styled.div`
  padding: 20px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};
  position: relative;

  h3 {
    margin-bottom: 8px;
    display: block;
    color: ${({ theme }) => theme.colors.textBody};
    font-size: 0.8rem;
  }

  input, select {
    width: 100%;
    padding: 12px 10px;
    outline: none;
    border: 2px solid var(--cinza);
    border-radius: 5px;
    background-color: transparent;

    color: var(--cinza-escuro);

    &::placeholder {
      color: var(--cinza);
    }

    &.input_busca {
      padding: 12px 40px 12px 10px;
    }

    &.dark_input {
      border: none;
      background-color: ${({  theme }) => theme.colors.backgroundSecondary};
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

  select {
    width: 59px;
    padding: 12px 18px;

    -webkit-appearance: none;
    -moz-appearance: none;

    &:last-child {
      width: calc(100% - 71px);
      margin-left: 10px;
      padding: 12px 10px;
    }

    option {
      color: ${({ theme }) => theme.colors.textTitle};
      letter-spacing: 1px;
    }
  }

  .icon {
    color: ${({ theme }) => theme.colors.cinza};
    position: absolute;
    top: calc(50% + 12px);
    right: 25px;
    transform: translateY(-50%);
  }

  .grid_checkbox {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    grid-template-rows: repeat(4, auto);

    .checkbox {
      width: fit-content;
      margin-top: 10px;
      padding-left: 20px;
      position: relative;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      color: ${({ theme }) => theme.colors.textBody};
      font-weight: 500;
      font-size: 0.75rem;

      input[type='checkbox'] {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: -20px;
        transform: translateY(-50%);

        &:checked ~ span {
          background-color: var(--main);
          border: 2px solid var(--main);

          .icons {
            display: inline-block;
          }
        }
      }

      span {
        width: 15px;
        height: 15px;
        border: 2px solid var(--cinza);
        border-radius: 4px;
        background-color: transparent;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);

        &.dark_checkbox {
          background-color: ${({ theme }) => theme.colors.backgroundSecundario};
          border: 2px solid ${({ theme }) => theme.colors.backgroundSecundario};
        }

        .icons {
          display: none;
          color: var(--branco);
        }
      }
    }
  }

  @media screen and (max-width: 855px) {
    &:first-child {
      display: none;
    }

    .grid_checkbox {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const GridInput = styled.div`
  width: fit-content;
  margin-top: 5px;
  margin-right: 20px;
  display: inline-block;

  &:last-child {
    margin-right: 0;
  }

  input {
    width: 100%;
    max-width: 100px;
    padding: 8px 10px;
  }
  
  span {
    display: block;

    color: ${({ theme }) => theme.colors.cinza};;
    font-weight: 500;
    font-size: 0.7rem;
  }
`;

export const BoxAutoComplete = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 10px;

  width: calc(100% - 30px);
  max-height: 400px;
  padding: 10px;
  position: absolute;
  z-index: 2;
  transform: translateY(5px);

  overflow: auto;


  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: rgba(0, 0, 0, 10%);
  }

  button {
    width: 100%;
    margin-bottom: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.cinza};
    
    text-align: left;

    &:last-child {
      border-bottom: 0;
    }

    h4 {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      color: ${({ theme }) => theme.colors.textTitle};
      font-size: 0.8rem;
    }

    p {
      color: ${({ theme }) => theme.colors.textBody};
      font-size: 0.75rem;
    }
  }
`;