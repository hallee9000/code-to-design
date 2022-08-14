import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { Figma, GitHub, Tv } from 'react-feather'

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  text-align: center;
  >nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 16px;
    .links {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    .social {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
`

const Header = function () {
  return (
    <Container>
      <nav>
        <div className="links">
          <Link to="/">
            <img src="/images/Logo.svg"/>
          </Link>
          <Link to="/blog">博客</Link>
          <Link to="/photography">摄影</Link>
        </div>
        <div className="social">
          <a href="https://figma.com/@leadream" target="_blank">
            <Figma size={20}/>
          </a>
          <a href="https://github.com/leadream" target="_blank">
            <GitHub size={20}/>
          </a>
          <a href="https://space.bilibili.com/336488122" target="_blank">
            <Tv size={20}/>
          </a>
        </div>
      </nav>
    </Container>
  )
}

export default Header
