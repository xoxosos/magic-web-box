/*
 * @Author: LinRenJie
 * @Date: 2023-07-06 15:44:41
 * @LastEditTime: 2023-09-26 16:52:21
 * @Description:
 * @FilePath: \magic-box-fontend\src\pages\homepage\components\content-header\ImageWrapper.tsx
 * @Email: xoxosos666@gmail.com
 */
import React from 'react'
import { ParticleAnimation } from '../../../../components/canvas/canvas'
import SearchBox from './components/SearchBox'
import styles from './styles.module.less'

const Notice = () => <p>test</p>

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
