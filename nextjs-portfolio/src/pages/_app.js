import React, { useEffect, useState, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/styles/globalStyles'
import themes from '@/styles/themes'

export const ThemePreferenceContext = createContext()

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')

  function toggleTheme () {
    const themeMode = theme==='light' ? 'dark' : 'light'
    setTheme(themeMode)
    localStorage.setItem('theme', themeMode)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    } else {
      const themeQuery = window.matchMedia('(prefers-color-scheme: light)')
      const themeMode = themeQuery.matches ? 'light' : 'dark'
      localStorage.setItem('theme', themeMode)
      setTheme(themeMode)
    }
  }, [])

  useEffect(() => {
    const oppositeTheme = theme==='light' ? 'dark' : 'light'
    document.body.classList.remove(`${oppositeTheme}-mode`)
    document.body.classList.add(`${theme}-mode`)
  }, [theme])

  return (
    <ThemePreferenceContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  )
}
