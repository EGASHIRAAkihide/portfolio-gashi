import type { NextPage } from 'next'
import { Alert } from "flowbite-react"
import { HeadMeta } from './common/head'

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <main>
        <Alert color="info">Alert!</Alert>
        <div>adsfasdfasdf</div>
      </main>
    </>
  )
}

export default Home
