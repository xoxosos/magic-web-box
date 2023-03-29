import React from 'react'

interface WeatherContextType {
  weatherData: {
    daily: []
    [key: string]: unknown
  }
  handleWeatherData: (i: object) => void
}

const obj: WeatherContextType = {
  weatherData: {
    daily: []
  },
  handleWeatherData: (i: object) => {
    // TODO: handle weather data
  }
}

const WeatherContext = React.createContext(obj)

export default WeatherContext
