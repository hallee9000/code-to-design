import { notionToken } from '@/lib/constants'

export const createHeaders = function (headers) {
  return {
    "Authorization": notionToken,
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
    ...headers
  }
}

export const formatPostsMetadata = function (rawArticles) {
  return rawArticles.map(article => {
    const { id, cover, created_time, properties } = article
    const { Title, Tags } = properties
    return {
      id,
      cover,
      created_time,
      title: Title.title[0].plain_text,
      tags: Tags.multi_select.map(({name})=>name)
    }
  })
}
