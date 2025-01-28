import { Header } from '@/components/Header'
import { Borel, Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

const borel = Borel({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-borel',
})

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
})

export default function RootLayout(props: {
  children: ReactNode
  modal: ReactNode
}) {
  return (
    <html lang="en" className={`${borel.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col justify-between font-display">
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
