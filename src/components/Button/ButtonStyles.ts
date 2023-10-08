import styled from "styled-components";

interface ButtonProps {
    isMobile?: boolean;
}

export const StyledLocationButton = styled.button<ButtonProps>`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #0069d9;
    }
    
    ${(props) => props.isMobile && `
        padding: 8px 16px;
        font-size: 14px;
        width: 100%;
    `};
`;