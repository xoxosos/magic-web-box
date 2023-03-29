import { useContext } from 'react'
import weatherContext from '../context/WeatherContext'
import BodyCardPanel from './BodyCardPanel'

function BodyCard() {
  const context = useContext(weatherContext)
  return (
    context.weatherData?.daily?.length > 0 && (
      <BodyCardPanel
        title={context.weatherData?.cityName as string}
        weatherData={
          context.weatherData?.daily.filter((item: object, index: number) => index !== 0)[0]
        }
      />
    )
  )
}

export default BodyCard
