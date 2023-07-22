'use client'

import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'react-feather'
import { useTheme } from 'next-themes'

const ThemeSwitcher = function () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  function toggleTheme () {
    setTheme(theme==='light' ? 'dark' : 'light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="p-1 rounded-lg transition-all hover:bg-zinc-200 cursor-pointer dark:hover:bg-zinc-600" onClick={toggleTheme}>
      {
        theme==='light' ?
        <Moon size="20px"/> :
        <Sun size="20px"/>
      }
    </div>
  )
}

export default ThemeSwitcher
