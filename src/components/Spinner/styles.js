import styled from 'styled-components';

export const Container = styled.span`
  width: fit-content;
  display: block;
  /* -webkit-animation: spin 1s linear infinite; Safari */
  /* animation: spin 1s linear infinite; */
  
  position: relative;
  z-index: 1;

  /* Safari */
  /* @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  } */

  img {
    width: 24px;
    height: 24px;

    -webkit-animation: spin 0.65s ease infinite;
    animation: spin 0.65s ease infinite;

    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0); }
      100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
      0% { transform: rotate(0); }
      100% { transform: rotate(360deg); }
    }

    &:last-child {
      width: 12px;
      height: 12px;
      position: absolute;
      top: 21%;
      left: 25%;
      -webkit-animation: spin-invert 0.65s linear infinite;
      animation: spin-invert 0.65s linear infinite;

      @-webkit-keyframes spin-invert {
        0% { -webkit-transform: rotate(0); }
        100% { -webkit-transform: rotate(-360deg); }
      }

      @keyframes spin-invert {
        0% { transform: rotate(0); }
        100% { transform: rotate(-360deg); }
      }
    }
  }
`;