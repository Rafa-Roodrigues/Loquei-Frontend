import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.main`
  width: 100%;
  max-width: var(--max-width);
  padding: 20px 50px;

  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
`;

export const Left = styled.section`
  width: 100%;
`;

export const BoxImage = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: calc(100% - 80px);
    height: 300px;
    margin-right: 30px;
    position: relative;

    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    button {
      background-color: var(--main);
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 2px;
      transition: filter .2s;

      position: absolute;
      z-index: 1;

      &.previous {
        left: 20px;
      }

      &.next {
        right: 20px;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  ul {
    width: 50px;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      width: 100%;
      height: 50px;
      margin-bottom: 10px;
      overflow: hidden;

      border-radius: 50%;
      background-color: var(--main);

      &:last-child {
        margin: 0;
      }

      button {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transition: filter 0.2s;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;

export const BoxButtons = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: flex-start;

  a {
    background-color: ${({ theme }) => theme.colors.buttonGreen};
    padding: 8px 12px;
    border-radius: 5px;
    transition: filter .2s;

    color: var(--branco);
    font-weight: 600;
    font-size: 0.95rem;

    display: flex;
    align-items: center;

    span {
      margin-left: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Title = styled.h1`
  margin-top: 20px;

  color: ${({ theme }) => theme.colors.textTitle};
  font-size: 1.35rem;
`;

export const Description = styled.p`
  max-height: 93px;
  margin-top: 8px;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.textBody};
`;

export const InformationList = styled.ul`
  width: 100%;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; 

  li {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 15px;

    &:last-child {
      margin: 0;
    }

    p {
      margin-left: 10px;
      color: ${({ theme }) => theme.colors.textTitle};
      font-size: 1.1rem;
    }
  }
`;

export const Right = styled.section`
  width: 100%;
`;