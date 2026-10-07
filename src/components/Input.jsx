import react from 'react';
import {useWeather} from '../context/Weather.jsx'

const Input = () => {
    const weather = useWeather();
    console.log("weather", weather);
    return (
        <input  className="input-file" 
        placeholder="Enter city name"
        value={weather.searchCity}
        onChange={(e) => weather.setSearchCity(e.target.value)}
        />
    );
}

export default Input;