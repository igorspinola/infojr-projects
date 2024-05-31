import './blog.css'

export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      <header>

      </header>
 
      {children}

      <footer>

      </footer>
    </section>
  )
}
