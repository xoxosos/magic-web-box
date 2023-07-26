/*
 * @Author: LinRenJie
 * @Date: 2023-07-04 14:21:01
 * @LastEditTime: 2023-07-25 14:13:57
 * @Description:
 * @FilePath: \magic-box-fontend\src\components\CardItem.tsx
 * @Email: xoxosos666@gmail.com
 */
import { Avatar, Col, FlexboxGrid, Panel, Tag } from 'rsuite'

const Card = (props: any) => (
  <Panel className="card-item">
    <div className="card-item-header">
      <Avatar size="lg" circle src={props.image} alt="@SevenOutman" />
      <div style={{ overflow: 'hidden', padding: '0 5px 0 3px', flex: '1 1 auto' }}>
        <h4 className="title highlight">{props.name}</h4>
        <p className="card-item-header-text">{props.name}</p>
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

export const CardItem = (props) => (
  <div className="show-grid">
    <FlexboxGrid justify="start">
      <FlexboxGrid.Item as={Col} colspan={24} xxl={4} xl={6} lg={8} md={12} sm={12} xs={24}>
        <Card props={props} />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  </div>
)
