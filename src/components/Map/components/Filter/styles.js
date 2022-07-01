import styled from "styled-components";

export const ButtonOpen = styled.button`
  padding: 10px;
  transition: filter .2s;
  
  border-radius: 50px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  background-color: var(--main);
  color: var(--branco);

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  left: 50px;
  z-index: 999;

  &:hover {
    filter: brightness(0.9);
  }

  @media screen and (max-width: 600px) {
    bottom: 20px;
    left: 20px;
  }
`;

export const Container = styled.form`
  width: 100%;
  max-width: 324px;
  padding: 9px 5px 5px 5px;
  overflow-y: auto;

  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  position: absolute;
  top: 37%;
  left: 20px;
  z-index: 999;
  transform: translateY(-50%);

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

  @media screen and (max-width: 870px) {
    transform: translate(-50%, 0);
    top: 5px;
    left: 50%;
  }
`;

export const ButtonMinimize = styled.button`
  background-color: var(--main);
  border-radius: 50px;
  transition: filter .2s;

  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 999;
  width: 20px;
  height: 20px;

  &::before {
    content: '';
    width: 12px;
    height: 2px;
    border-radius: 50px;
    background-color: var(--branco);
   
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const BoxInputs = styled.div`
  position: relative;
  padding: 10px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};

  &:last-child {
    border-bottom: none;
  }

  h3 {
    margin-bottom: 6px;
    display: block;
    color: ${({ theme }) => theme.colors.textBody};
    font-size: 0.75rem;
  }

  input {
    width: 100%;
    padding: 12px 10px;
    outline: none;
    border: 2px solid var(--cinza);
    border-radius: 5px;
    background-color: transparent;

    color: var(--cinza-escuro);

    &:focus ~ .box-autocomplete {
      display: block !important;
    }

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
    width: 50px;
    position: relative;
    margin-right: 10px;
    padding: 12px 10px;

    background-color: transparent;
    border: 2px solid var(--cinza);
    border-radius: 10px;

    color: ${({ theme }) => theme.colors.textBody};
    text-align: center;

    -webkit-appearance: none;
    -moz-appearance: none;
    
    &:nth-child(3) {
      width: calc(100% - 60px);
      margin-right: 0;
      padding-right: 40px;
      
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
    }

    &.dark_input {
      border: none;
      background-color: ${({  theme }) => theme.colors.backgroundSecondary};
      color: ${({  theme }) => theme.colors.cinza};
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

export const BoxButtons = styled.div`
  padding: 20px 15px;

  button {
    background-color: ${({ theme }) => theme.colors.buttonGreen};
    padding: 10px;
    border-radius: 5px;

    color: var(--branco);
    font-size: 0.95rem;
    transition: filter .2s;

    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.85);
    }
  }
`;

export const BoxAutoComplete = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 10px;
  display: none;

  width: calc(100% - 10px);
  max-height: 300px;
  padding: 10px;
  position: absolute;
  top: 85%;
  left: 50%;
  z-index: 99999;
  transform: translateX(-50%);

  overflow: auto;

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  }
  ::-webkit-scrollbar {
    width: 7px;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  }
  ::-webkit-scrollbar-thumb {
    padding-top: 10px;
    border-radius: 50px;
    background: rgba(0, 0, 0, 10%);
  }

  &:hover {
    display: block;
  }

  button {
    width: 100%;
    margin-bottom: 10px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.cinza};
    
    text-align: left;

    &:last-child {
      border-bottom: 0;
    }
    p {
      transition: color .2s;
      color: ${({ theme }) => theme.colors.textTitle};
      font-size: 0.85rem;
    }
    &:hover > p {
      color: var(--main);
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