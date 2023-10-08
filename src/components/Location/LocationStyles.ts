import styled from "styled-components";

interface StyledFormProps {
    isMobile: boolean;
}

export const StyledForm = styled.form<StyledFormProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;

    ${(props) => props.isMobile && `
        flex-direction: column;
        gap: 10px;
        padding: 10px;
    `}
`;