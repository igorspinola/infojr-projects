import './blog.css'
import Image from 'next/image'

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
        <Image
          src="/today.svg"
          alt="AITODAY"
          width={209}
          height={59}
        />
        <input name="myInput" />
      </header> 

      {children}

      <footer>

      </footer>
    </section>
 )
}
