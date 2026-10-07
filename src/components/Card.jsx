import react from 'react';
import { useWeather } from '../context/Weather.jsx';

const Card = () => {
    const { weatherData } = useWeather();

    if (!weatherData) {
        return (
            <div className="card">
                <h5>Search for a city to see the weather</h5>
            </div>
        );
    }

    return (
        <div className="card">
            <img src={`https:${weatherData.current.condition.icon}`} alt="Card Image" />
            <h2>{weatherData.current.temp_c} °C</h2>
            <h5>{weatherData.location.name}, {weatherData.location.country}</h5>
        </div>
    );
}

export default Card;