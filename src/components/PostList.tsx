import Post from './Post'
import type { Post as PostType } from '../types/Post'
import '../styles/PostList.css'
import withLogger from '../hoc/withLogger'

const posts: PostType[] = [
  {
    id: 1,
    title: 'Getting Started with TypeScript',
    author: 'Beni Niyogisubizo',
    content:
      'TypeScript helps developers identify errors early and write safer, more maintainable JavaScript applications.',
    date: '2026-09-18',
  },
  {
    id: 2,
    title: 'Why Reusable React Components Matter',
    author: 'Aline Uwase',
    content:
      'Reusable components reduce duplicated code and make large React applications easier to develop and maintain.',
    date: '2026-09-17',
  },
  {
    id: 3,
    title: 'Improving Web Performance',
    author: 'Eric Mugisha',
    content:
      'Optimizing images, reducing unnecessary renders, and keeping bundles small can significantly improve user experience.',
    date: '2026-09-16',
  },
]

function PostList() {
  return (
    <section className="post-list-section">
      <div className="section-heading">
        <p className="section-label">Employee knowledge hub</p>
        <h1>Latest Development Insights</h1>
        <p>
          Explore practical tips and updates shared by the Dev Insights team.
        </p>
      </div>

      <div className="post-grid">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default withLogger(PostList, 'PostList')
