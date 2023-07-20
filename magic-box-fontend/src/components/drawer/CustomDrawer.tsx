import { Drawer, DrawerProps } from 'rsuite'
import React from 'react'

export const CustomDrawer = ({
  open,
  toggleOpen,
  className,
  children,
  ...props
}: {
  open: boolean
  toggleOpen: () => void
  className?: string
  children: React.ReactNode
  props?: DrawerProps
}) => {
  return (
    <>
      <Drawer size="xs" placement="left" open={open} onClose={toggleOpen} className={className} {...props}>
        <Drawer.Body>{children}</Drawer.Body>
      </Drawer>
    </>
  )
}
