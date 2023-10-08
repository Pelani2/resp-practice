import React from "react";
import { StyledInputLocation } from "./InputLocationStyles";

interface InputLocationProps {
    inputLocation: string;
    setInputLocation: (value: string) => void;
    style?: React.CSSProperties;
    isMobile?: boolean;
}

const InputLocation: React.FC<InputLocationProps> = ({
    inputLocation, 
    setInputLocation,
    style,
    isMobile,
}) => {
    return (
        <StyledInputLocation 
            type="text"
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
            placeholder="Enter Location"
            style={style}
            isMobile={isMobile}
        />
    );
};

export default InputLocation;