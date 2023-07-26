import styles from './tab.module.less'

export const TabHeader = ({ data, click, activeId }) => {
  const tabs = data.map((item, index) => (
    <li className={activeId === item.id ? styles.active : ''} key={item.name}>
      <a onClick={() => click(item.id)}>
        <span>{item.name}</span>
      </a>
    </li>
  ))

  return <ul className={styles.tabsHeader}>{tabs}</ul>
}
