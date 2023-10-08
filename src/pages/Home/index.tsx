import React, { useState } from 'react';
import Location from "../../components/Location";
import CurrentWeather from "../../components/CurrentWeather"; 

const Home: React.FC = () => {
    const [city, setCity] = useState("London");

    const handleCityChange = (newCity: string) => {
        setCity(newCity);
    };

    return (
        <div>
            <Location onCityChange={handleCityChange}/>
            <CurrentWeather city={city}/>
        </div>
    );
};

export default Home;