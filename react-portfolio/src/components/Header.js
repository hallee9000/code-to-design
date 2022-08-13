import React from 'react'
import { Link } from "react-router-dom"

const Header = function () {
  return (
    <header>
      <Link to="/">首页</Link>
      <Link to="/blog">博客</Link>
      <Link to="/photography">摄影</Link>
    </header>
  )
}

export default Header
