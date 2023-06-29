import React from 'react'
import { Link } from 'react-router-dom'
//当 exact 被设置为 true 时，只有当路由路径与当前路径完全匹配时，才会激活该路由。

const NavLink = React.forwardRef(({ href, children, ...rest }: any, ref) => (
  <Link ref={ref} exact="true" to={href} {...rest}>
    {children}
  </Link>
))
NavLink.displayName = 'NavLink'

export default NavLink
