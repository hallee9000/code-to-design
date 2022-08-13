import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Header from './components/Header'
import Home from './pages/home'
import Blog from './pages/blog'
import Photography from './pages/photography'

const App = function () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
