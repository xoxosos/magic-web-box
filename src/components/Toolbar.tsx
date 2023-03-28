import ThemeContext from './ThemeContext'
import { useContext } from 'react'
import LanguageContext from './LanguageContext'
import { Button } from 'rsuite'

interface Props {
  toggleTheme: () => void
}

function Toolbar({ toggleTheme }: Props) {
  const theme = useContext(ThemeContext)
  const language = useContext(LanguageContext)
  return (
    <div>
      {`toolbar-${theme}`}
      <Button appearance="primary" onClick={toggleTheme}>
        click me !
      </Button>
      <h1>{language === 'en' ? 'english' : '中文'}</h1>
    </div>
  )
}

export default Toolbar
