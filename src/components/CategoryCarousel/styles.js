import styled, {} from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 120px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.categoryContainer};

  display: grid;
  grid-template-columns: 0.55fr 1.45fr;

  @media screen and (max-width: 870px) {
    height: 100px;
    grid-template-columns: 0.3fr 1.7fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentLeft = styled.div`
  position: relative;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ContentRight = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: black;
  padding: 20px;

  &::after {
    content: '';
    width: 0;
    height: 0;

    border-top: 65px solid transparent;
    border-bottom: 65px solid ${({ theme }) => theme.colors.categoryContainer};
    border-left: 65px solid transparent;
    border-right: 65px solid ${({ theme }) => theme.colors.categoryContainer};
    transform: rotate(90deg);

    position: absolute;
    bottom: 0;
    left: 0;
  }

  img {
    width: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    bottom: -100px;
    z-index: 0;
    opacity: 0.4;
    pointer-events: none;
  }

  p {
    width: 100%;
    max-width: 600px;

    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);

    color: var(--branco);
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1100px) {
    p {
      max-width: 560px;
      left: 55%;
    }
  }

  @media screen and (max-width: 950px) {
    p {
      font-size: 1.1rem;
      max-width: 500px;
      left: 58%;
    }
  }

  @media screen and (max-width: 870px) {
    p {
      left: 50%;
    }
  }

  @media screen and (max-width: 520px) {
    &::after {
      border-top: 50px solid transparent;
      border-bottom: 50px solid ${({ theme }) => theme.colors.categoryContainer};
      border-left: 50px solid transparent;
      border-right: 50px solid ${({ theme }) => theme.colors.categoryContainer};
    }

    p {
      padding: 20px;
      font-size: 0.95rem;
    }
  }
`;