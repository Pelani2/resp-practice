import styled from "styled-components";

interface InputLocationProps {
    isMobile?: boolean;
}

export const StyledInputLocation = styled.input<InputLocationProps>`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    font-size: 16px;

    &:focus {
        border-color: #007bff;
        outline: none;
    }

    &::placeholder {
        color: #ccc;
    }

    ${(props) => props.isMobile && `
        padding: 8px;
        font-size: 14px;
    `};
`;