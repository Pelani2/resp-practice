import { useState, useEffect } from "react";
import axios from 'axios';
import Typography from "../Typography";
import { StyledCurrentWeatherContainer } from "./CurrentWeatherStyles";
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from "react-redux";
import { toTitleCase } from "../../redux/actions/utilsSlice";
import { RootState } from "../../redux/store";

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

    const dispatch = useDispatch();

    const titleCasedDescription = useSelector((state: RootState) => state.utils.titleCasedString);

    const isMobileDevice = useMediaQuery({
        maxDeviceWidth: 321,
    });

    useEffect(() => {
        const fetchWeather = async () => {
          try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
            setWeather(response.data);
            dispatch(toTitleCase(response.data.weather[0].description));
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchWeather();
    }, [city, dispatch]);

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
                Description: {titleCasedDescription}
            </Typography>
            <Typography 
                variant="weather-info" 
                isMobile={isMobileDevice}
            >
                Temperature: {Math.round((weather.main.temp - 273.15) * 100) / 100} °C
            </Typography>
            <Typography 
                variant="weather-info" 
                isMobile={isMobileDevice}
            >
                Humidity: {weather.main.humidity} %
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