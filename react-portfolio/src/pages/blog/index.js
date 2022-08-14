import React from 'react'
import styled from 'styled-components'
import ArticleCard from '../../components/ArticleCard'

const Container = styled.div`
  padding: 16px;
  padding-top: 64px;
  max-width: 960px;
  margin: 0 auto;
  >h3 {
    margin-bottom: 16px;
    color: #333333;
    font-size: 24px;
    font-weight: 300;
  }
`

const Blog = function () {
  return (
    <Container>
      <h3>
        博客
      </h3>
      <ArticleCard
        src="/images/blog/wugongshan.png"
        date="2022年7月21日"
        title="武功山徒步"
        tags={['徒步', '山']}
      />
      <ArticleCard
        date="2017年3月2日"
        title="我来到深圳啦"
        tags={['城市', '工作']}
      />
      <ArticleCard
        src="/images/blog/beijing.png"
        date="2016年7月2日"
        title="离开北京"
        tags={['城市', '工作']}
      />
    </Container>
  )
}

export default Blog
