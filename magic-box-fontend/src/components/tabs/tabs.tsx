/*
 * @Author: LinRenJie
 * @Date: 2023-07-06 14:17:23
 * @LastEditTime: 2023-07-26 16:27:40
 * @Description:
 * @FilePath: \magic-box-fontend\src\components\tabs\tabs.tsx
 * @Email: xoxosos666@gmail.com
 */
import { useState } from 'react'

import { useEffect } from 'react'
import { useGlobalContext } from '../../context/global/GlobalContext'
import styles from './tab.module.less'
const Tabs = ({ data, children, tabIndex }) => {
  const { key, setTabKey, index } = useGlobalContext()
  console.log('😘Tabs', data, key, setTabKey)
  const id = data[0]?.id || 0
  const [activeTab, setActiveTab] = useState(id)
  useEffect(() => {
    console.log(index)
    if (index === tabIndex) {
      setActiveTab(key)
    }
    return
  }, [key])
  const changeTabOnClick = (id: number) => {
    setActiveTab(id)
    setTabKey(id)
  }

  return (
    <div className={styles.tabsBody}>
      <TabHeader data={data} click={changeTabOnClick} activeId={activeTab} />
      <TabContent data={data} activeId={activeTab}>
        {children}
      </TabContent>
    </div>
  )
}

const TabHeader = ({ data, click, activeId }) => {
  const doClick = (index) => {
    click(index)
  }

  const tabs = data.map((item, index) => (
    <li className={activeId === item.id ? styles.active : ''} key={item.name}>
      <a onClick={() => doClick(item.id)}>
        <span>{item.name}</span>
      </a>
    </li>
  ))

  return <ul className={styles.tabsHeader}>{tabs}</ul>
}

const TabContent = ({ data, activeId, children }) => {
  const content = data.map((item, index) => (
    <div className={`${styles.tabsTextItem} ${activeId === index ? styles.show : ''}`} key={index}>
      <p>{item.text}</p>
      {children}
    </div>
  ))

  return <div className={styles.tabsContent}>{content}</div>
}

export default Tabs
