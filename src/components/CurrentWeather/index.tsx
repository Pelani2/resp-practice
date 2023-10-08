import { useState, useEffect } from "react";
import axios from 'axios';
import Typography from "../Typography";
import { StyledCurrentWeatherContainer } from "./CurrentWeatherStyles";
import { useMediaQuery } from 'react-responsive';

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

interface CurrentWeatherProps {
    city: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ city }) => {
    const [weather, setWeather] = useState<Weather | null>(null);

    const isMobileDevice = useMediaQuery({
        maxDeviceWidth: 321,
    });

    useEffect(() => {
        const fetchWeather = async () => {
          try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5c8d21f9b638584455bdbf88a13eb70`);
            setWeather(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchWeather();
    }, [city]);

    console.log(weather);

    if (!weather) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        <StyledCurrentWeatherContainer isMobile={isMobileDevice}>
            <Typography 
                variant="weather-title" 
                isMobile={isMobileDevice}
            >
                Current weather for: {weather.name}
            </Typography>
            <Typography 
                variant="weather-info" 
                isMobile={isMobileDevice}
            >
                Description: {weather.weather[0].description}
            </Typography>
            <Typography 
                variant="weather-info" 
                isMobile={isMobileDevice}
            >
                Temperature: {weather.main.temp}
            </Typography>
            <Typography 
                variant="weather-info" 
                isMobile={isMobileDevice}
            >
                Humidity: {weather.main.humidity}
            </Typography>
            <Typography 
                variant="weather-info" 
                isMobile={isMobileDevice}
            >
                Wind: {weather.wind.speed} km/h
            </Typography>
        </StyledCurrentWeatherContainer>
    );
};

export default CurrentWeather;