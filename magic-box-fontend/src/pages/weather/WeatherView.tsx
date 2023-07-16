import WeatherBody from './components/WeatherBody'
import SearchInput from './components/SearchInput'
import './weather.less'

export const WeatherView = () => {
  return (
    <>
      <SearchInput />
      <WeatherBody />
    </>
  )
}
