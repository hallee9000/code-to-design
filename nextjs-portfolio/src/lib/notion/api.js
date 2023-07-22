import { createHeaders, formatPostsMetadata } from './helpers'

export async function getArticles () {
  const database = await fetch('https://api.notion.com/v1/databases/f73e9b4ec8c948748509a84a1830029d/query', {
    method: 'POST',
    headers: createHeaders()
  })
    .then(res => res.json())
  const { object, results } = database
  if (object==='error') {
    return {
      status: database.status,
      code: database.code,
      message: database.message
    }
  }
  return {
    status: 200,
    posts: formatPostsMetadata(results)
  }
}

export async function getPost (id) {
  const database = await fetch(`https://api.notion.com/v1/databases/${id}`, {
    method: 'POST',
    headers: createHeaders()
  })
    .then(res => res.json())
  const { object, results } = database
  if (object==='error') {
    return {
      status: database.status,
      code: database.code,
      message: database.message
    }
  }
  return {
    status: 200,
    posts: formatPostsMetadata(results)
  }
}
