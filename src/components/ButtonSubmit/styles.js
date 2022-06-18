import styled from 'styled-components';


export const Button = styled.button`
    width: 100%;
    height: 40px;
    grid-area: botao;
    background-color: var(--verde);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: 700;
    color: #FFFFFF;

    position: relative;

    #box_disabled {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.3);

        width: 100%;
        height: 100%;

        z-index: 2;
    }

    &:disabled {
        cursor: not-allowed;
    }
    
`;