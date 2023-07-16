import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

const NavLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link ref={ref} {...props}>
    {props.children}
  </Link>
))
NavLink.displayName = 'NavLink'

export default NavLink
