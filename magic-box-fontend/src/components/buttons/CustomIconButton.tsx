import type { IconButtonProps } from 'rsuite'
import { IconButton } from 'rsuite'

export const CustomIconButton = ({ onChange, icon, size = 'sm', ...restProps }: IconButtonProps) => {
  return <IconButton circle onClick={onChange} size={size} icon={icon} {...restProps} />
}
export default CustomIconButton
