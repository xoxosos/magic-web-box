import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import 'rsuite/styles/index.less'
import './index.css'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' // 引入中文语言包

dayjs.locale('zh-cn') // 设置dayjs语言环境为中文

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  import.meta.env.DEV ? (
    <App />
  ) : (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
)
