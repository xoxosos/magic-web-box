export default function useFetchData() {
  // 使用fetch获取天气数据
  const apiKey = '14948609cab04723a421ca9df43a093c'
  const fetchCityData = async (cityName: string) => {
    const apiUrl = `https://geoapi.qweather.com/v2/city/lookup?location=${cityName}&key=${apiKey}`
    const response = await fetch(apiUrl)

    const data = await response.json()
    // 返回的城市数据包括区(数组第一个数据为当前城市)
    if (data?.location.length > 0) {
      return await fetchWeatherData(data.location[0].id, cityName)
    }
  }
  const fetchWeatherData = async (id: string, cityName: string) => {
    const apiUrl = `https://devapi.qweather.com/v7/weather/7d?location=${id}&key=${apiKey}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    if (data.code === '200') {
      data.cityName = cityName
      return data || {}
    }
  }
  return { fetchCityData }
}
