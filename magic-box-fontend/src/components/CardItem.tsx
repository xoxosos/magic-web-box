/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-08-18 22:53:42
 * @Description:
 */
import { Col, FlexboxGrid } from 'rsuite'
import { Card } from './card/Card'
interface Data {
  image: string
  name: string
  description: string
  [key: string]: string | number
}

type DataProps = {
  data: Data
}

export const CardItem = ({ data }: DataProps) => {
  return (
    <div className="show-grid">
      <FlexboxGrid justify="start">
        <FlexboxGrid.Item as={Col} colspan={24} xxl={4} xl={6} lg={8} md={12} sm={12} xs={24}>
          <Card data={data} />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  )
}
