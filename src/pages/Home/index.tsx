import React from "react";
import Location from "../../components/Location";
import CurrentWeather from "../../components/CurrentWeather";

const Home: React.FC = () => {
    return (
        <div>
            <Location />
            <CurrentWeather />
        </div>
    );
};

export default Home;