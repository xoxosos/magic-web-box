/*
 * @Author: LinRenJie
 * @Date: 2023-07-04 14:21:01
 * @LastEditTime: 2023-07-07 15:26:04
 * @Description:
 * @FilePath: \react-test\src\components\CardItem.tsx
 * @Email: xoxosos666@gmail.com
 */
import { Avatar, Col, FlexboxGrid, Panel, Tag } from 'rsuite'

const Card = () => (
  <Panel shaded className="card-item">
    <div className="card-item-header">
      <Avatar size="lg" circle src="https://avatars.githubusercontent.com/u/12592949" alt="@SevenOutman" />
      <div style={{ overflow: 'hidden', padding: '0 5px 0 3px', flex: '1 1 auto' }}>
        <h4>title</h4>
        <p className="card-item-header-text">contentcontentcontentcontentcontent</p>
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
);

export const CardItem = () => (
  <div className="show-grid">
    <FlexboxGrid justify="start">
      <FlexboxGrid.Item as={Col} colspan={24} xxl={4} xl={6} lg={8} md={12} sm={12} xs={24}>
        <Card />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col} colspan={24} xxl={4} xl={6} lg={8} md={12} sm={12} xs={24}>
        <Card />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col} colspan={24} xxl={4} xl={6} lg={8} md={12} sm={12} xs={24}>
        <Card />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col} colspan={24} xxl={4} xl={6} lg={8} md={12} sm={12} xs={24}>
        <Card />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col} colspan={24} xxl={4} xl={6} lg={8} md={12} sm={12} xs={24}>
        <Card />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col} colspan={24} xxl={4} xl={6} lg={8} md={12} sm={12} xs={24}>
        <Card />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  </div>
);
