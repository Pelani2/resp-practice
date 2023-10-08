import { StyledWeatherInfo, StyledWeatherTitle } from "./TypographyStyles";

const variantClassMap = {
    "weather-title": "weather-title",
    "weather-info": "weather-info",
};

interface TypographyProps {
    variant: keyof typeof variantClassMap;
    children: React.ReactNode | string;
    style?: React.CSSProperties;
    isMobile?: boolean;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, style, isMobile }) => {
    let StyledTypography;

    switch(variant) {
        case "weather-info":
            StyledTypography = StyledWeatherInfo;
            break;
        case "weather-title":
            StyledTypography = StyledWeatherTitle;
            break;
        default: 
            return null;
    }
    return (
        <StyledTypography
            style={style}
            isMobile={isMobile}
        >
            {children}
        </StyledTypography>
    );
};

export default Typography;