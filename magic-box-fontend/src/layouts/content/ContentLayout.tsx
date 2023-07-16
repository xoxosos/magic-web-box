import GlobalProps from 'globalProps'

function ContentLayout({ children, className }: GlobalProps) {
  return (
    <section className={className}>
      <div>{children}</div>
    </section>
  )
}

export default ContentLayout
