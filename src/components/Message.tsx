import ThemeContext from './ThemeContext'

interface Props {
  children: String
  onShowMessage: (itemName: String) => void
}

function Message({ children, onShowMessage }: Props) {
  return (
    <ThemeContext.Consumer>
      {(theme) => <div onClick={() => onShowMessage('messageComponent')}>{children + theme}</div>}
    </ThemeContext.Consumer>
  )
}

export default Message
