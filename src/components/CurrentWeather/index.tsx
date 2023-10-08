import { useState, useEffect } from "react";
import axios from 'axios';
import Typography from "../Typography";

interface Weather {
    name: string;
    weather: {
        description: string;
    }[];
    main: {
        temp: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
}

const CurrentWeather: React.FC = () => {
    const [weather, setWeather] = useState<Weather | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
          try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=a5c8d21f9b638584455bdbf88a13eb70`);
            setWeather(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchWeather();
    }, []);

    console.log(weather);

    if (!weather) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        <div>
            <Typography variant="weather-title">
                Current weather for: {weather.name}
            </Typography>
            <Typography variant="weather-info">
                Description: {weather.weather[0].description}
            </Typography>
            <Typography variant="weather-info">Temperature: 
                {weather.main.temp}
            </Typography>
            <Typography variant="weather-info">Humidity: 
                {weather.main.humidity}
            </Typography>
            <Typography variant="weather-info">
                Wind: {weather.wind.speed} km/h
            </Typography>
        </div>
    );
};

export default CurrentWeather;