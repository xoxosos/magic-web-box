import React from 'react'

interface Props {
  children: React.ReactNode
}
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
    console.log(weatherData)
  }
}

const WeatherContext = React.createContext(obj)
export const useWeatherContext = () => React.useContext(WeatherContext)
export const WeatherProvider: React.FC<Props> = ({ children }) => {
  const [weatherData, setWeatherData] = React.useState<weatherDataType>({ daily: [] })
  const handleWeatherData = (data: weatherDataType) => {
    setWeatherData(data)
  }
  const weatherContext = {
    weatherData,
    handleWeatherData
  }
  return <WeatherContext.Provider value={weatherContext}>{children}</WeatherContext.Provider>
}
