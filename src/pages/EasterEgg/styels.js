import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 50px 0;
`;

export const Content = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 50px;
`

export const BoxInput = styled.form`
  background-color: var(--main);
  width: 100%;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    color: var(--branco);
    font-size: 2rem;
    line-height: 1.8rem;

    span {
      font-weight: 500;
      font-size: 1.2rem;
    }
  }

  div {
    width: 100%;
    max-width: 580px;
    margin-top: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    p {
      position: absolute;
      top: -18px;
      left: 0;
      transform: translateY(-50%);

      color: rgba(255, 255, 255, 0.7);
    }

    input {
      width: 100%;
      height: 60px;
      padding: 0 18px;
      border-radius: 5px;
      margin-right: 10px;
  
      transition: color 0.2s;
      color: ${({ theme }) => theme.colors.textBody};
      font-weight: 600;
      font-size: 1rem;
  
      &:focus {
        color: ${({ theme }) => theme.colors.textTitle};
      }
    }
  
    button {
      background-color: ${({ theme }) => theme.colors.buttonGreen};
      height: 60px;
      padding: 0 15px;
      border-radius: 5px;
      color: var(--branco);

      transition: filter 0.2s;

      display: flex;
      align-items: center;
      justify-content: center;
  
      &:hover {
        filter: brightness(0.9);
      }
    }

    @media screen and (max-width: 542px) {
      margin-top: 60px;

      p {
        top: -24px;
      }
    }
  }
`