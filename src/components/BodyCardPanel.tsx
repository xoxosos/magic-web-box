import { FlexboxGrid, Panel, Stack } from 'rsuite'
import dayjs from 'dayjs'

interface weatherDataType {
  title: string
  weatherData: {
    [key: string]: any
  }
}

function BodyCardPanel({ weatherData, title }: weatherDataType) {
  const dateStr = weatherData['fxDate'] // 指定日期的字符串表示
  const dayOfWeek = dayjs(dateStr).format('dddd') // 获取星期几
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10
  }
  return (
    <Panel
      header={
        <Stack justifyContent="space-between">
          <span style={{ fontSize: '20px' }}>{title}</span>
          <p style={{ fontSize: '20px' }}>{dayOfWeek}</p>
        </Stack>
      }
      shaded
      bordered
      bodyFill
      style={{ display: 'inline-block', width: '100%' }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'grid', fontSize: '20px' }}>
          <span>最高温度:{weatherData['tempMax'] + ' ' + '℃'}</span>
          <span>最低温度:{weatherData['tempMin'] + ' ' + '℃'}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
          fill="currentColor"
          className={`qi-${weatherData['iconDay']}-fill`}
          viewBox="0 0 16 16"
        >
          <path d="M1 12.5a1 1 0 1 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2ZM5 15a1 1 0 1 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm4.293.707A1 1 0 0 1 9 15c0-.5.555-1.395 1-2 .445.605 1 1.5 1 2a1 1 0 0 1-1.707.707ZM13 12.5a1 1 0 0 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm-1.273-4.283A4.99 4.99 0 0 1 7.9 10a4.988 4.988 0 0 1-3.773-1.719 3 3 0 1 1-.586-5.732A4.998 4.998 0 0 1 7.9 0a4.999 4.999 0 0 1 4.38 2.587 3 3 0 1 1-.553 5.63Z" />
        </svg>
        <div style={{ display: 'grid', fontSize: '20px' }}>
          <span>日出时间:{weatherData['sunrise'] + ' ' + 'am'}</span>
          <span>日落时间:{weatherData['sunset'] + ' ' + 'pm'}</span>
        </div>
      </div>

      <Panel>
        <div className="">
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={8}>
              <div style={styles}>
                <span>大气压强:</span>
                <span>{weatherData['pressure'] + ' ' + 'hPa'}</span>
              </div>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              <div style={styles}>
                <span> 云量:</span>
                <span>{weatherData['cloud'] + ' ' + '%'}</span>
              </div>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              <div style={styles}>
                <span> 能见度:</span>
                <span>{weatherData['vis'] + ' ' + 'km'}</span>
              </div>
            </FlexboxGrid.Item>
          </FlexboxGrid>
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={8}>
              <div style={styles}>
                <span>风向:</span>
                <span>{weatherData['windDirDay'] as string}</span>
              </div>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              <div style={styles}>
                <span> 风力等级:</span>
                <span>{weatherData['windScaleDay'] as string}</span>
              </div>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              <div style={styles}>
                <span> 风速:</span>
                <span>{weatherData['windSpeedDay'] + ' ' + 'km/h'}</span>
              </div>
            </FlexboxGrid.Item>
          </FlexboxGrid>
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={8}>
              <div style={styles}>
                <span>总降水量:</span>
                <span>{weatherData['precip'] + ' ' + 'mm'}</span>
              </div>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              <div style={styles}>
                <span> 紫外线强度指数:</span>
                <span>{weatherData['uvIndex'] as string}</span>
              </div>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              <div style={styles}>
                <span> 相对湿度:</span>
                <span>{weatherData['humidity'] + ' ' + '%'}</span>
              </div>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </div>
      </Panel>
    </Panel>
  )
}

export default BodyCardPanel
