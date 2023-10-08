import React from "react";
import { StyledInputLocation } from "./InputLocationStyles";

interface InputLocationProps {
    inputLocation: string;
    setInputLocation: (value: string) => void;
    style?: React.CSSProperties;
}

const InputLocation: React.FC<InputLocationProps> = ({
    inputLocation, 
    setInputLocation,
    style,
}) => {
    return (
        <StyledInputLocation 
            type="text"
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
            placeholder="Enter Location"
            style={style}
        />
    );
};

export default InputLocation;