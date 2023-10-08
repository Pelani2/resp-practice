import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/actions/locationSlice";
import { StyledForm } from "./LocationStyles";
import { useMediaQuery } from 'react-responsive';
import InputLocation from "../InputLocation";
import Button from "../Button";

const Location: React.FC = () => {
    const [inputLocation, setInputLocation] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(setLocation(inputLocation));
    };

    const isMobileDevice = useMediaQuery({
        maxDeviceWidth: 321
    });

    return (
        <StyledForm 
            onSubmit={handleSubmit} 
            isMobile={isMobileDevice}
        >
            <InputLocation 
                inputLocation={inputLocation}
                setInputLocation={setInputLocation}
            />
            <Button
                variant="location-button"
                type="submit"
            >
                Submit
            </Button>
        </StyledForm>
    );
};

export default Location;