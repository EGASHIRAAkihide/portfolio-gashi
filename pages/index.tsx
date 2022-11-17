import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <div>main</div>
      <Link href="/posts/">first-post</Link>
    </Layout>
  )
}
