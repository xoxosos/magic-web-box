import { Input, InputGroup } from 'rsuite'
import SearchIcon from '@rsuite/icons/Search'
import { useState } from 'react'
import useFetchData from '../../../hooks/useFecthData'
import { useWeatherContext } from '../../../context/WeatherContext'

const styles = {
  width: 600,
  marginBottom: 10
}

function SearchInput() {
  const [cityName, setCityName] = useState('武汉')
  const handleChange = (value: string) => {
    setCityName(value)
  }
  const { fetchCityData } = useFetchData()
  const context = useWeatherContext()
  const handleFetchCityData = async (cityName: string) => {
    const res = await fetchCityData(cityName)
    console.log(res)
    context.handleWeatherData(res || {})
  }
  return (
    <div className="search-input">
      <InputGroup inside style={styles}>
        <Input placeholder="请输入需要查询的城市名" value={cityName} onChange={handleChange} />
        <InputGroup.Button onClick={() => handleFetchCityData(cityName)}>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
    </div>
  )
}

export default SearchInput
