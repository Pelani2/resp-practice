import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/actions/locationSlice";
import { StyledForm } from "./LocationStyles";
import InputLocation from "../InputLocation";

const Location: React.FC = () => {
    const [inputLocation, setInputLocation] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(setLocation(inputLocation));
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <InputLocation 
                inputLocation={inputLocation}
                setInputLocation={setInputLocation}
            />
            <button
                type="submit"
            >
                Submit
            </button>
        </StyledForm>
    );
};

export default Location;