import styled from 'styled-components';

export const Container = styled.div`
    height: 120px;
    background-color: ${({ theme}) => theme.colors.backgroundSecundario};

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme}) => theme.colors.colorText};

    button {
        display: flex;
        align-items: center;

        svg {
            margin-right: 5px;
        }
    }

`;