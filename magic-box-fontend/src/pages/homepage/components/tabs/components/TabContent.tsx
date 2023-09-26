/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-08-18 22:53:42
 * @Description:
 */
import { motion } from 'framer-motion'
import { Col, FlexboxGrid } from 'rsuite'
import { CardItem } from '../../../../../components/CardItem'
import { fadeIn } from '../../../../../utils/variants'
import { DataProps, Props } from '../types'

export const TabContent = ({ data, activeId }: Props) => {
  console.log('TabContent', data, activeId)
  return (
    <div className="show-grid">
      <FlexboxGrid justify="start">
        {data.map((item: DataProps, index: number) => (
          <FlexboxGrid.Item as={Col} colspan={24} xxl={4} xl={6} lg={6} md={8} sm={12} xs={24} key={item.name}>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
            >
              <CardItem data={item} />
            </motion.div>
          </FlexboxGrid.Item>
        ))}
      </FlexboxGrid>
    </div>
  )
}
