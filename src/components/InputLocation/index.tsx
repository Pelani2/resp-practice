import React from "react";

interface InputLocationProps {
    inputLocation: string;
    setInputLocation: (value: string) => void;
}

const InputLocation: React.FC<InputLocationProps> = ({
    inputLocation, 
    setInputLocation,
}) => {
    return (
        <input 
            type="text"
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
            placeholder="Enter Location"
        />
    );
};

export default InputLocation;