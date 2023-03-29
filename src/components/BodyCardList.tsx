import { useContext } from 'react'
import weatherContext from '../context/WeatherContext'
import BodyCardListItem from './BodyCardListItem'

function BodyCardList() {
  const context = useContext(weatherContext)
  return (
    Object.hasOwn(context.weatherData, 'daily') &&
    context.weatherData.daily?.filter((item, index) => index !== 0).length > 0 && (
      <div>
        {context.weatherData.daily
          ?.filter((_, index) => index !== 0)
          ?.map((i, index) => {
            return <BodyCardListItem key={index} weatherData={i}></BodyCardListItem>
          })}
      </div>
    )
  )
}

export default BodyCardList
