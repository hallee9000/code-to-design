import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Tag } from '@/components/styled'

const LinkContainer = styled(Link)`
  display: flex;
  gap: 24px;
  padding: 16px;
  border-radius: 4px;
  margin: 0 -16px;
  margin-bottom: 16px;
  transition: all 0.2s;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: ${({theme}) => theme.colors.bgHover};
  }
  img {
    width: 280px;
    border-radius: 4px;
  }
  .meta {
    p {
      margin: 0;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.4;
      color: #787878;
    }
    h1 {
      margin: 0;
      margin-bottom: 12px;
      line-height: 1.4;
      font-size: 28px;
      font-weight: 400;
    }
    .tags {
      display: flex;
      gap: 8px;
    }
  }
  /* 小屏幕下 */
  @media (max-width: 640px) {
    flex-direction: column;
    img {
      width: 100%;
    }
    .meta {
      p {
        font-size: 14px;
      }
      h1 {
        font-size: 20px;
      }
    }
  }
`

const ArticleCard = function ({ src, date, title, tags }) {
  return (
    <LinkContainer href="/blog">
      {
        src && <img src={src}/>
      }
      <div className="meta">
        <p>{ date }</p>
        <h1>{ title }</h1>
        <div className="tags">
          { tags.map((tag, index) => <Tag key={index}>{ tag }</Tag>) }
        </div>
      </div>
    </LinkContainer>
  )
}

export default ArticleCard
