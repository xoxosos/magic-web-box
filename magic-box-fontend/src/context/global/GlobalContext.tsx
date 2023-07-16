import React, { createContext, useContext } from 'react'

type params = string | number | boolean | undefined
interface Props {
  expand: boolean
  handleExpand: (value: params) => void
  isTop: boolean
  toggleTop: (value: boolean) => void
  menu?: any[]
  loading?: boolean
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
  menu: [],
  loading: false,
  handleLoading: () => {
    //
  },
  key: ''
}
// 创建上下文对象
export const GlobalContext = createContext<Props>(globalContext)
// 自定义的钩子函数，访问和使用GlobalContext提供的上下文值
export const useGlobalContext = () => useContext(GlobalContext)