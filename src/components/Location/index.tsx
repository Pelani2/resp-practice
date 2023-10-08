import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/actions/locationSlice";
import { StyledForm } from "./LocationStyles";
import { useMediaQuery } from 'react-responsive';
import InputLocation from "../InputLocation";
import Button from "../Button";

interface LocationProps {
    onCityChange: (city: string) => void;
};

const Location: React.FC<LocationProps> = ({ onCityChange }) => {
    const [inputLocation, setInputLocation] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(setLocation(inputLocation));
        onCityChange(inputLocation);
    };

    const isMobileDevice = useMediaQuery({
        maxDeviceWidth: 321,
    });

    return (
        <StyledForm 
            onSubmit={handleSubmit} 
            isMobile={isMobileDevice}
        >
            <InputLocation 
                inputLocation={inputLocation}
                setInputLocation={setInputLocation}
                isMobile={isMobileDevice}
            />
            <Button
                variant="location-button"
                type="submit"
                isMobile={isMobileDevice}
            >
                Submit
            </Button>
        </StyledForm>
    );
};

export default Location;