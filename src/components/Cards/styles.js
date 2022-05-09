import styled, {} from 'styled-components';

export const CardVerticalContainer = styled.article `
  width: 250px;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 8px rgba(0, 0, 0, 10%);

  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
  }

  .box_info {
    padding: 0 8px;

    h2 {
      color: ${({ theme }) => theme.colors.colorTitulo};
      font-size: 0.95rem;
    }

    p {
      margin: 3px 0 5px 0;

      color: ${({ theme }) => theme.colors.colorText};
      font-size: 0.75rem;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    ul {
      margin-bottom: 12px;
      list-style: none;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      overflow-x: auto;

      &::-webkit-scrollbar-track {
        display: none;
      }
      
      &::-webkit-scrollbar {
        display: none;
      }

      li {
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        color: ${({ theme }) => theme.colors.colorText};
        font-size: 12px;

        &:last-child {
          margin-right: 0;
        }

        .icons {
          margin-right: 3px;
        }
      }
    }

    span {
      color: var(--laranja);
      font-size: 14px;
      transition: color .2s;

      &:hover {
        color: var(--laranja-hover);
      }
    }
  }
`;

export const CardHorizontalContainer = styled.article `
  width: 100%;
  min-width: 400px;
  height: 150px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundSecundario};
  /* background-color: red; */

  display: grid;
  gap: 20px;
  grid-template-columns: 150px auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  &:nth-of-type(even) {
  background-color: ${({ theme }) => theme.colors.background};
}

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }

  .box_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      color: ${({ theme }) => theme.colors.colorTitulo};
      font-size: 0.95rem;
    }

    p {
      color: ${({ theme }) => theme.colors.colorText};
      font-size: 0.75rem;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    ul {
      margin-bottom: 8px;
      list-style: none;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      overflow-x: auto;

      &::-webkit-scrollbar-track {
        display: none;
      }
      
      &::-webkit-scrollbar {
        display: none;
      }

      li {
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        color: ${({ theme }) => theme.colors.colorText};
        font-size: 12px;

        &:last-child {
          margin-right: 0;
        }

        .icons {
          margin-right: 3px;
        }
      }
    }

    a {
      width: fit-content;
      padding: 6px 8px;
      border-radius: 5px;
      background-color: var(--laranja);
      transition: background .2s;
      
      color: var(--branco);
      font-size: 12px;
      text-transform: uppercase;
      transition: color .2s;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: var(--laranja-hover);
        color: var(--branco-escuro);
      }

      .icons {
        margin-left: 8px;
      }
    }
  }
`;