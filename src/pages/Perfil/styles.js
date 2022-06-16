import styled, {} from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.main`
  width: 100%;
  height: calc(100vh - 90px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfigurationPanel = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 100%;
  max-width: 720px;
  
  height: 100%;
  padding: 70px 50px;
  overflow-y: auto;

  form {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 720px) {
    padding: 40px 20px;
  }
`;

export const InformationsProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 32px;
  position: relative;

  > button {
    transition: filter .2s;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    color: var(--main);

    &:hover {
      filter: brightness(0.7);
    }
  }

  img {
    width: 80px;
    height: 80px;
    margin-right: 25px;

    object-fit: cover;
    border-radius: 50px;
  }
`;

export const ContainerTextProfile = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.textTitle};
    font-size: 1.85rem;
  }
`;

export const Divisions = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  margin-bottom: 28px;
  padding: 20px;

  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 8%);

  h4 {
    color: ${({ theme }) => theme.colors.textTitle};
    font-size: 1.2rem;

    margin-bottom: 18px;
  }
`;