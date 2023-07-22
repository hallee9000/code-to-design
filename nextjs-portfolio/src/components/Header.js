import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

const NavLink = ({ children, to }) => (
  <Link href={to} className="text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-50 transition-all">{ children }</Link>
)

const Header = function () {
  return (
    <header className="fixed top-0 left-0 flex justify-center w-full h-16">
      <div className="flex items-center justify-between w-full max-w-2xl p-4">
        <nav className="flex gap-4 items-center">
          <Link href="/">
            <Image src={`/Logo-light.svg`} width={32} height={32} alt="Logo" data-hide-on-theme='dark'/>
            <Image src={`/Logo-dark.svg`} width={32} height={32} alt="Logo" data-hide-on-theme='light'/>
          </Link>
          <NavLink to="/posts">文章</NavLink>
          <NavLink to="/photo">摄影</NavLink>
          <NavLink to="/about">关于</NavLink>
        </nav>
        <ThemeSwitcher/>
      </div>
    </header>
  )
}

export default Header
