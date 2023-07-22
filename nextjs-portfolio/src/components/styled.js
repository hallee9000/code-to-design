'use client';

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`

export const Tag = styled.span`
  display: flex;
  align-items: center;
  padding: 4px 16px;
  gap: 8px;
  height: 28px;
  border: 1px solid ${({theme}) => theme.colors.borderTag};
  border-radius: 14px;
  font-size: 14px;
`
