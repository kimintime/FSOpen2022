import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country, city}) => {
    const [weatherMain, setWeatherMain] = useState([])
    const [weather, setWeather] = useState([])
    const [weatherWind, setWeatherWind] = useState([])
    
    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
          .then(response => {
            setWeather(response.data.weather[0])
            setWeatherMain(response.data.main)
            setWeatherWind(response.data.wind)
          })
      }, [city])

      console.log(weather)
      console.log(weatherWind)

    return (
    <div>
      <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
      <h2>Languages</h2>
        <ul>
          {country.languages.map(language =>
            <li key={language.name}>{language.name}</li>
          )}
        </ul>
        <p>
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}  
            width="120" 
          />
        </p>
        <h2>Weather in {country.capital}</h2>
        <p>Temperature: {weatherMain.temp}</p>
        <p><img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="Weather icon"/></p>
        <p>Wind: {weatherWind.speed} m/s</p>
    </div>
    )
  }

export default Country