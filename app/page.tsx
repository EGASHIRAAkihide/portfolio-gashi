import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      main page
      <Link href="/about">about page</Link>
      <Link href="/works">works page</Link>
    </div>
  )
}
