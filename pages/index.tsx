import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Head from 'next/head';

type Props = {
  allPostsData: {
    id: string,
    date: string,
    title: string,
  }[]
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout>
      <Head>
        <title>title</title>
      </Head>
      <section>
        <p>
          Hello, I’m <strong>Shu</strong>. I’m a software engineer and a
          translator (English/Japanese). You can contact me on{' '}
          <a href="https://twitter.com/chibicode">Twitter</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}