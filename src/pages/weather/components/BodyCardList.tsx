import { useWeatherContext } from '../../../context/WeatherContext'
import BodyCardListItem from './BodyCardListItem'

/**
 * @description: 天气主体内容卡片列表
 * @constructor
 */
function BodyCardList() {
  const { weatherData } = useWeatherContext()
  const daily = weatherData?.daily?.slice(1)
  return daily.length > 0 ? (
    <div>
      {daily.map((i, index) => {
        return <BodyCardListItem key={index} weatherData={i}></BodyCardListItem>
      })}
    </div>
  ) : (
    <></>
  )
}

export default BodyCardList
