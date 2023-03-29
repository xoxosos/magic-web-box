import { Panel, Placeholder } from 'rsuite'
import { useContext } from 'react'
import weatherContext from './WeatherContext'

function BodyCardList() {
  const context = useContext(weatherContext)
  return (
    Object.hasOwn(context.weatherData, 'daily') &&
    context.weatherData.daily?.filter((item, index) => index !== 0).length > 0 &&
    context.weatherData.daily
      ?.filter((item, index) => index !== 0)
      .forEach(() => {
        return (
          <Panel header="Panel title" collapsible bordered>
            <Placeholder.Paragraph />
          </Panel>
        )
      })
  )
}
export default BodyCardList
