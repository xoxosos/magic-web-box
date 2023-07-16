import { FC, ReactNode, useEffect, useMemo, useState } from 'react'
import { GlobalContext } from './GlobalContext'
import useLoginApi from '../../pages/login/service'
import NProgress from 'nprogress' // 引入nprogress插件
import 'nprogress/nprogress.css' // 这个nprogress样式必须引入

interface Props {
  id: number
  name: string
  children: Props[]
}
type iProps = Props[]
// 管理和提供全局上下文
export const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [expand, setExpand] = useState(true)
  const [isTop, setTop] = useState(false)
  const [menu, setMenu] = useState([])
  const [key, setKey] = useState('')
  const [loading, setLoading] = useState(true)
  const handleLoading = () => loading
  useEffect(() => {
    NProgress.start()

    // 初始化Menu
    const fetchMenuData = async () => {
      try {
        const res = await useLoginApi.getCategories()
        const { data, code } = res?.data || {}
        if (code === 0) {
          const key = (data as iProps)?.[0]?.children ? (data as iProps)[0].children[0].id : (data as iProps)[0].id
          setKey(key.toString())
          setMenu(data as [])
          setLoading(false)
          NProgress.done()
        }
      } catch (error) {
        setLoading(false)
        console.error('Error fetching categories:', error)
        NProgress.done()
      }
    }
    fetchMenuData()
  }, [])
  const handleExpand = () => setExpand(!expand)

  const toggleTop = (flag: boolean) => setTop(flag)

  const globalContextValue = useMemo(
    () => ({ handleExpand, toggleTop, isTop, expand, menu, key, loading, handleLoading }),
    [toggleTop, isTop, expand, menu]
  )
  return <GlobalContext.Provider value={globalContextValue}>{children}</GlobalContext.Provider>
}