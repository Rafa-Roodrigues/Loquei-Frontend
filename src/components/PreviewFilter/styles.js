import styled, {} from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 120px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.categoryContainer};

  display: grid;
  grid-template-columns: 0.55fr 1.45fr;
`;

export const ContentLeft = styled.div`
  position: relative;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    max-width: 700px;

    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);

    color: var(--branco);
    font-size: 1.2rem;
  }
`;