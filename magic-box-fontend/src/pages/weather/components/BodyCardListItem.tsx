import { FlexboxGrid, Panel, Stack } from 'rsuite'

interface weatherDataType {
  weatherData: {
    [key: string]: string | number
  }
}

function BodyCardListItem({ weatherData }: weatherDataType) {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10
  }
  return (
    <Panel
      collapsible
      bordered
      header={
        <Stack justifyContent="space-between">
          <div style={{ display: 'flex' }}>
            <i className={`qi-${weatherData['iconDay']}`}></i>
            <p style={{ paddingLeft: 6 }}>{weatherData['fxDate']}</p>
          </div>
          <div style={{ marginRight: 20 }}>
            <p>
              {weatherData['textDay']}
              <span> </span>
              <small>{`${weatherData['tempMin']}℃/${weatherData['tempMax']}℃`}</small>
            </p>
          </div>
        </Stack>
      }
    >
      <div className="">
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={12}>
            <div style={styles}>
              <span>大气压强:</span>
              <span>{weatherData['pressure'] + ' ' + 'hPa'}</span>
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={12}>
            <div style={styles}>
              <span> 云量:</span>
              <span>{weatherData['cloud'] + ' ' + '%'}</span>
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={12}>
            <div style={styles}>
              <span> 能见度:</span>
              <span>{weatherData['vis'] + ' ' + 'km'}</span>
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={12}>
            <div style={styles}>
              <span>风向:</span>
              <span>{weatherData['windDirDay'] as string}</span>
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={12}>
            <div style={styles}>
              <span> 风力等级:</span>
              <span>{weatherData['windScaleDay'] as string}</span>
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={12}>
            <div style={styles}>
              <span> 风速:</span>
              <span>{weatherData['windSpeedDay'] + ' ' + 'km/h'}</span>
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </Panel>
  )
}

export default BodyCardListItem
