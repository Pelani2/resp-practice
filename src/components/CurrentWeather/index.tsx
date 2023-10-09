import { useState, useEffect } from "react";
import axios from 'axios';
import Typography from "../Typography";
import { StyledCurrentWeatherContainer, StyledWeatherInfoBox } from "./CurrentWeatherStyles";
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from "react-redux";
import { toTitleCase } from "../../redux/actions/utilsSlice";
import { RootState } from "../../redux/store";
import { WiHumidity, WiStrongWind, WiThermometer, WiCloudy, WiRain, WiDaySunny } from 'weather-icons-react';

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

    const renderIcon = (titleCasedDescription: string) => {
        if (titleCasedDescription.includes("Cloud")) {
            return <WiCloudy />;
        } else if (titleCasedDescription.includes("Sun")) {
            return <WiDaySunny />;
        } else if (titleCasedDescription.includes("Rain")) {
            return <WiRain />;
        } else {
            return null;
        }
    };

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

            <StyledWeatherInfoBox>
                {renderIcon(titleCasedDescription)}
                <Typography 
                    variant="weather-info" 
                    isMobile={isMobileDevice}
                >
                    {titleCasedDescription}
                </Typography>
            </StyledWeatherInfoBox>
            
            <StyledWeatherInfoBox>
                <WiThermometer />
                <Typography 
                    variant="weather-info" 
                    isMobile={isMobileDevice}
                >
                    {Math.round((weather.main.temp - 273.15) * 100) / 100} °C
                </Typography>
            </StyledWeatherInfoBox>

            <StyledWeatherInfoBox>
                <WiHumidity />
                <Typography 
                    variant="weather-info" 
                    isMobile={isMobileDevice}
                >
                    {weather.main.humidity} %
                </Typography>
            </StyledWeatherInfoBox>
            
            <StyledWeatherInfoBox>
                <WiStrongWind />
                <Typography 
                    variant="weather-info" 
                    isMobile={isMobileDevice}
                >
                    {weather.wind.speed} km/h
                </Typography>
            </StyledWeatherInfoBox>
            
        </StyledCurrentWeatherContainer>
    );
};

export default CurrentWeather;