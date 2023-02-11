import { Nav } from '@/components/nav'
import 'styles/global.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>GASHI portfolio</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Gashi portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <aside>
          <Nav />
        </aside>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
