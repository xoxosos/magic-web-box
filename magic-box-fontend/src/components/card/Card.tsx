/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-08-19 00:29:42
 * @Description:
 */
import { Avatar, Panel, Tag } from 'rsuite'

interface Data {
  image: string
  name: string
  description: string

  [key: string]: string | number
}

type DataProps = {
  data: Data
}
export const Card = ({ data }: DataProps) => {
  console.log('data', data)
  const handleClick = (src: string) => {
    window.open(src, '_blank')
  }
  return (
    <Panel className="card-item" onClick={() => handleClick(data.link as string)}>
      <div className="card-item-header">
        <Avatar size="lg" circle src={data.image} alt="@SevenOutman" />
        <div style={{ overflow: 'hidden', padding: '0 5px 0 5px', flex: '1 1 auto' }}>
          <div className="highlight">
            <h5 className="title  single-line ">{data.name}</h5>
          </div>
          <p className="card-item-header-text">{data.name}</p>
        </div>
      </div>
      <div className="card-item-tags">
        <Tag size="sm" color="red">
          Red
        </Tag>
        <Tag size="sm" color="orange">
          Orange
        </Tag>
        <Tag size="sm" color="yellow">
          Yellow
        </Tag>
        <Tag size="sm" color="green">
          Green
        </Tag>
        <Tag size="sm" color="cyan">
          Cyan
        </Tag>
        <Tag size="sm" color="blue">
          Blue
        </Tag>
        <Tag size="sm" color="violet">
          Violet
        </Tag>
      </div>
    </Panel>
  )
}
