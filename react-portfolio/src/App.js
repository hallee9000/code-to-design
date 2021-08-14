import React, { Component } from 'react'

class App extends Component {
  state = {
    title: '嗨，我是李幸福。 😁',
    description: '我是一名交互设计师，我平时兴趣老多了（开始掰手指），比如我喜欢吃饭、睡觉、喝水，我还喜欢做表情包，老喜欢了。下面是我的作品，请欣赏。'
  }
  // 组件挂载完成时执行
  componentDidMount () {
    fetch(
      'https://api.figma.com/v1/files/你的文件 Key',
      {
        headers: {
          'X-Figma-Token': '你的 Access Token'
        }
      }
    )
    .then(res => res.json())
    .then(data => {
      // 取到 data.document，并给它起个新名字叫 figmaDocument
      const { document: figmaDocument } = data
      const home = figmaDocument.children[0].children[2]
      const introduction = home.children[1]
      const [title, description] = introduction.children

      // 使用 setState 方法更新数据，而不是直接赋值
      this.setState({
        title: title.characters,
        description: description.characters
      })
    })
  }
  render () {
    return (
      <>
        <header className="header">
          <nav className="nav">
            <a href="/">
              <img src="/images/icon.png"/>
            </a>
            <a href="/">首页</a>
            <a href="writing">写作</a>
          </nav>
          <div className="social">
            <a href="https://figma.com/@leadream">
              <img src="/images/Figma.svg"/>
            </a>
            <a href="https://github.com/leadream">
              <img src="/images/github.svg"/>
            </a>
            <a href="https://space.bilibili.com/336488122">
              <img src="/images/Bilibili.svg"/>
            </a>
          </div>
        </header>
        <div className="introduction">
          <h3>{ this.state.title }</h3>
          <p>{ this.state.description }</p>
        </div>
        <ul className="work">
          <li>
            <img src="/images/work/handoff.png"/>
            <p>Figma 设计交付工具</p>
          </li>
          <li>
            <img src="/images/work/community.png"/>
            <p>Figma 社区游玩指南</p>
          </li>
          <li>
            <img src="/images/work/heron.png"/>
            <p>Heron handoff</p>
          </li>
          <li>
            <img src="/images/work/paper-crafts.png"/>
            <p>可爱的纸模</p>
          </li>
          <li>
            <img src="/images/work/card.png"/>
            <p>我的个人卡片</p>
          </li>
          <li>
            <img src="/images/work/listen.png"/>
            <p>今天听什么？</p>
          </li>
        </ul>
      </>
    )
  }
}

export default App
