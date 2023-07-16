/// <reference types="vite/client" />
// 依赖库声明
declare module 'nprogress'

// 定义全局通用的 props 类型，供整个项目使用
declare module 'globalProps' {
  import { CSSProperties, ReactNode } from 'react'

  interface GlobalProps {
    // 定义全局通用的 props
    children?: ReactNode
    theme?: string
    className?: string
    style?: CSSProperties
  }

  export default GlobalProps
}
