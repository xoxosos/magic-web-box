import styles from '../tab.module.less'
import { Props } from '../types'

export const TabHeader = ({ data, click, activeId }: Props) => {
  return (
    <ul className={styles.tabsHeader}>
      {data.map((item) => (
        <li className={activeId === item.id ? styles.active : ''} key={item.name}>
          <a onClick={() => click?.(item.id)}>
            <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
