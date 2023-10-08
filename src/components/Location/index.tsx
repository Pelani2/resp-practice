import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/actions/locationSlice";
import { StyledForm } from "./LocationStyles";
import InputLocation from "../InputLocation";
import Button from "../Button";
import { useMediaQuery } from "react-responsive";

const Location: React.FC = () => {
    const [inputLocation, setInputLocation] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(setLocation(inputLocation));
    };

    const isLargeScreen = useMediaQuery({
        minWidth: 768,
    });

    return (
        <StyledForm onSubmit={handleSubmit}>
            {isLargeScreen && (
                <>
                    <InputLocation 
                        inputLocation={inputLocation}
                        setInputLocation={setInputLocation}
                        style={{ fontSize: "20px"}}
                    />
                    <Button
                        variant="location-button"
                        type="submit"
                        style={{ fontSize: "20px"}}
                    >
                        Submit
                    </Button>
                </>
            )}
            
            {!isLargeScreen && (
                <>
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
                </>
            )}
        </StyledForm>
    );
};

export default Location;