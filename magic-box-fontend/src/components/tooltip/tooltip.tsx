/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-08-18 23:51:33
 * @Description:
 */
import React from 'react'

interface Props {
  text: string
  children: React.ReactNode
}
export const Tooltips: React.FC<Props> = ({ text, children }) => {
  console.log(text)

  const [isVisible, setIsVisible] = React.useState(false)
  return (
    <div className="tooltip-container" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible && <div className="tooltip">{text}</div>}
    </div>
  )
}
