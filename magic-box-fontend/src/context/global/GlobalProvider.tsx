import NProgress from 'nprogress' // 引入nprogress插件
import 'nprogress/nprogress.css' // 这个nprogress样式必须引入
import { FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import useLoginApi from '../../pages/login/service'
import { GlobalContext } from './GlobalContext'

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
  const [open, toggleOpen] = useState(false)
  const [menu, setMenu] = useState([])
  // key -> id
  const [key, setKey] = useState(1)
  const [loading, setLoading] = useState(true)
  const selectedRef = useRef(null)
  const [index, setIndex] = useState(100)
  const handleLoading = () => loading

  useEffect(() => {
    NProgress.start()
    // 初始化Menu
    const fetchMenuData = async () => {
      try {
        const res = await useLoginApi.getCategories<iProps>()
        const { data, code } = res || {}

        if (code === 0) {
          const key = data?.[0]?.children ? data?.[0].children[0].id : data?.[0].id || 1
          console.log(data, key, typeof key)
          setKey(key)
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
  const handleIndex = (i: number) => setIndex(i)
  const toggleTop = (flag: boolean) => setTop(flag)
  const setOpen = (flag: boolean) => toggleOpen(flag)
  // const setTabKey =
  const setTabKey = useCallback(
    (value: number) => {
      console.log('😊setTabKey', value)
      setKey(value)
    },
    [key]
  )
  const globalContextValue = useMemo(
    () => ({
      handleExpand,
      toggleTop,
      isTop,
      expand,
      menu,
      key,
      setTabKey,
      loading,
      handleLoading,
      handleIndex,
      index,
      open,
      setOpen,
      selectedRef
    }),
    [toggleTop, isTop, expand, menu, open]
  )
  return <GlobalContext.Provider value={globalContextValue}>{children}</GlobalContext.Provider>
}
