import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/actions/locationSlice";

const Location: React.FC = () => {
    const [inputLocation, setInputLocation] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(setLocation(inputLocation));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputLocation}
                onChange={(e) => setInputLocation(e.target.value)}
                placeholder="Enter location"
            />
            <button
                type="submit"
            >
                Submit
            </button>
        </form>
    );
};

export default Location;