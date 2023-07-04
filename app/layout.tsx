import { Sanchez } from 'next/font/google'
import { Header } from '@/components/Header'

import './globals.css'

const font = Sanchez({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout(props: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className={`${font.className} flex min-h-screen flex-col justify-between`}
      >
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 p-6">
          {props.children}
          {props.modal}
        </main>
        <footer className="w-full bg-slate-200">
          <div className="mx-auto max-w-5xl p-6">
            Copyright &copy; nexum {new Date().getFullYear()}
          </div>
        </footer>
      </body>
    </html>
  )
}
