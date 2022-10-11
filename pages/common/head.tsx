import Head from 'next/head'

// TODO: apiに回す
const data =
  {
    title: 'GASHI portfolio',
    description: "I'm now a Frontend Developer, UIUX Designer and Hiphop Dancer.",
    keywords: "gashi, freelance, website, frontend, developer, ui, ux, designer, hiphop, dancer",
  }

export const HeadMeta = () => {
  return (
    <Head>
      <title>{data.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="desctiption" content={data.description} />
      <meta name="keywords" content={data.keywords} />
    </Head>
  )
}

export default HeadMeta