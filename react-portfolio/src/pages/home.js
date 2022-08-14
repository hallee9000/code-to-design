import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'react-feather'
import ArticleCard from '../components/ArticleCard'

const Container = styled.div`
  padding-top: 64px;
`

const Hero = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 64px 16px;
  img {
    width: 128px;
    height: 128px;
    margin-bottom: 8px;
  }
  h1 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 40px;
    font-weight: 300;
  }
  p {
    margin: 0;
    font-size: 20px;
    font-weight: 300;
    color: #333;
  }
`

const Articles = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
`

const GroupTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: #787878;
  font-size: 24px;
  font-weight: 300;
  >a {
    display: flex;
    align-items: center;
    color: #787878;
  }
`

const Home = function () {
  return (
    <Container>
      <Hero>
        <img src="/images/Logo.svg"/>
        <h1>嗨，我是李幸福。 🤔</h1>
        <p>你好，我是一名设计师。这是我的个人网站，随意逛逛，希望喜欢。</p>
      </Hero>
      <Articles>
        <GroupTitle>
          <span>最近发布</span>
          <Link to="/blog">全部<ArrowRight/></Link>
        </GroupTitle>
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
      </Articles>
    </Container>
  )
}

export default Home
