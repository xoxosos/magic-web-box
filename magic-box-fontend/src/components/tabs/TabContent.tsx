import styles from './tab.module.less'
import { CardItem } from '../CardItem'

export const TabContent = ({ data, activeId }) => {
  console.log('TabContent', data)
  return (
    <div className={styles.tabsContent}>
      {data.map((item, index) => (
        <div className={`${styles.tabsTextItem} ${activeId === index ? styles.show : ''}`} key={item}>
          <p>{item.name}</p>
          <CardItem props={item} />
        </div>
      ))}
    </div>
  )
}
