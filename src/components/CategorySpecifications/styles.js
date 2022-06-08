import styled from 'styled-components';

export const Container = styled.section`
  background-color: transparent;
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  position: relative;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;

  @media screen and (max-width: 1004px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
  }
`;

export const CategoryCards = styled.article`
  width: 100%;
  height: 260px;
  position: relative;
  overflow: hidden;
  opacity: 0.9;

  &:nth-child(2) {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }

  img {
    height: 100%;
    object-fit: cover;
    transition: transform .2s;
    filter: blur(0.65px);

    position: absolute;
    top: 0;
    left: 0;
  }

  a {
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    padding: 12px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    h3 {
      color: var(--branco);
      font-size: 1.25rem;
    }

    p {
      color: var(--cinza);
      font-size: 0.85rem;
    }

    &:hover ~ img {
      transform: scale(1.25);
    }
  }

  @media screen and (max-width: 1004px) {
    height: 120px;
    border-radius: 10px !important;

    img {
      width: 100%;
    }

    a {
      background-color: rgba(0,0,0,0.6);

      h3 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;