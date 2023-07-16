import { useWeatherContext } from '../../../context/WeatherContext'
import BodyCardPanel from './BodyCardPanel'

/**
 * @description: 天气主体内容卡片
 * @constructor
 */
function BodyCard() {
  const { weatherData } = useWeatherContext()
  const daily = weatherData?.daily || []
  return daily.length > 0 ? (
    <BodyCardPanel
      title={weatherData?.cityName as string}
      weatherData={weatherData?.daily.filter((item: object, index: number) => index !== 0)[0]}
    />
  ) : (
    <></>
  )
}

export default BodyCard
