import { memo } from 'react'
import type { Post as PostType } from '../types/Post'
import '../styles/Post.css'

interface PostProps {
  post: PostType
}

function Post({ post }: PostProps) {
  const isFeaturedAuthor = post.author === 'Beni Niyogisubizo'

  const conditionalStyle = {
    backgroundColor: isFeaturedAuthor ? '#eff6ff' : '#ffffff',
    borderColor: isFeaturedAuthor ? '#3b82f6' : '#e2e8f0',
  }

  return (
    <article className="post-card" style={conditionalStyle}>
      {isFeaturedAuthor && <span className="featured-badge">Featured</span>}

      <h2>{post.title}</h2>

      <div className="post-information">
        <span>By {post.author}</span>
        <time dateTime={post.date}>{post.date}</time>
      </div>

      <p>{post.content}</p>
    </article>
  )
}

export default memo(Post)
