'use client'

import React, { useState, useEffect } from 'react'
import { NotionRenderer } from 'react-notion-x'
import { useTheme } from 'next-themes'

export default function NotionPage ({ recordMap }) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="leading-6">
      <NotionRenderer
        recordMap={recordMap}
        darkMode={theme==='dark'}
        fullPage={false}
        components={{
          Collection: () => null
        }}
      />
    </div>
  )
}
