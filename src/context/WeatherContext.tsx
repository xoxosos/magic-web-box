import React, { useMemo } from 'react'

interface Props {
  children: React.ReactNode
}
interface WeatherDataType {
  daily: []

  [key: string]: unknown
}

interface WeatherContextType {
  weatherData: {
    daily: []
    [key: string]: unknown
  }
  handleWeatherData: (weatherData: WeatherDataType) => void
}

const obj: WeatherContextType = {
  weatherData: {
    daily: []
  },
  handleWeatherData: (weatherData: WeatherDataType) => {
    console.log(weatherData)
  }
}

const WeatherContext = React.createContext(obj)
export const useWeatherContext = () => React.useContext(WeatherContext)
export const WeatherProvider: React.FC<Props> = ({ children }) => {
  const [weatherData, setWeatherData] = React.useState<WeatherDataType>({ daily: [] })
  const handleWeatherData = (data: WeatherDataType) => {
    setWeatherData(data)
  }
  const weatherContext = useMemo(() => ({ weatherData, handleWeatherData }), [weatherData])
  return <WeatherContext.Provider value={weatherContext}>{children}</WeatherContext.Provider>
}
