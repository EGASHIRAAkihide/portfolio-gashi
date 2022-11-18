import Head from 'next/head'
import Navbar from './navbar';

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <title>GASHI</title>
        <meta name="description" content="GASHI website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        {children}
      </main>

      <footer>
        <div>footer</div>
      </footer>
    </div>
  );
}