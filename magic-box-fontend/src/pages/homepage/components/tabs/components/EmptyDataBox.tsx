import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from '../../../../../utils/variants'
const EmptyDataBox: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #ccc'
      }}
    >
      <span>这里还没有数据哦！</span>
    </motion.div>
  )
}

export default EmptyDataBox
