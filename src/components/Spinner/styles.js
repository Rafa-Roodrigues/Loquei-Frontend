import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #ffffff;
  border-radius: 50%;
  border-top: 2px solid #7A46DB;
  width: 25px;
  height: 25px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;

  z-index: 1;

/* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;