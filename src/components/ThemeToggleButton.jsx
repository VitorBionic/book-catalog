import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ThemeToggleButton() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return(
    <>
      <button onClick={toggleTheme}>Tema: {theme}</button>
    </>
  )
}

export default ThemeToggleButton