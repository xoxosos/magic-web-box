/*
 * @Author: LinRenJie
 * @Date: 2023-07-06 14:17:23
 * @LastEditTime: 2023-07-26 16:27:40
 * @Description:
 * @FilePath: \magic-box-fontend\src\components\tabs\tabs.tsx
 * @Email: xoxosos666@gmail.com
 */
import { useCallback, useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/global/GlobalContext'
import styles from './tab.module.less'
import { getResource } from '../../pages/main/api'
import { TabContent } from './TabContent'
import { TabHeader } from './TabHeader'

const Tabs = ({ data, tabIndex }) => {
  const { key, setTabKey, index, handleIndex } = useGlobalContext()
  console.log('😘Tabs', data, key, setTabKey)
  const id = data[0]?.id || 0
  const [activeTab, setActiveTab] = useState(id)
  const [content, setContent] = useState([])
  const fetchData = async (id: number) => {
    const res = await getResource({ id })
    const resData = res?.data?.data
    resData && setContent(resData as any)
    console.log(resData)
  }
  // 初始化
  useEffect(() => {
    fetchData(id)
  }, [])
  // menu点击时更新数据
  useEffect(() => {
    console.log('😊Tabs', tabIndex, index)
    if (index === tabIndex) {
      setActiveTab(key)
      fetchData(key as number)
    }
  }, [key])
  // tabs切换时更新数据
  const changeTabOnClick = useCallback(
    async (val: number) => {
      handleIndex(100)
      setActiveTab(val)
      setTabKey(val)
      await fetchData(val)
      console.log('changeTabOnClick', val)
    },
    [activeTab]
  )
  return (
    <div className={styles.tabsBody}>
      <TabHeader data={data} click={changeTabOnClick} activeId={activeTab} />
      {content.length > 0 && <TabContent data={content} activeId={activeTab} />}
    </div>
  )
}

export default Tabs
