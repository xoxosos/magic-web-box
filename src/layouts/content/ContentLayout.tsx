import { Content } from 'rsuite'
import { ReactNode } from 'react'

function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <Content>
      <div className="main-content">
        <div className="main-content-search">{children}</div>
      </div>
    </Content>
  )
}

export default ContentLayout
