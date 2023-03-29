import SearchInput from './SearchInput'
import WeatherBody from './WeatherBody'
import WeatherContext from '../context/WeatherContext'
import { useEffect, useMemo, useState } from 'react'

interface weatherDataType {
  daily: []

  [key: string]: unknown
}

function MainContent() {
  const [weatherData, setWeatherData] = useState<weatherDataType>({ daily: [] })
  const handleWeatherData = (data: weatherDataType) => {
    console.log('返回到父组件的data', data)
    setWeatherData(data)
    console.log('设置weatherData', weatherData)
  }

  useEffect(() => {
    console.log('Data has changed', weatherData)
  }, [weatherData])
  const weatherContext = {
    weatherData,
    handleWeatherData
  }
  return (
    <div className="main-content">
      <div className="main-content-search">
        <WeatherContext.Provider value={weatherContext}>
          <SearchInput />
          <WeatherBody />
        </WeatherContext.Provider>
      </div>
    </div>
  )
}

export default MainContent
