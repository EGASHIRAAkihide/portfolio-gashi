import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Head from 'next/head';
import { Grid } from '@nextui-org/react';
import Card from '../components/card';
import { Form } from '../components/form';
import useDownloader from 'react-use-downloader';

type Props = {
  allPostsData: {
    id: string,
    date: string,
    title: string,
  }[]
}

export default function Home({ allPostsData }: Props) {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();
  const fileurl = 'https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0_%D1%96_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81_%D0%B2_%D0%BF%D1%80%D0%BE%D0%BC%D1%96%D0%BD%D1%8F%D1%85_%D0%B2%D1%80%D0%B0%D0%BD%D1%96%D1%88%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg'
  return (
    <Layout>
      <Head>
        <title>GASHI website</title>
      </Head>
      <section style={{margin: "0 0 60px"}}>
        <h2>About</h2>
        <p>todo: portfolio</p>
        <ul>
          <li>size: {size}</li>
          <li>isInProgress: {isInProgress ? 'true' : 'false'}</li>
          <li>percentage: {percentage}</li>
          <li>elapsed: {elapsed}</li>
          <li>
            <button onClick={() => download(fileurl, 'file')}>button</button>
          </li>
          <li>
            <button onClick={() => cancel()}>cancel</button>
          </li>
          <li>
            error: {JSON.stringify(error)}
          </li>
        </ul>
      </section>
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