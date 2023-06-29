import { Content } from 'rsuite'

function ContentLayout({ children }: never) {
  return (
    <Content>
      <div className="main-content">
        <div className="main-content-search">{children}</div>
      </div>
    </Content>
  )
}

export default ContentLayout
