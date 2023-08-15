import React from 'react'
import Head from 'next/head'
import Center from '@/components/Center'
import PostCard from '@/components/PostCard'
import { getPosts } from '@/lib/notion/api'

export const metadata = {
  title: 'All posts | Hal\'s castle',
}

export default async function Posts () {
  const { status, posts } = await getPosts()
  return (
    <Center className="mt-16 py-4">
      {
        posts.map(post =>
          <PostCard
            key={post.id}
            {...post}
          />
        )
      }
    </Center>
  )
}
