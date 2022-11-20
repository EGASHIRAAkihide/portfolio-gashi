import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Head from 'next/head';
import { Button, Grid } from '@nextui-org/react';
import Card from '../components/card';

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
        <title>GASHI website</title>
      </Head>
      <Button>Click me</Button>
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
        <Grid.Container gap={1}>
          {allPostsData.map(({id, date, title}) => (
            <Grid xs={12} sm={6} md={3} key={id}>
              <Card
                date={date}
                href={`/posts/${id}`}
                src="https://picsum.photos/200/300"
                title={title}
                text="texttexttext1234"
              />
            </Grid>
          ))}
        </Grid.Container>
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