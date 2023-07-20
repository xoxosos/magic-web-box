import { createContext, useContext } from 'react'

type params = string | number | boolean | undefined

interface Props {
  expand: boolean
  handleExpand: (value?: params) => void
  isTop: boolean
  toggleTop: (value: boolean) => void
  open: boolean
  setOpen: (value: boolean) => void
  menu?: any[]
  loading?: boolean
  index?: number
  handleIndex: (value: number) => void
  selectedRef: any
  handleLoading?: (value: params) => void
  key?: string
}

// 上下文对象初始值
const globalContext: Props = {
  expand: false,
  handleExpand: () => {
    //
  },
  isTop: false,
  toggleTop: () => {
    //
  },
  open: false,
  setOpen: () => {
    //
  },
  menu: [],
  loading: false,
  index: 0,
  handleIndex: () => {
    //
  },
  selectedRef: null,
  handleLoading: () => {
    //
  },
  key: ''
}
// 创建上下文对象
export const GlobalContext = createContext<Props>(globalContext)
// 自定义的钩子函数，访问和使用GlobalContext提供的上下文值
export const useGlobalContext = () => useContext(GlobalContext)
