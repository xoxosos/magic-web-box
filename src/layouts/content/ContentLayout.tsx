import { Content } from 'rsuite'
import React from 'react'

function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <Content>
      <div className="main-content">
        <div className="main-content-search">{children}</div>
      </div>
    </Content>
  )
}

export default ContentLayout
