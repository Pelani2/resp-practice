import styled from "styled-components";

interface TypographyProps {
    isMobile?: boolean;
}

export const StyledWeatherTitle = styled.p<TypographyProps>`
    font-size: 32px;
    font-weight: bold;
    color: #000;
    line-height: 1.5;

    ${(props) => props.isMobile && `
        font-size: 20px;
        line-height: 1.3;
    `};
`;

export const StyledWeatherInfo = styled.p<TypographyProps>`
    font-size: 16px;
    line-height: 1.5;
    color: #333;

    ${(props) => props.isMobile && `
        font-size: 14px;
        line-height: 1.1;
    `};
`;