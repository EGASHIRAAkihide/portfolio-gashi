import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Head from 'next/head';
import { Button, Grid } from '@nextui-org/react';
import Card from '../components/card';
import { Form } from '../components/form';

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
      <section style={{margin: "0 0 60px"}}>
        <h2>Blog</h2>
        <Grid.Container gap={2}>
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
      <section style={{margin: "60px 0"}}>
        <h2>Contact</h2>
        <Form />
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