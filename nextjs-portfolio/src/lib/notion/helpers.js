import { notionToken } from '@/lib/constants'

export const createHeaders = function (headers) {
  return {
    "Authorization": notionToken,
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
    ...headers
  }
}

const getCoverUrl = cover => cover?.type === 'file' ? cover.file.url : undefined

export const formatPostMetadata = function (post) {
  const { id, cover, created_time, properties } = post
  const { Title, Tags } = properties
  return {
    id,
    coverURL: getCoverUrl(cover),
    createdAt: created_time,
    title: Title.title[0].plain_text,
    tags: Tags.multi_select.map(({name})=>name)
  }
}

export const formatPhotoMetadata = function (photo) {
  const { id, created_time, properties } = photo
  const { Name, Photo } = properties
  return {
    id,
    photoURL: Photo.files[0].file.url,
    createdAt: created_time,
    name: Name.title[0].plain_text
  }
}
