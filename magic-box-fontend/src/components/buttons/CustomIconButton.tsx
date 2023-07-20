import { IconProps } from '@rsuite/icons/lib/Icon'
import { MouseEventHandler, ReactElement } from 'react'
import { IconButton } from 'rsuite'

export const CustomIconButton = ({
  onChange,
  className,
  icon
}: {
  expand?: boolean
  onChange: MouseEventHandler<HTMLElement>
  className?: string
  icon: ReactElement<IconProps>
}) => {
  return <IconButton className={className} circle onClick={onChange} size="sm" icon={icon} />
}
