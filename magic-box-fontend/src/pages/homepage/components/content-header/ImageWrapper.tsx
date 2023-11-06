import React from 'react'
import { ParticleAnimation } from '../../../../components/canvas/canvas'
import SearchBox from './components/SearchBox'
import styles from './styles.module.less'

const Notice = () => <p>这是滚动通知栏</p>

const ImageWrapper: React.FC = () => {
  return (
    <div className={styles.imageWrapper}>
      <ParticleAnimation />
      <div className={styles.imageWrapperChild}>
        <SearchBox />
        <Notice />
      </div>
    </div>
  )
}
export default ImageWrapper
