import { Panel } from 'rsuite'
import { useContext } from 'react'
import weatherContext from './WeatherContext'

function BodyCard() {
  const context = useContext(weatherContext)
  return (
    Object.hasOwn(context.weatherData, 'daily') && (
      <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: '100%' }}>
        <img src="https://via.placeholder.com/240x240" height="240" alt="" />
        <Panel
          header={typeof context.weatherData.cityName === 'string' && context.weatherData.cityName}
        >
          <p>
            <small>
              A suite of React components, sensible UI design, and a friendly development
              experience.
            </small>
          </p>
        </Panel>
      </Panel>
    )
  )
}
export default BodyCard
