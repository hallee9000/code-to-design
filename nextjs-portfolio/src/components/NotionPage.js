'use client'

import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import { useTheme } from 'next-themes'

export default function NotionPage ({ recordMap }) {
  const { theme } = useTheme()
  return (
    <div className="leading-6">
      <NotionRenderer recordMap={recordMap} darkMode={theme==='dark'}/>
    </div>
  )
}
