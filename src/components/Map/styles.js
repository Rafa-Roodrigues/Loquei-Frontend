import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  position: relative;

  .ad-information {
    color: ${({ theme }) => theme.colors.textBody};
    font-family: 'Manrope', sans-serif;

    h2 {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 800;
      font-size: 1.05rem;
    }

    p {
      margin: 4px 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  /* Manipulação do mapa */
  .leaflet-left {
    right: 20px;
    left: initial;
  }
  .leaflet-top {
    top: 8px;
  }
  .leaflet-bottom {
    display: none;
  }
  
`;