import type { ButtonProps } from 'rsuite'
import { Button } from 'rsuite'

function CustomButton({ color, appearance, children, onClick, ...restProps }: ButtonProps) {
  return (
    <Button color={color} appearance={appearance} onClick={onClick} {...restProps}>
      {children}
    </Button>
  )
}

export default CustomButton
