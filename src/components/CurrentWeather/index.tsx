import { useState, useEffect } from "react";
import axios from 'axios';
import Typography from "../Typography";
import { StyledCurrentWeatherContainer, StyledWeatherInfoBox } from "./CurrentWeatherStyles";
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from "react-redux";
import { toTitleCase } from "../../redux/actions/utilsSlice";
import { RootState } from "../../redux/store";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { FaUmbrella } from "react-icons/fa";
import { FaThermometerHalf } from "react-icons/fa";
import { WiHumidity } from 'weather-icons-react';

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
            return <CloudIcon />;
        } else if (titleCasedDescription.includes("Sun")) {
            return <WbSunnyIcon />;
        } else if (titleCasedDescription.includes("Rain")) {
            return <FaUmbrella />;
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
                <FaThermometerHalf />
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