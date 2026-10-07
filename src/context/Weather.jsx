import { createContext,useContext, useState } from "react";
import { getWeatherDataForCity,getWeatherDataForLocation } from "../api";


const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (Props) => {
    const [weatherData, setWeatherData] = useState(null);
    const [searchCity, setSearchCity] = useState('');

    const fetchData = async () => {
        if (!searchCity.trim()) return;
        const response = await getWeatherDataForCity(searchCity);
        setWeatherData(response);
    }

    const fetchCurrentUserLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
           getWeatherDataForLocation(position.coords.latitude, position.coords.longitude)
           .then((data) => {
            setWeatherData(data);
           });
        })
    }

    return <WeatherContext.Provider value={{ weatherData, setWeatherData, searchCity, setSearchCity, fetchData, fetchCurrentUserLocationData }}>{Props.children}</WeatherContext.Provider>
}