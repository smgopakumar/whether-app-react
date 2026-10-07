import { useState } from 'react'
import Card from './components/Card.jsx'
import Input from './components/input.jsx'
import Button from './components/Button.jsx'
import './App.css'
import { useWeather } from './context/Weather.jsx'
import {useEffect} from 'react'


function App() {
  const weather = useWeather();
  console.log("weather", weather);

  useEffect(() => {
    // Fetch weather data for the user's current location on initial load
  weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className="app">
      <h1>Whether APP</h1>
      <Input />
       <Button  onClick={weather.fetchData} value="Search"/>
       <Card />
       <Button value="Refresh"/>
    </div>
  )
}

export default App
