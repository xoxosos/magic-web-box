import ThemeContext from './components/ThemeContext'
import './App.css'
import Message from './components/Message'
import Toolbar from './components/Toolbar'
import LanguageContext from './components/LanguageContext'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    console.log(theme)
  }
  const message = 'this is a message prop!'
  const showMessage = (itemName: string) => {
    console.log(itemName)
  }
  return (
    <ThemeContext.Provider value={theme}>
      <LanguageContext.Provider value="zh">
        <div className="App">
          <Message onShowMessage={showMessage}>{message}</Message>
          <Toolbar toggleTheme={toggleTheme}></Toolbar>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
