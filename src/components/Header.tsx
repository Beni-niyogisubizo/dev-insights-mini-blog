import '../styles/Header.css'

function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="/">
        Dev Insights
      </a>

      <nav>
        <a className="new-post-link" href="#new-post">
          New Post
        </a>
      </nav>
    </header>
  )
}

export default Header
