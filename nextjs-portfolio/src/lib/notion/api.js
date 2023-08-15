import { NotionAPI } from 'notion-client'
import { createHeaders, formatPostMetadata, formatPhotoMetadata } from './helpers'

export async function getPosts (pageSize) {
  const database = await fetch('https://api.notion.com/v1/databases/f73e9b4ec8c948748509a84a1830029d/query', {
    method: 'POST',
    headers: createHeaders(),
    body: JSON.stringify({
      page_size: pageSize||100,
    })
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
    posts: results.map(formatPostMetadata)
  }
}

export async function getPostMetadata (id) {
  const page = await fetch(`https://api.notion.com/v1/pages/${id}`, {
    method: 'GET',
    headers: createHeaders()
  })
    .then(res => res.json())
  if (page.object==='error') {
    return {
      status: page.status,
      code: page.code,
      message: page.message
    }
  }
  return {
    status: 200,
    metadata: formatPostMetadata(page)
  }
}

export async function getPost (id) {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(id)
  return {
    status: 200,
    recordMap
  }
}

export async function getPhotos (pageSize) {
  const database = await fetch('https://api.notion.com/v1/databases/2560040bb60c4a7dae7fdf14f2dad404/query', {
    method: 'POST',
    headers: createHeaders(),
    body: JSON.stringify({
      page_size: pageSize||100,
    })
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
    photos: results.map(formatPhotoMetadata)
  }
}
