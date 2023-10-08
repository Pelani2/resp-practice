import React from "react";
import { StyledLocationButton } from "./ButtonStyles";

type ButtonType = "button" | "submit" | "reset";

const variantClassMap = {
    "location-button": "location-button",
};

interface ButtonProps {
    variant: keyof typeof variantClassMap;
    type?: ButtonType;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children, variant }) => {
    let StyledButton;

    switch(variant) {
        case "location-button":
            StyledButton = StyledLocationButton;
            break;
        default:
            return null;
    }

    return (
        <StyledButton 
            type={type || "submit"}
        >
            {children}
        </StyledButton>
    );
};

export default Button;