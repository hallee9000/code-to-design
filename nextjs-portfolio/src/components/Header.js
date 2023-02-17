import React, { useContext } from 'react'
import styled from 'styled-components'
import { Container } from '@/components/styled'
import Image from 'next/image'
import Link from 'next/link'
import { Moon } from 'react-feather'
import { ThemePreferenceContext } from '@/pages/_app'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: ${({isDark}) => isDark ? 'rgba(35, 35, 35, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(16px);
  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const ActionIcon = styled.div`
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({theme}) => theme.colors.bgHover};
  }
  >svg {
    display: block;
  }
`

const Header = function () {
  const { theme, toggleTheme } = useContext(ThemePreferenceContext)

  return (
    <StyledHeader isDark={theme==='dark'}>
      <Container>
        <Left>
          <Image src={`/Logo-${theme}.svg`} width={32} height={32} alt="Logo"/>
          <Link href="#">文章</Link>
          <Link href="#">摄影</Link>
          <Link href="#">关于</Link>
        </Left>
        <ActionIcon onClick={toggleTheme}>
          <Moon size="20px"/>
        </ActionIcon>
      </Container>
    </StyledHeader>
  )
}

export default Header
