import { Affix } from 'rsuite'
import React from 'react'

interface AutoFixProps {
  top?: number
  className?: string | undefined
  children?: React.ReactNode
}

export const AutoFix: React.FC<AutoFixProps> = ({ top, className, children }) => {
  return (
    <>
      <Affix top={top} className={className}>
        {children}
      </Affix>
    </>
  )
}
