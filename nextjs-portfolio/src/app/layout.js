import React from 'react'
import Header from '@/components/Header'
import Providers from '@/components/Providers'
import '@/styles/globals.css'

export default function App({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
