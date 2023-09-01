/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-08-18 22:53:42
 * @Description:
 */
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'
import { Col, FlexboxGrid } from 'rsuite'
import { CardItem } from '../CardItem'

interface ItemProps {
  id: number
  name: string
  image: string
  description: string

  [key: string]: string | number
}

interface Props {
  data: ItemProps[]
  activeId: number
}

export const TabContent = ({ data, activeId }: Props) => {
  console.log('TabContent', data)
  return (
    <div className="show-grid">
      <FlexboxGrid justify="start">
        {data.map((item: any, index: number) => (
          <FlexboxGrid.Item as={Col} colspan={24} xxl={4} xl={6} lg={6} md={8} sm={12} xs={24} key={item.name}>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
            >
              <CardItem data={item} />
            </motion.div>
          </FlexboxGrid.Item>
        ))}
      </FlexboxGrid>
    </div>
  )
}
