import SearchInput from './SearchInput'
import WeatherBody from './WeatherBody'
import WeatherContext from './WeatherContext'
import { useEffect, useMemo, useState } from 'react'
import useFetchData from '../hooks/useFecthData'
function MainContent() {
  const [weatherData, setWeatherData] = useState({})
  const handleWeatherData = (data: object) => {
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
