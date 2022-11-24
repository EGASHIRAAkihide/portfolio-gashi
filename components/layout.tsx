import { Container } from '@nextui-org/react';
import Head from 'next/head'
import Navbar from './navbar';
import { NextUIProvider } from '@nextui-org/react';

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
        <NextUIProvider>
          <Navbar />
          <Container fluid css={{backgroundColor: '#00ff00'}}>
            {children}
          </Container>
        </NextUIProvider>
      </main>

      <footer>
        <div>footer</div>
      </footer>
    </div>
  );
}