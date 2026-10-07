const baseUrl = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}`;

export const getWeatherDataForCity = async (city) => {
    const response  = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
    return response.json();
}

export const getWeatherDataForLocation = async (lat, lon) => {
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
    return response.json();
}

