import Link from 'next/link'

export default function Home() {
  return (
    <div>
      main page
      <Link href="/about">about page</Link>
      <Link href="/works">works page</Link>
    </div>
  )
}
