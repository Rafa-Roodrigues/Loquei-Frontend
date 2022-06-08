import styled, {} from 'styled-components';

export const Container = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 30px 50px 15px 50px;
  border-radius: 5px;
  background-color: transparent;
  position: relative;

  .title {
    display: none;
    color: var(--cinza-claro);
    font-weight: 800;
    font-size: 28px;
    text-align: center;
  }

  .button_arrow {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: var(--main);
    transition: filter .2s;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:nth-child(2) {
      left: 0;
    }

    &:nth-child(3) {
      right: 0;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  .box_carousel {
    padding-bottom: 15px;
    overflow-x: auto;

    display: flex;
    align-items: center;
    justify-content: start;

    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar {
      height: 3px;
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background: transparent;
    }

    .card {
      width: fit-content;
      margin-right: 20px;
      scroll-snap-align: start;
    }
  }

  @media screen and (max-width: 560px) {
    padding: 30px 10px 15px 10px;

    .button_arrow {
      display: none;
    }
  }
`;