import { Borel, Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { ReactNode } from 'react'
import './globals.css'

const borel = Borel({
  subsets: ['latin'],
  weight: '400',
})

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout(props: {
  children: ReactNode
  modal: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              --font-inter: ${inter.style.fontFamily}, Arial, 'sans-serif';
              --font-borel: ${borel.style.fontFamily}, Arial, 'sans-serif';
            }`,
          }}
        />
      </head>
      <body
        className={`font-display flex min-h-screen flex-col justify-between`}
      >
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 p-6">
          {props.children}
          {props.modal}
        </main>
        <footer className="w-full">
          <div className="mx-auto max-w-5xl p-6">
            Copyright &copy; nexum {new Date().getFullYear()}
          </div>
        </footer>
      </body>
    </html>
  )
}
