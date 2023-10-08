import styled from "styled-components";

export const StyledInputLocation = styled.input`
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
`;