import Head from 'next/head'

// TODO: apiに回す
const data =
  {
    title: 'GASHI portfolio',

  }


export const HeadMeta = () => {
  return (
    <Head>
      <title>{data.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="desctiption" content="I'm now a Frontend Developer, UIUX Designer and Hiphop Dancer." />
      <meta name="keywords" content="gashi, freelance, website, frontend, developer, ui, ux, designer, hiphop, dancer" />
    </Head>
  )
}