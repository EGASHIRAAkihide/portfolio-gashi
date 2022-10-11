import type { NextPage } from 'next'
import { HeadMeta } from './common/head'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { TopSection } from './sections/top'

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <main>
        <Navbar />
        <TopSection />
        <Footer />
      </main>
    </>
  )
}

export default Home
