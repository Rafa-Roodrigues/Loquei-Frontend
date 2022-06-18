import styled from 'styled-components';

export const Label = styled.label`
    display: block;
    font-size: 13px;

    span {
        color: ${({ theme }) => theme.colors.textBody};
        text-transform: capitalize;
    }

    input {
        width: 100%;
        height: 40px;

        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        color: ${({ theme }) => theme.colors.inputsText};

        padding-left: 10px;
        border-radius: 5px;

        border: 2px solid ${({error}) => error ? ({ theme }) => theme.colors.red : 'transparent'};

        &::placeholder {
            color: ${({ theme }) => theme.colors.inputsPlaceholder};
        }
    }
`;

export const Error = styled.p`
    color: ${({ theme }) => theme.colors.red};
    margin-left: 3px;
    font-size: 13px;
 `;