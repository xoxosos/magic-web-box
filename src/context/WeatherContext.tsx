import React from 'react'

interface weatherDataType {
  daily: []

  [key: string]: unknown
}

interface WeatherContextType {
  weatherData: {
    daily: []
    [key: string]: unknown
  }
  handleWeatherData: (weatherData: weatherDataType) => void
}

const obj: WeatherContextType = {
  weatherData: {
    daily: []
  },
  handleWeatherData: (weatherData: weatherDataType) => {
    // TODO: handle weather data
  }
}

const WeatherContext = React.createContext(obj)

export default WeatherContext
