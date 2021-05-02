// fetch 函数接受两个参数
fetch(
  // 第一个是一个请求地址
  'https://api.figma.com/v1/files/你的文件 Key',
  // 第二个是请求的额外参数
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

  const introTitle = document.querySelector('.introduction h3')
  const introDesc = document.querySelector('.introduction p')
  introTitle.innerText = title.characters
  introDesc.innerText = description.characters
})
